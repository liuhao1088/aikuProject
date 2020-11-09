// pages/carMachineRecorder/carMachineRecorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  ardj: function () {
    wx.navigateTo({
      url: "../ar/ar"
    })
  },
  wThreeprodj: function () {
    wx.navigateTo({
      url: "../wThreepro/wThreepro"
    })
  },
  threeSixZeroWiFidj: function () {
    wx.navigateTo({
      url: "../threeSixZeroWiFi/threeSixZeroWiFi"
    })
  },
  aFivesPlusdj: function () {
    wx.navigateTo({
      url: "../aFivesPlus/aFivesPlus"
    })
  },
  wSixprodj: function () {
    wx.navigateTo({
      url: "../wSixpro/wSixpro"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showShareMenu({

      withShareTicket: true,

      menus: ['shareAppMessage', 'shareTimeline']

    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})