// pages/vSixSevenZeroWiFi/vSixSevenZeroWiFi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img12.360buyimg.com/ddimg/jfs/t1/151962/32/5039/1447225/5fa5fc29Eca0b4128/d63a4704748ce5f8.jpg',
      videoUrl:'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E8%89%BE%E9%85%B7/%E8%89%BE%E9%85%B7V670.m4v?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1604885108;2468798708&q-key-time=1604885108;2468798708&q-header-list=&q-url-param-list=&q-signature=1e279c0804d3bb19496a9750cb5c7b510aa54a97',
      detailList:[
        'https://img14.360buyimg.com/ddimg/jfs/t1/123507/28/17898/1621985/5fa5fc40E015af0f9/1cfb75d3b64619e2.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/139512/36/13473/1809807/5fa5fc58E28659fac/f2f6a5e9f91a4490.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/137287/7/15127/1720765/5fa5fc6dE7d02e168/669200a29e931daa.jpg',
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