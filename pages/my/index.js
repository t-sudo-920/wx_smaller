// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_Info:[]
  },
  getuserInfo(e){
    console.log(e)
    const user_Info = e.detail.userInfo
     this.setData({
       user_Info 
     })
    wx.setStorageSync("user_Info",user_Info)
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
    const user_Info = wx.getStorageSync("user_Info")
    console.log(user_Info)
    this.setData({
      user_Info
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