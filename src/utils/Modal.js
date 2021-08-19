import React from 'react'
import YouTube from 'react-youtube';
import './Modal.css'

function Modal({ open, close, videoId }) {
  const opts = {
    width: '100%',
    height: '800',
    playerVars: {
      autoplay: 1
    }
  }

  return(
    <div className={ open ? 'openModal' : 'closeModal'} onClick={close}>
      { open? (
        <section onClick={(e) => e.stopPropagation()}>
          <YouTube videoId={ videoId } opts={opts}/>
          <button className="close" onClick={close}>close</button>
        </section>
      ) : null }
    </div>
  )
}

export default Modal