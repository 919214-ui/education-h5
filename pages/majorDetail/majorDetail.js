const { findCategory, findSchool, findMajor } = require("../../data/catalog")

Page({
  data: {
    category: null,
    school: null,
    major: null,
    level: "",
    selectedPrice: null
  },

  onLoad(options) {
    const category = findCategory(options.categoryId)
    const school = findSchool(category.id, options.schoolId)
    const major = findMajor(category.id, school.id, options.majorId)
    const level = options.level || "专科"
    const selectedPrice = major.prices.find((item) => item.level === level) || major.prices[0]
    this.setData({ category, school, major, level, selectedPrice })
  },

  callConsultant() {
    wx.showToast({
      title: "这里可替换为电话咨询",
      icon: "none"
    })
  },

  onShareAppMessage() {
    return {
      title: `${this.data.major.name}${this.data.level}详情与价格`,
      path: `/pages/majorDetail/majorDetail?categoryId=${this.data.category.id}&schoolId=${this.data.school.id}&level=${this.data.level}&majorId=${this.data.major.id}`
    }
  }
})
