import React from 'react'
import Banner from './Banner'
import Image from 'next/image'
import CongThuc from '@/components/CongThuc'
import FormOrder from '@/components/HomePage/FormOrder'
import Link from 'next/link'

function page() {
  return (
    <main>
      <Banner />
      <section className="mb-8">
        <div className="max-w-5xl m-auto px-4">
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
          <p className="bg-text text-[calc(1.25rem+0.5vw)] font-bold text-center">Tổng giá trị lên đến 1,3 tỷ VNĐ</p>
          <div className="dkdt w-full md:w-1/2">
            <p className="font-bold text-[calc(1.25rem+0.5vw)] text-[#84571B]">Đăng ký dùng thử</p>
          </div>
        </div>
      </section>
      <CongThuc />
      <section className="bg-[url('/dong-co.png')] bg-[length:100%_100%] bg-center h-[1062px] relative max-lg:hidden z-[30]">
        <div className="max-w-6xl m-auto px-4">
          <div className="py-8">
            <h2 className="text-xl md:text-4xl text-[#002A9E] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between w-full mb-8">
              <div className="m-auto w-2/3 flex justify-center">
                <div className="flex justify-between w-full mb-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center flex-1">
                      <Image src="/conbo_img_1.png" alt="conbo_img_1" width={100} height={45} className='' />
                    </div>
                    <div className="flex items-center flex-1">
                      <p className="text-white font-bold text-2xl text-center">NON-GMO</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center flex-1">
                      <Image src="/conbo_img_2.png" alt="conbo_img_2" width={100} height={45} className='' />
                    </div>
                    <div className="flex items-center flex-1">
                      <p className="text-white font-bold text-2xl text-center">NATURAL <br />INGREDIENTS</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center flex-1">
                      <Image src="/conbo_img_3.png" alt="conbo_img_3" width={100} height={45} className='' />
                    </div>
                    <div className="flex items-center flex-1">
                      <p className="text-white font-bold text-2xl text-center">GRASS FED</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center relative mb-24">
              <div className="relative w-1/2 flex justify-center items-center">
                <Image src="/chung-nhan-bg.png" alt="chung-nhan-bg" width={543} height={357} className="absolute w-full" />
                <div className="flex flex-col items-center relative z-20 p-8">
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-1.png" alt='chung-nhan-1' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">Non-GMO: Chứng nhận nguồn nguyên liệu không biến đổi Gen</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-2.png" alt='chung-nhan-2' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">GRASS FED: Chứng nhận 100% Bò ăn cỏ tự nhiên</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-3.png" alt='chung-nhan-3' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">NATURAL INGREDIENTS: Sử dụng nguồn nguyên liệu từ thiên nhiên</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={467} height={382} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/bg-co-m.png')] bg-center bg-[length:100%_100%] relative lg:hidden py-8 z-[30]">
        <div className="mb-8">
          <h2 className="text-[5vw] text-[#002A9E] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
        </div>
        <div className="flex justify-center w-full flex-col">
          <div className="mx-auto w-2/3">
            <div className="flex justify-between mb-4 w-full">
              <Image src="/conbo_img_1.png" alt="conbo_img_1" width={120} height={90} className="w-1/4" />
              <Image src="/conbo_img_2.png" alt="conbo_img_2" width={120} height={90} className="w-1/4" />
              <Image src="/conbo_img_3.png" alt="conbo_img_3" width={120} height={90} className="w-1/4" />
            </div>
          </div>
          <div className="flex flex-col items-center relative z-20 w-2/3 m-auto">
            <div className="flex justify-center items-center gap-2 w-full">
              <Image src="/chung-nhan-1.png" alt='chung-nhan-1' width={150} height={150} className="w-1/4" />
              <p className="text-[#002A9E] text-3xl font-bold flex-1">NON-GMO</p>
            </div>
            <div className="flex justify-center items-center gap-2 w-full">
              <Image src="/chung-nhan-2.png" alt='chung-nhan-2' width={150} height={150} className="w-1/4" />
              <p className="text-[#002A9E] text-3xl font-bold flex-1">GRASS FED</p>
            </div>
            <div className="flex justify-center items-center gap-2 w-full">
              <Image src="/chung-nhan-3.png" alt='chung-nhan-3' width={150} height={150} className="w-1/4" />
              <p className="text-[#002A9E] text-3xl font-bold flex-1">NATURAL INGREDIENTS</p>
            </div>
          </div>
          <div className="flex justify-center w-2/3 m-auto mb-9">
            <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={500} height={400} className="w-full" />
          </div>
        </div>
      </section>
      <section className="lg:pb-[40%] pb-[80%] bg-[length:100%_100%] pt-[120px] lg:pt-40 relative z-20 top-[-150px] mb-8">
        <Image src="/nha-may.jpeg" width={2400} height={1800} alt='nhà máy' className="absolute inset-0 h-full w-full" />
        <div className="px-4 relative z-10">
          <div className="bg-[url('/asset_10.png')] bg-[length:100%_100%] text-center py-4">
            <h2 className="uppercase md:text-4xl text-[#002A9E] font-bold pb-1">Nhà máy sản xuất WOWTOP tại NewZealand</h2>
            <p className="md:text-4xl text-[#002A9E] uppercase">Dẫn đầu về công nghệ sản xuất sữa</p>
          </div>
        </div>
      </section>
      <section className="mt-[-150px] mb-8">
        <div className="max-w-5xl m-auto">
          <h2 className="text-[28px] text-[#84571B] text-center uppercase mb-16">{'>'}{'>'} Tìm hiểu thêm về sản phẩm</h2>
          <div className="flex max-md:flex-col gap-4 mb-8">
            <div className="bg-[url('/asset_6.png')] bg-[length:100%_100%] min-h-[100px] flex-1 flex justify-center items-center relative">
              <p className="absolute left-[25%] bg-text font-bold">Thời gian đăng ký dùng thử từ ngày...... đến hết ngày.....</p>
            </div>
            <div className="bg-[url('/asset_7.png')] bg-[length:100%_100%] min-h-[100px] flex-1 flex justify-center items-center relative">
              <p className="absolute left-[25%] bg-text font-bold">Đối tượng tham gia chương trình đăng ký dùng thử là cha mẹ có con trong độ tuổi từ 1 - 10 tuổi</p>
            </div>
          </div>
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center">
            <span className="uppercase font-bold bg-text text-[5vw] md:text-3xl py-2 mt-2">Cách thức tham gia</span>
          </div>
          <div className="bg-[url('/k-co-duong-ke.png')] md:bg-[url('/co-duong-ke.png')] bg-[length:100%_100%] bg-center p-8">
            <div className="flex flex-wrap">
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#84571B] text-white font-bold">1</p>
                <Image src="/asset_25.png" alt="asset_25" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Xem video để hiểu rõ về sản phẩm WowTop mà bố mẹ lựa chọn cho con yêu</p>
              </div>
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#84571B] text-white font-bold">2</p>
                <Image src="/asset_12.png" alt="asset_12" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Xem video để hiểu rõ về sản phẩm WowTop mà bố mẹ lựa chọn cho con yêu</p>
              </div>
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#84571B] text-white font-bold">3</p>
                <Image src="/asset_13.png" alt="asset_13" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Bố mẹ điền Form đăng ký dùng thử sữa WowTop cho con yêu</p>
              </div>
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#84571B] text-white font-bold">4</p>
                <Image src="/asset_14.png" alt="asset_14" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Các bố mẹ tham gia Group ..... để cập nhật kết quả theo tuần BẤM VÀO ẢNH PHÍA TRÊN ĐỂ THAM GIA NGAY</p>
              </div>
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#84571B] text-white font-bold">5</p>
                <Image src="/asset_16.png" alt="asset_16" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center px-4 mb-4 text-[#84571B] font-semibold">Chuyên gia gọi điện cho bố mẹ để nắm bắt tình trạng chiều cao của con để lên lộ trình phát triển chiều cao cả về chất và lượng cho con. Lựa chọn 5 bé dùng thử 3 tháng sản phẩm WowTop</p>
              </div>
              <div className="flex-[0_0_auto] w-1/2 md:w-1/3 md:px-6 py-6">
                <p className="mb-2 flex justify-center items-center w-8 h-8 rounded-full bg-[#84571B] text-white font-bold">6</p>
                <Image src="/asset_9.png" alt="asset_9" width={90} height={90} className="m-auto mb-4" />
                <p className="text-center p mb-4x-4 text-[#84571B] font-semibold">Bố mẹ cam kết ghi nhận quá trình sử dụng của con</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-5xl m-auto">
          <div className="dkdt">
            <p className="font-bold text-[calc(1.25rem+0.5vw)] text-[#84571B]">Đăng ký dùng thử</p>
          </div>
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center">
            <span className="uppercase font-bold bg-text text-[5vw] md:text-3xl py-2 mt-2">Bố mẹ tham gia ngay</span>
          </div>
          <p className="uppercase bg-text text-[5vw] md:text-3xl py-2 mt-2 text-center">CON CAO LỚN TRONG &quot;TẦM TAY&quot;</p>
          <div className="flex max-md:flex-col gap-4 mb-4">
            <div className="flex-1">
              <p className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4">Bước 1</p>
              <p className="bg-text text-[calc(1rem+0.5vw)] md:text-2xl max-md:text-center">XEM VIDEO ĐỂ HIỂU RÕ VỀ SẢN PHẨM WOWTOP MÀ BỐ MẸ LỰA CHỌN CHO CON YÊU</p>
            </div>
            <div className="flex-1 px-2">
              <iframe loading='lazy' src="https://www.youtube.com/embed/y9vlAFDEr7I?si=zDi8B9unDuWxPVnw" height={315} className="w-full rounded-md" />
            </div>
          </div>
          <div className="flex max-md:flex-col gap-4 mb-4">
            <div className="flex-1 md:hidden">
              <p className="buoc table m-auto md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4">Bước 2</p>
              <p className="bg-text text-[calc(1rem+0.5vw)] md:text-2xl text-center">BỐ MẸ VUI LÒNG TRẢ LỜI CÁC CÂU HỎI DƯỚI ĐÂY ĐỂ CHẮN CHẮN BỐ MẸ ĐÃ HIỂU VÀ SẴN SÀNG LỰA CHỌN WOWTOP CHO PHÁT TRIỂN CHIỀU CAO VƯỢT TRỘI CỦA CON YÊU</p>
            </div>
            <div className="flex-1">
              <ul className="h-[400px] overflow-y-scroll shadow-custom p-4 rounded-2xl">
                <li className="mb-4">
                  <div className="text-[#84571B] font-bold">Câu hỏi 1</div>
                  <div className="bg-[#F0DCAF] text-[#84571B] rounded-2xl py-1 px-3">Bố mẹ trả lời</div>
                </li>
                <li className="mb-4">
                  <div className="text-[#84571B] font-bold">Câu hỏi 1</div>
                  <div className="bg-[#F0DCAF] text-[#84571B] rounded-2xl py-1 px-3">Bố mẹ trả lời</div>
                </li>
                <li className="mb-4">
                  <div className="text-[#84571B] font-bold">Câu hỏi 1</div>
                  <div className="bg-[#F0DCAF] text-[#84571B] rounded-2xl py-1 px-3">Bố mẹ trả lời</div>
                </li>
                <li className="mb-4">
                  <div className="text-[#84571B] font-bold">Câu hỏi 1</div>
                  <div className="bg-[#F0DCAF] text-[#84571B] rounded-2xl py-1 px-3">Bố mẹ trả lời</div>
                </li>
                <li className="mb-4">
                  <div className="text-[#84571B] font-bold">Câu hỏi 1</div>
                  <div className="bg-[#F0DCAF] text-[#84571B] rounded-2xl py-1 px-3">Bố mẹ trả lời</div>
                </li>
                <li className="mb-4">
                  <div className="text-[#84571B] font-bold">Câu hỏi 1</div>
                  <div className="bg-[#F0DCAF] text-[#84571B] rounded-2xl py-1 px-3">Bố mẹ trả lời</div>
                </li>
                <li className="mb-4">
                  <div className="text-[#84571B] font-bold">Câu hỏi 1</div>
                  <div className="bg-[#F0DCAF] text-[#84571B] rounded-2xl py-1 px-3">Bố mẹ trả lời</div>
                </li>
                <li className="mb-4">
                  <div className="text-[#84571B] font-bold">Câu hỏi 1</div>
                  <div className="bg-[#F0DCAF] text-[#84571B] rounded-2xl py-1 px-3">Bố mẹ trả lời</div>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-md:hidden">
              <p className="buoc inline-block md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4 float-right">Bước 2</p>
              <p className="bg-text text-[calc(1rem+0.5vw)] md:text-2xl text-end clear-both">BỐ MẸ VUI LÒNG TRẢ LỜI CÁC CÂU HỎI DƯỚI ĐÂY ĐỂ CHẮN CHẮN BỐ MẸ ĐÃ HIỂU VÀ SẴN SÀNG LỰA CHỌN WOWTOP CHO PHÁT TRIỂN CHIỀU CAO VƯỢT TRỘI CỦA CON YÊU</p>
            </div>
          </div>
          <div>
            <p className="buoc table m-auto md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4">Bước 3</p>
            <p className="bg-text text-[calc(1rem+0.5vw)] md:text-2xl text-center w-full md:w-1/2 m-auto">BỐ MẸ ĐIỀN FORM ĐĂNG KÝ DÙNG THỬ SỮA WOWTOP CHO CON YÊU</p>
            <FormOrder isProductTest />
          </div>
          <div className="flex max-md:flex-col gap-4 mb-4">
            <div className="flex-1">
              <p className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4">Bước 4</p>
              <p className="bg-text text-[calc(1rem+0.5vw)] md:text-2xl max-md:text-center">BỐ MẸ THAM GIA GROUP .... ĐỂ CẬP NHẬT KẾT QUẢ THEO TUẦN</p>
            </div>
            <div className="flex-1 relative">
              <Image src="/3.jpg" alt="3" width={469} height={257} className="w-full" />
              <Link href="/" className="absolute top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 italic uppercase text-[#84571B]">Tham gia group</Link>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-4 mb-4">
            <div className="flex-1 md:hidden">
              <p className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4">Bước 5</p>
              <p className="bg-text text-[calc(1rem+0.5vw)] md:text-2xl text-center">CHUYÊN GIA GỌI ĐIỆN PHỎNG VẤN VÀ CƠ HỘI DÙNG THỬ WOWTOP 3 THÁNG</p>
            </div>
            <div className="flex-1">
              <Image src="/2.jpg" alt="2" width={469} height={257} className="w-full" />
            </div>
            <div className="flex-1 max-md:hidden">
              <p className="buoc table m-auto md:inline-block md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4 float-right">Bước 5</p>
              <p className="bg-text text-[calc(1rem+0.5vw)] md:text-2xl text-end clear-both">CHUYÊN GIA GỌI ĐIỆN PHỎNG VẤN VÀ CƠ HỘI DÙNG THỬ WOWTOP 3 THÁNG</p>
            </div>
          </div>
          <div>
            <p className="buoc table m-auto md:text-3xl text-[calc(1.25rem+0.5vw)] mb-4">Bước 6</p>
            <p className="bg-text text-[calc(1rem+0.5vw)] md:text-2xl text-center m-auto mb-4">BỐ MẸ GHI NHẬN QUÁ TRÌNH SỬ DỤNG CỦA CON</p>
            <div className="flex gap-4 max-md:flex-col">
              <div className="flex-1">
                <Image src="/be-thap-cao.webp" alt="be-thap-cao" width={469} height={400} className="mb-4 w-full" />
                <p className="px-4 text-[#84571B]">Bố mẹ chụp 1 toàn dáng của con trước khi sử dụng sản phẩm và 1 ảnh toàn dáng của con cầm sản phẩm WowTop sau khi sử dụng sản phẩm</p>
              </div>
              <div className="flex-1">
                <Image src="/be-thap-cao.webp" alt="be-thap-cao" width={469} height={400} className="mb-4 w-full" />
                <p className="px-4 text-[#84571B]">VIDEO MẪU QUAY CẢNH BÓC HỘP VÀ CON SỬ DỤNG SẢN PHẨM WOWTOP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-3xl m-auto">
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center mb-4">
            <span className="uppercase font-bold bg-text text-[4vw] md:text-3xl py-2 mt-2">Điều khoản tham gia chương trình</span>
          </div>
          <ul className="text-[#84571B] mx-2">
            <li className="mb-1">* Bố mẹ khi tham gia chương trình đăng ký dùng thử đồng ý với Thể lệ và Điều khoản chương trình</li>
            <li className="mb-1">* Đồng ý cho Nhãn hàng sử dụng video, hình ảnh cho mục đích truyền thông sản phẩm</li>
            <li className="mb-1">* Mọi quyết định cuối cùng thuộc về ban tổ chức</li>
          </ul>
        </div>
      </section>
      <section>
        <Image src="/bg13.jpg" alt="bg13" width={3597} height={1358} />
      </section>
    </main>
  )
}

export default page