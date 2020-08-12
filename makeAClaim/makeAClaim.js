const app = getApp();

Page({
  data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Landing Page', url: '../../landing/landing' },
      { text: 'Other Landing Page', url: '../../landing/landing' },
    ],
    objectArray: [
      {
        id: 0,
        name: 'Samsung S10',
      },
      {
        id: 1,
        name: 'iPhone X',
      },
      {
        id: 2,
        name: 'Redmi Mi10',
      },
      {
        id: 3,
        name: 'Huawei P11',
      },
    ],
    arrIndex: 0,
    index: 0,
    selection: ''
  },
  bindObjPickerChange(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },
  onLoad() {},
  formSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
    this.data.selection = this.data.objectArray[e.detail.value.__unknown_for_control_1].name;
    app.claim.device = this.data.selection;
    my.navigateTo({
      url: '../confirmClaim/confirmClaim'
    });
  },
  formReset: function() {
    console.log('form has a reset event')
  }
});
