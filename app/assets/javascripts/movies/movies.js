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
    
    
    return x
  }
])