imdb.controller('MovieCtrl', [
  '$scope',
  'movies',
  function($scope, movies) {
    $scope.movies = movies;
    $scope.movie = {};
    $scope.searchMovie = function() {
      movies.search($scope.movie_input)
      .then(function(stuff){
        console.log(stuff)
        $scope.movie = stuff.data
        $scope.year = stuff.data.year
      })
    }
  }
])