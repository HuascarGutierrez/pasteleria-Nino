import React from 'react'

function Info(props) {
    const info = props.info
  return (
    <>
        <div>
            <h2>{info.title}</h2>
            <p>{info.available}</p>
        </div>
    </>
  )
}

export default Info