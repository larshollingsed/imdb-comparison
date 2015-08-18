class Search < ActiveRecord::Base
  
  def self.imdb(string)
    Imdb::Search.new(string)
  end
  
  def self.movies(id)
    Imdb::Movie.new(id)
  end
  
  def self.movie_info(string)
    Imdb::Movie.new(Imdb::Search.new(string).movies.first.id)
  end
end
