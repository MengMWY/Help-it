// pages/pagetask/newtask/newtask.js

const util = require('../../../utils/util.js')

var todayDate
var nT

var tasks = { id: [], active: [], date: [], title: ['\n'], description: ['\n'], duration: [], submitter: [] }

Page({
  data: {
    src_icon: '../../../img/icon.png',
    page_title: 'New Task',
    todayDate: []
  },

  //Button event
  bindSubmitTask: function(){
    if(tasks.title[nT]!='\n' && tasks.description[nT]!='\n' && tasks.duration[nT]!='\n'){
      var nID = wx.getStorageSync('nID')
      nID++
      tasks.id[nT] = nID
      tasks.active[nT] = 1
      tasks.date[nT] = todayDate
      tasks.submitter[nT] = wx.getStorageSync('UserName')
      wx.setStorage({     //Store the new nT: number of tasks
        key: 'nT',
        data: nT,
      })
      wx.setStorage({     //Store the tasks
        key: 'tasks',
        data: tasks,
      })
      wx.setStorage({     //Store the ID counter
        key: 'nID',
        data: nID,
      })

      var nST = wx.getStorageSync('nST')    //Get the number of personal tasks submitted
      nST++     //Increase the number of personal tasks submitted
      var tasksSubmitted = { id: [], active: [0], date: [], title: [], description: [], duration: [] }
      tasksSubmitted = wx.getStorageSync('tasksSubmitted')
      tasksSubmitted.id[nST] = tasks.id[nT]
      tasksSubmitted.active[nST] = tasks.active[nT]
      tasksSubmitted.date[nST] = tasks.date[nT]
      tasksSubmitted.title[nST] = tasks.title[nT]
      tasksSubmitted.description[nST] = tasks.description[nT]
      tasksSubmitted.duration[nST] = tasks.duration[nT]
      wx.setStorage({     //Store the new task into tasksSubmitted
        key: 'tasksSubmitted',
        data: tasksSubmitted,
      })
      wx.setStorage({
        key: 'nST',
        data: nST,
      })

      wx.switchTab({      //Return to the task list
        url: '../../pagetask/pagetask',
      })
    }
  },

  //Input event
  inputTitleTask: function(e){    //Task title
    tasks.title[nT] = e.detail.value
  },

  //Input event
  inputDescription: function(e){    //Task description
    tasks.description[nT] = e.detail.value
  },

  //Input event
  inputDurationTask: function(e){   //Task duration
    if (e.detail.value >=1 &&  e.detail.value <= 9){
      tasks.duration[nT] = e.detail.value
    }
    else{
      tasks.duration[nT] = '1'
    }
  },

  onShow: function (e) {
    tasks = wx.getStorageSync('tasks')      //Get the tasks
    nT = wx.getStorageSync('nT')      //Get the number of tasks
    nT++            //Increase the number of tasks
    todayDate = util.formatTime(new Date())         //Get the date of today
    this.setData({
      todayDate : todayDate
    })
  },
})