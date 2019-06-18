// pages/pagetask/pagetask.js

var tasks = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [] }
var titles = []
var requests = []
var date = []
var nT

Page({
  data: {
    src_icon: '../../img/icon.png',
    page_title: "Tasks List",
    postit: ['../../img/postit_1.jpg', '../../img/postit_2.png', '../../img/postit_3.png', '../../img/postit_4.png', '../../img/postit_5.png', '../../img/postit_6.png', '../../img/postit_7.png', '../../img/postit_8.png', '../../img/postit_9.png'],
    titles: [],
    requests: [],
    date: []
  },

  //Button event
  bindButton: function() {    //Add new task
    wx.navigateTo({     //Go to the new task page
      url: '../pagetask/newtask/newtask',
    })
  },

  //Button event
  bindTask: function(event) {    //View a task
    var wT = event.target.dataset.ntask
    wx.setStorage({     //Set the index of the task to view
      key: 'wT',
      data: wT,
    })

    wx.setStorage({
      key: 'pwT',
      data: 1,
    })

    wx.navigateTo({       //Go to the task details page
      url: '../pagetask/viewtask/viewtask',
    })
  },

  onShow: function (options) {
    titles = [];
    requests = [];
    date = [];
    nT = wx.getStorageSync('nT')      //Get the number of tasks
    tasks = wx.getStorageSync('tasks')      //Get the tasks
    var k = 0
    for (var j = 0; j <= nT; j++) {
      if (tasks.active[j] == 1) {
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