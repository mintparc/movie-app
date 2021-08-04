import React from 'react'
import './Skeleton.css'

function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton_main">
        <div className="skeleton_main_poster"></div>
        <p className="skeleton_main_title"></p>
        <p className="skeleton_main_summary"></p>
      </div>
      <div className="skeleton_movie">
        {Array(20).fill('').map((value, index) => (
          <div className="skeleton_movies" key={index}>
            <div className="skeleton_movies_img"></div>
            <div className="skeleton_movies_data">
              <p className="skeleton_movies_title"></p>
              <p className="skeleton_movies_genres"></p>
              <p className="skeleton_movies_summary"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) 
}

export default Skeleton