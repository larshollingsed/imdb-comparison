class Search < ActiveRecord::Base
  
  # Searches the IMDB API for a string(assuming a movie)
  def self.imdb(string)
    Imdb::Search.new(string)
  end
  
  # creates an Object from the Movie ID (via IMDB API)
  def self.movies(id)
    Imdb::Movie.new(id)
  end
  
  # uses a String to search for movie info from the IMDB API
  def self.movie_info(string)
    Search.movies(Search.imdb(string).movies.first.id)
  end
  
  # gets the cast for a given search string
  def self.movie_cast(string)
    movie = Search.movie_info(string)
    movie.cast_members_characters
  end
  
  
  
  # returns the cast members who were in both movies
  def self.compare_casts(movie1, movie2)
    movie1_cast_characters = Search.movie_cast(movie1)
    movie2_cast_characters = Search.movie_cast(movie2)
    movie1_cast = SearchHelper.imdb_to_hash(movie1_cast_characters)
    movie2_cast = SearchHelper.imdb_to_hash(movie2_cast_characters)    
    crossover = movie1_cast.keys & movie2_cast.keys
    crossover_characters = {}
    crossover.each do |actor|
      crossover_characters[actor] = [movie1_cast[actor], movie2_cast[actor]]
    end
    crossover_characters
  end
end
