imdb.factory('movies', [
  '$http',
  function($http){
    var x = {}
    
    x.search = function(input){
      return $http.post("/movie_search", {search: input})
      .success(function(data) {
        console.log(data)
        return data
      })
    }
    
    x.compareMovies = function(movie1, movie2) {
      return $http.post("/compare_movies", {movie1: movie1, movie2: movie2})
      .success(function(data) {
        return data
      })
    }
    
    
    return x
  }
])