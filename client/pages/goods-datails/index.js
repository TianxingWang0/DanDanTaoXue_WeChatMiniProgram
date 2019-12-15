// pages/goods-datails/index.js
var app = getApp();
var config = require('../../config');
var WxParse = require('../../wxParse/wxParse.js');
var detail = require('../index/index.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1000,
    goodsDetail: {},
    swiperCurrent: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.setData({ 
      goodsDetail: app.globalData.goods[e.id - 1]
    })

    /*var that = this;
    console.log('onLoad')
    wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: config.service.goodsUrl + '/Goods.php',
      //url: 'https://205615441.dandantaoxue.cn' + '/weapp' + '/Goods.php',
      data: [],
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({ goodsDetail: res.data[e.id - 1] });
        //console.log(res.data.data, 1111111);
      },
    })*/
  },

  swiperchange: function (e) {
    //console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  previewImg: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.goodsDetail.pics // 需要预览的图片http链接列表  
    })
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