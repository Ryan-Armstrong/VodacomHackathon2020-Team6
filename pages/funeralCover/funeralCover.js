const app = getApp();

Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    funeralCover: {},
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
    this.data.funeralCover = app.user.funeralCover;
    this.data.user.policies = app.user.policies;
    this.data.leng = [...Array(this.data.funeralCover.dependents.length).keys()]
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
    
    app.user.funeralCover.dependents.push(e.detail.value.__unknown_for_control_1);
    app.user.funeralCover.cover.push(e.detail.value.__unknown_for_control_2);
    app.user.funeralCover.age.push(e.detail.value.__unknown_for_control_3);
    my.navigateTo({
      url: '../funeralCover/funeralCover'
    });
  },
  formAddReset: function() {
    console.log('form has a reset event')
    
  },
  formRemoveSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
    this.data.funeralCover.dependents.splice(e.detail.value["radio-group"], 1)
    this.data.funeralCover.cover.splice(e.detail.value["radio-group"], 1)
    this.data.funeralCover.age.splice(e.detail.value["radio-group"], 1)
    
    my.navigateTo({
      url: '../funeralCover/funeralCover'
    });
  },
  formRemoveReset: function() {
    
    console.log('form has a reset event')
  },
  onFamilyFuneral: function(e) {
    app.user.policies.push('funeralCover');
    app.user.monthlyCost = app.user.monthlyCost + 20;
    app.user.funeralCover.startDate = Date();
    my.reLaunch({
      url: '../landing/landing'
    });
  },
  onCover4U: function(e) {
    app.user.policies.push('funeralCover');
    app.user.monthlyCost = app.user.monthlyCost + 20;
    app.user.funeralCover.startDate = Date();
    my.reLaunch({
      url: '../landing/landing'
    });
  },
  onCover4UFamily: function(e) {
    app.user.policies.push('funeralCover');
    app.user.monthlyCost = app.user.monthlyCost + 80;
    app.user.funeralCover.startDate = Date();
    my.reLaunch({
      url: '../landing/landing'
    });
  }
});
