'use client';

// import { locale } from '@/config/VietnameseLocale';
import { vi } from 'date-fns/locale';
import Select, { MultiValue, SingleValue } from 'react-select';
import { optionsGender, optionsProduct, optionsSport, optionsTime } from "@/config/SelectInformation";
import { ChangeEvent, FormEvent, useId, useState } from "react";
import { postInformations } from "@/services/heightCalculator";
import DatePicker, { registerLocale } from 'react-datepicker';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import { toast, ToastContainer } from 'react-toastify';
import { useForm, Controller, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormValues {
  fatherName: string;
  fatherHeight: number;
  motherName: string;
  motherHeight: number;
  phoneNumber: string;
  fullName: string;
  currentHeight: number;
  currentWeight: number;
  date_of_birth: Date;
  gender: string;
  currentProduct: string[];
  sport: string;
  timeSleep: string;
}

import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  fatherName: yup.string().required('Vui lòng nhập họ và tên bố'),
  fatherHeight: yup
    .number()
    .typeError('Vui lòng nhập chiều cao hiện tại của bố')
    .min(50, 'Chiều cao bố phải lớn hơn 50cm')
    .max(200, 'Chiều cao bố không được vượt quá 200cm')
    .required('Vui lòng nhập chiều cao của bố'),
  motherName: yup.string().required('Vui lòng nhập họ và tên mẹ'),
  motherHeight: yup
    .number()
    .typeError('Vui lòng nhập chiều cao hiện tại của mẹ')
    .min(50, 'Chiều cao mẹ phải lớn hơn 50cm')
    .max(200, 'Chiều cao mẹ không được vượt quá 200cm')
    .required('Vui lòng nhập chiều cao của mẹ'),
  phoneNumber: yup
    .string()
    .required('Vui lòng nhập số điện thoại phụ huynh')
    .matches(phoneRegExp, 'Vui lòng nhập số điện thoại hợp lệ'),
  fullName: yup.string().required('Vui lòng nhập họ và tên con'),
  currentHeight: yup
    .number()
    .typeError('Vui lòng nhập chiều cao hiện tại của con')
    .min(50, 'Chiều cao hiện tại phải lớn hơn 50cm')
    .max(200, 'Chiều cao hiện tại không được vượt quá 200cm')
    .required('Vui lòng nhập chiều cao hiện tại của con'),
  currentWeight: yup
    .number()
    .typeError('Vui lòng nhập cân nặng hiện tại của con')
    .min(1, 'Cân nặng hiện tại phải lớn hơn 1kg')
    .max(150, 'Cân nặng hiện tại không được vượt quá 150kg')
    .required('Vui lòng nhập cân nặng hiện tại của con'),
  date_of_birth: yup
    .date()
    .nullable()
    .required('Vui lòng chọn ngày sinh')
    .test('age', 'Tuổi của bé không được quá 20 tuổi', (value) => {
      if (!value) return false;
      const age = new Date().getFullYear() - value.getFullYear();
      return age <= 20;
    }),
  gender: yup.string().required('Vui lòng chọn giới tính'),
  currentProduct: yup.array().required('Trường sản phẩm con sử dụng không được bỏ trống.'),
  sport: yup.string().required('Vui lòng chọn sport'),
  timeSleep: yup.string().required('Vui lòng chọn thời gian ngủ'),
});

interface Option {
  label: string;
  value: string;
}
function Form() {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false)

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    if(!data.date_of_birth) return;
    const submitForm = { ...data, date_of_birth: format(data.date_of_birth.toString(), 'dd-MM-yyyy'), currentProduct: data.currentProduct.toString() }
    try {
      const res = await postInformations(submitForm)
      router.push(`/du-doan-chieu-cao/${res.data.code}`)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false);
    }
  }
  
  const id = useId()
  return (
    <div className="max-w-6xl m-auto">
      <div className="bg-[url('/dk12.webp')] bg-[length:100%_100%] rounded-2xl p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2 className="text-center text-3xl mb-4 uppercase font-bold">Thông tin phụ huynh</h2>
            <div className="flex flex-col">
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <div className="w-full">
                  <input
                    placeholder="Họ và tên bố *"
                    className="w-full rounded-2xl px-4 py-3 outline-none"
                    {...register("fatherName", { required: true })}
                  />
                  {errors.fatherName && <span className="text-[red] text-xs p-2">Vui lòng nhập họ tên bố</span>}
                </div>
                <div className="w-full">
                  <input
                    placeholder="Chiều cao bố *"
                    className="w-full rounded-2xl px-4 py-3 outline-none"
                    type="number"
                    {...register("fatherHeight", { required: true, valueAsNumber: true })}
                  />
                  {errors.fatherHeight && <span className="text-[red] text-xs p-2">{errors.fatherHeight.message}</span>}
                </div>
              </div>
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <div className="w-full">
                
                <input
                  placeholder="Họ và tên mẹ *"
                  className="w-full rounded-2xl px-4 py-3 outline-none"
                  {...register("motherName", { required: true })}
                />
                {errors.motherName && <span className="text-[red] text-xs p-2">Vui lòng nhập họ tên mẹ</span>}
                </div>
                <div className="w-full">
                <input
                  placeholder="Chiều cao mẹ *"
                  className="w-full rounded-2xl px-4 py-3 outline-none"
                  type="number"
                  {...register("motherHeight", { required: true, valueAsNumber: true })}
                />
                {errors.motherHeight && <span className="text-[red] text-xs p-2">Vui lòng nhập chiều cao mẹ</span>}
                </div>
              </div>
              <div>
                <input
                  placeholder="Số điện thoại phụ huynh *"
                  className="w-full rounded-2xl px-4 py-3 outline-none"
                  {...register("phoneNumber", { required: true })}
                />
                {errors.phoneNumber && <span className="text-[red] text-xs p-2">{errors.phoneNumber.message}</span>}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-center text-3xl mb-4 uppercase font-bold">Thông tin của con</h2>
            <div className="flex flex-col">
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <div className="md:w-1/2">
                <input
                  placeholder="Họ và tên con *"
                  className="w-full rounded-2xl px-4 py-3 outline-none"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && <span className="text-[red] text-xs p-2">Vui lòng nhập họ tên con</span>}
                </div>
                <div className="md:w-1/2">
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={optionsGender}
                      instanceId={id}
                      placeholder="Giới tính"
                      className="w-full"
                      getOptionLabel={(option: Option) => option.label}
                      getOptionValue={(option: Option) => option.value}
                      value={optionsGender.find((opt) => opt.value === field.value)} // Set the value correctly
                      onChange={(selectedOption: SingleValue<Option>) =>
                        field.onChange(selectedOption ? selectedOption.value : "")
                      }
                    />
                  )}
                />
                {errors.gender && <span className="text-[red] text-xs p-2">{errors.gender.message}</span>}
                </div>
              </div>
              <div className="flex max-md:flex-col gap-4 mb-4">
                <div className="w-full flex flex-col">
                <Controller
                  name="date_of_birth"
                  control={control}
                  defaultValue={new Date()}
                  render={({ field }) => (
                    // @ts-ignore
                    <DatePicker
                      {...field}
                      locale={vi}
                      className="w-full rounded-2xl px-4 py-3 outline-none"
                      selected={field.value ? new Date(field.value) : null}
                      onChange={(date: Date | null) => field.onChange(date)}
                      dateFormat="dd/MM/yyyy"
                    />
                  )}
                />
                {errors.date_of_birth && <span className="text-[red] text-xs p-2">{errors.date_of_birth.message}</span>}
                </div>
                <div className="w-full">
                <input
                  placeholder="Nhập chiều cao hiện tại của con (50-200cm) *"
                  className="w-full rounded-2xl px-4 py-3 outline-none"
                  type="number"
                  {...register("currentHeight", { required: true, valueAsNumber: true })}
                />
                {errors.currentHeight && <span className="text-[red] text-xs p-2">{errors.currentHeight.message}</span>}
                </div>
              </div>
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <div className="md:w-1/2">
                <input
                  placeholder="Nhập cân nặng hiện tại của con (1-150kg) *"
                  className="w-full rounded-2xl px-4 py-3 outline-none"
                  type="number"
                  {...register("currentWeight", { required: true, valueAsNumber: true })}
                />
                {errors.currentWeight && <span className="text-[red] text-xs p-2">{errors.currentWeight.message}</span>}
                </div>
                <div className="md:w-1/2">
                <Controller
                  name="currentProduct"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={optionsProduct}
                      instanceId={id}
                      isMulti
                      placeholder="Hiện tại con đang sử dụng các sản phẩm tăng chiều cao nào *"
                      className="w-full"
                      getOptionLabel={(option: Option) => option.label}
                      getOptionValue={(option: Option) => option.value}
                      value={optionsProduct.filter((opt) => field.value?.includes(opt.value))} // Set the value correctly
                      onChange={(selectedOptions) =>
                        field.onChange(selectedOptions ? selectedOptions.map((opt) => opt.value) : [])
                      }
                    />
                  )}
                />
                {errors.currentProduct && <span className="text-[red] text-xs p-2">{errors.currentProduct.message}</span>}
                </div>
              </div>
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <div className="md:w-1/2">
                <Controller
                  name="sport"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      instanceId={id}
                      options={optionsSport}
                      placeholder="Con thường xuyên chơi thể thao, vận động không? *"
                      className="w-full"
                      getOptionLabel={(option: Option) => option.label}
                      getOptionValue={(option: Option) => option.value}
                      value={optionsGender.find((opt) => opt.value === field.value)} // Set the value correctly
                      onChange={(selectedOption: SingleValue<Option>) =>
                        field.onChange(selectedOption ? selectedOption.value : "")
                      }
                    />
                  )}
                />
                {errors.sport && <span className="text-[red] text-xs p-2">{errors.sport.message}</span>}
                </div>
                <div className="md:w-1/2">
                <Controller
                  name="timeSleep"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      instanceId={id}
                      options={optionsTime}
                      placeholder="Con thường đi ngủ lúc mấy giờ? *"
                      className="w-full"
                      getOptionLabel={(option: Option) => option.label}
                      getOptionValue={(option: Option) => option.value}
                      value={optionsGender.find((opt) => opt.value === field.value)} // Set the value correctly
                      onChange={(selectedOption: SingleValue<Option>) =>
                        field.onChange(selectedOption ? selectedOption.value : "")
                      }
                    />
                  )}
                />
                {errors.timeSleep && <span className="text-[red] text-xs p-2">{errors.timeSleep.message}</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center items-center bg-[#065691] rounded-2xl px-4 py-3">
              <button disabled={loading} className={`${loading ? 'text-[#ccc]' : 'text-white'} text-xl mr-2`} type="submit">Nhận phác đồ chiều cao</button>
              {loading && <LoadingIcon size="small" />}
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Form