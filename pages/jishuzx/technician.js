/*technician.js*/

//获取应用实例
var app = getApp()
var mockData = require('../../mock/data-zx.js')

Page({
  // 页面初始数据
  data: {
    zixunList: mockData.getZxData()
  },
   
  onLoad:function(){
    var that = this
  }
  
})
