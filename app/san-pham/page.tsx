import Feedback from "@/components/HomePage/Feedback"
import FormOrder from "@/components/HomePage/FormOrder"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import Question from "./Question"
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
      {/* <section className="bg-[url('/bgr-sua.webp')] bg-cover bg-center md:bg-[length:100%_100%] mb-8">
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
      </section> */}
      <section className="py-8">
        <div className="max-w-4xl m-auto px-4">
          <h2 className="text-center text-4xl mb-4 text-[#065691] font-bold">Thành phần</h2>
          <div className="bg-white border border-[yellow] shadow-md rounded-2xl">
            <p className="p-8 text-center text-[#065691] font-semibold">
              Sữa bột [sữa tách béo, bột whey khử khoáng (từ sữa), lactose (từ sữa), đạm whey cô đặc (từ sữa)]. Sản phẩm chứa Calci 1475 mg/100g, Đạm Sữa non chuẩn hóa (CBP) 125mg/100g, Casein Phosphopeptide (CPP) 571mg/100g, Bifidobaterium animalis Probiotic DHA từ tảo, ARA, 1,3-Dioleoyl-2-Palmitoyl Triglyceride (OPO), Lactoferrin, Immunoglobulin G (IgG), và hơn 30 loại vitamin khoáng chất và dưỡng chất thiết yếu.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-6xl m-auto rounded-2xl p-1 shadow-2xl">
          <div className="bg-[#fefaee] rounded-t-2xl">
            <div className="bg-[#fefaee] p-8 text-center text-[#065691] text-4xl font-bold rounded-t-2xl">Dinh dưỡng trong 1 ly sữa Oz 220ml</div>
          </div>
          <table className="w-full text-center rounded-b-2xl">
            <thead className="">
              <tr className="bg-[#f4ddb1]">
                <th className="text-xl text-[#065691] p-3">Thành phần</th>
                <th className="text-xl text-[#065691] p-3">Trong 1 ly sữa</th>
                <th className="text-xl text-[#065691] p-3">Đơn vị</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#f7ecd0] duration-300">
                <td className="text-left pl-[15%] p-1">Năng lượng</td>
                <td>727.58</td>
                <td>Kj</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#f7ecd0] duration-300">
                <td className="text-left pl-[15%] p-1">Chất đạm</td>
                <td>7.63</td>
                <td>g</td>
              </tr>
              <tr className="text-[#065691] bg-[#f7ecd0] cursor-pointer hover:bg-[#f7ecd0] duration-300">
                <td className="text-left pl-[15%] p-1">Chất béo</td>
                <td>8.62</td>
                <td>g</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#f7ecd0] duration-300">
                <td className="text-left pl-[15%] p-1">Chất béo bão hòa</td>
                <td>5.68</td>
                <td>g</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#f7ecd0] duration-300">
                <td className="text-left pl-[15%] p-1">Trans Fat</td>
                <td>0.40</td>
                <td>g</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#f7ecd0] duration-300">
                <td className="text-left pl-[15%] p-1">Monounsaturated</td>
                <td>1.72</td>
                <td>g</td>
              </tr>
              <tr className="text-[#065691] cursor-pointer hover:bg-[#f7ecd0] duration-300">
                <td className="text-left pl-[15%] p-1">Polyunsaturated</td>
                <td>0.11</td>
                <td>g</td>
              </tr>
              <tr className="bg-[#f7ecd0] border-b-[5px] border-white text-[#065691] cursor-pointer">
                <td className="text-left pl-[15%] p-1"><strong>Lactoferrin</strong></td>
                <td><strong>25.74</strong></td>
                <td><strong>mg</strong></td>
              </tr>
              <tr className="bg-[#f7ecd0] border-b-[5px] border-white text-[#065691] cursor-pointer">
                <td className="text-left pl-[15%] p-1"><strong>CBP</strong></td>
                <td><strong>125</strong></td>
                <td><strong>mg</strong></td>
              </tr>
              <tr className="bg-[#f7ecd0] border-b-[5px] border-white text-[#065691] cursor-pointer">
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
              <span className="text-[#065691] font-bold text-lg md:text-4xl uppercase">
                Hướng dẫn truy xuất nguồn gốc
              </span>
            </div>
            <div className="bg-[url('/artboard_27.webp')] bg-[length:100%_100%] h-[800px] max-md:hidden relative">
              <div className="flex items-center gap-4 absolute top-20">
                <Image src="/default.jpg" alt="default" width={160} height={160} className="border-[#065691] border-[1px] rounded-full" />
                <p className="text-[#065691] font-semibold">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
              </div>
              <div className="flex items-center gap-4 absolute top-[40%] right-20">
                <p className="text-[#065691] font-semibold mt-[12%]">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
                <Image src="/default.jpg" alt="default" width={160} height={160} className="border-[#065691] border-[1px] rounded-full" />
              </div>
              <div className="flex items-center gap-4 absolute bottom-20">
                <Image src="/default.jpg" alt="default" width={160} height={160} className="border-[#065691] border-[1px] rounded-full" />
                <p className="text-[#065691] font-semibold mt-[20%]">Lật lon sữa sẽ có 1 mã QR đặc biệt in dưới đáy lon</p>
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
                  <p className="text-[#065691] font-bold text-lg md:text-xl">Pha 4 muỗng (40g) sữa WOWTOP vào nước ấm</p>
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
                <p className="text-[#065691] font-bold text-xl w-full">Khuấy đều để có được một ly 220ml sữa tăng chiều cao WOWTOP đầy đủ dưỡng chất</p>
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
            </div>
          </div>
        </div>
      </section>
      {/* <section className="mb-16">
        <div className="bg-white rounded-xl max-w-4xl m-auto">
          <div className="relative p-8">
            <div className="w-[20%] absolute bottom-[-8%] left-[-10%]">
              <Image src="/pt1.webp" alt="pt1" width={200} height={200} className="" />
            </div>
            <div className="absolute top-[4%] right-[16%] w-[10%]">
              <Image src="/pt2.webp" alt="pt2" width={120} height={120} className="" />
            </div>
            <div className="w-[20%] absolute top-[0%] right-[4%] rotate-[-45deg]">
              <Image src="/pt2.webp" alt="pt2" width={200} height={200} className="" />
            </div>
            <h2 className="text-center bg-text text-2xl md:text-4xl uppercase font-bold mb-4">Hộp sản phẩm WOWTOP</h2>
            <div className="w-full h-[400px] bg-[#ccc] rounded-xl mb-4">

            </div>
            <div>
              <div className="flex gap-4 mb-4">
                <div className="h-[200px] w-full bg-[#ccc] rounded-xl"></div>
                <div className="h-[200px] w-full bg-[#ccc] rounded-xl"></div>
              </div>
              <div className="flex gap-4">
                <div className="h-[200px] w-full bg-[#ccc] rounded-xl"></div>
                <div className="h-[200px] w-full bg-[#ccc] rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Question />
      <Feedback />
      <FormOrder />
      <Experience />
    </main>
  )
}

export default Product