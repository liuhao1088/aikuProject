// pages/vSixSevenZeroFourG/vSixSevenZeroFourG.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img10.360buyimg.com/ddimg/jfs/t1/126097/2/17480/1919697/5fa5fb39E21a5eee3/2c7906379b1a8e9c.jpg',
      detailList:[
        'https://img12.360buyimg.com/ddimg/jfs/t1/149140/36/13591/1304659/5fa5fb50E6d353825/50df8859be895d8e.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/138761/31/13547/1373330/5fa5fb66Ec8fde760/951816df128b5ea8.jpg',
        'https://img14.360buyimg.com/ddimg/jfs/t1/145388/19/13511/1566221/5fa5fb83E8928de7a/436efec7b3ceb4d5.jpg',
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