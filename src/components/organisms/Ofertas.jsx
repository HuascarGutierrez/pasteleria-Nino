import React from 'react'
import "./styles/Fliper.css"
import "./styles/styles.css"
import CardPromo from '../molecules/CardPromo'
import { ofertas } from '../../assets/OfertasAPI'

<<<<<<< HEAD
{/*import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';*/}

// Import Swiper styles
import CardPromo from '../molecules/CardPromo'
import { ofertas } from '../../assets/OfertasAPI'

=======
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
>>>>>>> 87105899216a0ed6eab3df851227560f112ea0bc

// import required modules
import { Pagination } from 'swiper/modules';



function Ofertas() {
  return (
    <>
      <section className='cardfliper'>
        <h3 className='titleh3'>Las mejores ofertas</h3>
        <div>
        <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
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

export default Ofertas

/*





import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import CardPromo from '../molecules/CardPromo'
import { ofertas } from '../../assets/OfertasAPI'


// import required modules
import { Pagination } from 'swiper/modules';

function Ofertas() {
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

export default Ofertas

 return (
    <section className='container'>
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
        places.map(place=>{
          return(
            
      <SwiperSlide><Card places={place}/></SwiperSlide>
    
          )
        }

        )
      }
    </Swiper>
    </section>
    
  )

*/