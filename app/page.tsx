import Banner from '@/components/HomePage/Banner'
import Certificate from '@/components/HomePage/Certificate'
import Feedback from '@/components/HomePage/Feedback';
import FormOrder from '@/components/HomePage/FormOrder';
import { getNews } from '@/services/news';
import Image from 'next/image'
import Link from 'next/link';
import { NewsEntity } from '@/entities/news';
import Experience from '@/components/HomePage/Experience';

export default async function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <section className="md:h-[760px] h-[240px] bg-[url('/banner.png')] bg-[length:100%_100%]">
        <div className="max-w-6xl m-auto px-6 flex items-center h-full relative">
          <div className="max-w-[200px] md:max-w-[600px]">
            <p className="bg-text-blue uppercase py-4 font-bold md:text-5xl text-base mb-2">
              Giúp tăng chiều cao từ cấp độ nguyên bào
            </p>
            <Link href="/" className="header-bg px-6 py-2 md:text-2xl rounded-full uppercase text-white">
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-8 bg-[url('/nen-ct.webp')] bg-[length:100%_100%]">
        <div className="max-w-6xl m-auto relative">
          <Image src="/pt1.webp" alt="" width={230} height={200} className="absolute top-[-10%] left-[40px] max-md:hidden" />
          <Image src="/pt2.webp" alt="" width={120} height={120} className="absolute top-[20%] left-0 max-md:hidden" />
          <Image src="/PT.webp" alt="" width={150} height={150} className="absolute bottom-0 right-0 max-md:hidden" />
          <div className="flex flex-col items-center justify-center text-2xl md:text-[40px] uppercase text-center py-4">
            <div>
              <p className="bg-text bg-clip-text text-transparent font-bold md:pt-4 pt-1">Công thức tối ưu</p>
            </div>
            <div>
              <p className="md:pt-6 pt-1">
                <span className="bg-text bg-clip-text text-transparent">Cho </span>
                <span className="py-2 px-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 rounded-md text-white">Chiều cao vượt đỉnh</span>
              </p>
            </div>
          </div>
          <div className="relative text-xs max-md:hidden">
            <Image src="/tach.png" alt="hop-sua" width={1200} height={900} />
            <div className="text-[#84571B]">
              <p className="w-[240px] absolute xl:top-[60px] xl:left-[140px] md:top-[100px] md:left-12 top-[96px] left-11">
                Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP & CPP</strong> tăng cường hoạt động của nguyên bào xương, Hàm lượng Canxi cao hàng đầu (1200mg), tỷ lệ vàng Canxi : Photo = 1,4:1 kết hợp với D3K2 & khoáng chất·giúp hấp thu Canxi tối đa.
              </p>
              <p className="w-[190px] absolute xl:top-[60px] xl:right-[120px] sm:top-[30px] sm:right-[20px] lg:top-[72px] lg:right-[60px]">
                <strong>DHA và ARA </strong>
                giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh, phát triển thị lực & sáng mắt</p>
              <p className="lg:w-[204px] w-[160px] absolute xl:top-[320px] xl:right-16 md:top-[254px] md:right-[12px] top-[200px] right-[12px]">
                <strong>Lactoferrin & IgG </strong>
                tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.
              </p>
              <p className="w-[190px] absolute xl:bottom-[200px] xl:left-24 bottom-[180px] left-[80px]">
                <strong>OPO</strong> giúp hệ tiêu hóa vận hành tốt hơn, nhờ những tác động tích cực đến hệ sinh thái 100.000 tỷ vi khuẩn đường ruột. Đồng thời được bổ sung đặc biệt với lợi khuẩn Bifido-bacterium BB-12 và chất xơ (FOS+GOS).
              </p>
              <p className="w-[190px] absolute xl:bottom-[180px] xl:right-32 bottom-[200px] right-0">
                Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.
              </p>
            </div>
          </div>
          <div className="md:hidden text-xs">
            <div className="flex flex-col justify-center items-center mt-2 ">
              <Image src="/lonsua.webp" alt="bg-hop-sua" width={300} height={290} />
              <div className="flex flex-col px-2">
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/bong.webp" alt="bong" width={120} height={120} />
                    <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Cao hơn, chắc khỏe hơn từ cấp nguyên bào xương</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#84571B] font-semibold">
                    Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP</strong> (125 mg/100g) & <strong>CPP</strong> (571 mg/100g) tăng cường hoạt động của nguyên bào xương. Hàm lượng <strong>Canxi</strong> cao hàng đầu (1475 mg/100g), tỷ lệ vàng <strong>Canxi : Phospho</strong> = 1,8:1 kết hợp với D3K1 & khoáng chất·giúp hấp thu Canxi tối đa.
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/bong.webp" alt="bong" width={120} height={120} />
                    <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Tiêu hoá Tốt</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#84571B] font-semibold">
                    <strong>OPO</strong> giúp hệ tiêu hóa vận hành tốt hơn, nhờ những tác động tích cực đến hệ sinh thái 100.000 tỷ vi khuẩn đường ruột. Đồng thời được bổ sung đặc biệt với lợi khuẩn Bifido-bacterium BB-12 và chất xơ (FOS+GOS).
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/bong.webp" alt="bong" width={120} height={120} />
                    <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Cung cấp dinh dưỡng toàn diện</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#84571B] font-semibold">
                      Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/bong.webp" alt="bong" width={120} height={120} />
                    <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Phát triển trí não & sáng mắt</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#84571B] font-semibold">
                      <strong>DHA và ARA </strong>
                      giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh, phát triển thị lực & sáng mắt
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/bong.webp" alt="bong" width={120} height={120} />
                    <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Tăng sức đề kháng</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#84571B] font-semibold">
                      <strong>Lactoferrin & IgG </strong>
                      tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20 bg-[url('/pt-bg-yellow.webp')]">
        <div className="max-w-4xl m-auto">
          <div className="flex flex-col items-center justify-center text-2xl md:text-3xl uppercase mb-8 text-center">
            <div>
              <p className="bg-[#002A9E] bg-clip-text text-transparent pt-2">Tăng chiều cao từ cấp độ nguyên bào xương*</p>
            </div>
            <div>
              <p className="bg-[#002A9E] bg-clip-text font-bold text-transparent pt-2">Cao hơn cả về chất lượng</p>
            </div>
          </div>
          <div className="mt-4 mb-14 px-4">
            <div className="border-[1px] border-[#84571B] rounded-full px-8">
              <span className="relative top-[-15px] bg-[#e9fafb] text-xs md:text-base rounded-full text-[#84571B] font-semibold inline-block px-3 py-2 text-center">(*) Nguyên bào xương xây dựng cấu trúc ma trận xương, dẫn các hạt Canxi và khoáng chất vào xương, từ đó tác động trực tiếp tới chất lượng xương và chiều cao tối đa của cơ thể.</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex max-md:flex-col gap-10 px-4">
              <div className="md:w-1/2 bg-[url('/bg2f.png')] bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl">
                <Image src="/cbp.webp" alt="bg-sua" width={160} height={175} />
                <span className="text-[#135689]">
                  <strong>CBP </strong>
                  trong Wowtop có kích thước phân tử siêu nhỏ, <strong>30 Kilodalton (≈ 1/50 tỷ hạt Nano),</strong> dễ dàng len lỏi và kích thích Nguyên bào xương hoạt động hiệu quả hơn*
                </span>
              </div>
              <div className="md:w-1/2 bg-10-lit bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl">
                <Image src="/10l.webp" alt="bg-sua" width={320} height={175} />
                <span className="text-[#135689]">
                  <strong>CBP</strong> là thành phần quý hiếm bậc nhất ngành sữa. <strong>10 lít sữa non</strong> từ Bò ăn cỏ tự nhiên chỉ chiết xuất được <strong>4 gam CBP</strong>.
                </span>
              </div>
            </div>
            <div className="px-4 mt-10 md:mt-16">
              <div className="bg-[url('/bg2f.png')] bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl relative">
                <Image src="/xuong.webp" alt="bg-sua" width={215} height={290} className="mx-auto md:hidden" />
                <span className="w-full md:w-3/5 inline-block text-[#135689]">
                  <strong>CBP</strong> thúc đẩy <strong>nguyên bào xương</strong> sản sinh và hoạt động hiệu quả, hình thành ma trận xương, kích thích xương dài ra nhanh hơn. Ngoài ra, <strong>CBP</strong> còn giúp tăng mật độ xương, hấp thu <strong>Canxi</strong> cùng các dưỡng chất quan trọng như Sắt, Kẽm... tốt hơn, từ đó <strong>tăng chiều cao cả về lượng & chất.</strong>
                </span>
                <Image src="/xuong.webp" alt="bg-sua" width={276} height={276} className="mx-auto max-md:hidden absolute top-[-40px] right-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8 md:mb-20">
        <div className="max-w-6xl m-auto px-4">
          <div>
            <p className="bg-text text-center text-xl md:text-3xl uppercase">Chuyên gia new zealand <br /><strong>chia sẻ nguyên lý tăng chiều cao</strong><br /> từ cấp độ nguyên bào</p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 w-full">
              <iframe className="rounded-2xl w-full h-[315px]" src="https://www.youtube.com/embed/y9vlAFDEr7I?rel=0&showinfo=0&autoplay=1" />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-[#84571B] text-justify">Xương dài ra do quá trình <strong>cốt hóa</strong> sụn tăng trưởng thành xương. Hầu hết quá trình này do <strong>nguyên bào xương</strong> chịu trách nhiệm. Nguyên bào xương tạo ra ma tr ận xương (Khung nền xương) đồng thời tăng cường chuyển hóa, lắng đọng Canxi, Phospho để lấp đầy và làm cứng ma trận xương, giúp xương dài ra ở 2 đầu. <strong>Wowtop</strong> vừa bổ sung <strong>Canxi, Phospho, D3, K2</strong> làm nguyên liệu cho quá trình tạo xương, vừa chứa thành phần <strong>CBP</strong> kích thích nguyên bào xương phát triển, nhờ đó thúc đẩy mạnh mẽ quá trình cốt hóa ở 2 đầu xương, giúp <strong>tăng chiều cao cả về lượng và về chất.</strong></p>
              <Image src="/asset_11.png" alt='asset_11' width={400} height={1} className="mx-auto my-4" />
              <p className="text-[#84571B] mb-4"><strong>Chuyên gia tăng chiều cao David - viện dinh dưỡng New Zealand.</strong></p>
              <Link href="#" className="text-[#84571B] underline">Tìm hiểu ngay</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="md:mb-20">
        <div className="max-w-6xl m-auto md:px-4">
          <div className="mb-4">
            <h2 className="text-xl md:text-5xl bg-text py-4 font-bold uppercase text-center">Những sai lầm trong tăng chiều cao</h2>
          </div>
          <div className="p-3 bg-[#f6f0de] border-2 border-[#fcf2d9] rounded-2xl flex flex-wrap justify-center relative">
            <Image src="/PT.webp" alt="" width={175} height={175} className="absolute bottom-[-10%] left-[-10%] max-md:hidden" />
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h4.png" alt="h4" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Chỉ quan tâm cao về lượng</h4>
                <p className="text-[#002A9E]">
                  Chiều cao về centimet rất quan trọng, nhưng nếu Chất lượng xương không được đảm bảo, trẻ sẽ dễ bị loãng xương và các bệnh về xương khác. Wowtop giúp cao hơn từ nguyên bào xương, cải thiện chiều cao cả về lượng và chất.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h5.png" alt="h5" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Canxi, Khoáng chất là đủ</h4>
                <p className="text-[#002A9E]">
                  Chiều cao do khung xương quyết định. Canxi & khoáng chất chỉ là nguyên liệu cho xương hình thành. Cần có CBP, CPP thúc đẩy nguyên bào xương hoạt động, thu hút và hấp thụ tốt Canxi & khoáng chất thì khung xương mới dài hơn, chắc khỏe hơn.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h1.png" alt="h1" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Uống sữa là đủ để cao</h4>
                <p className="text-[#002A9E]">
                  Sữa là giải pháp dinh dưỡng tối ưu. Tuy nhiên vẫn cần kết hợp luyện tập & sinh hoạt để tăng chiều cao. Wowtop có đội ngũ Healthcoach đồng hành cùng con từ chế độ dinh dưỡng tới vận động để con đạt chiều cao tối đa.
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/5 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h3.png" alt="h3" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Tin rằng GEN quyết định chiều cao</h4>
                <p className="text-[#002A9E]">
                  GEN chỉ quyết định 23% Dinh dưỡng, luyện tập và chế độ sinh hoạt mới thực sự giúp con cao vượt trội.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h2.png" alt="h2" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Bỏ qua giai đoạn vàng</h4>
                <p className="text-[#002A9E]">
                  Giai đoạn 0 – 5 tuổi và giai đoạn trước dậy thì là các mốc tăng chiều cao quan trọng ở trẻ, cần được đặc biệt lưu ý và bổ sung dinh dưỡng tối đa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/dong-co-d-1.webp')] bg-[length:100%_100%] bg-center h-[1062px] relative max-md:hidden">
        <div className="max-w-6xl m-auto px-4">
          <div className="flex justify-center mb-4">
            <div className="bg-text2 flex px-12 py-4 text-4xl rounded-full">
              <h3 className="text-[#84571B] font-bold">Đăng kí dùng thử</h3>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl md:text-5xl text-[#002A9E] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between w-full mb-8">
              <div className="flex justify-center w-2/5">
                <Image src="/non-gmo.png" alt="non-gmo.png" width={400} height={120} />
              </div>
              <div className="mx-12 w-2/5 flex flex-col justify-center">
                <div className="flex justify-between w-full mb-4">
                  <Image src="/conbo_img_1.png" alt="conbo_img_1" width={100} height={45} />
                  <Image src="/conbo_img_2.png" alt="conbo_img_2" width={100} height={45} />
                  <Image src="/conbo_img_3.png" alt="conbo_img_3" width={100} height={45} />
                </div>
                <div>
                  <p className="text-center text-2xl font-semibold text-[white]">Nông trại bò sữa chuẩn Quốc tế</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center relative mb-24">
              <div>
                <Image src="/conbo_img_5.png" alt="conbo_img_5" width={434} height={252} />
              </div>
              <div className="absolute top-0 right-0">
                <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={467} height={382} />
              </div>
            </div>
            <div className="flex justify-center text-center flex-col mt-[48px] text-2xl text-[#f0c561]">
              <p>BIẾN MÓN QUÀ KỲ DIỆU CỦA THIÊN NHIÊN TRỞ THÀNH SẢN PHẨM HỮU CƠ</p>
              <p>TUYỆT VỜI CHO THẾ HỆ TƯƠNG LAI CAO LỚN VÀ TỐT ĐẸP HƠN</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 bg-[url('/bgr-co-m.webp')] bg-center bg-[length:100%_100%] h-[820px] relative md:hidden">
        <div className="mb-8">
          <h2 className="text-xl md:text-5xl text-[#002A9E] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
        </div>
        <div className="flex justify-center w-full flex-col">
          <div className="mb-12 mx-12">
            <div className="flex justify-between w-full mb-4">
              <Image src="/conbo_img_1.png" alt="conbo_img_1" width={75} height={45} />
              <Image src="/conbo_img_2.png" alt="conbo_img_2" width={75} height={45} />
              <Image src="/conbo_img_3.png" alt="conbo_img_3" width={75} height={45} />
            </div>
            <div>
              <p className="text-center text-xl font-semibold text-[#715421]">Nông trại bò sữa chuẩn Quốc tế</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/non-gmo.png" alt="non-gmo.png" width={320} height={120} />
          </div>
        </div>
      </section>
      <section className="mb-8 h-[450px] md:h-[1200px] bg-[length:100%_100%] pt-16 relative">
        <Image src="/nha-may@2x-100.jpg" width={2400} height={1800} alt='nhà máy' className="absolute inset-0 h-full w-full" />
        <div className="px-4 relative z-10">
          <div className="bg-[url('/asset_10.png')] bg-[length:100%_100%] text-center py-4">
            <h2 className="uppercase md:text-4xl text-[#002A9E] font-bold pb-1">Nhà máy sản xuất WOWTOP tại NewZealand</h2>
            <p className="md:text-4xl text-[#002A9E] uppercase">Dẫn đầu về công nghệ sản xuất sữa</p>
          </div>
        </div>
      </section>
      <Feedback />
      <FormOrder />
      <Experience />
    </main>
  )
}
