const app = getApp();

Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    heroAssistance: {},
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
    this.data.heroAssistance = app.user.heroAssistance;
    this.data.user.policies = app.user.policies;
  },
  onHeroAssist: function(e) {
    app.user.policies.push('heroAssistance');
    app.user.monthlyCost = app.user.monthlyCost + 69;
    app.user.heroAssistance.startDate = Date();
    my.reLaunch({
      url: '../landing/landing'
    });
  },
});
