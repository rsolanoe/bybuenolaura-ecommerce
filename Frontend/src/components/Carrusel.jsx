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
            <SwiperSlide><img src='https://img.freepik.com/foto-gratis/alegre-mujer-cuarenta-anos-elegante-vestido-sombrero-panuelo-cuello-indica-distancia-espacio-copia-anuncia-que-algo-muestra-camino-al-centro-comercial-aislado-sobre-pared-marron_273609-53396.jpg?t=st=1650385943~exp=1650386543~hmac=fff5bf8161754d30f1253a8938e4ac0579295e739aa045cbf9f58d9407f19c7b&w=826'/></SwiperSlide>
            <SwiperSlide><p>Slide 2</p></SwiperSlide>
            <SwiperSlide><p>Slide 3</p></SwiperSlide>
            <SwiperSlide><p>Slide 4</p></SwiperSlide>
            
         </Carro>
      
   )
}


const Carro = styled(Swiper)`
   height: 100vh;
   width: 100%;
   background-color: lightblue;
   
   .swiper-slide{
      display: flex;
      align-items: center;
      justify-content: center;
   }

   img{
      width: 100%;
      height: 100%;
   }

   
`

export default Carrusel