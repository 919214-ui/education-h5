const { findCategory, findSchool, findMajor } = require("../../data/catalog")

Page({
  data: {
    category: null,
    school: null,
    major: null,
    selectedPriceIndex: 0,
    selectedPrice: null
  },

  onLoad(options) {
    const category = findCategory(options.categoryId)
    const school = findSchool(category.id, options.schoolId)
    const major = findMajor(category.id, school.id, options.majorId)
    this.setData({
      category,
      school,
      major,
      selectedPrice: major.prices[0]
    })
  },

  selectPrice(event) {
    const selectedPriceIndex = Number(event.currentTarget.dataset.index)
    this.setData({
      selectedPriceIndex,
      selectedPrice: this.data.major.prices[selectedPriceIndex]
    })
  },

  callConsultant() {
    wx.showToast({
      title: "这里可替换为电话咨询",
      icon: "none"
    })
  }
})
