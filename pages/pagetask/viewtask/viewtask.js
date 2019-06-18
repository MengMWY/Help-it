// pages/pagetask/viewtask/viewtask.js

const util = require('../../../utils/util.js')

var tasks = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [] }
var acceptedTask = { id: [], date: [], title: [], description: [], duration: [], submitter: [] }
var field_values = []

var wT

Page({
  data: {
    src_icon: '../../../img/icon.png',
    page_title: 'Task details',
    fields: ['Title:', 'Request:', 'Date:', 'Submitter:'],
    field_values: [],
    disabled: []
  },

  //Button event
  bindModifyTask: function() {      //Modify the task
    wx.navigateTo({       //Go to the modify task page
      url: '../viewtask/modifytask/modifytask',
    })
  },

  //Button event
  bindContactInfo: function() {
    wx.navigateTo({
      url: '../viewtask/acceptedtask/acceptedtask',
    })
  },

  //Button event
  bindReportTask: function () {      //Report the task
    wx.navigateTo({       //Go to the modify task page
      url: '../viewtask/reporttask/reporttask',
    })
  },

  //Button event
  bindAcceptTask: function() {      //Accept the task
    var nAT = wx.getStorageSync('nAT')      //Get the number of tasks accepted
    nAT++       //Increase the number of tasks accepted
    acceptedTask = wx.getStorageSync('tasksAccepted')     //Get the tasks accepted

    //Store the task accepted into tasksAccepted
    acceptedTask.id[nAT] = tasks.id[wT]
    acceptedTask.active[nAT] = 2
    acceptedTask.date[nAT] = util.formatTime(new Date())         //Get the date of today
    acceptedTask.title[nAT] = tasks.title[wT]
    acceptedTask.description[nAT] = tasks.description[wT]
    acceptedTask.duration[nAT] = tasks.duration[wT]
    acceptedTask.submitter[nAT] = tasks.submitter[wT]
    wx.setStorage({
      key: 'tasksAccepted',
      data: acceptedTask,
    })
    wx.setStorage({    
      key: 'nAT',
      data: nAT,
    })

    var nT = wx.getStorageSync('nT')      //Get the number of tasks
    for (var j = wT; j < nT; j++) {
      tasks.id[j] = tasks.id[j + 1]
      tasks.active[j] = tasks.active[j + 1]
      tasks.date[j] = tasks.date[j + 1]
      tasks.title[j] = tasks.title[j + 1]
      tasks.description[j] = tasks.description[j + 1]
      tasks.duration[j] = tasks.duration[j + 1]
      tasks.submitter[j] = tasks.submitter[j + 1]
    }
    tasks.id[nT] = ''
    tasks.active[nT] = ''
    tasks.date[nT] = ''
    tasks.title[nT] = ''
    tasks.description[nT] = ''
    tasks.duration[nT] = ''
    tasks.submitter[nT] = ''
    wx.setStorage({
      key: 'tasks',
      data: tasks,
    })

    nT--    //Decrease the number of tasks
    wx.setStorage({
      key: 'nT',
      data: nT,
    })

    wx.reLaunch({       //Go to the contact informations page
      url: '../../pagetask/viewtask/acceptedtask/acceptedtask',
    })
  },

  onShow: function () {
    var user = wx.getStorageSync('UserName')      //Get the user name
    wT = wx.getStorageSync('wT')      //Get the index of the task
    var pwT = wx.getStorageSync('pwT')
    var accepted = 0
    if(pwT == 1){
      tasks = wx.getStorageSync('tasks')    //Get the tasks
      accepted = 0
    }
    else if(pwT == 2){
      tasks = wx.getStorageSync('tasksSubmitted')    //Get the tasks
    }
    else if(pwT == 3){
      tasks = wx.getStorageSync('tasksAccepted')    //Get the tasks
      accepted = 1
    }
    else if(pwT == 4){
      tasks = wx.getStorageSync('tasksDone')    //Get the tasks
      accepted = 1
    }
    var disabled = []
    if (tasks.submitter[wT] == user) {    //If the submitter is the same user
      if(tasks.active[wT] != 0){
        this.setData({
          disabled: 'true',
          accepted: accepted
        })
      }
      else{
        this.setData({
          disabled: '',
        })
      }
    }
    else if (tasks.submitter[wT] != user) {   //If the submitter is not the same user
      this.setData({
        disabled: 'false',
        accepted: accepted
      })
    }
    
    field_values[0] = tasks.title[wT];
    field_values[1] = tasks.description[wT];
    field_values[2] = tasks.date[wT];
    field_values[3] = tasks.submitter[wT];
    this.setData({      //Set the data for the view layer
      field_values: field_values
    })
  }
})