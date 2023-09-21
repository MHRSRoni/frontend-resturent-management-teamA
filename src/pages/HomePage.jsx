import React from "react";
import Chef from "../components/chefs/Chef";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sliderImage1 from "../assets/images/slider-1.jpg";
import sliderImage2 from "../assets/images/slider-2.jpg";
import sliderImage3 from "../assets/images/slider-3.jpg";

import "./HomePage.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const HomePage = () => {
  return (
    <>
      {/* Hero-Section */}
      <div className="hero-section">
        <div className="container text-center">
          <div className="row">
            <div className="heading">
              <h1>
                Where every <span>flavour</span>
                <br /> tells a <span>story.</span>
              </h1>
              <p>Popular Items</p>
            </div>
          </div>
        </div>
        <div className="swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={sliderImage1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage3} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Deal- Section */}

      {/* About- Section */}

      {/* Chefs- Section */}
      <Chef />

      {/* Footer- Section */}
    </>
  );
};

export default HomePage;
