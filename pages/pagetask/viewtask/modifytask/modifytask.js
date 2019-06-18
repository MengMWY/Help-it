// pages/pagetask/viewtask/modifytask/modifytask.js

const util = require('../../../../utils/util.js')

var tasks = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [] }
var tasksSubmitted = { id: [], active: [], date: [], title: [], description: [], duration: [] }
var field_values = []
var wT
var wST
var pwT
var todayDate

Page({
  data: {
    src_icon: '../../../../img/icon.png',
    page_title: 'Modify Task',
    field_values: []
  },

  //Button event
  bindSaveTask: function () {   //Save the task
    tasks.active[wT] = 1
    tasksSubmitted[wST] = 1
    tasks.date[wT] = todayDate
    tasksSubmitted[wST] = todayDate
    wx.setStorage({     //Store the tasks
      key: 'tasks',
      data: tasks,
    })
    wx.setStorage({
      key: 'tasksSubmitted',
      data: tasksSubmitted,
    })

    if(pwT == 1){
      wx.reLaunch({     //Return to the tasks list
        url: '../../pagetask',
      })
    }
    else if(pwT == 2){
      wx.navigateTo({
        url: '../../../pageaccount/tasksSubmitted/tasksSubmitted',
      })
    }
  },

  //Input event
  inputTitleTask: function (e) {    //Task title
    tasks.title[wT] = e.detail.value
    tasksSubmitted.title[wST] = tasks.title[wT]
  },

  //Input event
  inputDescription: function (e) {    //Task description
    tasks.description[wT] = e.detail.value
    tasksSubmitted.description[wST] = tasks.description[wT]
  },

  //Input event
  inputDurationTask: function (e) {   //Task duration
    if (e.detail.value >= 1 && e.detail.value <= 9) {
      tasks.duration[wT] = e.detail.value
      tasksSubmitted.duration[wST] = tasks.duration[wT]
    }
    else {
      tasks.duration[wT] = '1'
      tasksSubmitted.duration[wST] = '1'
    }
  },

  onShow: function (options) {
    todayDate = util.formatTime(new Date())     //Get today's date
    pwT = wx.getStorageSync('pwT')
    wT = wx.getStorageSync('wT')      //Get the index of the task
    tasks = wx.getStorageSync('tasks')      //Get the tasks
    tasksSubmitted = wx.getStorageSync('tasksSubmitted')
    if(pwT == 1){
      var nST = wx.getStorageSync('nST')
      for (var j = 0; j < nST; j++) {
        if (tasksSubmitted.id[j] == tasks.id[wT]) {
          wST = j
        }
      }
      if (tasks.active[wT] == 1) {
        field_values[0] = todayDate;
        field_values[1] = tasks.title[wT];
        field_values[2] = tasks.description[wT];
        field_values[3] = tasks.duration[wT];
        this.setData({    //Set the data for the view layer
          field_values: field_values
        })
      }
    }
    else if(pwT == 2){
      var nT = wx.getStorageSync('nT')
      for (var j = 0; j < nT; j++) {
        if (tasks.id[j] == tasksSubmitted.id[wT]) {
          wST = wT
          wT = j
        }
      }
      if (tasksSubmitted.active[wST] == 1) {
        field_values[0] = todayDate;
        field_values[1] = tasksSubmitted.title[wST];
        field_values[2] = tasksSubmitted.description[wST];
        field_values[3] = tasksSubmitted.duration[wST];
        this.setData({    //Set the data for the view layer
          field_values: field_values
        })
      }
    }
  },
})