// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:"意志制衣",
    categoryData:[
      { id: 1,name:  '服装', flag:false },
      { id: 2, name: '时尚', flag: false },
      { id: 3, name: '美装', flag: false },
      { id: 4, name: '儿装', flag: false },
      { id: 5, name: '青年装', flag: false },
      { id: 6, name: '时尚', flag: false },
      { id: 7, name: '服装', flag: false },
      { id: 8, name: '服装', flag: false },
      { id: 9, name: '时尚', flag: false },
      { id: 10, name: '服装', flag: false },
      { id: 22, name: '服装', flag: false },
      { id: 11, name: '服装', flag: false },
      { id: 12, name: '服装', flag: false },
      { id: 13, name: '服装', flag: false },
      { id: 14, name: '服装', flag: false },
      { id: 15, name: '时尚', flag: false },
      { id: 16, name: '时尚', flag: false },
      { id: 17, name: '时尚', flag: false },
      { id: 18, name: '时尚', flag: false },
      { id: 19, name: '时尚', flag: false },
      { id: 20, name: '时尚', flag: false },
      { id: 21, name: '时尚', flag: false },
    ],
    currentIndex:0,
    meaaageData:[
      { url:"../../images/pic/1.jpg",price:123,num:5,name:"纯棉衣服新款",id:1},
      { url: "../../images/pic/2.jpg", price: 123, num: 5, name: "纯棉衣服新款",id: 1 },
      { url: "../../images/pic/3.jpg", price: 123, num: 5, name: "纯棉衣服新款", id: 2 },
      { url: "../../images/pic/1.jpg", price: 123, num: 5, name: "纯棉衣服新款", id: 3 },
      { url: "../../images/pic/5.jpg", price: 123, num: 5, name: "纯棉衣服新款", id: 4 },
      { url: "../../images/pic/6.jpg", price: 123, num: 5, name: "纯棉衣服新款", id: 5 }
      // { url: "../../images/pic/7.jpg", price: 123, num: 5, name: "纯棉衣服新款", id: 6 },
      // { url: "../../images/pic/8.jpg", price: 123, num: 5, name: "纯棉衣服新款", id: 7 },
      // { url: "../../images/pic/9.jpg", price: 123, num: 5, name: "纯棉衣服新款", id: 8},
      // { url: "../../images/pic/10.jpg", price: 123, num: 5, name: "纯棉衣服新款", id: 9 },
      // { url: "../../images/pic/1.jpg", price: 123, num: 5, name: "纯棉衣服新款", id: 10 },
    ]
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

  },
  handleClick:function(e){
      console.log(e)
      const {index} = e.currentTarget.dataset
      this.setData({
        currentIndex:index
      })
  }
})