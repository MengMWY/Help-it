// pages/pageaccount/tasksAccepted/tasksAccepted.js

var titles = []
var requests = []
var date = []

Page({
  data: {
    src_icon: '../../../img/icon.png',
    page_title: 'Tasks I accepted',
    postit: '../../../img/postit_2.png',
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
      data: 3,
    })

    wx.navigateTo({       //Go to the task details page
      url: '../../pagetask/viewtask/viewtask',
    })
  },

  onShow: function (options) {
    var k = 0
    var tasks = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [] }
    var nAT = wx.getStorageSync('nAT')      //Get the number of tasks
    tasks = wx.getStorageSync('tasksAccepted')      //Get the tasks
    titles = [];
    requests = [];
    date = [];
    for (var j = 0; j <= nAT; j++) {
      if(tasks.active[j] == 2){
        titles[k] = tasks.title[j];
        requests[k] = tasks.description[j];
        date[k] = tasks.date[j];
        k++
      }
    }
    this.setData({      //Set the data for the view layer
      titles: titles,
      requests: requests,
      date: date
    })
  }
})