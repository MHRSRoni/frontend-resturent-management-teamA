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
import aboutUs from "../assets/images/about-img.jpg";

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
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={aboutUs} alt="" />
            </div>
            <div className="col">
              <h2>About Us</h2>
              <p>Proident qui et qui aliquip aliquip anim consectetur pariatur et deserunt anim ipsum qui culpa. Lorem cillum labore nisi consectetur velit ea tempor amet nulla labore cupidatat proident. Proident laboris aliquip laboris nisi in. Duis minim magna nostrud minim fugiat duis eu ad consequat ad. Eiusmod elit non velit laborum aliqua nostrud qui duis nulla ea consequat consectetur elit culpa. Officia exercitation id minim eu nisi in.</p>
              <br />
              <p>Non ex enim dolor ipsum duis fugiat. Elit mollit reprehenderit occaecat voluptate cupidatat enim enim fugiat ipsum quis labore elit nulla. Qui culpa cupidatat velit in incididunt cillum laboris. Elit mollit dolor magna anim dolore mollit sunt dolor sunt elit. Esse qui excepteur nostrud aliqua voluptate ad ea dolor ipsum fugiat cillum eu eu aute. Cillum esse est mollit aute duis sit excepteur id quis qui eiusmod labore dolor. Ullamco laboris mollit nostrud consectetur fugiat proident dolor elit magna.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Chefs- Section */}
      <Chef />

      {/* Footer- Section */}
    </>
  );
};

export default HomePage;
