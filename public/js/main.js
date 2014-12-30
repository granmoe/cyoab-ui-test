require.config({
  baseUrl:'/js/',
  paths: {
    jquery: 'libs/jquery-1.11.2.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    text: 'libs/text',
    dust: 'libs/dust-full.min',
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    dust: {
      exports: 'dust'
    }
  }
});

require(
  ['backbone', 'views/app'], 
	function(Backbone, AppView) {
    var appView = new AppView();
});