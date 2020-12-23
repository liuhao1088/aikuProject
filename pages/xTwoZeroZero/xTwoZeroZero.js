// pages/xTwoZeroZero/xTwoZeroZero.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img14.360buyimg.com/ddimg/jfs/t1/140518/36/13485/1643139/5fa5283eE59015759/db9b21c30e49cc79.jpg',
      detailList:[
        'https://img14.360buyimg.com/ddimg/jfs/t1/126620/27/17444/1452681/5fa52857Ef6f6dfd8/6072cbed7c03f702.jpg',
      ]
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