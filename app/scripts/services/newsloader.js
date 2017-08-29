'use strict';

/**
 * @ngdoc service
 * @name news101App.newsLoader
 * @description
 * # newsLoader
 * Service in the news101App.
 */
angular.module('news101App')
  .service('newsLoader', function ($http) {
    var service = this;

    service.getNews = function()
    {
      return $http.get('/datas/news.json').then(function(response)
      {
        return response.data;
      });
    };

  });
