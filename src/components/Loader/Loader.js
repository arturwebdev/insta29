import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div className='Loader'>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader