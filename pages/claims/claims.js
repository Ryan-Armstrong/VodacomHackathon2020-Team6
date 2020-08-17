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
      devices: [],
      claims: []
    },
    leng: [],
  },
  onLoad() {
    this.data.user.policies = app.user.policies;
    this.data.user.devices = app.user.deviceInsurance.devices;
    this.data.user.claims = app.user.claims;
    this.data.leng = [...Array(this.data.user.claims.length).keys()];
    var dateArray = this.data.user.claims[0].date.split(' ');
    this.data.dateObj = dateArray[2] + ' ' + dateArray[1] + ' ' + dateArray[3];
  },
});
