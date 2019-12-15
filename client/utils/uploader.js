function send_photo(data, successfun) {
  var that = this
  for (let i = 0; i < data.length; i++) {
    console.log("data长度=" + data.length)
    console.log(data)
    wx.uploadFile({
      url: BASE_Server + "/FileUpLoadController/upload.action", //仅为示例，非真实的接口地址 自己写映射你Java接口的路径
      filePath: data[i] + "",
      name: 'file',
      success: function (res) {
        successfun(res)
      }
    })
  }
}
module.exports = {
  send_photo: send_photo
}