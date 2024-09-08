import React from 'react'

function DuDoanChieuCao() {
  return (
    <main>
      <section className="mb-8">
        <div className="my-12 text-[#7f4807]">
          <div className="max-w-4xl m-auto">
            <h1 className="text-4xl font-bold text-center my-4 uppercase">Phác đồ dự đoán chiều cao tương lai</h1>
            <p className="text-center">Phát triển chiều cao luôn là mong muốn không chỉ của các phụ huynh mà còn của chính các con. Chiều
            cao không chỉ phụ thuộc vào gen mà còn phụ thuộc nhiều vào chế độ dinh dưỡng, sinh hoạt và tập luyện.</p>
            <p className="text-center"><strong>Hãy cùng KID&apos;S CARE PLUS lập nên phác đồ dự đoán chiều cao tương lai để có thể xác định được giai đoạn
            vàng phù hợp</strong> cho lộ trình phát triển chiều cao tối đa của trẻ nhé</p>
          </div>
        </div>
        <div className="max-w-6xl m-auto">
          <div className="bg-[url('/dk12.webp')] bg-[length:100%_100%] rounded-2xl p-8">
            <form action="">
              <div className="mb-4">
                <h2 className="text-center text-3xl mb-4 uppercase font-bold">Thông tin phụ huynh</h2>
                <div className="flex flex-col">
                  <div className="flex gap-4 mb-4">
                    <input placeholder="Họ và tên bố *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                    <input placeholder="Chiều cao bố *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                  </div>
                  <div className="flex gap-4 mb-4">
                    <input placeholder="Họ và tên mẹ *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                    <input placeholder="Chiều cao mẹ *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                  </div>
                  <div>
                    <input placeholder="Số điện thoại phụ huynh *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-center text-3xl mb-4 uppercase font-bold">Thông tin của con</h2>
                <div className="flex flex-col">
                  <div className="flex gap-4 mb-4">
                    <input placeholder="Họ và tên con *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                    <input placeholder="Giới tính *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                  </div>
                  <div className="flex gap-4 mb-4">
                    <input placeholder="Ngày tháng năm sinh *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                    <input placeholder="Nhập chiều cao hiện tại của con (50-200cm) *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                  </div>
                  <div className="flex gap-4 mb-4">
                    <input placeholder="Nhập cân nặng hiện tại của con (1-150kg) *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                    <input placeholder="Hiện tại con đang sử dụng các sản phẩm tăng chiều cao nào *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                  </div>
                  <div className="flex gap-4 mb-4">
                    <input placeholder="Con thường xuyên chơi thể thao, vận động không? *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                    <input placeholder="Con thường đi ngủ lúc mấy giờ? *" className="w-full rounded-2xl px-4 py-2 outline-none" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-[#065691] rounded-2xl px-4 py-2 text-white text-xl">Nhận phác đồ chiều cao</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DuDoanChieuCao 