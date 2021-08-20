import React, { Fragment } from 'react'
import './Skeleton.css'
import SkeletonHeart from './../../assets/skeleton-heart.svg';


function Skeleton() {
  return (
    <Fragment>
      <section className="main-skeleton">
        <div className="main-skeleton__poster"></div>
        <p className="main-skeleton__title"></p>
        <p className="main-skeleton__summary"></p>
      </section>
      <section className="list-skeleton">
        {Array(20).fill('').map((value, index) => (
          <div className="card-skeleton" key={index}>
            <div className="card-skeleton__poster"></div>
            <div className="card-skeleton__data">
              <img className="card-skeleton__heart" src={SkeletonHeart} alt="heart"></img>
              <p className="card-skeleton__title"></p>
              <p className="card-skeleton__genres"></p>
              <p className="card-skeleton__summary"></p>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  ) 
}

export default Skeleton