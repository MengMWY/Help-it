// pages/pageaccount/tasksCompleted/tasksCompleted.js

var titles = []
var requests = []
var date = []

Page({
  data: {
    src_icon: '../../../img/icon.png',
    page_title: 'Tasks I completed',
    postit: '../../../img/postit_3.png',
    titles: [],
    requests: [],
    date: []
  },

  //Button event
  bindTask: function (event) {    //View a task
    var wT = event.target.dataset.ntask
    wx.setStorage({     //Set the index of the task to view
      key: 'wT',
      data: wT,
    })

    wx.setStorage({
      key: 'pwT',
      data: 4,
    })

    wx.navigateTo({       //Go to the task details page
      url: '../../pagetask/viewtask/viewtask',
    })
  },

  onShow: function (options) {
    var tasks = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [] }
    var nDT = wx.getStorageSync('nDT')      //Get the number of tasks
    
    tasks = wx.getStorageSync('tasksDone')      //Get the tasks
    titles = [];
    requests = [];
    date = [];
    
    for (var j = 0; j <= nDT; j++) {
      titles[j] = tasks.title[j];
      requests[j] = tasks.description[j];
      date[j] = tasks.date[j];
    }
    this.setData({      //Set the data for the view layer
      titles: titles,
      requests: requests,
      date: date
    })
  }
})