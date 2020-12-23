// pages/wThreepro/wThreepro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img12.360buyimg.com/ddimg/jfs/t1/122349/24/18079/1479267/5fa9eddcE4a7d9928/af17ed64cb7bc9a5.jpg',
      detailList:[
        'https://img10.360buyimg.com/ddimg/jfs/t1/154450/29/5377/1355971/5fa9edfdEd2a285a3/625613993fa6dc5c.jpg',
        'https://img14.360buyimg.com/ddimg/jfs/t1/142096/15/13872/1517976/5fa9ee13Eaf71982f/d697471de0cd14b5.jpg'
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