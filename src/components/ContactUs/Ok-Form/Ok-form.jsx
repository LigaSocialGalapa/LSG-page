import { useState } from 'react'
import './Ok-form.css'

export function OkForm ({ onClose }) {
  const [isClosed, setIsClosed] = useState(false)

  const handleClose = () => {
    setIsClosed(true)
    onClose()
  }

  if (isClosed) {
    return null // Render nothing if the container is closed
  }
  return (
    <div className='container-ok'>
      <div className='container-ok-text'>
        <div>
          <span className='close-icon' onClick={handleClose}>&times;</span>
        </div>
        <h3 className='title-form'>Thank you for your message</h3>
        <p>I will contact you as soon as possible</p>

      </div>

    </div>
  )
}
