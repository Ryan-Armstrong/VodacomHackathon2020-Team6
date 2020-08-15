const app = getApp();

Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    legalCover: {},
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
    this.data.legalCover = app.user.legalCover;
    this.data.user.policies = app.user.policies;
    this.data.leng = [...Array(this.data.legalCover.dependents.length).keys()]
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
    app.user.legalCover.dependents.push(e.detail.value.__unknown_for_control_1);
    app.user.legalCover.cover.push(e.detail.value.__unknown_for_control_2);
    app.user.legalCover.age.push(e.detail.value.__unknown_for_control_3);
    my.navigateTo({
      url: '../legalCover/legalCover'
    });
  },
  formAddReset: function() {
    console.log('form has a reset event')
    
  },
  formRemoveSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
    this.data.legalCover.dependents.splice(e.detail.value["radio-group"], 1)
    this.data.legalCover.cover.splice(e.detail.value["radio-group"], 1)
    this.data.legalCover.age.splice(e.detail.value["radio-group"], 1)
    
    my.navigateTo({
      url: '../legalCover/legalCover'
    });
  },
  formRemoveReset: function() {
    
    console.log('form has a reset event')
  }
});
