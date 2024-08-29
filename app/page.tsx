import Banner from '@/components/HomePage/Banner'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="my-4">
        <div className="max-w-6xl m-auto">
          <div className="flex flex-col items-center justify-center text-2xl md:text-[40px] uppercase text-center">
            <div>
              <p className="bg-[#065691] bg-clip-text text-transparent font-bold md:pt-4 pt-1">Giải pháp tăng trưởng chiều cao</p>
            </div>
            <div>
              <p className="md:pt-6 pt-1">
                <span className="bg-[#065691] bg-clip-text text-transparent">Toàn diện từ </span>
                <span className="py-2 px-4 bg-[#065691] rounded-md text-white">Australia</span>
              </p>
            </div>
          </div>
          <div className="relative text-xs max-md:hidden">
            <Image src="/bg-hop-sua.webp" alt="hop-sua" width={1200} height={900} />
            <div className="text-[#065691]">
              <p className="w-[190px] absolute xl:top-[140px] xl:left-[54px] md:top-[100px] md:left-12 top-[96px] left-11"><strong>OZ FARM</strong> là thương hiệu bản địa Úc với chất lượng sữa thuần khiết 100% từ bò chăn thả & ăn cỏ tự nhiên, vượt qua nhiều tiêu chuẩn khắt khe và đạt nhiều chứng nhận danh giá trên thế giới.</p>
              <p className="w-[190px] absolute xl:top-[112px] xl:right-[100px] sm:top-[30px] sm:right-[20px] lg:top-[72px] lg:right-[60px]"><strong>CBP 400mg & Canxi 800mg </strong>
                Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với Canxi hữu cơ và CBP tăng cường hoạt động của nguyên bào xương giúp hấp thu Canxi dễ dàng</p>
              <p className="lg:w-[204px] w-[160px] absolute xl:top-[360px] xl:right-6 md:top-[254px] md:right-[12px] top-[200px] right-[12px]"><strong>Axit Tổ yến + PS + DHA & ARA </strong>
                Phát triển trí não & hệ thần kinh, tăng cường khả năng ghi nhớ & học hỏi</p>
              <p className="w-[190px] absolute xl:bottom-[220px] xl:left-20 bottom-[180px] left-[80px]"><strong>Lutein </strong>
                Hỗ trợ phát triển thị lực, sáng mắt & bảo vệ mắt.</p>
              <p className="w-[190px] absolute xl:bottom-[230px] xl:right-20 bottom-[200px] right-0"><strong>Lactoferrin </strong> Là “lá chắn miễn dịch đầu tiên” của trẻ, giúp kháng khuẩn, kháng Virus và điều hòa miễn dịch</p>
            </div>
          </div>
          <div className="md:hidden">
            <div className="flex justify-center mt-2">
              <Image src="/bg-hop-sua-1.webp" alt="bg-hop-sua" width={215} height={290} />
            </div>
          </div>
        </div>
      </section>
      <section className="my-4">
        <div className="max-w-4xl m-auto">
          <div className="flex flex-col items-center justify-center text-3xl uppercase mb-8">
            <div>
              <p className="bg-[#065691] bg-clip-text text-transparent pt-2">Tăng chiều cao từ cấp độ nguyên bào xương*</p>
            </div>
            <div>
              <p className="bg-[#065691] bg-clip-text font-bold text-transparent pt-2">Cao hơn cả về chất lượng</p>
            </div>
          </div>
          <div className="mt-4 mb-14">
            <div className="border-[1px] border-black rounded-full px-8">
              <span className="relative top-[-15px] bg-[#e9fafb] rounded-full text-[#065691] inline-block px-3 py-2 text-center">(*) Nguyên bào xương xây dựng cấu trúc ma trận xương, dẫn các hạt Canxi và khoáng chất vào xương, từ đó tác động trực tiếp tới chất lượng xương và chiều cao tối đa của cơ thể.</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <div>
                {/* <Image src="/bg-hop-sua-1.webp" alt="bg-sua" width={215} height={290} /> */}
              </div>
              <div></div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
