import React from 'react'

function DuDoanChieuCao() {
  return (
    <main>
      <section>
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
              <div>
                <h2 className="text-center">Thông tin phụ huynh</h2>
                <div className="flex flex-col">
                  <div className="flex gap-4 mb-4">
                    <input placeholder="Họ và tên bố" className="w-full" />
                    <input placeholder="Chiều cao bố" className="w-full" />
                  </div>
                  <div className="flex gap-4 mb-4">
                    <input placeholder="Họ và tên mẹ" className="w-full" />
                    <input placeholder="Chiều cao mẹ" className="w-full" />
                  </div>
                  <div>
                    <input placeholder="Số điện thoại phụ huynh" className="w-full" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DuDoanChieuCao 