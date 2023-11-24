import React from 'react'
import CardPromo from '../molecules/CardPromo'
import { ofertas } from '../../assets/OfertasAPI'
import "./styles/Fliper.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


function Combos() {
  return (
    <>
      <section className='cardfliper'>
      <h3 className='titleh3'>Combos Disponibles</h3>
      <div>
        <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
          ofertas.map(ofer=>{
            return(
              <CardPromo ofertas={ofer}/>
            )
          })
        }
    </Swiper> 
      </div>
        
      </section>
    </>
  )
}

export default Combos



/*
import React from 'react'
import CardPromo from '../molecules/CardPromo'
import { ofertas } from '../../assets/OfertasAPI'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Combos() {
  return (
    <>
      <section>
        <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
          ofertas.map(ofer=>{
            return(
              <CardPromo ofertas={ofer}/>
            )
          })
        }
    </Swiper> 
      </section>
    </>
  )
}

export default Combos
*/