import {EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Carousel = ({images}) => {
  return (
    <section className='py-8'>
      <Swiper    
        modules={[EffectCoverflow, Navigation, Pagination]} 
        effect='coverflow'
        centeredSlides={true}
        grabCursor={true} 
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        slidesPerView={'auto'}  
        navigation={true}        
        loop={true} 
        pagination={{ clickable: true}}       
      >
        {
          images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={`${image?.image}`} alt={`${image.title}`} className='w-[700px] h-[700px] mx-auto'/>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  );
};