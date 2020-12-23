// pages/drivingRecorder/drivingRecorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList: [
      'https://img12.360buyimg.com/ddimg/jfs/t1/144767/10/13784/309790/5fa8e298Ef6cebb88/88814058dc288230.jpg',
      'https://img12.360buyimg.com/ddimg/jfs/t1/137570/22/15211/226395/5fa8e2acE4030bfbf/5961eae823fb32c4.jpg',
      'https://img12.360buyimg.com/ddimg/jfs/t1/132162/28/15487/320045/5fa91e57Ec6fc4ab2/7e30b234845cad07.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/141238/39/13694/304440/5fa8e2d1Eea33fcac/875a18d3eaa58831.jpg',
    ]
  },
  toDetails(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.navigateTo({
        url: "../xThreeZeroZeroS/xThreeZeroZeroS"
      })
    } else if (index === 1) {
      wx.navigateTo({
        url: "../xOneZeroZero/xOneZeroZero"
      })
    } else if (index === 2) {
      wx.navigateTo({
        url: "../xTwoZeroZero/xTwoZeroZero"
      })
    } else {
      wx.navigateTo({
        url: "../aEightZeroZeroWiFi/aEightZeroZeroWiFi"
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