const { findTeacher } = require("../../data/catalog")

Page({
  data: {
    teacher: null
  },

  onLoad(options) {
    this.setData({
      teacher: findTeacher(options.id)
    })
  },

  onShareAppMessage() {
    return {
      title: `${this.data.teacher.name}学历规划师介绍`,
      path: `/pages/teacher/teacher?id=${this.data.teacher.id}`
    }
  }
})
