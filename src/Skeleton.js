import React from 'react'
import './Skeleton.css'

function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton_img"></div>
      <div className="skeleton_data">
        <p className="skeleton_title"></p>
        <p className="skeleton_genres"></p>
        <p className="skeleton_summary"></p>
      </div>
    </div>
  ) 
}

export default Skeleton