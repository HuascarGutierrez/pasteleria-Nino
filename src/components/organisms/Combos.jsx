import React from 'react'
import CardPromo from '../molecules/CardPromo'
import { ofertas } from '../../assets/OfertasAPI'
import "./styles/Fliper.css"
import "./styles/styles.css"
import { Link } from 'react-router-dom'

// Import Swiper React components
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
      <h3 className='titleh3'>Combos Disponibles</h3>
      <div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={-100}
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
                <Link to='/cake'>
                <CardPromo ofertas={ofer}/>
                </Link>
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