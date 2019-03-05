// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
   // videoId:null
   videoNow:null,
   otherVideo:[],
   commentsList:null
  },
  getVideoNow(videoId){
    let that = this;
    wx.request({
      url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videodetail?id='+videoId,
      success(res){
        if(res.data.code === 0){
          that.setData({
            videoNow:res.data.data.videoInfo
          })
        }
      }
    })
  },
  getOtherList(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + videoId,
      success(res){
        if(res.data.code === 0){
          that.setData({
            otherVideo:res.data.data.othersList
          })
        }
      }
    })
  },
  getComments(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id='+videoId,
      success(res){
        if(res.data.code===0){
          that.setData({
            commentsList: res.data.data.commentData
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)//这里的options可以获取到前面的url='../detail/detail?id={{item.id}//}'的参数
    let videoId = options.id;
    this.getVideoNow(videoId);
    this.getOtherList(videoId);
    this.getComments(videoId);
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