// pages/xEightZeroZeroA/xEightZeroZeroA.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img13.360buyimg.com/ddimg/jfs/t1/152333/23/5289/687535/5fa91f05Ee32f5e39/1d107086754eb946.jpg',
      videoUrl:'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E8%89%BE%E9%85%B7/%E8%89%BE%E9%85%B7X800A.mp4?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1604660468;2468574068&q-key-time=1604660468;2468574068&q-header-list=&q-url-param-list=&q-signature=3b4f2c028e0e46f278336605f9758d1c8b3d8643',
      detailList:[
        'https://img11.360buyimg.com/ddimg/jfs/t1/136311/31/15325/739341/5fa91eddEa976c5ce/2cc1c29fd244cd8d.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/130213/9/15010/1581644/5fa52d1cE957ec4d0/93f75ee31016cc5b.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/150781/22/5701/1369559/5fa52d35Ea8f42bd9/d94bcdb5c884512f.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/148898/7/13369/1564299/5fa52d49E12bc2195/f20450bddb355d72.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/153451/27/4990/1606984/5fa52d5dEd4014cc7/c3b42d44a58340ce.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/155446/4/4975/1531211/5fa52d75Ec799a942/d7ab14c680ed4a00.jpg'
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