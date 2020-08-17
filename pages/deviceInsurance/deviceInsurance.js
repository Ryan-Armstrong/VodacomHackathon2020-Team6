const app = getApp();

Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    deviceInsurance: {},
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
    this.data.deviceInsurance = app.user.deviceInsurance;
    this.data.user.policies = app.user.policies;
    this.data.leng = [...Array(this.data.deviceInsurance.devices.models.length).keys()]
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
    app.user.deviceInsurance.devices.dependents.push(e.detail.value.__unknown_for_control_1);
    app.user.deviceInsurance.devices.models.push({id: app.user.deviceInsurance.devices.models.length, model: e.detail.value.__unknown_for_control_2});
    app.user.deviceInsurance.devices.numbers.push(e.detail.value.__unknown_for_control_3);
    my.navigateTo({
      url: '../deviceInsurance/deviceInsurance'
    });
  },
  formAddReset: function() {
    console.log('form has a reset event')
    
  },
  formRemoveSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
    this.data.deviceInsurance.devices.dependents.splice(e.detail.value["radio-group"], 1)
    this.data.deviceInsurance.devices.models.splice(e.detail.value["radio-group"], 1)
    this.data.deviceInsurance.devices.numbers.splice(e.detail.value["radio-group"], 1)
    
    my.navigateTo({
      url: '../deviceInsurance/deviceInsurance'
    });
  },
  formRemoveReset: function() {
    
    console.log('form has a reset event')
  },
  onCompInsurance: function(e) {
    app.user.policies.push('deviceInsurance');
    app.user.monthlyCost = app.user.monthlyCost + 20;
    my.reLaunch({
      url: '../landing/landing'
    });
    app.user.deviceInsurance.startDate = Date();
  },
  onAccidentDamage: function(e) {
    app.user.policies.push('deviceInsurance');
    app.user.monthlyCost = app.user.monthlyCost + 20;
    my.reLaunch({
      url: '../landing/landing'
    });
    app.user.deviceInsurance.startDate = Date();
  },
  onSpecifiedInsuredExtras: function(e) {
    app.user.policies.push('deviceInsurance');
    app.user.monthlyCost = app.user.monthlyCost + 80;
    my.reLaunch({
      url: '../landing/landing'
    });
    app.user.deviceInsurance.startDate = Date();
  }
});
