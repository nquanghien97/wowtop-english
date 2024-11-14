import React from 'react'
import Banner from './Banner'
import Image from 'next/image'

function page() {
  return (
    <main>
      <Banner />
      <section>
        <div className="max-w-5xl m-auto">
          <h2 className="bg-text-1 text-center text-[5vw] md:text-4xl uppercase font-bold py-1">Nhận xuất quà tặng</h2>
          <h3 className="bg-text-1 text-center text-[4vw] md:text-3xl uppercase font-bold py-1">Sữa cao wowtop</h3>
          <p className="bg-text-1 text-center text-[3vw] md:text-2xl uppercase py-1">Nhập khẩu nguyên lon từ Newzealand</p>
          <div className="bg-[url('/asset_15.png')] bg-[length:100%_100%] h-[70px] flex justify-center items-center mb-2">
            <p className="flex items-center text-[#84571B]">lên đến <span className="bg-text-1 text-[5vw] md:text-4xl font-bold uppercase ml-8 py-2">11,250,000 VNĐ/ Suất</span></p>
          </div>
          <p className="text-[#84571B] text-justify mb-4">
            WowTop là sữa hàng đầu tại New Zealand về tăng chiều cao, WowTop mới có mặt tại Việt Nam và chuẩn bị ra mắt. Hiện tại chưa có nhiều người tại Việt Nam có cơ hội trải nghiệm sản phẩm, nên chúng tôi mang đến chương trình đặc biệt này để tạo cơ hội cho các mẹ cùng bé được trải nghiệm dòng sản phẩm tuyệt vời, từ đó cùng chúng tôi lan toả về WowTop - sữa tăng chiều cao thật sự hiệu quả để nhiều người cùng biết tới.
          </p>
          <div className="flex justify-center mb-4">
            <Image src="/asset_18.png" alt="asset_18" width={588} height={490} />
          </div>
          <div className="flex w-full gap-8 relative mb-8 max-md:flex-col items-center justify-center">
            <div className="flex-1 bg-[url('/asset_23.png')] bg-cover w-full">
              <div className="text-center mt-8 mb-4">
                <span className="bg-number text-[75px] font-bold">5</span>
                <span className="text-[#84571B] font-bold">Suất</span>
              </div>
              <div className="bg-[url('/asset_22.png')] bg-[length:100%_100%] min-h-[100px] flex justify-center items-center">
                <span className="text-white font-bold">Giá trị 11,250,000 vnđ/ suất</span>
              </div>
              <div>
                <Image src="/asset_19.png" alt="asset_19" width={349} height={269} className="m-auto" />
              </div>
            </div>
            <div className="flex-1 bg-[url('/asset_23.png')] bg-cover w-full">
              <div className="text-center mt-8 mb-4">
                <span className="bg-number text-[75px] font-bold">995</span>
                <span className="text-[#84571B] font-bold">Suất</span>
              </div>
              <div className="bg-[url('/asset_22.png')] bg-[length:100%_100%] min-h-[100px] flex justify-center items-center">
                <span className="text-white font-bold">Giá trị 11,250,000 vnđ/ suất</span>
              </div>
              <div className="w-full">
                <Image src="/asset_21.png" alt="asset_21" width={171} height={258} className="m-auto" />
              </div>
            </div>
            <Image src="/PT.webp" alt="PT" width={151} height={145} className="absolute bottom-[-30px] right-0" />
          </div>
          <p className="text-[#84571B] text-[calc(1.25rem+0.9vw)] font-bold text-center">Tổng giá trị lên đến 1,3 tỷ VNĐ</p>
          <div>
            <p>Đăng ký dùng thử</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page