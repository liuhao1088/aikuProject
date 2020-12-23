// pages/streamMediaRecorder/streamMediaRecorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList: [
      'https://img10.360buyimg.com/ddimg/jfs/t1/152140/30/5284/270241/5fa8e343Ebf8120c1/d83b17bd2781816a.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/149637/1/13745/256291/5fa8e351Ef01d5dae/cf87120375152b7d.jpg',
    ]
  },
  toDetails(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.navigateTo({
        url: "../vSixTwoZeroFourG/vSixTwoZeroFourG"
      })  
    } else {
      wx.navigateTo({
        url: "../xEightZeroZeroA/xEightZeroZeroA"
      })
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