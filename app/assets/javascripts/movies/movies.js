imdb.factory('movies', [
  '$http',
  function($http){
    var x = {}
    
    x.search = function(input){
      alert(input)
    }
    
    
    return x
  }
])