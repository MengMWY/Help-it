//app.js
App({
  onLaunch: function () {
    //Login
    wx.login({
      success: res => {
        console.log("Success Login");
      },
      fail: res => {
        console.log("Fail Login");
      }
    })

    //Tasks
    var newTask = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [] }

    newTask.id[0] = 0
    newTask.active[0] = 1
    newTask.date[0] = '2019/05/26'
    newTask.title[0] = 'Borrow textbook'
    newTask.description[0] = 'I need a textbook of Digital Design for today at 13:30 in the classroom B404'
    newTask.duration[0] = '1'
    newTask.submitter[0] = 'Christelle Elsa'

    newTask.id[1] = 1
    newTask.active[1] = 1
    newTask.date[1] = '2019/05/25'
    newTask.title[1] = 'Borrow a charger'
    newTask.description[1] = 'Hi everyone, could someone borrow me a charger, for two hours each day for two days, for a Acer notebook with the following specifications: 19V 2.37A and 3mm x 1.1mm?'
    newTask.duration[1] = '2'
    newTask.submitter[1] = 'WenYong'

    newTask.id[2] = 2
    newTask.active[2] = 1
    newTask.date[2] = '2019/05/27'
    newTask.title[2] = 'Forgot my jacket'
    newTask.description[2] = 'I forgot my black jacket in the classroom B404 this morning at 11.45. Could someone take it and gave me back tomorrow afternoon?'
    newTask.duration[2] = '1'
    newTask.submitter[2] = 'Shi Lei'

    newTask.id[3] = 3
    newTask.active[3] = 1
    newTask.date[3] = '2019/06/12'
    newTask.title[3] = 'Forgot umbrella'
    newTask.description[3] = 'I forgot my umbrella in the classroom A204 this afternoon'
    newTask.duration[3] = '1'
    newTask.submitter[3] = 'YunWei'

    newTask.id[4] = 4
    newTask.active[4] = 1
    newTask.date[4] = '2019/06/11'
    newTask.title[4] = 'Lost student card'
    newTask.description[4] = 'I lost my student card this morning probably in the canteen'
    newTask.duration[4] = '9'
    newTask.submitter[4] = 'YunWei'

    wx.setStorage({       //Store tasks
      key: 'tasks',
      data: newTask,
    })
    wx.setStorage({     //Number of tasks
      key: 'nT',
      data: 4,
    })

    //Submitted tasks
    var tasksSubmitted = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [], nreq: [] }

    tasksSubmitted.id[0] = 1
    tasksSubmitted.active[0] = 1
    tasksSubmitted.date[0] = '2019/06/12'
    tasksSubmitted.title[0] = 'Borrow a charger'
    tasksSubmitted.description[0] = 'Hi everyone, could someone borrow me a charger, for two hours each day for two days, for a Acer notebook with the following specifications: 19V 2.37A and 3mm x 1.1mm?'
    tasksSubmitted.duration[0] = '2'
    tasksSubmitted.submitter[0] = 'WenYong'
    tasksSubmitted.nreq[0] = 1

    tasksSubmitted.id[1] = 5
    tasksSubmitted.active[1] = 0
    tasksSubmitted.date[1] = '2019/06/10'
    tasksSubmitted.title[1] = 'Borrow book'
    tasksSubmitted.description[1] = 'Could someone borrow to me the book "..."'
    tasksSubmitted.duration[1] = '5'
    tasksSubmitted.submitter[1] = 'WenYong'
    tasksSubmitted.nreq[1] = 0

    tasksSubmitted.id[2] = 6
    tasksSubmitted.active[2] = 0
    tasksSubmitted.date[2] = '2019/06/12'
    tasksSubmitted.title[2] = 'Forgot USB'
    tasksSubmitted.description[2] = 'I forgot my USB in the classroom B403'
    tasksSubmitted.duration[2] = '1'
    tasksSubmitted.submitter[2] = 'WenYong'
    tasksSubmitted.nreq[2] = 0

    wx.setStorage({       //Store tasks personal submitted
      key: 'tasksSubmitted',
      data: tasksSubmitted,
    })
    wx.setStorage({       //Number of personal task submitted
      key: 'nST',
      data: 2,
    })

    //Accepted tasks
    var tasksAccepted = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [] }

    tasksAccepted.id[0] = 7
    tasksAccepted.active[0] = 2
    tasksAccepted.date[0] = '2019/06/11'
    tasksAccepted.title[0] = 'Lost bag'
    tasksAccepted.description[0] = 'I lost my bag this morning probably in the canteen'
    tasksAccepted.duration[0] = '9'
    tasksAccepted.submitter[0] = 'YunWei'

    wx.setStorage({       //Store tasks personal accepted
      key: 'tasksAccepted',
      data: tasksAccepted,
    })
    wx.setStorage({        //Number of personal task accepted
      key: 'nAT',
      data: 0,
    })

    //Tasks completed
    var tasksDone = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [] }

    tasksDone.id[0] = 8
    tasksDone.active[0] = 1
    tasksDone.date[0] = '2019/05/26'
    tasksDone.title[0] = 'Borrow textbook'
    tasksDone.description[0] = 'I need a textbook of Digital Design for today at 13:30 in the classroom B404'
    tasksDone.duration[0] = '1'
    tasksDone.submitter[0] = 'Christelle Elsa'

    tasksDone.id[1] = 9
    tasksDone.active[1] = 1
    tasksDone.date[1] = '2019/05/25'
    tasksDone.title[1] = 'Borrow a charger'
    tasksDone.description[1] = 'Hi everyone, could someone borrow me a charger, for two hours each day for two days, for a Acer notebook with the following specifications: 19V 2.37A and 3mm x 1.1mm?'
    tasksDone.duration[1] = '2'
    tasksDone.submitter[1] = 'Shi Lei'

    tasksDone.id[2] = 10
    tasksDone.active[2] = 1
    tasksDone.date[2] = '2019/05/27'
    tasksDone.title[2] = 'Forgot my jacket'
    tasksDone.description[2] = 'I forgot my black jacket in the classroom B404 this morning at 11.45. Could someone take it and gave me back tomorrow afternoon?'
    tasksDone.duration[2] = '1'
    tasksDone.submitter[2] = 'Shi Lei'

    tasksDone.id[3] = 11
    tasksDone.active[3] = 1
    tasksDone.date[3] = '2019/06/12'
    tasksDone.title[3] = 'Forgot umbrella'
    tasksDone.description[3] = 'I forgot my umbrella in the classroom A204 this afternoon'
    tasksDone.duration[3] = '1'
    tasksDone.submitter[3] = 'YunWei'

    tasksDone.id[4] = 12
    tasksDone.active[4] = 1
    tasksDone.date[4] = '2019/06/11'
    tasksDone.title[4] = 'Lost student card'
    tasksDone.description[4] = 'I lost my student card this morning probably in the canteen'
    tasksDone.duration[4] = '9'
    tasksDone.submitter[4] = 'YunWei'

    wx.setStorage({       //Store tasks personal done
      key: 'tasksDone',
      data: tasksDone,
    })
    wx.setStorage({        //Number of personal task done
      key: 'nDT',
      data: 4,
    })

    wx.setStorage({     //ID counter
      key: 'nID',
      data: 12,
    })

    wx.setStorage({
      key: 'UserName',
      data: 'WenYong',
    })

    var usersInfo = {
      name: ['WenYong', 'Christelle Elsa', 'Shi Lei', 'YunWei'],
      wechat: ['Meng_WenYong', 'Christelle_elsa', 'Rae825', 'chaos----faith'],
      email: ['mwy.mengwenyong@gmail.com', 'christelle.elsa@gmail.com', '892023557@qq.com', 'hyw990814@icloud.com'],
      tel: ['13621835904', '13621835905', '13621835906', '13621835907']
    }

    wx.setStorage({
      key: 'usersInfo',
      data: usersInfo,
    })
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
  
  }
})