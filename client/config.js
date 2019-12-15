/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://wsjbgjo1.qcloud.la';
//var host = 'https://205615441.dandantaoxue.cn';
//var picUrl = 'https://205615441.dandantaoxue.cn/goods_pics';
var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,        
        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        //关于我们的文本地址
        //aboutUsUrl: `${host}/xiugaiphp`,
        aboutUsUrl: `${host}/`,

        // 商品信息地址
        //goodsUrl: `${host}/xiugaiphp`,
        goodsUrl: `${host}/`,

        //商品图片请求地址
        dataUrl: `${host}/goods_pics`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`
    }
};

module.exports = config;