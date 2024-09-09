import React from 'react'
import Image from 'next/image'
import { getInformations } from '@/services/heightCalculator'
import { ageCalculator } from '@/utils/ageCalculator'
import { Gender, heightCalculator } from '@/utils/heightCalculator'
import { InformationEntity } from '@/entities/information'

async function Successfully({ params }: { params: { code: string } }) {
  const { data } = await getInformations({ code: params.code }) as { data: InformationEntity[] }
  const resultCalculator = heightCalculator(
    data[0].currentHeight,
    ageCalculator(data[0].date_of_birth).years,
    ageCalculator(data[0].date_of_birth).months,
    data[0].fatherHeight,
    data[0].motherHeight,
    data[0].gender as Gender
  )
  if(!data) return <p>Không có dữ liệu</p>
  return (
    <div className="max-w-6xl m-auto">
      <div className="my-4">
        <div className="flex justify-center">
          <Image src="/logo2.png" alt="logo2" width={500} height={134} />
        </div>
        <div className="text-center">
          <h2 className="text-[#065691] text-6xl py-2">Chúc mừng</h2>
          <p className="text-2xl py-2">Mã phác đồ: {params.code}</p>
        </div>
        <div className="max-w-4xl m-auto my-2">
          <p className="text-center">Chúc mừng bố <strong>{data[0].fatherName}</strong> và <strong>{data[0].motherName}</strong> đã hoàn thành thông tin của bé <strong>{data[0].fullName}</strong>, đội ngũ chuyên gia sức khỏe của KID&apos;S CARE PLUS sẽ lên phác đồ chi tiết để gửi lại bạn.</p>
        </div>
        <div className="flex justify-center my-2">
          <p className="px-4 py-2 bg-liner rounded-2xl">Dự kiến chiều cao của con ở độ tuổi 20 là: <strong>{resultCalculator?.predictedHeightAt20}</strong>cm</p>
        </div>
        <p className="max-w-2xl m-auto text-center my-4">Để nhận kết quả Phác đồ dự đoán chiều cao chi tiết từng giai đoạn của bé <strong>{data[0].fullName}</strong>, phụ huynh vui lòng làm theo hướng dẫn sau đây:</p>
        <div className="max-w-3xl m-auto text-[#065691]">
          <p>Bước 1: Tham gia Nhóm <strong>Cho con cao lớn trưởng thành tận cùng</strong></p>
          <p>Bước 2: Nhắn tin cho admin <strong>Bác sĩ Lăng Hường</strong> mã phác đồ để nhận kết quả Phác đồ dự đoán chiều cao chi tiết nhất cùng hướng dẫn giúp tăng chiều cao phù hợp với tình trạng của con</p>
        </div>
      </div>
    </div>
  )
}

export default Successfully