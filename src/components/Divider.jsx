import React from 'react'
import "../styles/Divider.css";

function Divider({children}) {
  return (
    <div className='dividerWrap'>
        <div className='dividerLine'></div>
        <p>{children}</p>
        <div className='dividerLine'></div>
        
    </div>
  )
}

export default Divider