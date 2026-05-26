"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // ফ্যাড ইফেক্টের জন্য

export default function Banner() {
  return (
    <div className="w-full h-[400px] mt-8 overflow-hidden rounded-3xl shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={'fade'} 
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper h-[40vh]"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative flex items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-900">
          <div className="text-center text-white px-6 pt-4 z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 animate__animated animate__fadeInUp">
              Upgrade Your Skills Today 🚀
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">Learn from industry experts and scale your career.</p>
            <button className="btn btn-outline btn-primary text-white border-2 hover:scale-105 transition-transform">Get Started</button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative flex items-center justify-center bg-gradient-to-r from-emerald-700 to-teal-900">
          <div className="text-center text-white px-6 pt-4 z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Build Real World Projects 💻</h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">Create something amazing with hands-on learning.</p>
            <button className="btn btn-outline btn-secondary text-white border-2 hover:scale-105 transition-transform">Explore Courses</button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-900">
          <div className="text-center text-white px-6 pt-4 z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Join Our Global Community 🌍</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">Connect with developers and get mentorship.</p>
            <button className="btn btn-outline btn-accent text-white border-2 hover:scale-105 transition-transform">Join Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}