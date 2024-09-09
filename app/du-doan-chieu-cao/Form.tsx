'use client';

import { locale } from '@/config/VietnameseLocale';
import Select, { SingleValue } from 'react-select';
import { optionsGender, optionsProduct, optionsSport, optionsTime } from "@/config/SelectInformation";
import { ChangeEvent, FormEvent, useId, useState } from "react";
import { postInformations } from "@/services/heightCalculator";
import DatePicker, { registerLocale } from 'react-datepicker';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

function Form() {
  const [information, setInformation] = useState({
    fatherName: '',
    fatherHeight: 0,
    motherName: '',
    motherHeight: 0,
    phoneNumber: '',
    fullName: '',
    currentHeight: 0,
    currentWeight: 0,
  })
  const [gender, setGender] = useState<string | undefined>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date());
  const [currentProduct, setCurrentProduct] = useState('');
  const [sport, setSport] = useState<string | undefined>('');
  const [timeSleep, setTimeSleep] = useState<string | undefined>('');

  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInformation({ ...information, [e.target.name]: e.target.value })
  }
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!dateOfBirth) return
    const submitForm = { ...information, gender, date_of_birth: format(dateOfBirth.toString(), 'dd-MM-yyyy'), currentProduct, sport, timeSleep }
    try {
      const res = await postInformations(submitForm)
      router.push(`/du-doan-chieu-cao/${res.data.code}`)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="max-w-6xl m-auto">
      <div className="bg-[url('/dk12.webp')] bg-[length:100%_100%] rounded-2xl p-8">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <h2 className="text-center text-3xl mb-4 uppercase font-bold">Thông tin phụ huynh</h2>
            <div className="flex flex-col">
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <input
                  placeholder="Họ và tên bố *"
                  className="w-full rounded-2xl px-4 py-2 outline-none"
                  name="fatherName"
                  onChange={onChange}
                />
                <input
                  placeholder="Chiều cao bố *"
                  className="w-full rounded-2xl px-4 py-2 outline-none"
                  name="fatherHeight"
                  onChange={onChange}
                />
              </div>
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <input
                  placeholder="Họ và tên mẹ *"
                  className="w-full rounded-2xl px-4 py-2 outline-none"
                  name="motherName"
                  onChange={onChange}
                />
                <input
                  placeholder="Chiều cao mẹ *"
                  className="w-full rounded-2xl px-4 py-2 outline-none"
                  name="motherHeight"
                  onChange={onChange}
                />
              </div>
              <div>
                <input
                  placeholder="Số điện thoại phụ huynh *"
                  className="w-full rounded-2xl px-4 py-2 outline-none"
                  name="phoneNumber"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-center text-3xl mb-4 uppercase font-bold">Thông tin của con</h2>
            <div className="flex flex-col">
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <input
                  placeholder="Họ và tên con *"
                  className="md:w-1/2 rounded-2xl px-4 py-2 outline-none"
                  name="fullName"
                  onChange={onChange}
                />
                <Select
                  instanceId={(useId())}
                  options={optionsGender}
                  placeholder="Giới tính"
                  className="md:w-1/2"
                  name="gender"
                  onChange={(e) => setGender(e?.value)}
                />
              </div>
              <div className="flex max-md:flex-col gap-4 mb-4">
                <DatePicker
                  locale={locale}
                  className="w-full rounded-2xl px-4 py-2 outline-none"
                  name="date_of_birth"
                  selected={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e)}
                  dateFormat="dd/MM/yyyy"
                />
                <input
                  placeholder="Nhập chiều cao hiện tại của con (50-200cm) *"
                  className="md:w-1/2 rounded-2xl px-4 py-2 outline-none"
                  name="currentHeight"
                  onChange={onChange}
                />
              </div>
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <input
                  placeholder="Nhập cân nặng hiện tại của con (1-150kg) *"
                  className="md:w-1/2 rounded-2xl px-4 py-2 outline-none"
                  name="currentWeight"
                  onChange={onChange}
                />
                <Select
                  instanceId={(useId())}
                  options={optionsProduct}
                  placeholder="Hiện tại con đang sử dụng các sản phẩm tăng chiều cao nào *"
                  className="md:w-1/2"
                  isMulti
                  onChange={(e) => setCurrentProduct(e.map(item => item.value).toString())}
                />
              </div>
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <Select
                  instanceId={(useId())}
                  options={optionsSport}
                  placeholder="Con thường xuyên chơi thể thao, vận động không? *"
                  className="md:w-1/2"
                  onChange={(e) => setSport(e?.value)}
                />
                <Select
                  instanceId={(useId())}
                  options={optionsTime}
                  placeholder="Con thường đi ngủ lúc mấy giờ? *"
                  className="md:w-1/2"
                  onChange={(e) => setTimeSleep(e?.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#065691] rounded-2xl px-4 py-2 text-white text-xl" type="submit">Nhận phác đồ chiều cao</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form