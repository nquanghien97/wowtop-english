'use client'

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

function Banner() {

  return (
    <section className="m-auto mt-[-1px] w-full mb-8">
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image src="/bg12.jpg" alt="banner-nho-02-2048x841" width={1920} height={400} className="w-full max-h-[620px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/bg12.jpg" alt="banner-nho-02-2048x841" width={1920} height={400} className="w-full max-h-[620px]" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner