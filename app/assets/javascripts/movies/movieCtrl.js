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
      .then(function(response) {
        $scope.crossCast = response.data
      })
    }
    
    $scope.movie1Options = function() {
      movies.movieOptions($scope.movie1)
      .then(function(response) {
        $scope.movie1Options = response.data
      })
    }
    
    // $scope.setMovie1 = function(id) {
      // $scope.movie1Input = id;
    // }

  }
])