// pages/my/index.js
var app = getApp();
var config = require('../../config')
var COS = require('../../cos-wx-sdk-v5.js')
var Bucket = 'feiniaotao-1258589916';
var Region = 'ap-shanghai';

var cos = new COS({
    SecretId: 'YOUR ID',
    SecretKey: 'YOUR KEY',
});

Page({
    /**
     * 页面的初始数据
     */
    data: {
        /**
         * 图片
         */
        imgs: [],
        list: '',
        upload_picture_list: [],
        pics: [],
        name: '',
        price: '',
        seller: '',
        info: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    nameInput: function(e) {
        this.setData({
            name: e.detail.value
        })
    },

    priceInput: function(e) {
        this.setData({
            price: e.detail.value
        })
    },

    sellerInput: function(e) {
        this.setData({
            seller: e.detail.value
        })
    },

    infoInput: function(e) {
        this.setData({
            info: e.detail.value
        })
    },


    //选择图片方法
    uploadpic: function(e) {
        let that = this //获取上下文
        let upload_picture_list = that.data.upload_picture_list
        //选择图片
        wx.chooseImage({
            count: 8, // 默认9，这里显示一次选择相册的图片数量 
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有  
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) { // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
                let tempFiles = res.tempFiles
                //把选择的图片 添加到集合里
                for (let i in tempFiles) {
                    tempFiles[i]['upload_percent'] = 0
                    tempFiles[i]['path_server'] = ''
                    upload_picture_list.push(tempFiles[i])
                }
                //显示
                that.setData({
                    upload_picture_list: upload_picture_list,
                });
            }
        })
    },
    //点击上传图片
    uploadimage() {
        let page = this
        let upload_picture_list = page.data.upload_picture_list

        //上传json
        wx.request({
            url: 'http://zhiduoshao.xyz:8000/uploadJson/',
            header: {
                'content-type': 'application/json'
            },
            data: {
                "name": page.data.name,
                "price": page.data.price,
                "info": page.data.info,
                "seller": page.data.seller,
                "pics": [],
                "count": page.data.upload_picture_list.length
            },
            method: 'POST',
            success(res) {
                // 获得了服务器指定的惟一id
                console.log(res.data.id)
                //循环把图片上传到腾讯云 并显示进度   
                for (let j in upload_picture_list) {
                    if (upload_picture_list[j]['upload_percent'] == 0) {
                        upload_file_server(page, upload_picture_list, j, res.data.id)    
                    }
                }
                let imgs = wx.setStorageSync('imgs', upload_picture_list);
                // 上传作为缩略图
                wx.uploadFile({                        
                    url: app.globalData.up_pics_server,
                    filePath: upload_picture_list[0]['path'], //上传的文件本地地址
                    name: 'file',
                    filename: res.data.id + '.jpg',   // 作为缩略图
                    formData: {
                        'key': res.data.id + '.jpg'
                    },
                    //附近数据，这里为路径     
                    success: function (res) {
                        
                    }
                })
            }
        })
    },

    // 点击删除图片
    deleteImg(e) {
        let upload_picture_list = this.data.upload_picture_list;
        let index = e.currentTarget.dataset.index;
        upload_picture_list.splice(index, 1);
        this.setData({
            upload_picture_list: upload_picture_list
        });
    },

    // 预览图片
    previewImg(e) {
        //获取当前图片的下标
        let index = e.currentTarget.dataset.index;
        //所有图片
        let imgs = this.data.imgs;
        wx.previewImage({
            //当前显示图片
            current: imgs[index],
            //所有图片
            urls: imgs
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        // var that = this
        // that.setData({
        //     imgs: [],
        //     list: '',
        //     upload_picture_list: [],
        //     focus: false,
        //     inputValue: "",
        //     name: '',
        //     price: '',
        //     seller: '',
        //     info: ''
        // })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})


/**
 * 上传服务器
 */
function upload_file_server(that, upload_picture_list, j, id) {
    var name = parseInt(j) + 1
    var key = 'pics/' + id + '/' + name.toString() + '.jpg'
    const upload_task = wx.uploadFile({
        url: app.globalData.base_url,
        filePath: upload_picture_list[j]['path'], //上传的文件本地地址
        name: 'file',
        formData: {
            'num': j,
            'key': key
        },
        //附近数据，这里为路径     
        success: function(res) {
            upload_picture_list[j]['path_server'] = app.globalData.base_url + '/' + key
            that.setData({
                upload_picture_list: upload_picture_list
            });
            wx.setStorageSync('imgs', upload_picture_list);
        }
    })
    //上传 进度方法
    upload_task.onProgressUpdate((res) => {
        upload_picture_list[j]['upload_percent'] = res.progress
        that.setData({
            upload_picture_list: upload_picture_list
        });
    });
}