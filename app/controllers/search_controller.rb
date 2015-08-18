class SearchController < ApplicationController
  
  def movie_search
    movie = Search.movie_info(params[:search])
    cast = movie.cast_members_characters[0..9]
    year = movie.year
    render :json => {cast: cast, year: year}
  end
  
  def compare_movies
    movie1 = params[:movie1]
    movie2 = params[:movie2]
    render :json => Search.compare_casts(movie1, movie2)
  end
  
  def movie_options
    movie_input = params[:movie]
    movies = Search.imdb(movie_input)
    movie_options = {}
    movies.movies[0..10].each do |movie|
      movie_options[movie.title] = {}
      movie_options[movie.title][:name] = movie.title
      movie_options[movie.title][:year] = movie.year
    end
    render :json => movie_options
  end
end
