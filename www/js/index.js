var app = new Framework7({

  // App root element
  el: '#app',
  // ... other parameters

  routes: [
    {
      path: '/',
      url: 'index.html',
    },
    {
      path: '/settings/',
      url: 'pages/settings.html',
      scripts: 'js/game.js/'
    },
    {
      path: '/level/',
      url: 'pages/level.html',
    },
    {
      path: '/howtoplay/',
      url: 'pages/howtoplay.html',
    },
    {
      path: '/finish/',
      url: 'pages/finish.html',
    },
  ],
});
var mainView = app.views.create('.view-main');

