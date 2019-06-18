// pages/pagetask/viewtask/reporttask/reporttask.js
Page({

  /**
   * Page initial data
   */
  data: {
    src_icon: '../../../../img/icon.png',
    page_title: 'Report task'
  },

  //Button event
  bindReportTask: function () {      //Report the task
    wx.switchTab({       //Return to the task details
      url: '../../../pagetask/pagetask',
    })
  },

  //Button event
  bindCancTask: function () {      //Canc
    wx.navigateTo({       //Return to the task details
      url: '../viewtask',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})