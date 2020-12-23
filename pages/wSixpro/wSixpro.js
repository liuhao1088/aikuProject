// pages/wSixpro/wSixpro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img10.360buyimg.com/ddimg/jfs/t1/144317/12/13520/1380294/5fa52ee9E07343f43/01d023bf7deb49d7.jpg',
      detailList:[
        'https://img11.360buyimg.com/ddimg/jfs/t1/127576/39/17721/1521390/5fa52efcEf7763fd9/724a192ecdd588be.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/154492/33/4970/1426709/5fa52f13E1c74bf22/8e35eded61e13950.jpg'
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