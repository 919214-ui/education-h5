const http = require("http")
const fs = require("fs")
const path = require("path")
const crypto = require("crypto")

const root = __dirname
const publicDir = path.join(root, "public")
const dataFile = path.join(root, "data", "site-data.json")
const uploadDir = path.join(root, "uploads")
const port = Number(process.env.PORT || 3000)
const adminPassword = process.env.ADMIN_PASSWORD || "admin123"
const tokens = new Set()

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
}

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" })
  res.end(body)
}

function json(res, status, data) {
  send(res, status, JSON.stringify(data), "application/json; charset=utf-8")
}

function readBody(req, asBuffer = false) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on("data", (chunk) => {
      chunks.push(chunk)
      size += chunk.length
      if (size > 5 * 1024 * 1024) {
        reject(new Error("请求内容过大"))
        req.destroy()
      }
    })
    req.on("end", () => {
      const body = Buffer.concat(chunks)
      resolve(asBuffer ? body : body.toString("utf8"))
    })
    req.on("error", reject)
  })
}

function readData() {
  return JSON.parse(fs.readFileSync(dataFile, "utf8"))
}

function writeData(data) {
  const backup = `${dataFile}.${Date.now()}.bak`
  if (fs.existsSync(dataFile)) fs.copyFileSync(dataFile, backup)
  fs.writeFileSync(dataFile, `${JSON.stringify(data, null, 2)}\n`, "utf8")
}

function parseMultipart(req, body) {
  const type = req.headers["content-type"] || ""
  const match = type.match(/boundary=(.+)$/)
  if (!match) throw new Error("上传格式不正确")
  const boundary = Buffer.from(`--${match[1]}`)
  const parts = []
  let start = body.indexOf(boundary)
  while (start !== -1) {
    const next = body.indexOf(boundary, start + boundary.length)
    if (next === -1) break
    const part = body.subarray(start + boundary.length + 2, next - 2)
    const split = part.indexOf(Buffer.from("\r\n\r\n"))
    if (split > -1) {
      const header = part.subarray(0, split).toString("utf8")
      const content = part.subarray(split + 4)
      const name = /name="([^"]+)"/.exec(header)?.[1]
      const filename = /filename="([^"]*)"/.exec(header)?.[1]
      const contentType = /Content-Type:\s*([^\r\n]+)/i.exec(header)?.[1]
      if (name) parts.push({ name, filename, contentType, content })
    }
    start = next
  }
  return parts
}

function safeUploadName(filename) {
  const ext = path.extname(filename || "").toLowerCase()
  const allowed = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"])
  const finalExt = allowed.has(ext) ? ext : ".png"
  return `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${finalExt}`
}

function authed(req) {
  const header = req.headers.authorization || ""
  return header.startsWith("Bearer ") && tokens.has(header.slice(7))
}

function staticFile(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`)
  if (url.pathname.startsWith("/uploads/")) {
    const uploadPath = path.normalize(path.join(root, decodeURIComponent(url.pathname)))
    if (!uploadPath.startsWith(uploadDir)) return send(res, 403, "Forbidden", "text/plain; charset=utf-8")
    fs.readFile(uploadPath, (err, data) => {
      if (err) return send(res, 404, "Not found", "text/plain; charset=utf-8")
      send(res, 200, data, mime[path.extname(uploadPath)] || "application/octet-stream")
    })
    return
  }
  const requested = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname)
  const filePath = path.normalize(path.join(publicDir, requested))
  if (!filePath.startsWith(publicDir)) return send(res, 403, "Forbidden", "text/plain; charset=utf-8")
  fs.readFile(filePath, (err, data) => {
    if (err) return send(res, 404, "Not found", "text/plain; charset=utf-8")
    send(res, 200, data, mime[path.extname(filePath)] || "application/octet-stream")
  })
}

async function handler(req, res) {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`)

    if (req.method === "GET" && url.pathname === "/api/site") {
      return json(res, 200, readData())
    }

    if (req.method === "POST" && url.pathname === "/api/admin/login") {
      const body = JSON.parse(await readBody(req) || "{}")
      if (body.password !== adminPassword) return json(res, 401, { message: "密码不正确" })
      const token = crypto.randomBytes(24).toString("hex")
      tokens.add(token)
      return json(res, 200, { token })
    }

    if (url.pathname === "/api/admin/site") {
      if (!authed(req)) return json(res, 401, { message: "请先登录" })
      if (req.method === "GET") return json(res, 200, readData())
      if (req.method === "PUT") {
        const data = JSON.parse(await readBody(req))
        writeData(data)
        return json(res, 200, { ok: true })
      }
    }

    if (req.method === "POST" && url.pathname === "/api/admin/upload") {
      if (!authed(req)) return json(res, 401, { message: "请先登录" })
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })
      const raw = await readBody(req, true)
      const file = parseMultipart(req, raw).find((part) => part.filename)
      if (!file) return json(res, 400, { message: "没有选择文件" })
      if (file.content.length > 4 * 1024 * 1024) return json(res, 400, { message: "图片不能超过 4MB" })
      const name = safeUploadName(file.filename)
      fs.writeFileSync(path.join(uploadDir, name), file.content)
      return json(res, 200, { url: `/uploads/${name}` })
    }

    return staticFile(req, res)
  } catch (error) {
    json(res, 500, { message: error.message || "服务器错误" })
  }
}

http.createServer(handler).listen(port, () => {
  console.log(`H5站点已启动：http://localhost:${port}`)
  console.log(`后台地址：http://localhost:${port}/admin.html`)
  console.log(`默认后台密码：admin123，可用 ADMIN_PASSWORD 环境变量修改`)
})
