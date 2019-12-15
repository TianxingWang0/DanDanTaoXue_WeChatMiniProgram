//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var util = require('./utils/util.js')
var base_url = 'https://feiniaotao-1258589916.cos.ap-shanghai.myqcloud.com/'
var base_server = 'http://zhiduoshao.xyz:8000/media/'
var pics_new = 'http://zhiduoshao.xyz:8000/media/upload/'
var up_pics_server = 'http://zhiduoshao.xyz:8000/upload/'


App({
    onLaunch: function() {
        qcloud.setLoginUrl(config.service.loginUrl)
    },

    getUserInfo: function(cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登陆接口
            wx.login({
                success: function() {
                    wx.getUserInfo({
                        success: function(res) {
                            that.globalData.userInfo = res.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        }
    },

    globalData: {
        userInfo: null,
        util: util,
        base_url: 'https://feiniaotao-1258589916.cos.ap-shanghai.myqcloud.com/',
        goods: null,
        goodsCount: null,
        up_pics_server: 'http://zhiduoshao.xyz:8000/upload/',
        base_server : 'http://zhiduoshao.xyz:8000/media/'
    }
})