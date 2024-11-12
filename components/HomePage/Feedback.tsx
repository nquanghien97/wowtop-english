'use client';

import Image from 'next/image'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import StarIcon from '@/assets/icons/StarIcon';

const ListFeedbacks = [
  {
    id: 1,
    src: '/feedbacks/f1.jpg',
    path: '#',
    title: 'Chị Hà Vy',
    content: 'Con gái mình trộm vía dạo này đi đâu cũng được mọi người khen cao lớn hơn, có da có thịt hơn, con tràn đầy năng lượng tham gia nhiều hoạt động ở trường.'
  },
  {
    id: 2,
    src: '/feedbacks/f2.jpg',
    path: '#',
    title: 'Chị Nga Phương',
    content: 'Hải Minh nhà mình dùng sữa Wowtop được vài tháng thì con cao vọt lên, con ít ốm vặt, ăn ngon, ngủ ngon,...nên phải chia sẻ cho các mẹ liền.'
  },
  {
    id: 3,
    src: '/feedbacks/f3.jpg',
    path: '#',
    title: 'Chị Dương Linh',
    content: 'Con mình uống Wowtop tăng thêm 5cm trong 3 tháng đấy, quá bất ngờ luôn. Giờ con thuộc top cao trong lớp và mới tham gia vào đội bóng rổ của trường.  '
  }
]
function Feedback() {
  return (
    <section>
      <div className="max-w-6xl m-auto px-4 mb-8">
        <div className="flex justify-center relative mb-8">
          <Image src="/asset_11_2.png" alt="/bg4.png" width={758} height={125} />
          <div className="absolute top-1 md:top-3">
            <p className="text-center uppercase text-lg md:text-3xl text-white font-bold">Bé uống WOWTOP</p>
          </div>
          <div className="absolute bottom-2 md:bottom-4">
            <p className="text-center uppercase text-xl md:text-3xl bg-text font-bold">Cao lớn vượt trội</p>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
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
          {ListFeedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Link href={feedback.path} target='_blank'>
                    <Image src={feedback.src} alt={feedback.title} width={360} height={400} className="rounded-2xl" />
                  </Link>
                </div>
                <div className="max-md:px-5">
                  <div className="flex text-justify mb-4 min-h-[100px]">
                    <p>{feedback.content}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-[#84571B] font-bold text-center">{feedback.title}</p>
                  </div>
                  <div className="flex justify-center">
                    <StarIcon width={20} height={20} fill='#FFD37B' />
                    <StarIcon width={20} height={20} fill='#FFD37B' />
                    <StarIcon width={20} height={20} fill='#FFD37B' />
                    <StarIcon width={20} height={20} fill='#FFD37B' />
                    <StarIcon width={20} height={20} fill='#FFD37B' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Feedback