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
            path: '/level1/',
            url: 'pages/level1.html',
        },
      ],
  });
var mainView = app.views.create('.view-main')


