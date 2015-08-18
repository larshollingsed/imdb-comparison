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
end
