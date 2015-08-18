var imdb = angular.module('imdb', ['templates', 'ui.router'])

imdb.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('movies', {
      url: '/movies',
      templateUrl: 'movies/_movies.html',
      controller: 'MovieCtrl'
    })

  $urlRouterProvider.otherwise('movies');
}])