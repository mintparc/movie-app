import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import './Movie.css'
import FillHeart from './../../assets/fill-heart.svg';
import EmptyHeart from './../../assets/empty-heart.svg';

function Movie({ id, title, summary, poster, genres, handleModalOpen }) {
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
    <Fragment>
      <div className="card-movie">
        <div className="card-movie__trailer">
          <button onClick={handleModalOpen}>▶︎ Watch Trailer</button>
        </div>
        <img className="card-movie__poster" src={poster} alt={title} />
        <div className="card-movie__data">
          <img className="card-movie__heart" id={id} src={favorite.img} onClick={favorite.onclick} alt="heart"></img>
          <h3 className="card-movie__title">{title}</h3>
          <ul className="card-movie__genres">{genres.slice(0, 3).map((genre, index) => 
            <li key={index} className="card-movie__genre">{genre}</li>)}
          </ul>
          <p className="card-movie__summary">{summary}</p>
        </div>
      </div>
    </Fragment>
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