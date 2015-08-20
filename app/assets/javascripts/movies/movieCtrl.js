imdb.controller('MovieCtrl', [
  '$scope',
  'movies',
  function($scope, movies) {
    $scope.movies = movies;
    $scope.movie = {};
    $scope.working = false;
    $scope.movie1Button = false;
    $scope.movie2Button = false;
    
    $scope.compareMovies = function() {
      movies.compareMovies($scope.movie1Id, $scope.movie2Id)
      .then(function(response) {
        $scope.crossCast = response.data
        $scope.working = false;
      })
    }
    
    $scope.movie1Search = function() {
      movies.movieOptions($scope.movie1)
      .then(function(response) {
        $scope.movie1Options = response.data;
        $scope.movie1Button = false;
      })
    }
    
    $scope.chooseMovie1 = function(movie) {
      $scope.movie1Choice = movie.name;
      $scope.movie1Id = movie.id
    }

    $scope.movie2Search = function() {
      movies.movieOptions($scope.movie2)
      .then(function(response) {
        $scope.movie2Options = response.data;
        $scope.movie2Button = false;
      })
    }

    $scope.chooseMovie2 = function(movie) {
      $scope.movie2Choice = movie.name;
      $scope.movie2Id = movie.id
    }
  }
])