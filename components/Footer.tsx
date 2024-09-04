import Image from "next/image"
import Link from "next/link"
function Footer() {
  return (
    <footer className="bg-[#065691]">
      <div className="max-w-6xl m-auto px-4">
        <div className="flex items-center gap-8 py-4">
          <Image src="/logo.png" alt="logo" width={275} height={75} className="relative top-[-12px]" />
          <h3 className="uppercase text-xl font-semibold">
            <Link href={`/`} className="text-white">Nhận tư vấn</Link>
          </h3>
          <h3 className="uppercase text-xl font-semibold">
            <Link href={`/`} className="text-white">Hòm thư góp ý</Link>
          </h3>
        </div>
      </div>
      <div className="bg-[url('/bg-footer.webp')] bg-[length:100%_100%]">
        <div className="max-w-6xl m-auto px-4 py-7">
          <div className="flex w-full justify-between mb-8">
            <div>
              <h3 className="text-xl text-white font-bold">Theo dõi chúng tôi</h3>
              <div>

              </div>
            </div>
            <ul className="text-white">
              <li className="py-2">Lời nhắn tới cha mẹ</li>
              <li className="py-2">Lưu ý về Cookie</li>
              <li className="py-2">Tùy chỉnh Cookie</li>
              <li className="py-2">Pháp lý</li>
            </ul>
            <ul className="text-white">
              <li className="py-2">Chuỗi cung ứng NZ-VN</li>
              <li className="py-2">Chính sách quyền riêng tư</li>
              <li className="py-2">Tùy chỉnh quyền riêng tư</li>
              <li className="py-2">Công thức tăng chiều cao</li>
            </ul>
            <ul className="text-white">
              <li className="py-2">Hướng dẫn đặt hàng và thanh toán</li>
              <li className="py-2">Chính sách kiểm tra, đổi/trả hàng hóa</li>
              <li className="py-2">Chính sách giao nhận</li>
              <li className="py-2">Câu hỏi thường gặp</li>
            </ul>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <h4 className="text-white font-bold mb-2">Trụ sở chính:</h4>
              <p className="text-white mb-4">Nhà B2 Dự án khu hỗn hợp trung tâm thương mại, dịch vụ công cộng văn phòng và nhà ở để bán tại 108 Nguyễn Trãi, Phường Thượng Đình, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam</p>
              <div className="mb-4">
                <p className="text-white font-bold">Số giấy chứng nhận đăng ký kinh doanh</p>
                <p className="text-white">0110015834</p>
              </div>
              <div className="flex gap-4">
                <Image src="/footer-image/bct.png" alt="Bộ công thương" width={130} height={40} />
                <Image src="/footer-image/dmca.png" alt="DMCA" width={130} height={40} />
              </div>
            </div>
            <div className="w-1/2">
              <h4 className="text-white font-bold">Đây là một website ứng dụng</h4>
              <p className="text-white mb-4">Trong website này chúng tôi tổng hợp các thông tin liên quan về sản phẩm, thành phần hoạt chất, thông tin dinh dưỡng, ứng dụng tính toán ộ trình tăng chiều cao, trò chơi trí tuệ cho trẻ. Tuy nhiên trẻ em cần phải có sự cho phép của cha mẹ khi tham quan website.</p>
              <div className="text-white">
                <p className="font-bold">Sản phẩm KID&apos;S CARE PLUS do nhà máy Australian Dairy Park Pty Ltd sản xuất</p>
                <ul className="list-disc px-4">
                  <li>Công ty TNHH Giải pháp Sức khỏe Sắc đẹp Minh Châu theo công bố số 01/MINHCHÂU/2024</li>
                  <li>Thương hiệu KID&apos;S CARE PLUS được bảo lãnh bởi Công ty TNHH Giải pháp Sức khỏe Sắc đẹp Minh Châu. Các nhà phân phối, nhà bán lẻ trực tiếp và nhà bán hàng tiếp thị liên kết được quyền sử dụng thương hiệu KID&apos;S CARE PLUS để gới thiệu sản phẩm nhưng phải tự chịu trách nhiệm về tính pháp lý do thông tin mình cung cấp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer