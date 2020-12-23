// pages/vSevenZeroSeven/vSevenZeroSeven.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img11.360buyimg.com/ddimg/jfs/t1/135635/33/15191/1292007/5fa5fd53E3ad367e5/b328c8096077e24c.jpg',
      videoUrl:'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E8%89%BE%E9%85%B7/%E8%89%BE%E9%85%B7V707.mp4?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1604885268;2468798868&q-key-time=1604885268;2468798868&q-header-list=&q-url-param-list=&q-signature=d92a0f98fd933fd4b2acf9c6dfcc0e2e532e5f70',
      detailList:[
        'https://img10.360buyimg.com/ddimg/jfs/t1/126246/23/17465/923638/5fa5fd75E983d42d3/4ad760ccf2b11f48.jpg',
        'https://img14.360buyimg.com/ddimg/jfs/t1/155332/35/5030/1356754/5fa5fd79E47501026/5a6742699537bb6e.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/121467/21/17671/1393488/5fa5fd80Ed715c790/913c63323b697651.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/140878/23/13495/1406200/5fa5fd80E3ffe1d55/c6fd7285e106d5fe.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/131510/23/14993/1413264/5fa5fd7dEa4872f04/6b0bcee7701fd216.jpg',
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