// pages/aEightZeroZeroWiFi/aEightZeroZeroWiFi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img10.360buyimg.com/ddimg/jfs/t1/128445/13/17833/1518730/5fa529fbE28afb58c/6dc371aa42864988.jpg',
      detailList:[
        'https://img11.360buyimg.com/ddimg/jfs/t1/144538/21/13412/1445908/5fa52a0bE4f5a344c/230c8aae150a89a2.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/141096/25/13348/1844723/5fa52a4aEf58c8cb4/0b42863f053ca3df.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/136165/2/15043/1517359/5fa52a5eE16ba46ee/2f0850a036da7991.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/150340/1/6215/1701847/5fa52a75E5dda22ee/93fbbd1016cf1898.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/130116/32/14922/1499414/5fa52a8bEa0fbe10e/ce42f709bbacc2d1.jpg',
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