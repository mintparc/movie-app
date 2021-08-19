import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Movie.css'
import FillHeart from './../../assets/fill-heart.svg';
import EmptyHeart from './../../assets/empty-heart.svg';
import Modal from './../../utils/Modal'

function Movie({ id, title, summary, poster, genres, videoId }) {
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

  const [ modal, setModal ] = useState(false)
  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="movies_movie">
      <div className="movie_trailer">
        <button onClick={openModal}>▶︎ Watch Trailer</button>
      </div>
      <img className="movie_poster" src={poster} alt={title} />
      <Modal open={modal} close={closeModal} videoId={videoId}/>
      <div className="movie_data">
        <img className="movie_heart" id={id} src={favorite.img} onClick={favorite.onclick} alt="heart"></img>
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