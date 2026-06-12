const { findCategory } = require("../../data/catalog")

Page({
  data: {
    categoryId: "",
    category: null,
    bannerSlides: [],
    schools: []
  },

  onLoad(options) {
    const category = findCategory(options.categoryId)
    this.setData({
      categoryId: category.id,
      category,
      bannerSlides: category.bannerSlides || [category.bannerImageUrl || category.coverImageUrl].filter(Boolean).map((imageUrl) => ({ imageUrl, title: "", desc: "" })),
      schools: category.schools
    })
  },

  goLevels(event) {
    const schoolId = event.currentTarget.dataset.schoolId
    wx.navigateTo({
      url: `/pages/levels/levels?categoryId=${this.data.categoryId}&schoolId=${schoolId}`
    })
  },

  onShareAppMessage() {
    return {
      title: `${this.data.category.name}院校介绍`,
      path: `/pages/schools/schools?categoryId=${this.data.categoryId}`
    }
  }
})
