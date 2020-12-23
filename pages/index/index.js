// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList: [
      'https://img10.360buyimg.com/ddimg/jfs/t1/123637/15/17494/291725/5faba862E04c0cec5/cdcc9f7764525197.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/141938/26/14048/239116/5faba87dE0e5ba67d/4d53ee51964e5fb3.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/141438/33/14210/197242/5faba893E8bab9165/37e5584a95456ff6.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/126540/36/17764/255596/5fabab7dE6ee93686/bbbbbdcc8fa5163f.jpg',
    ]
  },

  toDetails(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.navigateTo({
        url: "../drivingRecorder/drivingRecorder"
      })
    } else if (index === 1) {
      wx.navigateTo({
        url: "../streamMediaRecorder/streamMediaRecorder"
      })
    } else if (index === 2) {
      wx.navigateTo({
        url: "../hiddenRecorder/hiddenRecorder"
      })
      
    } else {
      wx.navigateTo({
        url: "../carMachineRecorder/carMachineRecorder"
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