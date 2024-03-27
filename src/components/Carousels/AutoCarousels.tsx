import * as React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import logo from '../../assets/logo_technopartner.png';

SwiperCore.use([Autoplay]);

export default function AutoCarousels({ banners }: { banners: string[] }) {
  const swiperRef = React.useRef<null | SwiperRef>(null);

  React.useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      ref={swiperRef}
      centeredSlides
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
    >
      {banners && banners.map((banner) => (
        <SwiperSlide className="w-full h-80" key={banner}>
          <div className=" w-full h-full center">
            <img
              src={banner ?? logo}
              alt="Logo Technopartner"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}

    </Swiper>

  );
}
