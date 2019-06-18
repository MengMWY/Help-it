// pages/pagetask/viewtask/acceptedtask/acceptedtask.js

var usersInfo = { name: [], wechat: [], email: [], tel: [] }
var tasks = { id: [], date: [], title: [], description: [], duration: [], submitter: [] }
var fields_value = []
var pwT

Page({
  data: {
    src_icon: '../../../../img/icon.png',
    page_title: 'Contact informations',
    fields: ['Name:', 'WeChat ID:', 'Email:', 'Telephone:'],
    fields_value: []
  },

  //Button event
  bindDone: function() {    //Done button
    if(pwT == 1){
      wx.switchTab({    //Return to the tasks list
        url: '../../pagetask',
      })
    }
    else if(pwT == 3){
      wx.navigateTo({
        url: '../../../pageaccount/tasksAccepted/tasksAccepted',
      })
    }
    else if (pwT == 4) {
      wx.navigateTo({
        url: '../../../pageaccount/tasksCompleted/tasksCompleted',
      })
    }
  },

  onShow: function () {
    var wT
    pwT = wx.getStorageSync('pwT')
    fields_value = []
    usersInfo = wx.getStorageSync('usersInfo')    //Get the users info
    if(pwT == 1){
      wT = wx.getStorageSync('nAT')    //Get the number of tasks accepted
      tasks = wx.getStorageSync('tasksAccepted')    //Get the tasks accepted
    }
    else if(pwT == 3){
      wT = wx.getStorageSync('wT')
      tasks = wx.getStorageSync('tasksAccepted')    //Get the tasks accepted
    }
    else if(pwT == 4){
      wT = wx.getStorageSync('wT')
      tasks = wx.getStorageSync('tasksDone')    //Get the tasks completed
    }
    for (var j = 0; j < 4; j++) {     //Find the submitter informations
      if (tasks.submitter[wT] == usersInfo.name[j]) {
        fields_value[0] = usersInfo.name[j];
        fields_value[1] = usersInfo.wechat[j];
        fields_value[2] = usersInfo.email[j];
        fields_value[3] = usersInfo.tel[j];
        this.setData({      //Set the data for the view layer
          fields_value: fields_value
        })
      }
    }
  }
})