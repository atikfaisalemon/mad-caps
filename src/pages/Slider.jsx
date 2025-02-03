// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
const Slider = () => {
  return (
    <>
      <div className="pt-16 ">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        >
          <SwiperSlide>
            <img src="/imgs/Yellow/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/Mokmol-polo/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/Denim-Audi/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/Converse/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/Chira-5/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/Chira-3/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/Chira-4/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/Chira-1/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/Chira-2/1.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
