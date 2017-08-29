'use strict';

/**
 * @ngdoc function
 * @name news101App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the news101App
 */
angular.module('news101App')
  .controller('MainCtrl', function (newsLoader) {
    var ctrl = this;
    ctrl.results = [];

    newsLoader.getNews().then(function(news)
    {
      ctrl.results = news;
    });
  });
