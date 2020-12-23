// pages/xOneZeroZero/xOneZeroZero.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img14.360buyimg.com/ddimg/jfs/t1/137895/12/13579/1539133/5fa5259bEb81bb1b5/cfa0b276dcc26e41.jpg',
      videoUrl:'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E8%89%BE%E9%85%B7/%E8%89%BE%E9%85%B7X1000%203.mp4?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1604659003;2468572603&q-key-time=1604659003;2468572603&q-header-list=&q-url-param-list=&q-signature=f974b9ff90371a11acd6705d98132469f92ee1f4',
      detailList:[
        'https://img12.360buyimg.com/ddimg/jfs/t1/131821/29/14953/1488493/5fa525deE50eea9d7/fd1cf9bedfddf1b7.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/122114/14/17565/1409634/5fa525f4E27e47da5/67e31595915d63fb.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/146423/17/13309/1482302/5fa5261dE004797d9/285d9cba10ef7b02.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/131267/11/14960/1395883/5fa52634E31092ac3/e77cb8adcdde3e72.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/120292/22/17635/1399684/5fa5264aE703ad01b/584d992a281a39d0.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/145279/39/13403/1135004/5fa5265fEadaa4549/4d330e0aef550c2c.jpg'
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