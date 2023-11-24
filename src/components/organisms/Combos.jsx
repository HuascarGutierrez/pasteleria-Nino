import React from 'react'
import CardPromo from '../molecules/CardPromo'
import { ofertas } from '../../assets/OfertasAPI'
import "./styles/Fliper.css"
import "./styles/styles.css"

<<<<<<< HEAD
{/*import { Swiper, SwiperSlide } from 'swiper/react';
=======
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
>>>>>>> 87105899216a0ed6eab3df851227560f112ea0bc

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
<<<<<<< HEAD
*/}
=======
>>>>>>> 87105899216a0ed6eab3df851227560f112ea0bc

function Combos() {
  return (
    <>
      <section>
      <h3 className='titleh3'>Combos Disponibles</h3>
      <div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {
          ofertas.map(ofer=>{
            return(
              <SwiperSlide>
              <CardPromo ofertas={ofer}/>
              </SwiperSlide>
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

{
          ofertas.map(ofer=>{
            return(
              <CardPromo ofertas={ofer}/>
            )
          })
        }




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