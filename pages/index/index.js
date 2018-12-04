//index.js
//获取应用实例
var app = getApp()
var mockData = require('../../mock/data-zx.js')

Page({
  // 页面初始数据
  data: {
      colors:['red','orange','yellow','green','purple'],
      // banner 初始化
    banner_url: mockData.getBannerData(),
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1000,
    navList: mockData.getIndexNavData(),
      zixunList: mockData.getZxData()

    },
   
  onLoad:function(){
    var that = this

  },
  //nav
  navItemClick: function(e) {
      
  },
  // 跳转至详情页
  navigateDetail: function(e){
    wx.navigateTo({
      url:'../detail/detail?artype=' + e.currentTarget.dataset.artype
    })
  },
  // 更多机构
  moreJG: function (e) {
  },
  // 更多资讯
  moreZX: function(e){
    wx.navigateTo({
      url:'../book/book?aid='+e.currentTarget.dataset.aid
    })
  }
  
})
