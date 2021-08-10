import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Movie.css'
import FillHeart from './../../assets/fill-heart.svg';
import EmptyHeart from './../../assets/empty-heart.svg';

function Movie({ id, title, summary, poster, genres }) {
  let favoriteMovies = []

  const saveFavorite = () => {
    localStorage.setItem('favorites', JSON.stringify(favoriteMovies))
  }
  
  const handleFavoriteDelete = (event) => {
    const target = event.target
    savedFavorites()
    favoriteMovies = favoriteMovies.filter(movie => movie !== target.id)
    saveFavorite()
    setFavorite({
      img: EmptyHeart,
      onclick: handleFavorite
    })
  }
  
  const handleFavorite = (event) => {
    const target = event.target
    savedFavorites()
    favoriteMovies.push(target.id)
    saveFavorite()
    setFavorite({
      img: FillHeart,
      onclick: handleFavoriteDelete
    })
  }

  const savedFavorites = () => {
    const savedFavoriteMovies = localStorage.getItem('favorites')
    if (savedFavoriteMovies !== null) {
      const parsedFavoriteMovies = JSON.parse(savedFavoriteMovies)
      favoriteMovies = parsedFavoriteMovies
    }
  }

  savedFavorites()
  
  const [ favorite, setFavorite ] = useState({
    img: favoriteMovies.includes(id) ? FillHeart : EmptyHeart,
    onclick: favoriteMovies.includes(id) ? handleFavoriteDelete : handleFavorite
  })

  return (
    <div className="movies_movie">
      <img className="movie_poster" src={poster} alt={title} />
      <div className="movie_data">
        <img className="movie_heart" id={id} src={favorite.img} onClick={favorite.onclick}></img>
        <h3 className="movie_title">{title}</h3>
        <ul className="movie_genres">{genres.slice(0, 3).map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  ) 
}

Movie.prototypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie