const { findCategory, findSchool, majorsByLevel } = require("../../data/catalog")

Page({
  data: {
    category: null,
    school: null,
    level: "",
    majors: []
  },

  onLoad(options) {
    const category = findCategory(options.categoryId)
    const school = findSchool(category.id, options.schoolId)
    const level = options.level || "专科"
    this.setData({
      category,
      school,
      level,
      majors: majorsByLevel(category.id, school.id, level)
    })
  },

  goDetail(event) {
    wx.navigateTo({
      url: `/pages/majorDetail/majorDetail?categoryId=${this.data.category.id}&schoolId=${this.data.school.id}&level=${this.data.level}&majorId=${event.currentTarget.dataset.id}`
    })
  },

  callConsultant() {
    wx.showToast({
      title: "这里可替换为电话咨询",
      icon: "none"
    })
  },

  onShareAppMessage() {
    return {
      title: `${this.data.school.name}${this.data.level}专业与价格`,
      path: `/pages/majors/majors?categoryId=${this.data.category.id}&schoolId=${this.data.school.id}&level=${this.data.level}`
    }
  }
})
