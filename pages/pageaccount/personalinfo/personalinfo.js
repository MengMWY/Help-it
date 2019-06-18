// pages/pageaccount/personalinfo/personalinfo.js

Page({
  data: {
    src_icon: '../../../img/icon.png',
    page_title: 'Personal informations',
    fields: ['Name:', 'Sex:', 'City:', 'University:', 'WeChat ID:', 'Email:', 'Telephone:'],
    field_values: ['WenYong Meng', 'M', 'Shanghai', 'Tongji University', 'WenYong_Meng', 'mwy.mengwenyong@gmail.com', '13621835904']
  },

  //Button event
  bindModify: function() {    //Modify personal information
    wx.navigateTo({       //Go to modify personal information page
      url: '../../pageaccount/personalinfo/modifyinfo/modifyinfo',
    })
  },

  //Button event
  bindDone: function() {    //Done
    wx.reLaunch({       //Go back to account menu
      url: '../../pageaccount/pageaccount',
    })
    
  }
})