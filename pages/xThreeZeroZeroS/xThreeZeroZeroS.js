// pages/xThreeZeroZeroS/xThreeZeroZeroS.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img12.360buyimg.com/ddimg/jfs/t1/129958/29/15235/1976866/5fa52239E9969804d/21cf4fd518e7439a.jpg',
      detailList:[
        'https://img12.360buyimg.com/ddimg/jfs/t1/127343/7/17585/1940116/5fa5224dE468580b1/58a98e0e740a097b.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/150057/29/13364/1720820/5fa5225fE6b36b232/f98930ccfdc862f1.jpg'
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