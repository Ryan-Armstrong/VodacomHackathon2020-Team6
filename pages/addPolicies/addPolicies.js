const app = getApp();

Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    user:
    {
      policies: [],
      devices: []
    },
  },
  onLoad() {
    this.data.user.policies = app.user.policies;
    this.data.user.devices = app.user.devices;
  },
});
