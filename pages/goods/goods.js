// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgData: [
      { path: "../../images/pic/1.jpg", id: 1 },
      { path: "../../images/pic/6.jpg", id: 2 },
      { path: "../../images/pic/3.jpg", id: 3 },
    ],
    isTure:false,
    price:299,
    num:13,
    imgUrl:[
      {
        url: "../../images/pic/2.jpg",
        id: 1,
        name: "上衣"
      },
      {
        url: "../../images/pic/3.jpg",
        id: 2,
        name: "上衣"
      },
      {
        url: "../../images/pic/4jpg.jpg",
        id: 3,
        name: "上衣"
      },
      {
        url: "../../images/pic/5.jpg",
        id: 4,
        name: "上衣"
      },
      {
        url: "../../images/pic/6.jpg",
        id: 5,
        name: "上衣"
      }
    ]
  },
   //收藏
  handleClick(){
    let isTure = !this.data.isTure
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isTure
    })
    //提示用户
    wx.showToast({
      title: isTure ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
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