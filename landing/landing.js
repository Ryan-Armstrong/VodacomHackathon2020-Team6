// Get the global app instance
const app = getApp();

Page({
  // Declare page data
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
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
  onItemClick(ev) {
    my.alert({
      content: `Click the ${ev.index} row`,
    });
  },
  // Listening lifecycle callback onLoad
  onLoad() {
    this.data.user.policies = app.user.policies;
    this.data.user.devices = app.user.devices;
  },
  // Listening lifecycle callback onShow
  onShow() {
    // Set global data to current page data
    this.setData({ todos: app.todos });
  },
  // Event handler
  onTodoChanged(e) {
    // Modify global data
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    }));
    this.setData({ todos: app.todos });
  },

  addTodo() {
    // Make a page jump
    my.navigateTo({ url: '../add-todo/add-todo' });
  },
  onMakeClaimCardClick: function(ev) {
    my.navigateTo({ url: '../makeAClaim/makeAClaim' });
    },
  onPoliciesCardClick: function(ev) {
    my.navigateTo({ url: '../policies/policies' });
    },
  onHeroAssistCardClick: function(ev) {
    // my.makePhoneCall({ number: '+27XXXXXXXXX' });
    my.alert({
      title: 'Call',
      content: 'This would make a call.',
      buttonText: 'Call'
    });
  },
  onDialATeacherCardClick: function(ev) {
    // my.makePhoneCall({ number: '+27XXXXXXXXX' }); 
    my.alert({
      title: 'Call',
      content: 'This would make a call.',
      buttonText: 'Call'
    });
  },
  onClickHomeIcon() {
    my.navigateTo({ url: '../landing/landing' });
  },
  onAccountCardClick() {
    my.navigateTo({ url: '../account/account' });
  }
});
