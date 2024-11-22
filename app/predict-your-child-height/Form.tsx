'use client';

// import { locale } from '@/config/VietnameseLocale';
import { vi } from 'date-fns/locale';
import Select, { SelectInstance, SingleValue } from 'react-select';
import { optionsGender, optionsProduct, optionsSport, optionsTime } from "@/config/SelectInformation";
import { useEffect, useId, useRef, useState } from "react";
import { postInformations } from "@/services/heightCalculator";
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import { toast, ToastContainer } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import data from '@/app/data.json'

interface FormValues {
  parentName: string;
  phoneNumber: string;
  fatherHeight: number;

  motherHeight: number;
  fullName: string;
  currentHeight: number;
  currentWeight: number;
  date_of_birth: Date;
  gender: string;
  currentProduct: string[];
  sport: string;
  timeSleep: string;
  province: string;
  district: string;
  ward: string;
  address: string;
  provinceLabel?: string;
  districtLabel?: string;
  wardLabel?: string;
}


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  parentName: yup.string().required('Please enter the mother\'s full name'),
  fatherHeight: yup
    .number()
    .typeError('Please enter the father\'s current height')
    .min(50, 'The father\'s height must be greater than 50cm')
    .max(200, 'The father\'s height must not exceed 200cm')
    .required('Please enter the father\'s height'),
  motherHeight: yup
    .number()
    .typeError('Please enter the mother\'s current height')
    .min(50, 'The mother\'s height must be greater than 50cm')
    .max(200, 'The mother\'s height must not exceed 200cm')
    .required('Please enter the mother\'s height'),
  phoneNumber: yup
    .string()
    .required('Please enter the parent\'s phone number')
    .matches(phoneRegExp, 'Please enter a valid phone number'),
  fullName: yup.string().required('Please enter the child\'s full name'),
  currentHeight: yup
    .number()
    .typeError('Please enter the child\'s current height')
    .min(50, 'The current height must be greater than 50cm')
    .max(200, 'The current height must not exceed 200cm')
    .required('Please enter the current height'),
  currentWeight: yup
    .number()
    .typeError('Please enter the child\'s current weight')
    .min(1, 'The current weight must be greater than 1kg')
    .max(150, 'The current weight must not exceed 150kg')
    .required('Please enter the current weight'),
  date_of_birth: yup
    .date()
    .nullable()
    .required('Please select the date of birth')
    .test('age', 'The child\'s age must not exceed 20 years', (value: Date) => {
      if (!value) return false;
      const age = new Date().getFullYear() - value.getFullYear();
      return age <= 20;
    })
    .test('age', 'The child\'s age must be greater than 1 year', (value: Date) => {
      if (!value) return false;
      const age = new Date().getFullYear() - value.getFullYear();
      return age >= 1;
    })
    .test('dob', 'Invalid date of birth', (value: Date) => {
      if (!value) return false;
      const today = new Date();
      return value <= today;
    }),
  gender: yup.string().required('Please select a gender'),
  province: yup.string().required('Please select a province'),
  district: yup.string().required('Please select a district'),
  ward: yup.string().required('Please select a ward'),
  address: yup.string().required('Please enter an address'),
  currentProduct: yup.array().required('The field for products the child uses cannot be empty.'),
  sport: yup.string().required('Please select the frequency of exercise'),
  timeSleep: yup.string().required('Please select sleep duration'),
  provinceLabel: yup.string(),
  districtLabel: yup.string(),
  wardLabel: yup.string(),
});


interface Option {
  label: string;
  value: string;
}
function Form() {
  const { register, handleSubmit, watch, control, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [suggestHeight, setSuggestHeight] = useState<number>();
  const [suggestWeight, setSuggestWeight] = useState<number>();
  const [optionProvinces, setOptionProvinces] = useState<{ label: string, value: string }[]>([]);
  const [optionsDistricts, setOptionsDistricts] = useState<{ label: string, value: string }[]>([]);
  const [optionsWards, setOptionsWards] = useState<{ label: string, value: string }[]>([]);

  const router = useRouter();
  const suggestValue = (value: number) => {
    return [Number(`${value}.1`), Number(`${value}.2`), Number(`${value}.3`), Number(`${value}.4`), Number(`${value}.5`), Number(`${value}.6`), Number(`${value}.7`), Number(`${value}.8`), Number(`${value}.9`)]
  }

  const currentHeight = watch('currentHeight')
  const currentWeight = watch('currentWeight')
  useEffect(() => {
    if (suggestHeight) {
      setValue('currentHeight', suggestHeight)
    }
  }, [setValue, suggestHeight])

  useEffect(() => {
    if (suggestWeight) {
      setValue('currentWeight', suggestWeight)
    }
  }, [setValue, suggestWeight])

  //get provinces
  useEffect(() => {
    setOptionProvinces(data.map(item => ({ label: item.FullName, value: item.Code })))
  }, [])

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    if (!data.date_of_birth) return;
    const submitForm = {
      parentName: data.parentName,
      phoneNumber: data.phoneNumber,
      fatherHeight: data.fatherHeight,
      motherHeight: data.motherHeight,
      province: data.provinceLabel,
      district: data.districtLabel,
      ward: data.wardLabel,
      address: data.address,
      fullName: data.fullName,
      gender: data.gender,
      date_of_birth: format(data.date_of_birth.toString(), 'dd-MM-yyyy'),
      currentHeight: data.currentHeight,
      currentWeight: data.currentWeight,
      currentProduct: data.currentProduct.toString(),
      sport: data.sport,
      timeSleep: data.timeSleep,
    }
    try {
      const res = await postInformations(submitForm)
      router.push(`/du-doan-chieu-cao/${res.data.code}`)
    } catch (err) {
      if (err instanceof Error) {
        toast.error("Something went wrong, please try again")
      }
    } finally {
      setLoading(false);
    }
  }
  const selectDistrictRef = useRef<SelectInstance<Option, false>>(null);
  const selectWardRef = useRef<SelectInstance<Option, false>>(null);

  const id = useId()
  return (
    <div className="max-w-6xl m-auto">
      <div className="backgound-form rounded-2xl p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2 className="text-center text-3xl mb-4 uppercase font-bold">Parent&apos;s Information</h2>
            <div className="flex flex-col">
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <div className="w-full">
                  <input
                    placeholder="Parent's Full Name *"
                    className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    {...register("parentName", { required: true })}
                  />
                  {errors.parentName && <span className="text-[red] text-xs p-2">{errors.parentName.message}</span>}
                </div>
                <div className="w-full">
                  <input
                    placeholder="Parent's Phone Number *"
                    className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    {...register("phoneNumber", { required: true })}
                  />
                  {errors.phoneNumber && <span className="text-[red] text-xs p-2">{errors.phoneNumber.message}</span>}
                </div>
              </div>
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <div className="w-full">
                  <input
                    placeholder="Father's Current Height (cm) *"
                    className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    {...register("fatherHeight", { required: true })}
                  />
                  {errors.fatherHeight && <span className="text-[red] text-xs p-2">{errors.fatherHeight.message}</span>}
                </div>
                <div className="w-full">
                  <input
                    placeholder="Mother's Current Height (cm) *"
                    className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    {...register("motherHeight", { required: true, valueAsNumber: true })}
                  />
                  {errors.motherHeight && <span className="text-[red] text-xs p-2">{errors.motherHeight.message}</span>}
                </div>
              </div>
              <div className="flex gap-4 md:flex-row flex-col">
                <div className="md:w-1/2">
                  <Controller
                    name="province"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={optionProvinces}
                        instanceId={id}
                        placeholder="City*"
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
                        value={optionsDistricts?.find((opt) => opt.value === field.value)} // Set the value correctly
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
                        placeholder="Ward*"
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
                    placeholder="Address (House Number, Street Name)*"
                    className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    {...register("address", { required: true })}
                  />
                  {errors.address && <span className="text-[red] text-xs p-2">{errors.address.message}</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-center text-3xl mb-4 uppercase font-bold">Child&apos;s Information</h2>
            <div className="flex flex-col">
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <div className="md:w-1/2">
                  <input
                    placeholder="Child's Full Name *"
                    className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && <span className="text-[red] text-xs p-2">{errors.fullName.message}</span>}
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
                        placeholder="Gender"
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
                        className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
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
                    placeholder="Enter your child's current height (50-200cm) *"
                    className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    {...register("currentHeight", { required: true })}
                  />
                  <div className="flex max-md:justify-center">
                    {(!!currentHeight && currentHeight % 1 === 0) && (
                      <ul className="flex gap-1 mt-2">
                        {suggestValue(currentHeight).map(value => (
                          <li
                            key={value}
                            className="p-1 border-[1px] text-[#996014] border-[#996014] text-xs rounded-md cursor-pointer"
                            onClick={() => setSuggestHeight(value)}
                          >
                            {value}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {errors.currentHeight && <span className="text-[red] text-xs p-2">{errors.currentHeight.message}</span>}
                </div>
              </div>
              <div className="flex gap-4 mb-4 max-md:flex-col">
                <div className="md:w-1/2">
                  <input
                    placeholder="Enter your child's current weight (1-150kg) *"
                    className="w-full rounded-full px-4 py-3 outline-none placeholder-[#002A9E] placeholder:italic placeholder:font-semibold"
                    {...register("currentWeight", { required: true, valueAsNumber: true })}
                  />
                  <div className="flex max-md:justify-center">
                    {(!!currentWeight && currentWeight % 1 === 0) && (
                      <ul className="flex gap-1 mt-2">
                        {suggestValue(currentWeight).map(value => (
                          <li
                            key={value}
                            className="p-1 border-[1px] text-[#996014] border-[#996014] text-xs rounded-md cursor-pointer"
                            onClick={() => setSuggestWeight(value)}
                          >
                            {value}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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
                        placeholder="Which height-increasing products they are currently using? *"
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
                        placeholder="Does your child frequently engage in sports or physical activities? *"
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
                        placeholder="What time does your child usually go to bed? *"
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
            <div className="flex justify-center items-center header-bg rounded-full px-4 py-3 font-bold">
              <button disabled={loading} className={`${loading ? 'text-[#ccc]' : 'text-white'} text-xl mr-2`} type="submit">Retrieve Height Growth Plan</button>
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