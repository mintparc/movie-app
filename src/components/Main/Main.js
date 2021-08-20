import React from 'react'
import PropTypes from 'prop-types'
import './Main.css'

function Main({ title, summary, poster, bg }) {
  return (
    <div className="main-movie" style={{ 
      backgroundImage: `url( ${bg} )` 
    }}>
      <div className="main-movie__gradient"></div>
      <img className="main-movie__poster" src={poster} alt={title} />
      <h3 className="main-movie__title">{title}</h3>
      <p className="main-movie__summary">{summary}</p>
    </div>
  ) 
}

Main.prototypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
}

export default Main