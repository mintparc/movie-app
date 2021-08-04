import React from 'react'
import PropTypes from 'prop-types'
import './Main.css'

function Main({ id, title, summary, poster, bg }) {
  return (
    <div className="movies_main" style={{ 
      backgroundImage: `url( ${bg} )` 
    }}>
      <div className="main_gradient"></div>
      <img className="main_poster" src={poster} alt={title} />
      <h3 className="main_title">{title}</h3>
      <p className="main_summary">{summary}</p>
    </div>
  ) 
}

Main.prototypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
}

export default Main