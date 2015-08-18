imdb.controller('MovieCtrl', [
  '$scope',
  'movies',
  function($scope, movies) {
    $scope.movies = movies;
    $scope.searchMovie = function() {
      movies.search($scope.movie_input)
    }
  }
])