const { findMedia } = require("../../data/catalog")

Page({
  data: {
    media: null
  },

  onLoad(options) {
    this.setData({
      media: findMedia(options.id)
    })
  },

  onShareAppMessage() {
    return {
      title: `${this.data.media.name}账号展示`,
      path: `/pages/media/media?id=${this.data.media.id}`
    }
  }
})
