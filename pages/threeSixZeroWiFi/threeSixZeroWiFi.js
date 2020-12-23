// pages/threeSixZeroWiFi/threeSixZeroWiFi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img10.360buyimg.com/ddimg/jfs/t1/125375/4/17483/1759210/5fa52fd2Eaa236659/cc58bc40539091d0.jpg',
      detailList:[
        'https://img14.360buyimg.com/ddimg/jfs/t1/138614/2/13455/1675433/5fa52fe5Eaff1b0db/5c72d3aa9fd4af34.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/122552/20/17731/1751952/5fa52ffaE9fa70101/6c958616c094209e.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/155480/39/4949/1817118/5fa53011E4ec238d2/acaacd825e23f057.jpg',
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