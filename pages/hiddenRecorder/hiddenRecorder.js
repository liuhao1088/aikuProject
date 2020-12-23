// pages/hiddenRecorder/hiddenRecorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList: [
      'https://img14.360buyimg.com/ddimg/jfs/t1/142726/4/13690/230221/5fa8e4f9E4a2a981d/4e5783d3998d72d8.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/129479/28/18003/240073/5fa8e511E5cfc19f6/3a8d6b127bf70423.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/155527/20/5308/216831/5fa8e524Ecaa2e0f9/b4fb5de2c80c17fe.jpg',
      'https://img12.360buyimg.com/ddimg/jfs/t1/132924/7/15337/253388/5fa8e536E2a916bb1/ab1822f700c688cc.jpg',
    ]
  },
  toDetails(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.navigateTo({
        url: "../vSixSevenZeroFourG/vSixSevenZeroFourG"
      })
    } else if (index === 1) {
      wx.navigateTo({
        url: "../vSixSevenZeroWiFi/vSixSevenZeroWiFi"
      })
    } else if (index === 2) {
      wx.navigateTo({
        url: "../vSevenZeroSeven/vSevenZeroSeven"
      })
    } else {
      wx.navigateTo({
        url: "../vSevenZeroEight/vSevenZeroEight"
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