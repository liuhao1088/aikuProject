// pages/ar/ar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img13.360buyimg.com/ddimg/jfs/t1/140107/6/13539/1791940/5fa52e33E225f0d0f/256757ff34593c7c.jpg',
      detailList:[
        'https://img14.360buyimg.com/ddimg/jfs/t1/148866/29/13433/1692250/5fa52e4cE2076d77e/a6a5d989edea5644.jpg',
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