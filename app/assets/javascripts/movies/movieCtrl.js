imdb.controller('MovieCtrl', [
  '$scope',
  'movies',
  function($scope, movies) {
    $scope.movies = movies;
    $scope.movie = {};
    $scope.working = true;

    // $scope.searchMovie = function() {
    //   movies.search($scope.movie_input)
    //   .then(function(stuff){
    //     console.log(stuff)
    //     $scope.movie = stuff.data
    //     $scope.year = stuff.data.year
    //   })
    // }
    
    $scope.compareMovies = function() {
      movies.compareMovies($scope.movie1Id, $scope.movie2Id)
      .then(function(response) {
        $scope.crossCast = response.data
        $scope.working = true;
      })
    }
    
    $scope.movie1Options = function() {
      movies.movieOptions($scope.movie1)
      .then(function(response) {
        $scope.movie1Options = response.data
      })
    }
    
    $scope.chooseMovie1 = function(movie) {
      $scope.movie1Choice = movie.name;
      $scope.movie1Id = movie.id
    }

    $scope.movie2Options = function() {
      movies.movieOptions($scope.movie2)
      .then(function(response) {
        $scope.movie2Options = response.data
      })
    }

    $scope.chooseMovie2 = function(movie) {
      $scope.movie2Choice = movie.name;
      $scope.movie2Id = movie.id
    }
  }
])