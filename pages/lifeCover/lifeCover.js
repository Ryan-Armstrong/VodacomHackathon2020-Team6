const app = getApp();

Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    lifeCover: {},
    user:
    {
      policies: [],
      devices: []
    },
    modalAddOpened: false,
    modalRemoveOpened: false,
    leng: []
  },
  onLoad() {
    this.data.lifeCover = app.user.lifeCover;
    this.data.user.policies = app.user.policies;
    this.data.leng = [...Array(this.data.lifeCover.dependents.length).keys()]
  },
  openAddModal() {
    this.setData({
      modalAddOpened: true,
    });
  },
  openRemoveModal() {
    this.setData({
      modalRemoveOpened: true,
    });
  },
  onModalAddClick() {
    this.setData({
      modalAddOpened: false,
    });
  },
  onModalAddClose() {
    this.setData({
      modalAddOpened: false,
    });
  },
  onModalRemoveClick: function(e) {
    
    this.setData({
      modalRemoveOpened: false,
    });
  },
  onModalRemoveClose() {
    this.setData({
      modalRemoveOpened: false,
    });
  },
  formAddSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
    
    app.user.lifeCover.dependents.push(e.detail.value.__unknown_for_control_1);
    app.user.lifeCover.cover.push(e.detail.value.__unknown_for_control_2);
    app.user.lifeCover.age.push(e.detail.value.__unknown_for_control_3);
    my.navigateTo({
      url: '../lifeCover/lifeCover'
    });
  },
  formAddReset: function() {
    console.log('form has a reset event')
    
  },
  formRemoveSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
    this.data.lifeCover.dependents.splice(e.detail.value["radio-group"], 1)
    this.data.lifeCover.cover.splice(e.detail.value["radio-group"], 1)
    this.data.lifeCover.age.splice(e.detail.value["radio-group"], 1)
    
    my.navigateTo({
      url: '../lifeCover/lifeCover'
    });
  },
  formRemoveReset: function() {
    
    console.log('form has a reset event')
  },
  onLifeCover: function(e) {
    app.user.policies.push('lifeCover');
    app.user.monthlyCost = app.user.monthlyCost + 80;
    app.user.lifeCover.startDate = Date();
    my.reLaunch({
      url: '../landing/landing'
    });
  }
});
