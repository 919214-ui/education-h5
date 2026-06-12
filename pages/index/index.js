const { catalog } = require("../../data/catalog")

Page({
  data: {
    org: catalog.org,
    bannerSlides: catalog.org.bannerSlides || (catalog.org.bannerImages || []).map((imageUrl) => ({ imageUrl, title: "", desc: "" })),
    teachers: catalog.teachers,
    mediaAccounts: catalog.mediaAccounts,
    categories: catalog.categories
  },

  goSchools(event) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/schools/schools?categoryId=${id}`
    })
  },

  goTeacher(event) {
    wx.navigateTo({
      url: `/pages/teacher/teacher?id=${event.currentTarget.dataset.id}`
    })
  },

  goMedia(event) {
    wx.navigateTo({
      url: `/pages/media/media?id=${event.currentTarget.dataset.id}`
    })
  },

  onShareAppMessage() {
    return {
      title: "学历提升项目与院校专业介绍",
      path: "/pages/index/index"
    }
  }
})
