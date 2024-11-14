'use client';
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 1,
    imageUrl: '/ic1.png',
    name: 'Nguyễn Thị A',
    question: '1Lorem ipsum dolor sit amet, consectetur adip',
    answer: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque elit. Sed ut tellus ac neque mattis ullamcorper. Sed non neque elit. Sed ut tellus ac neque mattis ullamcorper.'
  },
  {
    id: 2,
    imageUrl: '/ic2.png',
    name: 'Nguyễn Thị B',
    question: '2Lorem ipsum dolor sit amet, consectetur adipdsadassadasd',
    answer: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque elit. Sed ut tellus ac neque mattis ullamcorper. Sed non neque elit. Sed ut tellus ac neque mattis ullamcorper.'
  },
  {
    id: 3,
    imageUrl: '/ic3.png',
    name: 'Nguyễn Thị C',
    question: '3Lorem ipsum dolor sit amet, consectetur adip',
    answer: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque elit. Sed ut tellus ac neque mattis ullamcorper. Sed non neque elit. Sed ut tellus ac neque mattis ullamcorper.'
  },
  {
    id: 4,
    imageUrl: '/ic4.png',
    name: 'Nguyễn Thị D',
    question: '4Lorem ipsum dolor sit amet, consectetur adip',
    answer: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque elit. Sed ut tellus ac neque mattis ullamcorper. Sed non neque elit. Sed ut tellus ac neque mattis ullamcorper.'
  }
]
function Question() {

  const [indexQuestion, setIndexQuestion] = useState(0)

  return (
    <section className="mb-8">
      <div className="max-w-6xl m-auto ">
        <h2 className="lg:text-4xl text-2xl uppercase text-[#065691] font-bold text-center mb-4">WOW mom hỏi - WOWTOP trả lời</h2>
        <div className="shadow-xl border-2 border-white rounded-xl">
          <div className="flex bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 rounded-t-xl">
            <div className="w-1/2 py-2">
              <p className="text-white text-2xl text-center font-semibold">Câu hỏi</p>
            </div>
            <div className="w-1/2 py-2">
              <p className="text-white text-2xl text-center font-semibold">Câu trả lời</p>
            </div>
          </div>
          <div className="flex my-2">
            <ul className="w-1/2 max-h-[400px] overflow-auto">
              {data.map((item, index) => (
                <li key={item.id} className={`flex max-lg:flex-col items-center gap-2 p-2 cursor-pointer hover:bg-[white] duration-300 rounded-xl ${index === indexQuestion ? 'bg-[white]' : ''}`} onClick={() => setIndexQuestion(index)}>
                  <div className="w-[40px]">
                    <Image src={item.imageUrl} alt={item.name} width={40} height={40} className="rounded-full w-full" />
                  </div>
                  <div className="w-full">
                    <p className="text-[#065691] font-semibold text-xl max-lg:text-center">{item.name}</p>
                    <p className="text-[#84571B] text-lg">{item.question}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-1/2 p-2">
              <p className="text-[#065691] font-semibold">{data[indexQuestion].answer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Question