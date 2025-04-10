import { testimonialCardDetails } from '@/lib/constants';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import { Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FrontCard from './FrontCard';

export default function TestimonialsCard() {
  const pagination = {
    clickable: true,
    renderBullet: function (_: unknown, className: string) {
      return `<span class="${className} custom-pagination-bullet"></span>`;
    },
  };

  return (
    <div className="sm:px-6 tablet:px-16 mt-8">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        pagination={pagination}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
          1440: { slidesPerView: 4, spaceBetween: 10 },
          1540: { slidesPerView: 5, spaceBetween: 10 },
        }}
        modules={[Pagination, Keyboard]}
        className="mySwiper h-[29rem]"
      >
        {testimonialCardDetails.map((data, dataIndex) => (
          <SwiperSlide key={dataIndex}>
            <div
              className="relative w-full h-full"
              style={{ perspective: '2000px' }}
            >
              <div className="relative transition-all duration-500 w-full h-full">
                <FrontCard data={data} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
