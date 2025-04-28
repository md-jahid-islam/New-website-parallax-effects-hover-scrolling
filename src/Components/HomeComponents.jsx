import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeComponents = () => {
  return (
    <>
      <nav>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop 
          className="banner-swiper">
          <SwiperSlide>
            <div className="banner-slide">
              <img src="/images/banner.jpg" alt="Banner 1" />
              <div className="overlay">
                <div className="button-container">
                  <button className="button-3d">Button 1</button>
                  <button className="button-3d">Button 2</button>
                  <button className="button-3d">Button 3</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide">
              <img src="/images/banner2.jpg" alt="Banner 2" />
              <div className="overlay">
                <div className="button-container">
                  <button className="button-3d">Another Button 1</button>
                  <button className="button-3d">Another Button 2</button>
                  <button className="button-3d">Another Button 3</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide">
              <img src="/images/banner3.jpg" alt="Banner 3" />
              <div className="overlay">
                <div className="button-container">
                  <button className="button-3d">Yet Another 1</button>
                  <button className="button-3d">Yet Another 2</button>
                  <button className="button-3d">Yet Another 3</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide">
              <img src="/images/banners.jpg" alt="Banner 4" />
              <div className="overlay">
                <div className="button-container">
                  <button className="button-3d">Last Set 1</button>
                  <button className="button-3d">Last Set 2</button>
                  <button className="button-3d">Last Set 3</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </nav>
      <section>
        <>
        <div className="container">
        <div>
        <h3> hello world </h3>
        </div>

        </div>
        </>
      </section>
    </>
  );
 };

 export default HomeComponents;