// pages/vSixTwoZeroFourG/vSixTwoZeroFourG.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img11.360buyimg.com/ddimg/jfs/t1/153303/8/4920/1084402/5fa52bb7E4acb2967/e62ebad760c69008.jpg',
      detailList:[
        'https://img14.360buyimg.com/ddimg/jfs/t1/146547/19/13174/1046274/5fa52bd0E4c2e49ca/61fc1f613297d323.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/132191/14/14987/1074620/5fa52bf0E865febef/5cbf05598b22e784.jpg',
        'https://img14.360buyimg.com/ddimg/jfs/t1/150613/22/5782/1156665/5fa52c06E32f20134/72a0975f2a234c8c.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/146290/37/13443/871111/5fa52c1aE8a8984be/dac6e024fd9c9ad9.jpg',
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