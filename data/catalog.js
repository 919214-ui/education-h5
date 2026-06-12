const catalog = {
  org: {
    name: "新火教育产品中心",
    desc: "专注成人学历提升报考规划，覆盖小自考、助学自考、开放大学等项目，按目标岗位、拿证节奏和预算匹配方案。",
    bannerImages: [],
    bannerSlides: [],
    stats: [
      { value: "4", label: "项目类目" },
      { value: "20+", label: "热门专业" },
      { value: "1对1", label: "规划服务" }
    ]
  },
  teachers: [
    {
      id: "li",
      name: "李老师",
      avatar: "李",
      title: "小自考规划",
      desc: "熟悉四川、湖北小自考院校和专业搭配。",
      detail: "长期负责小自考项目咨询，擅长根据学员基础、目标专业、拿证时间和预算，匹配四川与湖北地区的院校专业方案。",
      strengths: ["四川小自考", "湖北小自考", "专本衔接"]
    },
    {
      id: "wang",
      name: "王老师",
      avatar: "王",
      title: "国开规划",
      desc: "擅长在职学员稳妥拿证路径和预算匹配。",
      detail: "专注开放大学和在职学历规划，适合工作时间不固定、希望学习流程更稳定的学员咨询。",
      strengths: ["国开项目", "在职提升", "稳妥拿证"]
    },
    {
      id: "chen",
      name: "陈老师",
      avatar: "陈",
      title: "助学自考",
      desc: "负责学习计划、考期提醒和毕业节点跟进。",
      detail: "负责助学自考学习路径、考期安排和毕业节点跟进，适合需要课程、题库和班主任督学的学员。",
      strengths: ["助学自考", "学习计划", "考期提醒"]
    }
  ],
  mediaAccounts: [
    {
      id: "douyin",
      name: "抖音",
      avatar: "抖",
      handle: "华升学历规划",
      desc: "短视频讲解热门专业、院校选择和报名节点。",
      detail: "抖音账号适合承接短视频获客，可以展示老师出镜讲解、学员常见问题、报考时间提醒和专业选择建议。",
      metrics: ["专业科普", "直播咨询", "报名提醒"]
    },
    {
      id: "redbook",
      name: "小红书",
      avatar: "红",
      handle: "学历提升规划笔记",
      desc: "图文笔记展示真实咨询场景和避坑指南。",
      detail: "小红书适合做搜索型内容，围绕学校、专业、价格、流程、避坑经验沉淀笔记，增强信任感。",
      metrics: ["图文笔记", "案例拆解", "私信咨询"]
    },
    {
      id: "channels",
      name: "视频号",
      avatar: "视",
      handle: "华升学历服务号",
      desc: "承接微信生态咨询、直播和私域转化。",
      detail: "视频号适合和小程序、企业微信、社群联动，可以展示直播回放、政策解读和规划老师答疑。",
      metrics: ["微信生态", "直播回放", "私域承接"]
    }
  ],
  categories: [
    {
      id: "sc-self",
      name: "四川小自考",
      badge: "热门",
      desc: "统考科目少，校考安排灵活，适合想兼顾工作和拿证效率的学员。",
      cover: "川",
      schools: [
        {
          id: "scu",
          name: "四川大学",
          tag: "综合类院校",
          intro: "综合实力强，适合想选择知名院校、兼顾学历背景和专业实用性的学员。",
          imageLabel: "川大",
          detail: "四川大学方向适合重视学校品牌、希望专业选择更稳妥的学员。页面后续可替换为真实校园图、招生简章图或授权宣传图。",
          majors: [
            {
              id: "admin",
              name: "行政管理",
              tags: ["管理方向", "文职适配"],
              desc: "适合行政、人事、事业单位备考和办公室岗位提升。",
              prices: [
                { level: "专科", price: "¥6,980", service: "报名规划、资料审核、学习提醒" },
                { level: "本科", price: "¥8,980", service: "统考规划、校考提醒、论文指导" }
              ],
              detail: "行政管理专业课程通用性强，适合希望提升学历门槛、后续从事人事行政、基层管理或公共事务方向的学员。"
            },
            {
              id: "law",
              name: "法学",
              tags: ["本科推荐", "岗位拓展"],
              desc: "适合合规、行政、基层法律服务相关方向学员。",
              prices: [
                { level: "专科", price: "¥7,280", service: "基础课程规划、考试节奏提醒" },
                { level: "本科", price: "¥9,280", service: "科目规划、论文指导、毕业跟进" }
              ],
              detail: "法学适合对法律基础、合规、人事制度或行政管理有需求的人群，专业认知度高，适合长期职业规划。"
            }
          ]
        },
        {
          id: "uestc",
          name: "电子科技大学",
          tag: "理工类院校",
          intro: "理工背景突出，适合技术、互联网、信息化管理相关岗位人群。",
          imageLabel: "成电",
          detail: "电子科技大学方向更适合理工、信息化、管理岗位人群，可重点展示计算机、管理类专业和技术岗位提升场景。",
          majors: [
            {
              id: "computer",
              name: "计算机科学与技术",
              tags: ["理工热门", "技术岗位"],
              desc: "适合IT、运维、产品、信息化岗位提升学历背景。",
              prices: [
                { level: "专科", price: "¥7,680", service: "入门学习规划、题库资料" },
                { level: "本科", price: "¥9,680", service: "统考安排、实践课提醒、论文指导" }
              ],
              detail: "计算机方向专业适合技术岗位、互联网岗位和希望转向信息化管理的学员，专业应用面广。"
            },
            {
              id: "hr",
              name: "人力资源管理",
              tags: ["管理方向", "易上手"],
              desc: "适合招聘、培训、行政、人事岗位人群。",
              prices: [
                { level: "专科", price: "¥6,880", service: "报考资料、课程提醒" },
                { level: "本科", price: "¥8,680", service: "考试规划、论文指导、毕业跟进" }
              ],
              detail: "人力资源管理学习内容贴近企业用人场景，适合在职提升和岗位晋升。"
            }
          ]
        }
      ]
    },
    {
      id: "hb-self",
      name: "湖北小自考",
      badge: "院校多",
      desc: "院校选择多，专业实用，适合希望跨省选择热门院校和专业的学员。",
      cover: "鄂",
      schools: [
        {
          id: "hubei-univ",
          name: "湖北大学",
          tag: "综合类院校",
          intro: "专业覆盖均衡，适合管理、教育、文职方向学历提升。",
          imageLabel: "湖大",
          detail: "湖北大学方向适合管理、教育、文职类学员，后续可补充学校介绍、报读优势和专业清单。",
          majors: [
            {
              id: "chinese",
              name: "汉语言文学",
              tags: ["文职友好", "教师方向"],
              desc: "适合文职、新媒体、教师资格证规划和内容岗位人群。",
              prices: [
                { level: "专科", price: "¥6,980", service: "课程资料、考试提醒" },
                { level: "本科", price: "¥8,980", service: "统考规划、论文指导" }
              ],
              detail: "汉语言文学适合文字表达、教育培训、新媒体和行政文职相关人群，专业认可度较高。"
            },
            {
              id: "education",
              name: "教育学",
              tags: ["教育方向", "本科推荐"],
              desc: "适合教育行业从业者或计划进入教育培训行业的学员。",
              prices: [
                { level: "专科", price: "¥6,680", service: "入学资料、学习规划" },
                { level: "本科", price: "¥8,680", service: "考试节奏、毕业跟进" }
              ],
              detail: "教育学适合幼教、培训机构、教务管理等人群，便于配合教师资格证或岗位晋升规划。"
            }
          ]
        },
        {
          id: "wh-tech",
          name: "武汉科技大学",
          tag: "工科管理",
          intro: "工科和管理类基础扎实，适合技术岗位、工程管理和企业管理人群。",
          imageLabel: "武科",
          detail: "武汉科技大学方向适合工程、技术、管理类岗位学员，可突出工程管理和考证规划。",
          majors: [
            {
              id: "project",
              name: "工程管理",
              tags: ["工程方向", "考证规划"],
              desc: "适合建筑、工程、项目管理岗位，便于后续考证或岗位晋升。",
              prices: [
                { level: "专科", price: "¥7,280", service: "基础科目规划" },
                { level: "本科", price: "¥9,280", service: "统考安排、实践课提醒" }
              ],
              detail: "工程管理适合建筑、施工、造价、项目执行等人群，学历提升后可结合职业证书做长期发展。"
            }
          ]
        }
      ]
    },
    {
      id: "aid-self",
      name: "助学自考",
      badge: "带学",
      desc: "配套课程、题库、学习计划和班主任督学，适合需要有人带学的自考学员。",
      cover: "助",
      schools: [
        {
          id: "normal-aid",
          name: "师范教育方向",
          tag: "助学方向",
          intro: "围绕教师资格、教育行业就业和学历提升设计学习路径。",
          imageLabel: "师范",
          detail: "师范教育方向适合教育培训、幼教、小学教育等岗位人群，强调课程支持和学习陪跑。",
          majors: [
            {
              id: "preschool",
              name: "学前教育",
              tags: ["幼教方向", "课程支持"],
              desc: "适合幼教、托育、早教方向学员。",
              prices: [
                { level: "专科", price: "¥5,980", service: "题库资料、班主任督学" },
                { level: "本科", price: "¥7,980", service: "课程辅导、论文提醒" }
              ],
              detail: "学前教育课程实用性强，适合幼儿园、早教、托育机构从业者做学历补充。"
            },
            {
              id: "primary",
              name: "小学教育",
              tags: ["教育方向", "稳定规划"],
              desc: "适合教育培训、小学相关岗位人群。",
              prices: [
                { level: "专科", price: "¥6,280", service: "学习计划、题库资料" },
                { level: "本科", price: "¥8,280", service: "考期规划、论文指导" }
              ],
              detail: "小学教育适合希望进入教育行业或提升教育岗位学历背景的学员。"
            }
          ]
        }
      ]
    },
    {
      id: "open-edu",
      name: "国开项目",
      badge: "稳妥",
      desc: "入学方式灵活，线上学习为主，适合工作忙、想稳妥完成学历提升的学员。",
      cover: "国",
      schools: [
        {
          id: "ou-china",
          name: "国家开放大学",
          tag: "开放教育",
          intro: "学籍可查，学习节奏稳定，适合专科、本科层次的在职学历提升。",
          imageLabel: "国开",
          detail: "国家开放大学方向适合工作忙、希望流程稳定的在职学员，可突出线上学习、学籍查询和毕业节点服务。",
          majors: [
            {
              id: "open-admin",
              name: "行政管理",
              tags: ["线上学习", "在职友好"],
              desc: "适合办公室、人事行政、基层管理等岗位人群。",
              prices: [
                { level: "专科", price: "¥5,980", service: "报名资料、学习提醒" },
                { level: "本科", price: "¥7,980", service: "入学跟进、毕业节点提醒" }
              ],
              detail: "国开行政管理适合工作忙、希望学习节奏更稳定的学员，流程清晰，服务跟进周期长。"
            },
            {
              id: "open-accounting",
              name: "大数据与会计",
              tags: ["财务方向", "专科热门"],
              desc: "适合财务入门、会计岗位和转岗人群。",
              prices: [
                { level: "专科", price: "¥6,280", service: "报名规划、学习提醒" },
                { level: "本科", price: "¥8,280", service: "本科专业衔接、毕业跟进" }
              ],
              detail: "大数据与会计适合财务、出纳、会计助理或计划转向财务岗位的人群。"
            }
          ]
        }
      ]
    }
  ]
}

catalog.categories.forEach((category) => {
  category.schools.forEach((school) => {
    school.gallery = [`${school.imageLabel}校园`, `${school.imageLabel}课堂`, `${school.imageLabel}服务`]
    school.majors.forEach((major) => {
      major.minPrice = major.prices[0].price
    })
  })
})

function findCategory(id) {
  return catalog.categories.find((item) => item.id === id) || catalog.categories[0]
}

function findSchool(categoryId, schoolId) {
  const category = findCategory(categoryId)
  return category.schools.find((item) => item.id === schoolId) || category.schools[0]
}

function findMajor(categoryId, schoolId, majorId) {
  const school = findSchool(categoryId, schoolId)
  return school.majors.find((item) => item.id === majorId) || school.majors[0]
}

function findTeacher(id) {
  return catalog.teachers.find((item) => item.id === id) || catalog.teachers[0]
}

function findMedia(id) {
  return catalog.mediaAccounts.find((item) => item.id === id) || catalog.mediaAccounts[0]
}

function majorsByLevel(categoryId, schoolId, level) {
  return findSchool(categoryId, schoolId).majors
    .map((major) => {
      const price = major.prices.find((item) => item.level === level)
      return price ? Object.assign({}, major, { selectedPrice: price }) : null
    })
    .filter(Boolean)
}

module.exports = {
  catalog,
  findCategory,
  findSchool,
  findMajor,
  findTeacher,
  findMedia,
  majorsByLevel
}
