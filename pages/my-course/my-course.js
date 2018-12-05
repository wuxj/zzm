/*technician.js*/

//获取应用实例
var app = getApp()
var mockData = require('../../mock/data-zx.js')

Page({
  // 页面初始数据
  data: {
    userinfo:{
      avatar:'../../images/recommend_img_04.png',
      name:'我是择木同学',
      id:'2781336'
    },
    jgList: mockData.getJgListData()
  },

  onLoad: function () {
    var that = this
  }


})
