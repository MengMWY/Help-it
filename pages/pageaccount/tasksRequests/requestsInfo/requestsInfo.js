// pages/pageaccount/tasksRequests/requestsInfo/requestsInfo.js

Page({
  data: {
    src_icon: '../../../../img/icon.png',
    page_title: 'Requests',
    fields: ['Name:', 'WeChat ID:', 'Email:', 'Telephone:'],
    fields_value: ['YunWei', 'chaos----faith', 'hyw990814@icloud.com', '13621835907']
  },

  bindConfirmReq: function() {
    var wT = wx.getStorageSync('wT')
    var tasks = { id: [], active: [], date: [], title: [], description: [], duration: [], submitter: [], nreq: [] }
    tasks = wx.getStorageSync('tasksSubmitted')
    tasks.nreq[wT] = 0
    wx.setStorage({
      key: 'tasksSubmitted',
      data: tasks,
    })

    wx.switchTab({
      url: '../../pageaccount',
    })
  }
})