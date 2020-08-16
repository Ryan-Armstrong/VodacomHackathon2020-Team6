// Get the global app instance
const app = getApp();

Page({
  data: {
    tagData: [
      { date: '2020-08-14', tag: 'Returning mortgage', tagColor: 5 },
      { date: '2020-08-28', tag: 'Provident fund', tagColor: 2 },
    ],
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    thumb: '../../assets/vodalogo.png',
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
