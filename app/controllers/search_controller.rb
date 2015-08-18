class SearchController < ApplicationController
  
  def movie_search
    movie = Search.movie_info(params[:search])
    cast = movie.cast_members_characters[0..9]
    year = movie.year
    render :json => {cast: cast, year: year}
  end
end
