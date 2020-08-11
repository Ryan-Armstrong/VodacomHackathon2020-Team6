const app = getApp();

Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    device: '',
    modalOpened: false,
  },
  onLoad() {
    this.device = app.claim.device;
    this.setData({device: app.claim.device});
  },
  openModal() {
    this.setData({
      modalOpened: true,
    });
  },
  onModalClick() {
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
