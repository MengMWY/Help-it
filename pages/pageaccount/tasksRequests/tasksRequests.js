// pages/pageaccount/tasksRequests/tasksRequests.js
var date = []
var titles = []
var nrequests = []

Page({
  data: {
    src_icon: '../../../img/icon.png',
    page_title: 'Requests for my tasks',
    postit: '../../../img/postit_1.jpg',
    date: [],
    titles: [],
    nrequests: []
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
      url: '../../pageaccount/tasksRequests/requestsInfo/requestsInfo',
    })
  },

  onShow: function (options) {
    var tasks = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [], nreq: [] }
    var nST = wx.getStorageSync('nST')      //Get the number of tasks
    var k = 0

    tasks = wx.getStorageSync('tasksSubmitted')      //Get the tasks
    date = [];
    titles = [];
    nrequests = [];

    for (var j = 0; j <= nST; j++) {
      if(tasks.nreq[j] > 0){
        date[k] = tasks.date[j]
        titles[k] = tasks.title[j];
        nrequests[k] = tasks.nreq[j];
        k++
      }
    }
    this.setData({      //Set the data for the view layer
      date: date,
      titles: titles,
      nrequests: nrequests
    })
  }
})