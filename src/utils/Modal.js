import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

function Modal({ open, close }) {
  return(
    <div className={ open ? 'openModal' : 'closeModal'} onClick={close}>
      { open? (
        <section onClick={(e) => e.stopPropagation()}>
          <button className="close" onClick={close}>close</button>
        </section>
      ) : null }
    </div>
  )
}

Modal.prototypes = {
  open: PropTypes.boolean,
  close: PropTypes.boolean,
}


export default Modal