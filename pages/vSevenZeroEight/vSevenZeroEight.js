// pages/vSevenZeroEight/vSevenZeroEight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img11.360buyimg.com/ddimg/jfs/t1/152423/1/5019/1401752/5fa5ff85E28e81a75/d35ddefc7633054c.jpg',
      videoUrl:'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E8%89%BE%E9%85%B7/%E8%89%BE%E9%85%B7V708%E6%88%90%E7%89%8701.m4v?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1604885325;2468798925&q-key-time=1604885325;2468798925&q-header-list=&q-url-param-list=&q-signature=532ddeb41c5900792a2a2c401775a631a5e10dd0',
      detailList:[
        'https://img14.360buyimg.com/ddimg/jfs/t1/139304/19/13468/1585545/5fa5ff9aEc03f6b29/c58b70d2231d64c9.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/133890/9/14857/1384929/5fa5ffb0E322a4fc9/78ec59cd1d545bbc.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/125944/3/17794/1801755/5fa5ffc7E2113c487/ff8cdeb51f3af655.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/125944/3/17794/1801755/5fa5ffc7E2113c487/ff8cdeb51f3af655.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/129575/21/17621/1470779/5fa5ffdcE4b9e0ec5/e7871057bdef35ba.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/154684/13/4940/1364111/5fa5ffefE4f2d3bc9/8ddf8d97a2747231.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/125033/31/17739/1756029/5fa60026Eb287996e/84761721a343ab0d.jpg'
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