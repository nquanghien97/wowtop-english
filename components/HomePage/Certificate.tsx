'use client'

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const ListImages = [
  {
    id: 1,
    src: '/certificate-image/c1.webp',
    text: 'Dairy Manufacturer Licence'
  },
  {
    id: 2,
    src: '/certificate-image/c2.webp',
    text: 'Australian Made Accreditation'
  },
  {
    id: 3,
    src: '/certificate-image/c3.webp',
    text: 'Australian Certified Organice'
  },
  {
    id: 4,
    src: '/certificate-image/c4.webp',
    text: 'Kosher Certificate'
  },
  {
    id: 5,
    src: '/certificate-image/c5.webp',
    text: 'ICCV Halal Accreditation'
  },
  {
    id: 6,
    src: '/certificate-image/c6.webp',
    text: 'COFCC Organic Product Certificate'
  }
]
function Certificate() {
  return (
    <section className="max-w-4xl m-auto mb-8 max-md:px-4">
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
        {ListImages.map(item => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full border-4 border-black rounded-2xl flex justify-center items-center p-8 bg-[#69dbe1] max-md:flex-col">
              <Image src={item.src} alt="banner-nho-02-2048x841" width={460} height={620} className="rounded-2xl" />
              <div className="flex items-center justify-center max-md:mt-2">
                <p className="text-3xl text-[#003D63] text-center">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Certificate