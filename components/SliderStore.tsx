'use client';

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";

const ListHonors = [
  {
    id: 1,
    src: '/honors/bac2.webp',
    path: 'https://www.tiktok.com/@giadinhmeommay/video/7385541212461174024',
    title: 'bạc',
    content: 'content1'
  },
  {
    id: 2,
    src: '/honors/dong.webp',
    path: 'https://www.tiktok.com/@ngathuduong204/video/7385551513113906450?_r=1&_t=8nZxWoUVKZU',
    title: 'đồng',
    content: 'content2'
  },
  {
    id: 3,
    src: '/honors/vang.webp',
    path: '#',
    title: 'vàng',
    content: 'vàng'
  },
  {
    id: 4,
    src: '/honors/bac2.webp',
    path: 'https://www.tiktok.com/@giadinhmeommay/video/7385541212461174024',
    title: 'bạc',
    content: 'bạc'
  },
  {
    id: 5,
    src: '/honors/dong.webp',
    path: 'https://www.tiktok.com/@ngathuduong204/video/7385551513113906450?_r=1&_t=8nZxWoUVKZU',
    title: 'đồng',
    content: 'đồng'
  },
  {
    id: 6,
    src: '/honors/vang.webp',
    path: '#',
    title: 'vàng',
    content: 'vàng'
  }
]

function SliderStore() {
  const [indexSlider, setIndexSlider] = useState(0);
  return (
    <div className="max-w-6xl m-auto px-4 mb-8">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[ Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          setIndexSlider(swiper.realIndex);
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
      >
        {ListHonors.map((feedback, index) => (
          <SwiperSlide key={feedback.id} className="py-20">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Link href={feedback.path} target='_blank'>
                  <Image src={feedback.src} alt={feedback.title} width={293} height={264} className={`rounded-2xl duration-500 ${((indexSlider + 1) === ListHonors.length ? 0 : (indexSlider + 1)) === index ? 'scale-150' : ''}`} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <p className="text-[#065691] font-semibold italic">{ListHonors[((indexSlider + 1) === ListHonors.length ? 0 : (indexSlider + 1))].title}</p>
      </div>
    </div>
  )
}

export default SliderStore