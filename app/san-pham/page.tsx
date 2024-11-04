import Feedback from "@/components/HomePage/Feedback"
import FormOrder from "@/components/HomePage/FormOrder"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
const Experience = dynamic(() => import('@/components/HomePage/Experience'), { ssr: false })

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtop.com.vn'),
  title: 'Oz Farm Wowtop 800g',
  description: 'Nếu được chăm sóc tốt, trẻ có thể cao lên đến 8-12cm mỗi năm. OZ FARM WOWTOP chứa hệ dưỡng chất giàu thành phần quý hiếm với hàm lượng cao như CBP ...',
  keywords: 'Oz Farm Wowtop',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Wowtop',
    url: 'https://wowtop.com.vn/san-pham',
    siteName: 'Wowtop',
    type: 'website'
  }
}

function Product() {
  return (
    <main className="bg-custom-yellow">
      <section className="bg-[url('/bgr-sua.webp')] bg-cover bg-center md:bg-[length:100%_100%] mb-8">
        <div className="max-w-6xl m-auto px-4">
          <div className="flex pb-[100px] flex-col md:flex-row">
            <div className="md:w-2/5 flex items-center">
              <Image src="/Artboard 13.png" alt="banner-hop-sua" width={600} height={800} />
            </div>
            <div className="md:w-3/5">
              <div className="md:h-[565px] md:overflow-y-scroll md:px-8 py-8">
                <Image src="/logo-ngang.png" alt="logo2" width={500} height={132} />
                <div className="mb-4">
                  <h2 className="text-[#002A9E] font-bold text-3xl">CAO TỪ CẤP NGUYÊN BÀO XƯƠNG</h2>
                </div>
                <p className="text-[#845618] text-xl mb-4">Sữa bột 700G</p>
                <p className="text-justify">WOWTOP là thực phẩm dinh dưỡng công thức dành cho trẻ em từ 1 tuổi trở lên. Sản phẩm chứa Calci, Đạm, Sữa non (CBP), Casein Phosphopeptide (CPP), DHA từ tảo. ARA, 1,3-Dioleoy1-2-Palmitoy Tri-glyceride (OPO), Lactoferrin, Immunoglobulin G (IgG), và hơn 30 loại vitamin, khoáng chất và dưỡng chất thiết yếu cho sự phát triển thể chất ở trẻ. Sử dụng WowTop không chỉ giúp trẻ tăng chiều cao lành mạnh mà còn kích thích sự phát triển ở cấp nguyên bào Xương từ sâu bên trong, giúp tăng khả năng hấp thụ canxi, cho xương dài hơn và chắc khỏe hơn. Cùng WowTop tăng cường chiều cao cho trẻ không chỉ ở lượng mà còn ở chất. Tiêu chuẩn và cam kết của sản phẩm</p>
                <Image src="/cn.png" alt="cn" width={496} height={66} />
                <ul className="mt-8 font-semibold">
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>NON - GMO VERIFIED: Chứng nhận nguồn sữa không biến đổi Gen</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>ALL NATURAL: 100% nguyên liệu tự nhiên</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>GRASS FED: Chứng nhận 100% Bò ăn cỏ tự nhiên</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>NEW ZEALAND MADE: Nhập khẩu nguyên lon từ New Zealand</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>HACCP from NZ MPI: Chứng nhận An toàn vệ sinh thực phẩm từ Bộ Kế hoạch & Đầu tư New Zealand</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>GMP: Chứng nhận đạt tiêu chuẩn sản xuất Châu Âu</p>
                  </li>
                </ul>
              </div>
              <div className="w-[220px] h-[60px] mt-4 ml-8">
                <Link href="/" className="bg-blue rounded-md w-full h-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold uppercase">
                    Mua ngay
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-custom-yellow mb-8">
        <div className="max-w-6xl m-auto px-4 pb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full flex flex-col justify-center max-md:mb-4">
              <div className="flex justify-center mb-4">
                <Image src="/artboard_14.png" alt="artboard_14" width={240} height={160} />
              </div>
              <div className="flex justify-evenly items-center">
                <Image src="/artboard_16.png" alt="artboard_16" width={100} height={100} />
                <Image src="/bfdhb.png" alt="bfdhb" width={100} height={64} className="h-full" />
                <Image src="/artboard_15.png" alt="artboard_15" width={100} height={100} />
                <Image src="/artboard_13.png" alt="artboard_13" width={100} height={100} />
              </div>
            </div>
            <div className="md:w-1/2 w-full bg-[url('/artboard_12.png')] bg-[length:100%_100%] px-4 py-8">
              <div>
                <h2 className="font-semibold text-4xl uppercase text-center mb-4">NON - GMO VERIFIED</h2>
                <p className="text-lg font-semibold">Một trong số công ty hiếm hoi ở New Zealand có đầy đủ chứng nhận về sữa công thức dành cho trẻ sơ sinh.WowTop chứa hệ dưỡng chất giàu thành phần quý hiếm với hàm lượng cao như CBP 125mg, Canxi 1200mg cùng 29 loại vitamin và khoáng chất thiết yếu cho sự phát triển thể chất ở trẻ. Sử dụng WowTop không chỉ giúptrẻ tăng chiều cao lành mạnh mà còn kích thích sự phát triển ở cấp nguyên bào Xương từ sâu bên trong,giúp tăng khả năng hấp thụ canxi, cho xương dài hơn và chắc khỏe hơn. Cùng WowTop tăng trưởng chiều caocho trẻ không chỉ ở lượng mà còn ở chất.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8 bg-custom-yellow">
        <div className="max-w-4xl m-auto px-4">
          <div>
            <div className="flex flex-col items-center justify-center text-xl md:text-[40px] uppercase text-center mb-8">
              <div>
                <p className="bg-text bg-clip-text text-transparent font-bold md:py-4">CON VỤT CAO, XƯƠNG CHẮC KHỎE</p>
              </div>
              <div className="md:pt-4 pt-1">
                <span className="bg-text bg-clip-text text-transparent md:pt-4 pt-1 font-semibold">PHÁT TRIỂN TOÀN DIỆN</span>
              </div>
              <div>
                <p className="md:pt-8 pt-1 font-semibold">
                  <span className="bg-[#895501] bg-clip-text text-transparent">Nhờ công thức </span>
                  <span className="py-2 px-4 bg-blue rounded-md text-white">Vượt trội</span>
                </p>
              </div>
            </div>
            <div className="bg-[url('/con-cao-vut.png')] bg-[length:100%_100%] flex justify-center items-center">
              <div className="text-[#002A9E] font-bold text-center py-4 italic">
                <p className="py-1 text-xs md:text-lg">Các mẹ có biết, cao không chỉ về lượng mà còn về chất?</p>
                <p className="py-1 text-xs md:text-lg">Các mẹ có biết xương con đang khóc lóc mỗi ngày?</p>
                <p className="py-1 text-xs md:text-lg">Mẹ hãy tìm hiểu ngay <span className="text-[#002A9E]">cách tăng chiều cao từ cấp độ nguyên bào</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-custom-yellow mb-4">
        <div className="md:max-w-4xl w-full m-auto px-4 relative">
          <div className="flex justify-center relative w-full">
            <Image src="/bgr-giot.webp" alt="bgr-giot" width={896} height={1000} />
            <div className="uppercase absolute top-4 md:top-12 left-[16%] md:text-2xl text-xs font-semibold text-[#84571B]">
              <span className="text-[#002A9E]"><strong>Có thành phần CBP</strong></span>
              <br />
              <span>giúp kích thích</span>
              <br />
              <span><strong>quá trình tạo xương</strong></span>
              <br />
              <span>từ cấp độ nguyên bào</span>
            </div>
            <div className="uppercase absolute top-[25%] left-[10%] text-2xl md:text-[48px] font-bold py-4">
              <span className="text-[#002A9E]">CBP ≈ 1/50 tỷ Nano</span>
            </div>
            <div className="uppercase absolute top-[44%] right-[16%] md:text-2xl font-semibold">
              <span className="bg-text"><strong>10 lít sữa non của bò</strong></span>
              <br />
              <span className="bg-text">tiết ra trong 24h đầu</span>
              <br />
              <span className="bg-text">chiết xuất ra được</span>
              <br />
              <p className="md:text-[48px] text-4xl font-bold text-center mt-4 py-2 text-[#002A9E]">4g CBP</p>
            </div>
          </div>
          <div className="absolute bottom-[-20%] right-0 rotate-[-90deg] max-lg:hidden">
            <Image src="/PT.webp" alt="pt" width={400} height={400} />
          </div>
        </div>
      </section>
      <section className="bg-custom-yellow">
        <div className="max-w-4xl m-auto px-4">
          <div className="mb-8">
            <p className="text-[#84571B] font-bold text-2xl md:text-5xl mb-2 uppercase">Tác dụng của <span className="text-5xl">CBP</span> với</p>
            <div className="relative">
              <Image src="/bgr-tp-2.png" alt="bgr-tp-2" width={640} height={60} />
              <span className="absolute md:top-4 top-4 md:left-12 left-20 text-[#84571B] font-bold text-2xl md:text-5xl uppercase">Nguyên bào xương</span>
            </div>
          </div>
          <div className="flex flex-col gap-8 mb-8">
            <div className="flex items-center gap-4 md:gap-8">
              <Image src="/artboard16.png" alt="a2" width={140} height={184} className="w-20 md:w-[140px]" />
              <div>
                <div className="flex mb-4">
                  <div className="uppercase border-b-[1px] border-[#84571B] text-[#002A9E] font-semibold text-2xl md:text-3xl py-2">Nguyên bào xương</div>
                </div>
                <p className="text-[#84571B] text-justify">Là những công nhân đặc biệt với nhiệm vụ xây dựng và sửa chữa xương. Trong quá trình tăng chiều cao, nguyên bào xương sẽ làm việc chăm chỉ để tạo ra các phần xương mới, nối dài xương hơn, giống như cách công nhân xây lên những tòa nhà cao tầng.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <Image src="/artboard14.png" alt="a3" width={140} height={184} className="w-20 md:w-[140px]" />
              <div>
                <div className="flex mb-4">
                  <div className="uppercase border-b-[1px] border-[#84571B] text-[#002A9E] font-semibold text-2xl md:text-3xl py-2">Cao về lượng</div>
                </div>
                <p className="text-justify text-[#84571B]">Nếu chỉ đo xem con cao lên bao nhiêu centimet giống như xây nhà cao tầng mà chỉ quan tâm xem xây được bao nhiêu tầng vậy. Chiều cao về centimet rất quan trọng, nhưng nếu xương không đủ chất lượng, nguyên bào xương thiếu hụt, con sẽ dễ bị loãng xương và các bệnh về xương khác</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <Image src="/artboard15.png" alt="a4" width={140} height={184} className="w-20 md:w-[140px]" />
              <div>
                <div className="flex mb-4">
                  <div className="uppercase border-b-[1px] border-[#84571B] text-[#002A9E] font-semibold text-2xl md:text-3xl py-2">Cao về chất</div>
                </div>
                <p className="text-justify text-[#84571B]">Quan tâm tới chất lượng xương (mật độ nguyên bào xương) có đủ hay không cũng giống như việc kết cấu của 1 tòa nhà có vững chắc hay không. Nếu mật độ nguyên bào xương quá ít, chúng sẽ không thể liên kết với nhau tạo thành 1 lưới xương vững chắc, xương sẽ rất dễ tổn thương, giống như tòa nhà cao tầng không đủ chắc chắn, có thể sụp đổ bất kì lúc nào vậy. ngược lại nếu chất lượng xương tốt (đủ số lượng nguyên bào xương) thì con có thể thoải mái vận động vui chơi với khung xương chắc khỏe.</p>
              </div>
            </div>
          </div>
          <div className="bg-[url('/artboard12.png')] bg-[length:100%_100%] p-4 md:px-[100px] rounded-2xl">
            <p className="font-bold text-center py-8 text-[#002A9E]">Tại sao nói CBP là bữa tiệc thịnh soạn dành cho nguyên bào xương Khi hình thành nguyên bào xương, cần tiêu tổn rất nhiều dinh dưỡng và axit amin. CBP cung cấp dồi dào các dưỡng chất này, cho nguyên bào xương &quot;ăn ngon&quot;, &quot;ăn no&quot;, từ đó nó sẽ sinh ra 1 mạng lưới xương vững chắc</p>
          </div>
        </div>
      </section>
      <section className="mb-8 bg-custom-yellow">
        <div className="max-w-4xl m-auto px-4">
          <div className="flex justify-center flex-col items-center mb-8">
            <h2 className="uppercase bg-text pt-4 text-6xl font-bold mb-8">3 bước</h2>
            <div className="bg-[url('/artboard_23.png')] bg-[length:100%_100%] w-full h-[72px]">
              <div className="flex justify-center flex-col items-center text-xl md:text-3xl uppercase bg-text-blue font-bold relative top-[-20px]">
                <p className="py-1">Tăng chiều cao</p>
                <p className="py-1">Tại nguyên bào xương</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="mb-4 pb-2 border-b-[1px] border-[#edb000] flex items-center">
                <span className="text-[#002A9E] italic text-5xl mr-4">1</span>
                <span className="text-[#84571B]">Tạo ra chất nền của khung xương <strong>giúp xương dài ra</strong></span>
              </div>
              <div className="mb-4 pb-2 border-b-[1px] border-[#edb000] flex items-center">
                <span className="text-[#002A9E] italic text-5xl mr-4">2</span>
                <span className="text-[#84571B]">Phát sóng siêu tần thu hút <strong>canxi và 23 dưỡng chất</strong> cần thiết</span>
              </div>
              <div className="mb-4 pb-2 border-b-[1px] border-[#edb000] flex items-center">
                <span className="text-[#002A9E] italic text-5xl mr-4">3</span>
                <span className="text-[#84571B]">Khoá các dưỡng chất cần thiết cho <strong>tăng trưởng</strong> và <strong>giúp xương chắc khoẻ</strong></span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image src="/artboard_19.webp" alt="artboard_19" width={250} height={250} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/artboard17.png')] bg-[length:100%_100%] h-[800px] max-w-4xl m-auto mb-8">
        <div className="flex justify-end relative max-md:flex-col">
          <p className="text-[#002A9E] font-black text-8xl">OPO</p>
          <div className="md:mt-[-24px]">
            <p className="bg-[url('/bgr-tp-2.png')] bg-[length:100%_100%] text-[#84571B] text-6xl font-bold px-16 py-4">HỮU CƠ</p>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="w-2/3 text-xl text-[#002A9E]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam harum officia cupiditate doloremque fugit assumenda, sint necessitatibus reprehenderit.</p>
        </div>
      </section>
      <section className="mb-8 bg-[url('/nen-ct.webp')] relative">
        <div className="flex flex-col items-center justify-center text-[28px] lg:text-[1.5vw] uppercase text-center py-4 lg:absolute lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <div>
            <p className="bg-text bg-clip-text text-transparent font-bold">Công thức tối ưu</p>
          </div>
          <div>
            <p className=" pt-1">
              <span className="bg-text bg-clip-text text-transparent">Cho </span>
              <span className="py-2 px-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 rounded-md text-white">Chiều cao vượt đỉnh</span>
            </p>
          </div>
        </div>
        <Image src="/artboard12.jpg" alt="" width={1920} height={1080} className="max-lg:hidden w-full" />
        <Image src="/PT.webp" alt="" width={150} height={150} className="absolute bottom-0 right-0 max-lg:hidden" />
        <p className="text-xs max-lg:hidden text-[#002A9E] w-[240px] absolute top-[20%] left-[22%]">
          Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP & CPP</strong> tăng cường hoạt động của nguyên bào xương, Hàm lượng Canxi cao hàng đầu (1200mg), tỷ lệ vàng Canxi : Photo = 1,4:1 kết hợp với D3K2 & khoáng chất·giúp hấp thu Canxi tối đa.
        </p>
        <p className="text-xs max-lg:hidden text-[#002A9E] w-[190px] absolute top-[16%] 2xl:right-[26%] right-[20%]">
          <strong>DHA và ARA </strong>
          giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh, phát triển thị lực & sáng mắt</p>
        <p className="text-xs max-lg:hidden text-[#002A9E] w-[204px] absolute top-[46%] 2xl:right-[21%] right-[15%]">
          <strong>Lactoferrin & IgG </strong>
          tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.
        </p>
        <p className="text-xs max-lg:hidden text-[#002A9E] w-[190px] absolute bottom-[28%] left-[16%] 2xl:left-[20%]">
          <strong>OPO</strong> giúp hệ tiêu hóa vận hành tốt hơn, nhờ những tác động tích cực đến hệ sinh thái 100.000 tỷ vi khuẩn đường ruột. Đồng thời được bổ sung đặc biệt với lợi khuẩn Bifido-bacterium BB-12 và chất xơ (FOS+GOS).
        </p>
        <p className="text-xs max-lg:hidden text-[#002A9E] w-[190px] absolute bottom-[24%] 2xl:bottom-[26%] 2xl:right-[22%] right-[18%]">
          Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.
        </p>
        <div className="lg:hidden text-xs">
          <div className="flex flex-col justify-center items-center mt-2 ">
            <Image src="/Artboard 13.png" alt="bg-hop-sua" width={300} height={290} />
            <div className="flex flex-col px-2 mt-[-80px]">
              <div className="flex">
                <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                  <Image src="/bong.webp" alt="bong" width={120} height={120} />
                  <span className="text-[#002A9E] text-center text-shadow font-bold absolute max-w-[100px]">Cao hơn, chắc khỏe hơn từ cấp nguyên bào xương</span>
                </div>
                <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                  <span className="text-[#002A9E] font-semibold">
                    Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với <strong>CBP</strong> (125 mg/100g) & <strong>CPP</strong> (571 mg/100g) tăng cường hoạt động của nguyên bào xương. Hàm lượng <strong>Canxi</strong> cao hàng đầu (1475 mg/100g), tỷ lệ vàng <strong>Canxi : Phospho</strong> = 1,8:1 kết hợp với D3K1 & khoáng chất·giúp hấp thu Canxi tối đa.
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                  <Image src="/bong.webp" alt="bong" width={120} height={120} />
                  <span className="text-[#002A9E] text-center text-shadow font-bold absolute max-w-[100px]">Tiêu hoá Tốt</span>
                </div>
                <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                  <span className="text-[#002A9E] font-semibold">
                    <strong>OPO</strong> giúp hệ tiêu hóa vận hành tốt hơn, nhờ những tác động tích cực đến hệ sinh thái 100.000 tỷ vi khuẩn đường ruột. Đồng thời được bổ sung đặc biệt với lợi khuẩn Bifido-bacterium BB-12 và chất xơ (FOS+GOS).
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                  <Image src="/bong.webp" alt="bong" width={120} height={120} />
                  <span className="text-[#002A9E] text-center text-shadow font-bold absolute max-w-[100px]">Cung cấp dinh dưỡng toàn diện</span>
                </div>
                <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                  <span className="text-[#002A9E] font-semibold">
                    Cung cấp <strong>chất béo</strong> và <strong>năng lượng</strong> bền bỉ như 1 bữa ăn đầy đủ dinh dưỡng. <strong>Protein từ Đạm Whey thủy phân</strong> với kích thước siêu nhỏ dễ hấp thu & giảm tỉ lệ dị ứng sữa.
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                  <Image src="/bong.webp" alt="bong" width={120} height={120} />
                  <span className="text-[#002A9E] text-center text-shadow font-bold absolute max-w-[100px]">Phát triển trí não & sáng mắt</span>
                </div>
                <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                  <span className="text-[#002A9E] font-semibold">
                    <strong>DHA và ARA </strong>
                    giúp tăng chỉ số trí tuệ, phát triển trí não & hệ thần kinh, phát triển thị lực & sáng mắt
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                  <Image src="/bong.webp" alt="bong" width={120} height={120} />
                  <span className="text-[#002A9E] text-center text-shadow font-bold absolute max-w-[100px]">Tăng sức đề kháng</span>
                </div>
                <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                  <span className="text-[#002A9E] font-semibold">
                    <strong>Lactoferrin & IgG </strong>
                    tăng cường điều hòa miễn dịch, Giúp kháng khuẩn, kháng virus, bảo vệ cơ thể khỏi các tác nhân gây hại.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/dong-co-d-1.webp')] bg-[length:100%_100%] bg-center h-[1062px] max-md:hidden relative z-10">
        <div className="max-w-6xl m-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-5xl text-[#002A9E] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between w-full mb-16">
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
            <div className="flex justify-between items-center relative mb-32">
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
      <section className="pt-20 bg-[url('/bgr-co-m.webp')] bg-center bg-[length:100%_100%] h-[820px] md:hidden relative z-10">
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
      {/* <section className="mb-8">
        <div className="max-w-4xl m-auto px-4 bg-[url('/bgr-tp.png')] bg-[length:100%_100%] relative">
          <h2 className="text-center text-2xl md:text-4xl text-[#84571B] font-bold uppercase max-md:absolute top-8 right-0 left-0">Thành phần</h2>
          <div className="px-4 pt-[20%] pb-4 text-center text-[#84571B] font-semibold">
            Sữa bò tươi NON-GMO (Vitamin C, Sắt, Kẽm, Vitamin A, Vitamin D3), Sữa bò A2, Fructooligosaccharides (FOS), Lactose, Galacto-oligosaccharide (GOS), <strong>Canxi</strong> Phosphate Tribasic, Bột Docosahexaenoic Acid (DHA), Bột Arachidonic Acid (ARA) , Protein cơ bản sữa non <strong>(CBP 125mg/100g) , Lactoferrin, Probiotic</strong> (Bifidobacteria lactis), Vitamin K1’ Bifidobacteria Animalis Probiotic-BB12, Immunoglobulin G (18,75mg/100g).
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-6xl m-auto shadow-2xl">
          <div className="bg-[#fefaee] rounded-t-2xl">
            <div className="p-8 text-center text-[#84571B] text-4xl font-bold rounded-t-2xl">Dinh dưỡng trong 1 ly sữa Oz 220ml</div>
          </div>
          <table className="w-full text-center rounded-b-2xl">
            <thead className="">
              <tr className="bg-[#F4DDB0]">
                <th className="text-xl text-[#84571B] p-3">Thành phần</th>
                <th className="text-xl text-[#84571B] p-3">Trong 1 ly sữa</th>
                <th className="text-xl text-[#84571B] p-3">Đơn vị</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[#84571B] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Năng lượng</td>
                <td>727.58</td>
                <td>Kj</td>
              </tr>
              <tr className="text-[#84571B] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Chất đạm</td>
                <td>7.63</td>
                <td>g</td>
              </tr>
              <tr className="text-[#84571B] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Chất béo</td>
                <td>8.62</td>
                <td>g</td>
              </tr>
              <tr className="text-[#84571B] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Chất béo bão hòa</td>
                <td>5.68</td>
                <td>g</td>
              </tr>
              <tr className="text-[#84571B] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Trans Fat</td>
                <td>0.40</td>
                <td>g</td>
              </tr>
              <tr className="text-[#84571B] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Monounsaturated</td>
                <td>1.72</td>
                <td>g</td>
              </tr>
              <tr className="text-[#84571B] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Polyunsaturated</td>
                <td>0.11</td>
                <td>g</td>
              </tr>
              <tr className="bg-[#f7ecd0] border-b-[5px] border-white text-[#84571B] cursor-pointer">
                <td className="text-left pl-[15%] p-1"><strong>Lactoferrin</strong></td>
                <td><strong>25.74</strong></td>
                <td><strong>mg</strong></td>
              </tr>
              <tr className="bg-[#f7ecd0] border-b-[5px] border-white text-[#84571B] cursor-pointer">
                <td className="text-left pl-[15%] p-1"><strong>CBP</strong></td>
                <td><strong>125</strong></td>
                <td><strong>mg</strong></td>
              </tr>
              <tr className="bg-[#f7ecd0] border-b-[5px] border-white text-[#84571B] cursor-pointer">
                <td className="text-left pl-[15%] p-1"><strong>CPP</strong></td>
                <td><strong>140</strong></td>
                <td><strong>mg</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-4xl m-auto">
          <div className="px-4">
            <div className="bg-[url('/artboard_26.png')] bg-[length:100%_100%] h-[70px] flex justify-center items-center">
              <span className="text-[#84571B] font-bold text-xl md:text-4xl uppercase">
                Hướng dẫn truy xuất nguồn gốc
              </span>
            </div>
            <div className="bg-[url('/artboard_27.webp')] bg-[length:100%_100%] h-[800px] max-md:hidden relative">
              <div className="flex items-center gap-4 absolute top-20">
                <Image src="/default.jpg" alt="default" width={160} height={160} className="border-[#84571B] border-[1px] rounded-full" />
                <p className="text-[#84571B] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
              </div>
              <div className="flex items-center gap-4 absolute top-[40%] right-20">
                <p className="text-[#84571B] font-semibold mt-12">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                <Image src="/default.jpg" alt="default" width={160} height={160} className="border-[#84571B] border-[1px] rounded-full" />
              </div>
              <div className="flex items-center gap-4 absolute bottom-20">
                <Image src="/default.jpg" alt="default" width={160} height={160} className="border-[#84571B] border-[1px] rounded-full" />
                <p className="text-[#84571B] font-semibold mt-24">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
              </div>
            </div>
            <div className="md:hidden flex flex-col gap-4 mt-8">
              <div className="flex gap-4">
                <Image src="/default.jpg" alt="default" width={75} height={75} className="border-[#84571B] border-[1px] rounded-full" />
                <div className="flex flex-col">
                  <Image src="/b1.png" alt="buoc-1" width={100} height={45} />
                  <p className="text-[#84571B] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image src="/default.jpg" alt="default" width={75} height={75} className="border-[#84571B] border-[1px] rounded-full" />
                <div className="flex flex-col">
                  <Image src="/b2.png" alt="buoc-2" width={100} height={45} />
                  <p className="text-[#84571B] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image src="/default.jpg" alt="default" width={75} height={75} className="border-[#84571B] border-[1px] rounded-full" />
                <div className="flex flex-col">
                  <Image src="/b3.png" alt="buoc-3" width={100} height={45} />
                  <p className="text-[#84571B] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-4xl m-auto">
          <div className="bg-[url('/concaovut.png')] bg-[length:100%_100%] flex justify-center items-center">
            <div className="text-[#84571B] font-semibold text-center py-4">
              <p className="text-4xl font-bold uppercase">Hướng dẫn sử dụng</p>
            </div>
          </div>
          <div className="max-md:px-4">
            <div className="flex mt-4 flex-col md:flex-row items-center">
              <Image src="/be.webp" alt="be" width={305} height={468} />
              <div className="w-full">
                <div>
                  <div className="flex justify-between">
                    <div className="flex items-center w-1/2">
                      <Image src="/b1.png" alt="b1" width={305} height={137} />
                    </div>
                    <div className="flex items-center w-1/2 justify-center">
                      <Image src="/icon_giot.png" alt="icon_giot" width={200} height={200} className="max-md:w-[100px] max-md:h-[100px]" />
                    </div>
                  </div>
                  <p className="text-[#84571B] font-bold text-lg md:text-xl">Chuẩn bị 180ml nước ấm (35-45 độ C)</p>
                </div>
                <div className="flex justify-center">
                  <Image src="/mui_ten.png" alt="mui-ten" width={30} height={73} />
                </div>
                <div>
                  <div className="flex justify-between">
                    <div className="flex items-center w-1/2">
                      <Image src="/b2.png" alt="b2" width={305} height={137} />
                    </div>
                    <div className="flex items-center w-1/2 justify-center">
                      <Image src="/icon_muong.png" alt="icon_muong" width={200} height={200} className="max-md:w-[100px] max-md:h-[59px]" />
                    </div>
                  </div>
                  <p className="text-[#84571B] font-bold text-lg md:text-xl">Pha 4 muỗng (40g) sữa WOWTOP vào nước ấm</p>
                </div>
                <div className="flex justify-center">
                  <Image src="/mui_ten.png" alt="mui-ten" width={30} height={73} />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center max-md:hidden">
                <div className="flex items-center w-full">
                  <Image src="/b3.png" alt="b3" width={305} height={137} />
                </div>
                <p className="text-[#84571B] font-bold text-xl w-full">Khuấy đều để có được một ly 220ml sữa tăng chiều cao WOWTOP đầy đủ dưỡng chất</p>
                <div className="flex items-center w-1/2 justify-center">
                  <Image src="/icon_coc.png" alt="icon_coc" width={200} height={200} />
                </div>
              </div>
              <div className="flex justify-between md:hidden">
                <div className="flex items-center w-1/2">
                  <Image src="/b3.png" alt="b3" width={305} height={137} />
                </div>
                <div className="flex items-center w-1/2 justify-center">
                  <Image src="/icon_coc.png" alt="icon_coc" width={200} height={200} className="max-md:w-[100px] max-md:h-[131px]" />
                </div>
              </div>
              <p className="text-[#84571B] font-bold text-lg md:text-xl">Khuấy đều để có được một ly 220ml sữa tăng chiều cao WOWTOP đầy đủ dưỡng chất</p>
            </div>
          </div>
        </div>
      </section> */}
      <Feedback />
      <FormOrder />
      <Experience />
    </main>
  )
}

export default Product