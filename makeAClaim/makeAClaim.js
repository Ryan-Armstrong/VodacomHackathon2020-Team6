const app = getApp();

Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    arrDeviceIndex: '',
    arrCoverIndex: '',
    coverSelection: '',
    deviceSelection: '',
    index: 0,
    user:{
      claim:
      {
        device: '',
        date: ''
      }
    }
  },
  bindObjPickerChangeCover(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      arrCoverIndex: e.detail.value,
      coverSelection: this.data.user.policies[e.detail.value]
    });
  },
  bindObjPickerChangeDevice(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      arrDeviceIndex: e.detail.value,
      deviceSelection: this.data.user.deviceInsurance.devices.models[e.detail.value].model
    });
  },
  onLoad() {
    this.data.user.policies = app.user.policies;
    this.data.user.heroAssistance = app.user.heroAssistance;
    this.data.user.deviceInsurance = app.user.deviceInsurance;
    this.data.user.funeralCover = app.user.funeralCover;
    this.data.user.lifeCover = app.user.lifeCover;
    this.data.user.legalCover = app.user.legalCover;
  },
  formSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
    this.data.deviceSelection = this.data.user.deviceInsurance.devices.models[e.detail.value.__unknown_for_control_2].model;
    app.user.claim.device = this.data.deviceSelection;
    app.user.claim.owner = this.data.user.deviceInsurance.devices.dependents[e.detail.value.__unknown_for_control_2];
    app.user.claim.description = e.detail.value.__unknown_for_control_1;
    my.navigateTo({
      url: '../confirmClaim/confirmClaim'
    });
  },
  formReset: function() {
    console.log('form has a reset event')
  },
  bindKeyInput: function(e) {
    
    console.log('form has a submit event, carrying data ', e.detail.value)
  },
  contactConsultantFromFuneralCover: function(e) {
    
  },
  contactConsultantFromLifeCover: function(e) {
    
  },
  contactConsultantFromLegalCover: function(e) {
    
  },
});
