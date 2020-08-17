const app = getApp();

Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    dialATeacher: {},
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
    this.data.dialATeacher = app.user.dialATeacher;
    this.data.user.policies = app.user.policies;
  },
  onDialTeacher: function(e) {
    app.user.policies.push('dialATeacher');
    app.user.monthlyCost = app.user.monthlyCost + 46;
    app.user.dialATeacher.startDate = Date();
    my.reLaunch({
      url: '../landing/landing'
    });
  },
});
