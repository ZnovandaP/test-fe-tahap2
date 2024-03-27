import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import logo from '../../assets/logo_technopartner.png';

export default function AutoCarousels({ banners }: { banners: string[] }) {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay, Pagination, Navigation]}
    >
      {banners && banners.map((banner) => (
        <SwiperSlide className="w-full h-80" key={banner}>
          <div className=" w-full h-full center">
            <img
              src={banner ?? logo}
              alt="Logo Technopartner"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
      ))}

    </Swiper>

  );
}
