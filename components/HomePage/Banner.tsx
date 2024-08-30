'use client'

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image1 from '@/assets/images/banner/banner_1.png';

function Banner() {

  return (
    <section className="m-auto mt-[-1px] w-full">
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image src={Image1} alt="banner-nho-02-2048x841" width={1920} height={400} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image1} alt="banner-nho-02-2048x841" width={1920} height={400} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image1} alt="banner-nho-02-2048x841" width={1920} height={400} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image1} alt="banner-nho-02-2048x841" width={1920} height={400} className="w-full h-full" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner