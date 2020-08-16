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
    owner: '',
    description: '',
    index: 0,
    user:{
      claim:
      {
        device: '',
        date: ''
      }
    },
    modalOpened: false
  },

  onLoad() {
    this.data.deviceSelection = app.user.claim.device;
    this.data.owner = app.user.claim.owner;
    this.data.description = app.user.claim.description;
  },
  openModal() {
    this.setData({
      modalOpened: true,
    });
  },
  onModalClick() {
    app.user.claim.date = Date();
    app.user.claims.push(app.user.claim)
    app.user.claim.date = '';
    app.user.claim.device = '';
    app.user.claim.owner = '';
    app.user.claim.description = '';
    this.setData({
      modalOpened: false,
    });
    my.navigateTo({
      url: '../landing/landing'
    });
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
  },
  formSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
    // Some api call here to submit
    this.openModal();
  },
  formReset: function() {
    console.log('form has a reset event')
    my.navigateBack();
  },
});
