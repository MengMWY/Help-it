// pages/pageaccount/pageaccount.js
Page({
  data: {
  
  },

  //Button event
  bindInfo: function() {
    wx.navigateTo({
      url: '../pageaccount/personalinfo/personalinfo',
    })
  },

  //Button event
  bindTaskS: function() {     //View submitted tasks
    wx.navigateTo({     //Go to submitted tasks page
      url: '../pageaccount/tasksSubmitted/tasksSubmitted',
    })
  },

  //Button event
  bindTaskA: function() {     //View accepted tasks
    wx.navigateTo({     //Go to accepted tasks page
      url: '../pageaccount/tasksAccepted/tasksAccepted',
    })
  },

  //Button event
  bindTaskD: function () {    //View tasks completed
    wx.navigateTo({
      url: '../pageaccount/tasksCompleted/tasksCompleted',
    })
  },

  //Button event
  bindTaskR: function () {    //View requests
    wx.navigateTo({
      url: '../pageaccount/tasksRequests/tasksRequests',
    })
  }
})