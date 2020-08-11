Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
  },
  onLoad() {},
  
  onDeviceInsuranceCardClick: function(ev) {
    my.navigateTo({ url: '../deviceInsurance/deviceInsurance' });
    },
  onFuneralCoverCardClick: function(ev) {
    my.navigateTo({ url: '../funeralCover/funeralCover' });
    },
  onLifeCoverCardClick: function(ev) {
    my.navigateTo({ url: '../lifeCover/lifeCover' });
    },
  onLegalCoverCardClick: function(ev) {
    my.navigateTo({ url: '../legalCover/legalCover' });
    },
  
  onHeroAssistCardClick: function(ev) {
     my.navigateTo({ url: '../legalCover/legalCover' });
  },
  onDialATeacherCardClick: function(ev) {
    my.navigateTo({ url: '../dialATeacher/dialATeacher' });
    },
});
