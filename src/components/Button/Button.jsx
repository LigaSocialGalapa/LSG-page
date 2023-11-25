import './Button.css'

export function Button ({ text, onclick, type }) {
  return (

    <button typeof={type} className='button' onClick={onclick}>{text}</button>

  )
}
