// pages/carMachineRecorder/carMachineRecorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList: [
      'https://img14.360buyimg.com/ddimg/jfs/t1/154766/32/5219/279894/5fa8e3beE76db7c8c/b49460df80fbcba1.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/150829/8/6114/274218/5fa9ed53E0c14e7e7/96657d3c18c61eaa.jpg',
      'https://img12.360buyimg.com/ddimg/jfs/t1/141725/16/13917/278136/5fa9f766E720d8533/114ef5139b7d5e06.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/139602/14/13937/273142/5fa9ed8cE31708fed/40a3fdda5f4fbe6c.jpg',
      'https://img11.360buyimg.com/ddimg/jfs/t1/141146/13/13888/271346/5fa9f786E3516089a/8ceba6b7637d6bc7.jpg',
      'https://img13.360buyimg.com/ddimg/jfs/t1/139408/11/13649/319521/5fa8e47dEedfae527/6b52b70114adf470.jpg'
    ]
  },

  toDetails(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.navigateTo({
        url: "../ar/ar"
      })
    } else if (index === 1) {
      wx.navigateTo({
        url: "../wThreepro/wThreepro"
      })
    } else if (index === 2) {
      wx.navigateTo({
        url: "../wThreepro/wThreepro"
      })
    } else if (index === 3) {
      wx.navigateTo({
        url: "../aFivesPlus/aFivesPlus"
      })
    } else if (index === 4) {
      wx.navigateTo({
        url: "../aFivesPlus/aFivesPlus"
      })
    } else {
      wx.navigateTo({
        url: "../threeSixZeroWiFi/threeSixZeroWiFi"
      })
    }
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