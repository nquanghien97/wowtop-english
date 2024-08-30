import React from 'react'

function FormOrder() {
  return (
    <section className="mb-8 bg-[bg-[#69dbe1]">
      <div className="px-4 py-8 max-w-6xl m-auto bg-[url('/bgr-dk-pc.webp')] bg-cover bg-center rounded-2xl">
        <div className="mb-8">
          <h2 className="text-[#065691] text-4xl uppercase text-center font-bold">Đăng ký mua hàng</h2>
        </div>
        <div className="w-2/3 px-4">
          <form className="flex flex-col gap-4">
            <div className="w-full flex gap-4">
              <div className="w-full">
                <input className="w-full p-4 rounded-md outline-none" placeholder='Họ và tên*' />
              </div>
              <div>
                <input className="w-full p-4 rounded-md outline-none" placeholder='Số điện thoại*' />
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div>
                <input className="w-full p-4 rounded-md outline-none" placeholder='Sản phẩm đăng ký mua*' />
              </div>
              <div>
                <input className="w-full p-4 rounded-md outline-none" placeholder='Số lượng' />
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div>
                <input className="w-full p-4 rounded-md outline-none" placeholder='Tỉnh/thành phố' />
              </div>
              <div>
                <input className="w-full p-4 rounded-md outline-none" placeholder='Quận/huyện*' />
              </div>
              <div>
                <input className="w-full p-4 rounded-md outline-none" placeholder='Xã/phường' />
              </div>
            </div>
            <div className="w-full flex gap-4">
              <input className="w-full p-4 rounded-md outline-none" placeholder='Địa chỉ (số nhà, tên đường)*' />
            </div>
            <div className="flex items-center gap-2 text-white italic">
              <input id="checkbox" type="checkbox" className="w-5 h-5 rounded-md outline-none cursor-pointer border-none" />
              <label htmlFor="checkbox">Bố mẹ đã đọc và đồng ý <strong>Điều khoản đăng ký</strong></label>
            </div>
            <p className="text-white italic">Hãy liên hệ chuyên gia dinh dưỡng theo số <strong>028 555 555 555</strong> để được tư vấn thêm</p>
            <div className="flex justify-center">
              <button className="px-8 py-2 bg-[#065691] rounded-full text-white italic uppercase hover:opacity-85 duration-300">Xác nhận</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FormOrder