imdb.controller('MovieCtrl', [
  '$scope',
  'movies',
  function($scope, movies) {
    $scope.movies = movies;
    $scope.movie = {};

    // $scope.searchMovie = function() {
    //   movies.search($scope.movie_input)
    //   .then(function(stuff){
    //     console.log(stuff)
    //     $scope.movie = stuff.data
    //     $scope.year = stuff.data.year
    //   })
    // }
    
    $scope.compareMovies = function() {
      movies.compareMovies($scope.movie1, $scope.movie2)
      .then(function(stuff) {
        console.log(stuff)
        $scope.cross_cast = stuff.data
      })
    }

  }
])