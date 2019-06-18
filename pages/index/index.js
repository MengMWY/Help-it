//index.js

const app = getApp()

Page({
  data: {
    src_logo: '../../img/icon.png'
  },
  
  //Error event
  imageError: function (e) {
    console.log('image has experienced an error event')
  },

  onShow: function () {
    for (var j = 0; j < 100000000; j++) {

    }
    wx.reLaunch({     //Go to task list page
      url: '../pagetask/pagetask',
    })
  }
})
