import SliderStore from '@/components/SliderStore'
import Image from 'next/image'
import React from 'react'

function Store() {
  return (
    <div className="my-8">
      <div className="max-w-4xl m-auto">
        <div>
          <Image src="/asset_4.webp" alt="dang-ky-tro-thanh-dai-ly" width={1920} height={1080} />
        </div>
        <div className="relative mt-4">
          <Image src="/asset_2.png" alt="asset_2.png" width={890} height={110} />
          <div className="uppercase absolute top-[56%] left-[54%] -translate-x-1/2 -translate-y-1/2 text-[40px] w-full text-center font-bold text-[#065691]">Vinh danh đại lý quý II/2024</div>
        </div>
        <SliderStore />
      </div>
    </div>
  )
}

export default Store