'use client'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import Select, { SelectInstance, SingleValue } from 'react-select';
import { useEffect, useId, useRef, useState } from 'react';
import { OrderEntity } from '@/entities/order';
import { createOrder } from '@/services/orderServices';
import { toast, ToastContainer } from 'react-toastify';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import Image from 'next/image'
import data from '@/app/data.json'

interface FormValues extends OrderEntity {
  provinceLabel?: string;
  districtLabel?: string;
  wardLabel?: string;
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  fullName: yup.string().required('Please enter your full name'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Please enter a valid phone number')
    .required('Please enter your phone number'),
  productName: yup.string().required('Please enter the product name'),
  quantity: yup
    .number()
    .typeError('Please select a quantity')
    .required('Please select a quantity')
    .test('quantity', 'Quantity must be greater than 0', (value: number) => {
      if (!value) return false;
      return value > 0
    }),
  province: yup.string().required('Please select a province/city'),
  district: yup.string().required('Please select a district'),
  ward: yup.string().required('Please select a ward'),
  address: yup.string().required('Please enter an address'),
  provinceLabel: yup.string(),
  districtLabel: yup.string(),
  wardLabel: yup.string(),
  term: yup.bool().oneOf([true], 'Parents must agree to the registration terms')
});

interface Option {
  label: string;
  value: string;
}

function FormOrder(props: { isProductTest?: boolean }) {
  const { isProductTest = false } = props;
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const id = useId()
  const [optionProvinces, setOptionProvinces] = useState<{ label: string, value: string }[]>([]);
  const [optionsDistricts, setOptionsDistricts] = useState<{ label: string, value: string }[]>([]);
  const [optionsWards, setOptionsWards] = useState<{ label: string, value: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const selectDistrictRef = useRef<SelectInstance<Option, false>>(null);
  const selectWardRef = useRef<SelectInstance<Option, false>>(null);

  useEffect(() => {
    setOptionProvinces(data.map(item => ({ label: item.FullName, value: item.Code })))
  }, [])

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const submitForm = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      productName: data.productName,
      quantity: data.quantity,
      province: data.provinceLabel,
      district: data.districtLabel,
      ward: data.wardLabel,
      address: data.address,
    }
    try {
      await createOrder(submitForm)
      toast.success('Order registration successful. We will contact you shortly!')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mb-8 bg-[bg-[#69dbe1]">
      <div className="px-4 py-8 max-w-6xl m-auto bg-[url('/dki3.webp')] md:bg-[length:100%_100%]  bg-center rounded-[50px]">
        <div className="mb-8">
          <h2 className="text-[#002A9E] text-4xl uppercase text-center font-bold">PLACE YOUR ORDER NOW</h2>
        </div>
        <div className="flex">
          <div className="w-full px-4">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex gap-4 max-md:flex-col">
                <div className="md:w-1/2">
                  <input
                    className="w-full p-4 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    placeholder='Full Name*'
                    {...register('fullName')}
                  />
                  {errors.fullName && <span className="text-[red] text-xs p-2">{errors.fullName.message}</span>}
                </div>
                <div className="md:w-1/2">
                  <input
                    className="w-full p-4 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    placeholder='Phone Number*'
                    {...register('phoneNumber')}
                  />
                  {errors.phoneNumber && <span className="text-[red] text-xs p-2">{errors.phoneNumber.message}</span>}
                </div>
              </div>
              <div className="w-full flex gap-4 max-md:flex-col">
                <div className="md:w-1/2">
                  <input
                    className="w-full p-4 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    placeholder='Product to Order*'
                    {...register('productName')}
                  />
                  {errors.productName && <span className="text-[red] text-xs p-2">{errors.productName.message}</span>}
                </div>
                <div className="md:w-1/2">
                  <input
                    type='number'
                    className="w-full p-4 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    placeholder='Quantity'
                    {...register('quantity')}
                  />
                  {errors.quantity && <span className="text-[red] text-xs p-2">{errors.quantity.message}</span>}
                </div>
              </div>
              <div className="w-full flex gap-4 flex-col">
                <div className="flex gap-4 max-md:flex-col">
                  <div className="md:w-1/2">
                    <Controller
                      name="province"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={optionProvinces}
                          instanceId={id}
                          placeholder="Province / City*"
                          className="w-full"
                          getOptionLabel={(option: Option) => option.label}
                          getOptionValue={(option: Option) => option.value}
                          value={optionProvinces.find((opt) => opt.value === field.value)} // Set the value correctly
                          onChange={async (selectedOption: SingleValue<Option>) => {
                            field.onChange(selectedOption ? selectedOption.value : "")
                            const provinceId = selectedOption?.value;
                            selectDistrictRef.current?.clearValue();
                            selectWardRef.current?.clearValue();
                            setValue('provinceLabel', selectedOption ? selectedOption.label : "")
                            if (provinceId) {
                              setOptionsDistricts(data.flatMap(item => item.District.filter(item1 => item1.ProvinceCode === provinceId)).map(item3 => ({ label: item3.FullName, value: item3.Code })));
                            }
                          }
                          }
                        />
                      )}
                    />
                    {errors.province && <span className="text-[red] text-xs p-2">{errors.province.message}</span>}
                  </div>
                  <div className="md:w-1/2">
                    <Controller
                      name="district"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          ref={selectDistrictRef}
                          options={optionsDistricts}
                          instanceId={id}
                          placeholder="District*"
                          className="w-full"
                          getOptionLabel={(option: Option) => option.label}
                          getOptionValue={(option: Option) => option.value}
                          value={optionsDistricts.find((opt) => opt.value === field.value)} // Set the value correctly
                          onChange={async (selectedOption: SingleValue<Option>) => {
                            field.onChange(selectedOption ? selectedOption.value : "")
                            setValue('districtLabel', selectedOption ? selectedOption.label : "")
                            const districtId = selectedOption?.value;
                            selectWardRef.current?.clearValue();
                            if (districtId) {
                              setOptionsWards(data.flatMap(item => item.District.flatMap(item1 => item1.Ward?.filter(item2 => item2.DistrictCode === districtId))).filter(item4 => item4 !== undefined).flatMap(item3 => ({ label: item3.FullName, value: item3.Code })));
                            }
                          }
                          }
                        />
                      )}
                    />
                    {errors.district && <span className="text-[red] text-xs p-2">{errors.district.message}</span>}
                  </div>
                </div>
                <div className="flex gap-4 max-md:flex-col">
                  <div className="md:w-1/2">
                    <Controller
                      name="ward"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          ref={selectWardRef}
                          options={optionsWards}
                          instanceId={id}
                          placeholder="Ward / Commune*"
                          className="w-full"
                          getOptionLabel={(option: Option) => option.label}
                          getOptionValue={(option: Option) => option.value}
                          value={optionsWards.find((opt) => opt.value === field.value)} // Set the value correctly
                          onChange={(selectedOption: SingleValue<Option>) => {
                            setValue('wardLabel', selectedOption ? selectedOption.label : "")
                            field.onChange(selectedOption ? selectedOption.value : "")
                          }
                          }
                        />
                      )}
                    />
                    {errors.ward && <span className="text-[red] text-xs p-2">{errors.ward.message}</span>}
                  </div>
                  <div className="md:w-1/2">
                    <input
                      placeholder="Address (House number, street name)*"
                      className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                      {...register("address", { required: true })}
                    />
                    {errors.address && <span className="text-[red] text-xs p-2">{errors.address.message}</span>}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-white italic">
                <input id="checkbox" type="checkbox" {...register('term')} className="w-5 h-5 rounded-full outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold cursor-pointer border-none" />
                <label htmlFor="checkbox" className="text-[#002A9E] ml-2">By proceeding, you confirm that you have read and agreed to our Terms and Conditions.</label>
                {errors.term && <span className="text-[red] text-xs p-2">{errors.term.message}</span>}
              </div>
              <p className="text-[#002A9E] italic">Need Help? Call our Nutrition Experts at <strong>028 555 555 555</strong> for personalized advice and support!</p>
              <div className="flex justify-center">
                <div className="flex justify-center items-center bg-[#002A9E] rounded-full px-16 py-4">
                  <button type='submit' className="text-white italic uppercase hover:opacity-85 duration-300 mr-2">CONFIRM YOUR ORDER</button>
                  {loading && <LoadingIcon size="small" />}
                </div>
              </div>
            </form>
          </div>
          <div className="mt-[-40px] max-md:hidden">
            <Image src="/hop.png" alt="giot2" width={400} height={600} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default FormOrder