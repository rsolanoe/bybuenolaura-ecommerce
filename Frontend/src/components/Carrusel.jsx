import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

const Carrusel = () => {
   return (
      
         <Carro
            pagination={{type: 'bullets'}}
            navigation={true}
            modules={[Navigation, Pagination]}
            speed={300}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
         >
            <SwiperSlide><p>Slide 2</p></SwiperSlide>
            <SwiperSlide><p>Slide 3</p></SwiperSlide>
            <SwiperSlide><p>Slide 4</p></SwiperSlide>
            
         </Carro>
      
   )
}


const Carro = styled(Swiper)`
   margin: 2rem auto;
   height: 70vh;
   width: 100vw;
   background-color: lightblue;
   
   .swiper-slide{
      display: flex;
      align-items: center;
      justify-content: center;
   }

   
`

export default Carrusel