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
        centeredSlides={true}
        coverflowEffect={{
          depth: 100,
          modifier: 2.5,
          rotate: 0,
          stretch: 0,
        }}
        effect='coverflow'
        grabCursor={true} 
        loop={true} 
        modules={[EffectCoverflow, Navigation, Pagination]} 
        navigation={true}        
        pagination={{ clickable: true}}       
        slidesPerView={'auto'}  
        spaceBetween={30}
      >
        {
          images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img alt={`${image.title}`} className='w-[700px] h-[700px] mx-auto' src={`${image?.image}`} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  );
};