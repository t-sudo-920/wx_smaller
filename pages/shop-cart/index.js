// pages/shop-cart/index.js
Page({
  data: {
    usersInfo:[]
  },
  closeHandleClick(){
    console.log('123')
    wx.chooseAddress({
      success:(res)=>{
          console.log(res)
          this.setData({
            usersInfo:res
          })
        wx.setStorageSync("usersInfo", res)
      } 
    })
  },
  onShow(){
    const usersInfo = wx.getStorageSync("usersInfo")
    this.setData({
      usersInfo
    })
  }
})