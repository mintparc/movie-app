import React from 'react'
import YouTube from 'react-youtube';
import './Modal.css'
import './ModalPortal'
import ModalPortal from './ModalPortal';

function Modal({ open, close, videoId }) {
  const opts = {
    width: '100%',
    height: '450px',
    playerVars: {
      autoplay: 1
    }
  }

  return(
    <ModalPortal elementId="modal">
      <div className={ open ? 'modal modal--open' : 'modal'} onClick={close}>
        { open? (
          <section onClick={(e) => e.stopPropagation()}>
            <YouTube videoId={ videoId } opts={opts}/>
            <button className="close" onClick={close}>close</button>
          </section>
        ) : null }
      </div>
    </ModalPortal>
  )
}

export default Modal