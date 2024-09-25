import Certificate from "@/components/HomePage/Certificate"
import Experience from "@/components/HomePage/Experience"
import Feedback from "@/components/HomePage/Feedback"
import FormOrder from "@/components/HomePage/FormOrder"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL('https://kidscareplus.vn'),
  title: 'Oz Farm Kid\'s Care Plus 800g',
  description: 'Nếu được chăm sóc tốt, trẻ có thể cao lên đến 8-12cm mỗi năm. OZ FARM KID\'S CARE PLUS chứa hệ dưỡng chất giàu thành phần quý hiếm với hàm lượng cao như CBP ...',
  keywords: 'Oz Farm Kid\'s Care Plus',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Kids Care Plus',
    url: 'https://kidscareplus.vn/san-pham',
    siteName: 'KidsCarePlus',
    type: 'website'
  }
}

function Product() {
  return (
    <main>
      <section className="bg-[url('/banner1.webp')] bg-cover bg-center md:bg-[length:100%_100%] mt-12 mb-8">
        <div className="max-w-6xl m-auto px-4">
          <div className="flex pb-[100px] flex-col md:flex-row">
            <div className="md:w-2/5 flex items-center">
              <Image src="/banner_hop.webp" alt="banner-hop-sua" width={380} height={500} />
            </div>
            <div className="md:w-3/5">
              <div className="md:h-[565px] md:overflow-y-scroll md:px-8 py-8">
                <Image src="/logo2.png" alt="logo2" width={500} height={132} />
                <div className="mb-4">
                  <h2 className="text-[#065691] font-bold text-3xl">OZ FARM KID’S CARE PLUS CAO HƠN TỪ CẤP NGUYÊN BÀO XƯƠNG</h2>
                </div>
                <p className="text-[#065691] text-xl mb-4">Sữa bột 800g</p>
                <div className="mb-4">
                  <p className="text-[#D9A834] text-sm">Sở hữu chiều cao đạt chuẩn thế giới là bệ phóng tuyệt vời cho sự phát triển toàn diện về ngoại hình, sức khỏe, tinh thần hay sự nghiệp sau này của trẻ. Nếu được chăm sóc tốt, trẻ có thể cao lên đến 8-12cm mỗi năm.</p>
                </div>
                <p className="text-justify"><strong>OZ FARM KID’S CARE PLUS</strong> chứa hệ dưỡng chất giàu thành phần quý hiếm với hàm lượng cao như CBP 400mg, Canxi 800mg cùng 30 loại vitamin và khoáng chất thiết yếu cho sự phát triển thể chất ở trẻ. Sử dụng KID&apos;S CARE PLUS giúp kích thích nguyên bào Xương từ sâu bên trong, giúp tăng khả năng hấp thụ canxi, cho xương dài hơn và chắc khỏe hơn. Cùng OZ FARM tăng trưởng chiều cao cho trẻ không chỉ ở lượng mà còn ở chất.</p>
                <Image src="/cn.png" alt="cn" width={496} height={66} />
                <ul className="mt-8">
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>GRASS FED: 100% Bò ăn cỏ tự nhiên</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>GMP: Chứng nhận đạt tiêu chuẩn sản xuất Châu Âu</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>Made in Australia: Sản xuất và nhập khẩu nguyên lon từ Úc với tối thiểu 85% thành phần tại Úc</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>Halal: Chứng nhận đạt chuẩn và không chứa chất gây hại theo luật Hồi Giáo</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>HACCP: Chứng nhận an toàn vệ sinh thực phẩm</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>KOSHER: chứng nhận sản phẩm phù hợp với luật ăn kiêng của người Do Thái</p>
                  </li>
                  <li className="text-[#D9A834] flex gap-2 items-center mb-2">
                    <Image src="/tich2.png" alt="tich" width={20} height={10} />
                    <p>Nhiều giải thưởng vàng / bạc từ DIAA (Hiệp hội Công nghiệp Sữa Úc)</p>
                  </li>
                </ul>
              </div>
              <div className="w-[220px] h-[60px] mt-4 ml-8">
                <Link href="/" className="bg-[url('/mua.png')] bg-[length:100%_100%] w-full h-full flex items-center justify-center">
                  <span className="text-[#84571c] text-3xl font-bold uppercase">
                    Mua ngay
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-4xl m-auto px-4">
          <div>
            <div className="flex flex-col items-center justify-center text-xl md:text-[40px] uppercase text-center mb-8">
              <div>
                <p className="bg-[#065691] bg-clip-text text-transparent font-bold py-4">CON VỤT CAO, XƯƠNG CHẮC KHỎE</p>
              </div>
              <div>
                <span className="bg-[#065691] bg-clip-text text-transparent">PHÁT TRIỂN TOÀN DIỆN</span>
              </div>
              <div>
                <p className="md:pt-6 pt-1">
                  <span className="bg-[#065691] bg-clip-text text-transparent">Nhờ công thức</span>
                  <span className="py-2 px-4 bg-[#065691] rounded-md text-white">Vượt trội</span>
                </p>
              </div>
            </div>
            <div className="bg-[url('/concaovut.png')] bg-[length:100%_100%] flex justify-center items-center">
              <div className="text-[#065691] font-semibold text-center py-4">
                <p className="py-1">Các mẹ có biết, cao không chỉ về lượng mà còn về chất?</p>
                <p className="py-1">Các mẹ có biết xương con đang khóc lóc mỗi ngày?</p>
                <p className="py-1">Mẹ hãy tìm hiểu ngay cách tăng chiều cao từ cấp độ nguyên bà</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/bgr-giot.png" alt="bgr-giot" width={896} height={1000} className="max-md:w-[440px] max-md-h-[500]" />
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-4xl m-auto px-4">
          <div className="mb-8">
            <p className="text-[#065691] font-bold text-2xl md:text-4xl mb-2 uppercase">Tác dụng của <span className="text-4xl">CBP</span> với</p>
            <div className="relative">
              <Image src="/bgr-tp-2.png" alt="bgr-tp-2" width={480} height={60} />
              <span className="absolute md:top-2 top-4 md:left-16 left-20 text-[#065691] font-bold text-2xl md:text-4xl uppercase">Nguyên bào xương</span>
            </div>
          </div>
          <div className="flex flex-col gap-8 mb-8">
            <div className="flex items-center gap-8">
              <Image src="/a2.png" alt="a2" width={140} height={184} />
              <div>
                <div className="flex mb-4">
                  <div className="uppercase border-b-[1px] border-[#065691] text-[#065691] font-semibold text-3xl py-2">Nguyên bào xương</div>
                </div>
                <p className="text-[#065691] text-justify">Là những công nhân đặc biệt với nhiệm vụ xây dựng và sửa chữa xương. Trong quá trình tăng chiều cao, nguyên bào xương sẽ làm việc chăm chỉ để tạo ra các phần xương mới, nối dài xương hơn, giống như cách công nhân xây lên những tòa nhà cao tầng.</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <Image src="/a3.webp" alt="a3" width={140} height={184} />
              <div>
                <div className="flex mb-4">
                  <div className="uppercase border-b-[1px] border-[#065691] text-[#065691] font-semibold text-3xl py-2">Cao về lượng</div>
                </div>
                <p className="text-[#065691] text-justify">Nếu chỉ đo xem con cao lên bao nhiêu centimet giống như xây nhà cao tầng mà chỉ quan tâm xem xây được bao nhiêu tầng vậy. Chiều cao về centimet rất quan trọng, nhưng nếu xương không đủ chất lượng, nguyên bào xương thiếu hụt, con sẽ dễ bị loãng xương và các bệnh về xương khác</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <Image src="/a4.webp" alt="a4" width={140} height={184} />
              <div>
                <div className="flex mb-4">
                  <div className="uppercase border-b-[1px] border-[#065691] text-[#065691] font-semibold text-3xl py-2">Cao về chất</div>
                </div>
                <p className="text-[#065691] text-justify">Quan tâm tới chất lượng xương (mật độ nguyên bào xương có đủ hay không cũng giống như việc kết cấu của 1 tòa nhà có vững chắc hay không. Nếu mật độ nguyên bào xương quá ít, chúng sẽ không thể liên kết với nhau tạo thành 1 lưới xương vững chắc, xương sẽ rất dễ tổn thương, giống như tòa nhà cao tầng không đủ chắc chắn, có thể sụp đổ bất kì lúc nào vậy. ngược lại nếu chất lượng xương tốt (đủ số lượng nguyên bào xương) thì con có thể thoải mái vận động vui chơi với khung xương chắc khỏe.</p>
              </div>
            </div>
          </div>
          <div className="bg-liner2 py-9 px-8 md:px-[100px] rounded-2xl">
            <p className="font-bold text-center text-[#065691]">Tại sao nói CBP là bữa tiệc thịnh soạn dành cho nguyên bào xương Khi hình thành nguyên bào xương, cần tiêu tổn rất nhiều dinh dưỡng và axit amin. CBP cung cấp dồi dào các dưỡng chất này, cho nguyên bào xương &quot;ăn ngon&quot;, &quot;ăn no&quot;, từ đó nó sẽ sinh ra 1 mạng lưới xương vững chắc</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-4xl m-auto px-4">
          <div className="flex justify-center flex-col items-center mb-8">
            <h2 className="uppercase text-[#065691] text-6xl font-bold mb-8">3 bước</h2>
            <div className="bg-[url('/artboard_23.png')] bg-[length:100%_100%] h-[72px]">
              <div className="flex justify-center flex-col items-center text-3xl uppercase text-[#065691] font-bold relative top-[-20px]">
                <p>Tăng chiều cao</p>
                <p>Tại nguyên bào xương</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <div className="mb-4 pb-2 border-b-[1px] border-[#edb000] flex items-center">
                <span className="text-[#edb000] italic text-5xl mr-4">1</span>
                <span className="text-[#065691]">Tạo ra chất nền của khung xương <strong>giúp xương dài ra</strong></span>
              </div>
              <div className="mb-4 pb-2 border-b-[1px] border-[#edb000] flex items-center">
                <span className="text-[#edb000] italic text-5xl mr-4">2</span>
                <span className="text-[#065691]">Phát sóng siêu tần thu hút <strong>canxi và 23 dưỡng chất</strong> cần thiết</span>
              </div>
              <div className="mb-4 pb-2 border-b-[1px] border-[#edb000] flex items-center">
                <span className="text-[#edb000] italic text-5xl mr-4">3</span>
                <span className="text-[#065691]">Khoá các dưỡng chất cần thiết cho <strong>tăng trưởng</strong> và <strong>giúp xương chắc khoẻ</strong></span>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image src="/xuong1.webp" alt="xuong1" width={250} height={250} />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8 mt-4">
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
          <div className="md:hidden text-xs">
            <div className="flex flex-col justify-center items-center mt-2 ">
              <Image src="/bg-hop-sua-1.webp" alt="bg-hop-sua" width={215} height={290} />
              <div className="flex flex-col px-2">
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/h11.webp" alt="h11" width={120} height={120} />
                    <span className="text-[#065691] text-center text-shadow font-bold absolute max-w-[100px]">Nhập khẩu nguyên lon từ Australia</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#065691] font-semibold">
                      <strong>OZ FARM </strong>
                      là thương hiệu bản địa Úc với chất lượng sữa thuần khiết 100% từ bò chăn thả & ăn cỏ tự nhiên,
                      vượt qua nhiều tiêu chuẩn khắt khe và đạt nhiều chứng nhận danh giá trên thế giới.
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/h11.webp" alt="h11" width={120} height={120} />
                    <span className="text-[#065691] text-center text-shadow font-bold absolute max-w-[100px]">Sáng mắt</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#065691] font-semibold">
                      <strong>Lutein</strong>
                      <br />
                      Hỗ trợ phát triển thị lực, sáng mắt & bảo vệ mắt.
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/h11.webp" alt="h11" width={120} height={120} />
                    <span className="text-[#065691] text-center text-shadow font-bold absolute max-w-[100px]">Cao cả về chất và lượng</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#065691] font-semibold">
                      <strong>CBP 400mg & Canxi 800mg</strong>
                      <br />
                      Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với Canxi hữu cơ và CBP tăng cường hoạt động của nguyên bào xương giúp hấp thu Canxi dễ dàng
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/h11.webp" alt="h11" width={120} height={120} />
                    <span className="text-[#065691] text-center text-shadow font-bold absolute max-w-[100px]">Phát triển trí não</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#065691] font-semibold">
                      <strong>Axit Tổ yến + PS + DHA & ARA</strong>
                      <br />
                      Phát triển trí não & hệ thần kinh, tăng cường khả năng ghi nhớ & học hỏi
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/h11.webp" alt="h11" width={120} height={120} />
                    <span className="text-[#065691] text-center text-shadow font-bold absolute max-w-[100px]">Tăng cường miễn dịch</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#065691] font-semibold">
                      <strong>Lactoferrin</strong>
                      <br />
                      Là “lá chắn miễn dịch đầu tiên” của trẻ, giúp kháng khuẩn, kháng Virus và điều hòa miễn dịch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-md:mb-8 bg-[url('/dong-co-d-1.webp')] bg-[length:100%_100%] bg-center h-[1062px] relative max-md:hidden">
        <div className="max-w-6xl m-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-5xl text-[#135689] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-around">
              <div className="w-2/5">
                <div className="px-12 py-2 rounded-2xl bg-liner relative z-[2]">
                  <p className="text-lg text-center text-white">Nguồn sữa Úc tự nhiên giàu giá trị dinh dưỡng</p>
                </div>
                <div className="bg-[#e8f2e9] text-[#204D97] border-[1px] border-white text-justify relative bottom-5 z-[1] py-8 px-4 rounded-2xl">
                  <p>Phương thức chăn nuôi bò tự nhiên cùng thức ăn là đồng cỏ tươi và sạch giúp nguồn sữa Úc chứa hàm lượng dinh dưỡng cao, cụ thể: hàm lượng omega-3 cao hơn 147% so với sữa thông thường, hàm lượng acid béo linoleic liên hợp (dưỡng chất có khả năng chống viêm) nhiều gấp đôi,…
                    <br />
                    <br />
                    Úc là vùng đất của những đàn bò sữa được chăn nuôi tự nhiên: Bò tại các trang trại Úc được thả tự do, uống nước sạch và ăn cỏ tươi. Các trang trại này tách biệt với khu đô thị, do vậy hoàn toàn trong lành. Mỗi ngày, đàn bò Úc còn được massage và cho nghe nhạc để thả lỏng. Đặc biệt, bò còn được gắn chip để theo dõi sức khỏe nhằm đảm bảo cho ra dòng sữa chất lượng bậc nhất. Mỗi con bò đều được cấp mã số và quản lý theo Chương trình Định danh Vật nuôi Quốc gia</p>
                </div>
              </div>
              <div className="w-1/3">
                <div className="px-12 py-2 rounded-2xl bg-liner relative z-[2]">
                  <p className="text-lg text-center text-white">Công nghệ sản xuất tiên tiến bậc nhất từ Úc</p>
                </div>
                <div className="bg-[#e8f2e9] text-[#204D97] border-[1px] border-white text-justify relative bottom-5 z-[1] py-8 px-4 rounded-2xl">
                  <p>Sữa từ khi được vắt tại trang trại cho đến khi ra thành phẩm chỉ mất 24 giờ. Các thành phần dinh dưỡng sau khi trộn với sữa tươi sẽ được đưa vào sấy lạnh 1 lần duy nhất, đảm bảo dưỡng chất được giữ trọn vẹn và phân bố đều trong từng muỗng sữa.</p>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/4">
                <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={360} height={360} />
              </div>
            </div>
            <div className="flex justify-center text-center flex-col mt-[160px] text-2xl text-[#f0c561]">
              <p>BIẾN MÓN QUÀ KỲ DIỆU CỦA THIÊN NHIÊN TRỞ THÀNH SẢN PHẨM HỮU CƠ</p>
              <p>TUYỆT VỜI CHO THẾ HỆ TƯƠNG LAI CAO LỚN VÀ TỐT ĐẸP HƠN</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 mb-8 md:mb-20 bg-[url('/bgr-co-m.webp')] bg-center bg-[length:100%_100%] h-[820px] relative md:hidden">
        <div className="mb-8">
          <h2 className="text-xl md:text-5xl text-[#135689] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
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
      <section className="md:hidden">
        <div className="flex flex-col px-4">
          <div className="w-full">
            <div className="px-12 py-2 rounded-2xl bg-liner relative z-[2]">
              <p className="text-lg text-center text-white">Nguồn sữa Úc tự nhiên giàu giá trị dinh dưỡng</p>
            </div>
            <div className="bg-[#e8f2e9] text-[#204D97] border-[1px] border-white text-justify relative bottom-5 z-[1] py-8 px-4 rounded-2xl">
              <p>Phương thức chăn nuôi bò tự nhiên cùng thức ăn là đồng cỏ tươi và sạch giúp nguồn sữa Úc chứa hàm lượng dinh dưỡng cao, cụ thể: hàm lượng omega-3 cao hơn 147% so với sữa thông thường, hàm lượng acid béo linoleic liên hợp (dưỡng chất có khả năng chống viêm) nhiều gấp đôi,…
                <br />
                <br />
                Úc là vùng đất của những đàn bò sữa được chăn nuôi tự nhiên: Bò tại các trang trại Úc được thả tự do, uống nước sạch và ăn cỏ tươi. Các trang trại này tách biệt với khu đô thị, do vậy hoàn toàn trong lành. Mỗi ngày, đàn bò Úc còn được massage và cho nghe nhạc để thả lỏng. Đặc biệt, bò còn được gắn chip để theo dõi sức khỏe nhằm đảm bảo cho ra dòng sữa chất lượng bậc nhất. Mỗi con bò đều được cấp mã số và quản lý theo Chương trình Định danh Vật nuôi Quốc gia</p>
            </div>
          </div>
          <div className="w-full">
            <div className="px-12 py-2 rounded-2xl bg-liner relative z-[2]">
              <p className="text-lg text-center text-white">Công nghệ sản xuất tiên tiến bậc nhất từ Úc</p>
            </div>
            <div className="bg-[#e8f2e9] text-[#204D97] border-[1px] border-white text-justify relative bottom-5 z-[1] py-8 px-4 rounded-2xl">
              <p>Sữa từ khi được vắt tại trang trại cho đến khi ra thành phẩm chỉ mất 24 giờ. Các thành phần dinh dưỡng sau khi trộn với sữa tươi sẽ được đưa vào sấy lạnh 1 lần duy nhất, đảm bảo dưỡng chất được giữ trọn vẹn và phân bố đều trong từng muỗng sữa.</p>
            </div>
          </div>
          <div className="absolute bottom-1/4 right-1/4 max-md:hidden">
            <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={360} height={360} />
          </div>
        </div>
      </section>
      <section className="mb-8 bg-[url('/nha-may-2.webp')] h-[450px] md:h-[1050px] bg-[length:100%_100%] pt-16">
        <div className="px-4">
          <div className="bg-[url('/asset_10.png')] bg-[length:100%_100%] text-center py-4">
            <h2 className="uppercase text-4xl text-[#135689] font-bold">Nhà máy OZ Farm</h2>
            <p className="text-4xl text-[#135689] uppercase">và hành trình 12 năm phá vỡ mọi kỷ lục</p>
          </div>
        </div>
      </section>
      <Certificate />
      <section className="mb-8">
        <div className="max-w-4xl m-auto px-4 bg-[url('/bgr-tp.png')] bg-[length:100%_100%]">
          <h2 className="text-center text-4xl">Thành phần</h2>
          <div className="">
            <div className="p-8 text-center text-[#065691] font-semibold">
              Sữa bò tươi NON-GMO (Vitamin C, Sắt, Kẽm, Vitamin A, Vitamin D3), Sữa bò A2, Fructooligosaccharides (FOS), Lactose, Galacto-oligosaccharide (GOS), <strong>Canxi</strong> Phosphate Tribasic, Bột Docosahexaenoic Acid (DHA), Bột Arachidonic Acid (ARA) , Protein cơ bản sữa non <strong>(CBP 125mg/100g) , Lactoferrin, Probiotic</strong> (Bifidobacteria lactis), Vitamin K1’ Bifidobacteria Animalis Probiotic-BB12, Immunoglobulin G (18,75mg/100g).
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-6xl m-auto shadow-2xl">
          <div className="bg-[#fefaee] rounded-t-2xl">
            <div className="bg-[#e6fefe] p-8 text-center text-[#065691] text-4xl font-bold rounded-t-2xl">Dinh dưỡng trong 1 ly sữa Oz 220ml</div>
          </div>
          <table className="w-full text-center rounded-b-2xl">
            <thead className="">
              <tr className="bg-[#d2fffc]">
                <th className="text-xl text-[#065691] p-3">Thành phần</th>
                <th className="text-xl text-[#065691] p-3">Trong 1 ly sữa</th>
                <th className="text-xl text-[#065691] p-3">Đơn vị</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Năng lượng</td>
                <td>727.58</td>
                <td>Kj</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Chất đạm</td>
                <td>7.63</td>
                <td>g</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Chất béo</td>
                <td>8.62</td>
                <td>g</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Chất béo bão hòa</td>
                <td>5.68</td>
                <td>g</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Trans Fat</td>
                <td>0.40</td>
                <td>g</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Monounsaturated</td>
                <td>1.72</td>
                <td>g</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#e6fefe] duration-300">
                <td className="text-left pl-[15%] p-1">Polyunsaturated</td>
                <td>0.11</td>
                <td>g</td>
              </tr>
              <tr className="bg-[#e6fefe] border-b-[5px] border-white text-[#065691] cursor-pointer">
                <td className="text-left pl-[15%] p-1"><strong>Lactoferrin</strong></td>
                <td><strong>25.74</strong></td>
                <td><strong>mg</strong></td>
              </tr>
              <tr className="bg-[#e6fefe] border-b-[5px] border-white text-[#065691] cursor-pointer">
                <td className="text-left pl-[15%] p-1"><strong>CBP</strong></td>
                <td><strong>125</strong></td>
                <td><strong>mg</strong></td>
              </tr>
              <tr className="bg-[#e6fefe] border-b-[5px] border-white text-[#065691] cursor-pointer">
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
              <span className="text-[#065691] font-bold text-2xl md:text-4xl uppercase">
                Hướng dẫn truy xuất nguồn gốc
              </span>
            </div>
            <div className="bg-[url('/artboard_27.webp')] bg-[length:100%_100%] h-[800px] max-md:hidden relative">
              <div className="flex items-center gap-4 absolute top-20">
                <Image src="/default.jpg" alt="default" width={160} height={160} className="border-[#065691] border-[1px] rounded-full" />
                <p className="text-[#065691] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
              </div>
              <div className="flex items-center gap-4 absolute top-[40%] right-20">
                <p className="text-[#065691] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                <Image src="/default.jpg" alt="default" width={160} height={160} className="border-[#065691] border-[1px] rounded-full" />
              </div>
              <div className="flex items-center gap-4 absolute bottom-20">
                <Image src="/default.jpg" alt="default" width={160} height={160} className="border-[#065691] border-[1px] rounded-full" />
                <p className="text-[#065691] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
              </div>
            </div>
            <div className="md:hidden flex flex-col gap-4 mt-8">
              <div className="flex gap-4">
                <Image src="/default.jpg" alt="default" width={75} height={75} className="border-[#065691] border-[1px] rounded-full" />
                <div className="flex flex-col">
                  <Image src="/b1.png" alt="buoc-1" width={100} height={45} />
                  <p className="text-[#065691] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image src="/default.jpg" alt="default" width={75} height={75} className="border-[#065691] border-[1px] rounded-full" />
                <div className="flex flex-col">
                  <Image src="/b2.png" alt="buoc-2" width={100} height={45} />
                  <p className="text-[#065691] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image src="/default.jpg" alt="default" width={75} height={75} className="border-[#065691] border-[1px] rounded-full" />
                <div className="flex flex-col">
                  <Image src="/b3.png" alt="buoc-3" width={100} height={45} />
                  <p className="text-[#065691] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-4xl m-auto">
          <div className="bg-[url('/concaovut.png')] bg-[length:100%_100%] flex justify-center items-center">
            <div className="text-[#065691] font-semibold text-center py-4">
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
                  <p className="text-[#065691] font-bold text-lg md:text-xl">Chuẩn bị 180ml nước ấm (35-45 độ C)</p>
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
                  <p className="text-[#065691] font-bold text-lg md:text-xl">Pha 4 muỗng (40g) sữa KID&apos;S CARE PLUS vào nước ấm</p>
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
                <p className="text-[#065691] font-bold text-xl w-full">Khuấy đều để có được một ly 220ml sữa tăng chiều cao KID&apos;S CARE PLUS đầy đủ dưỡng chất</p>
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
              <p className="text-[#065691] font-bold text-lg md:text-xl">Khuấy đều để có được một ly 220ml sữa tăng chiều cao KID&apos;S CARE PLUS đầy đủ dưỡng chất</p>
            </div>
          </div>
        </div>
      </section>
      <Feedback />
      <FormOrder />
      <Experience />
    </main>
  )
}

export default Product