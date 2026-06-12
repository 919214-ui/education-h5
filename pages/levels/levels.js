const { findCategory, findSchool } = require("../../data/catalog")

Page({
  data: {
    category: null,
    school: null,
    levels: [
      {
        name: "专科"
      },
      {
        name: "本科"
      }
    ]
  },

  onLoad(options) {
    const category = findCategory(options.categoryId)
    const school = findSchool(category.id, options.schoolId)
    this.setData({ category, school })
  },

  goMajors(event) {
    wx.navigateTo({
      url: `/pages/majors/majors?categoryId=${this.data.category.id}&schoolId=${this.data.school.id}&level=${event.currentTarget.dataset.level}`
    })
  },

  onShareAppMessage() {
    return {
      title: `${this.data.school.name}专科本科报读层次介绍`,
      path: `/pages/levels/levels?categoryId=${this.data.category.id}&schoolId=${this.data.school.id}`
    }
  }
})
