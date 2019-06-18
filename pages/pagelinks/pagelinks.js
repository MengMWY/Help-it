// pages/pagelinks/pagelinks.js

Page({
  data: {
    src_icon: '../../../../../img/icon.png',
    page_title: 'Volunteering opportunities'
  },

  bindUni: function() {
    var nUniJob = event.target.dataset.nUniJob
    wx.setStorage({
      key: 'nUniJob',
      data: nUniJob,
    })
    wx.navigateTo({
      url: '../../pagelinks/viewlink/viewlinkUni',
    })
  },

  bindOrg: function() {
    var nOrgJob = event.target.dataset.nOrgJob
    wx.setStorage({
      key: 'nOrgJob',
      data: nOrgJob,
    })
    wx.navigateTo({
      url: '../../pagelinks/viewlink/viewlinkOrg',
    })
  }
})