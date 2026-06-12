const { findCategory, findSchool } = require("../../data/catalog")

Page({
  data: {
    category: null,
    school: null,
    bannerSlides: [],
    groups: []
  },

  onLoad(options) {
    const category = findCategory(options.categoryId)
    const school = findSchool(category.id, options.schoolId)
    const groups = ["专科", "本科"].map((level) => ({
      level,
      majors: (school.majors || [])
        .map((major) => {
          const selectedPrice = (major.prices || []).find((price) => price.level === level)
          return selectedPrice ? Object.assign({}, major, { selectedPrice }) : null
        })
        .filter(Boolean)
    }))
    this.setData({
      category,
      school,
      bannerSlides: school.bannerSlides || [school.bannerImageUrl || school.imageUrl].filter(Boolean).map((imageUrl) => ({ imageUrl, title: "", desc: "" })),
      groups
    })
  },

  goMajor(event) {
    wx.navigateTo({
      url: `/pages/majorDetail/majorDetail?categoryId=${this.data.category.id}&schoolId=${this.data.school.id}&level=${event.currentTarget.dataset.level}&majorId=${event.currentTarget.dataset.id}`
    })
  },

  onShareAppMessage() {
    return {
      title: `${this.data.school.name}专科本科报读层次介绍`,
      path: `/pages/levels/levels?categoryId=${this.data.category.id}&schoolId=${this.data.school.id}`
    }
  }
})
