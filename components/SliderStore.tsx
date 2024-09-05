'use client';

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";

const ListFeedbacks = [
  {
    id: 1,
    src: '/feedbacks/f1.jpg',
    path: 'https://www.tiktok.com/@giadinhmeommay/video/7385541212461174024',
    title: 'Gia đình mèo máy',
    content: 'Bé nhà mình trộm vía dạo này đi đâu cũng được mọi ng khen con cao lớn hơn, có da có thịt hơn, con ăn ngon ngủ ngon, ít khi ốm vặt mà mừng quá các mẹ ạ.'
  },
  {
    id: 2,
    src: '/feedbacks/f3.jpg',
    path: 'https://www.tiktok.com/@ngathuduong204/video/7385551513113906450?_r=1&_t=8nZxWoUVKZU',
    title: 'Chị Nga Thu Dương',
    content: 'Abbey nhà mình dùng sữa Oz Farm được vài tháng thì thấy chiều cao tăng đáng kể luôn, ít bệnh vặt, ăn ngon, ngủ ngoan ..  nên phải chia sẻ cho các ba mẹ liềnnnn'
  },
  {
    id: 3,
    src: '/feedbacks/f4.jpg',
    path: '#',
    title: 'Chị Nguyễn Thị Phượng',
    content: 'Con gái chị đã cao thêm 4cm sau 6 tháng uống đều đặn mỗi ngày 2 ly Oz Farm Kid+, ưng lắm'
  },
  {
    id: 4,
    src: '/feedbacks/f1.jpg',
    path: 'https://www.tiktok.com/@giadinhmeommay/video/7385541212461174024',
    title: 'Gia đình mèo máy',
    content: 'Bé nhà mình trộm vía dạo này đi đâu cũng được mọi ng khen con cao lớn hơn, có da có thịt hơn, con ăn ngon ngủ ngon, ít khi ốm vặt mà mừng quá các mẹ ạ.'
  },
  {
    id: 5,
    src: '/feedbacks/f3.jpg',
    path: 'https://www.tiktok.com/@ngathuduong204/video/7385551513113906450?_r=1&_t=8nZxWoUVKZU',
    title: 'Chị Nga Thu Dương',
    content: 'Abbey nhà mình dùng sữa Oz Farm được vài tháng thì thấy chiều cao tăng đáng kể luôn, ít bệnh vặt, ăn ngon, ngủ ngoan ..  nên phải chia sẻ cho các ba mẹ liềnnnn'
  },
  {
    id: 6,
    src: '/feedbacks/f4.jpg',
    path: '#',
    title: 'Chị Nguyễn Thị Phượng',
    content: 'Con gái chị đã cao thêm 4cm sau 6 tháng uống đều đặn mỗi ngày 2 ly Oz Farm Kid+, ưng lắm'
  }
]

function SliderStore() {
  const [indexSlider, setIndexSlider] = useState(0);
  console.log(indexSlider)
  return (
    <div className="max-w-6xl m-auto px-4 mb-8">
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          setIndexSlider(swiper.realIndex);
        }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
      >
        {ListFeedbacks.map((feedback, index) => (
          <SwiperSlide key={feedback.id}>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Link href={feedback.path} target='_blank'>
                  <Image src={feedback.src} alt={feedback.title} width={360} height={400} className={`rounded-2xl duration-500 ${((indexSlider + 1) === ListFeedbacks.length ? 0 : (indexSlider + 1)) === index ? 'scale-125' : ''}`} />
                </Link>
              </div>
              <div className="max-md:px-5">
                <div className="flex text-justify mb-4 min-h-[100px]">
                  <p>{feedback.content}</p>
                </div>
                <div className="mb-4">
                  <p className="text-[#135689] font-bold text-center">{feedback.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p>{ListFeedbacks[indexSlider].title}</p>
    </div>
  )
}

export default SliderStore