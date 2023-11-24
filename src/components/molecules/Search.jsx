import React from 'react'
import "./styles/Search.css"

function Search() {
  return (
    <>
    <div className='Buscador'>
        <input type="text" placeholder='Encuentra tu antojo'/>
        <a href=""><img src="/icons/lupa.svg" alt="" /></a>
    </div>
    </>
  )
}

export default Search