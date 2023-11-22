import React from 'react';
import './styles/Buttons.css'

function Buttons() {
  const less = './icons/menu/less.svg';
  const more = './icons/menu/more.svg';
  return (
    <>
      <div className='botones'>
        <a><img src={less}></img></a>
        <p>00</p>
        <a><img src={more}></img></a>
      </div>
    </>
  )
}

export default Buttons