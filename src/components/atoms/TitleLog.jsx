import React from 'react'

import "./styles/TitleLog.css"

function TitleLog(props) {
  return (
    <>
        <div className='title'>
            <p>
                {props.title}
            </p>
        </div>
    </>
  )
}

export default TitleLog