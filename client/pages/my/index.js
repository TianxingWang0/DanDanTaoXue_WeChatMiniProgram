// pages/my/index.js
var app = getApp();
var config = require('../../config')

Page({

  /**
   * 页面的初始数据
   */
  /*
  data: {
    text: "1、由于时间仓促，版本1.0在排版布局、功能部件上有很多不足，随着时间推进，新的更加完善的版本会不断推出。\n2、我们是复旦大学TWTS课程第二小组，此小程序和同名微信公众号是我们的课程项目，了解跟多信息，请搜索微信公众号“旦旦淘学”。"
  },
  */
  data: {
    text: "1、由于时间仓促，版本1.0在排版布局、功能部件上有很多不足，随着时间推进，新的更加完善的版本会不断推出。\n2、我们是复旦大学软件工程化开发课程sky walker小组，此小程序和同名微信公众号是我们的课程项目，了解跟多信息，请搜索微信公众号“飞鸟淘”。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //console.log('onLoad')
    /*wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: config.service.aboutUsUrl + '/aboutUs.php',
      //url: 'https://205615441.dandantaoxue.cn' + '/weapp' + '/aboutUs.php',
      //url: 'https://205615441.dandantaoxue.cn/config.php',
      data: [],
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({ text: res.data });
        //console.log(res.data.data, 1111111);
      },

    })*/
    /*qcloud.request({
      url: `${config.service.host}/weapp/aboutUs`,
      login: false,
      success(result) {
        //util.showSuccess('请求成功完成')
        that.setData({
          text: JSON.stringify(result.data)
        })
      },*/
      //fail(error) {
      //  util.showModel('请求失败', error);
      //  console.log('request fail', error);
      //}
    //})
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