import React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { section } from 'framer-motion/client';

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
   <section className="py-10 bg-gray-100">
   <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-8">
          <h3 className="bg-amber-600 hover:bg-pink-600 text-white px-6 py-3 rounded-3xl text-xl">
          Parallax Animation Effects
          </h3>
        </div>
       <marquee>
       <div className="flex flex-wrap justify-center gap-6">
          {/* Each image with animation */}
          {["layer1", "layer2", "layer4", "layer5", "layer6"].map((layer, index) => (
            <motion.img
              key={index}
              className="w-[150px] md:w-[200px] h-[200px] md:h-[250px] object-cover rounded-2xl shadow-lg"
              src={`/images/${layer}.png`}
              alt="Layer"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}/>
          ))}
      </div>
      </marquee>
      </div>
    </section>
    <section2>
      <div>
        
      </div>
    </section2>
    </>
  
  );
 };

 export default HomeComponents;