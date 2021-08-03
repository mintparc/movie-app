import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie({ title, summary, poster, genres }) {
  return (
    <div className="movies_movie">
      <img src={poster} alt={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <ul className="movie_genres">{genres.slice(0, 3).map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  ) 
}

Movie.prototypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie