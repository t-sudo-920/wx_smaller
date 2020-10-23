//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgData:[
      { path:"../../images/pic/1.jpg",id:1},
      { path:"../../images/pic/6.jpg",id:2},
      { path:"../../images/pic/3.jpg",id:3},
    ],
    navImg:"../../images/live.jpg"
  }
})
