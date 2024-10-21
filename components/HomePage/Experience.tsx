import { formatDate } from "@/utils/formatDate"
import Image from "next/image"
import Link from "next/link";
import { getNews } from '@/services/news';
import { NewsEntity } from "@/entities/news";
import { truncateText } from "@/utils/truncateText";

async function Experience() {
  const { data } = await getNews({ page: 1, pageSize: 4 }) as { data: NewsEntity[] }
  const dataWithoutFirstItem = data.slice(1)
  return (
    <section className="mb-20">
      <div className="max-w-6xl m-auto px-4">
        <div className="bg-text font-bold text-4xl uppercase text-center mb-4">
          <p className="mb-2">Kinh nghiệm</p>
          <p className="mb-2">TĂNG CHIỀU CAO VƯỢT TRỘI CHO BÉ</p>
        </div>
        <div className="flex gap-4 max-md:flex-col">
          <div className="w-full md:w-3/4">
            <div className="mb-4">
              <h2 className="text-3xl font-bold">Bí kíp tăng chiều cao</h2>
            </div>
            <div className="flex mb-7 h-[2px] bg-[#ccc] w-4/5" />
            {data.length === 0 ? (
              <div>Không có dữ liệu</div>
            ) : (
              <div className="flex gap-4 flex-col md:flex-row">
              <div className="w-full md:w-2/5 flex flex-col">
                <Link href={`/tin-tuc/${data[0].slug}`}>
                <Link href="/"></Link>
                  <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data[0].imageUrl}`} alt={data[0].title} width={350} height={220} className="m-auto" />
                </Link>
                {/* <Link href={`/tin-tuc/${data[0].slug}`} className="mt-2"> */}
                <Link href="/" className="mt-2">
                  <p className="text-[#84571B] font-semibold text-lg max-md:text-center">{data[0].title}</p>
                </Link>
                <div className="my-3 text-justify" dangerouslySetInnerHTML={{ __html: truncateText(data[0].content, 200) }} />
                <div className="text-[#84571B]">
                  <small>{formatDate(data[0].createdAt)}</small>
                </div>
                <div>
                  {/* <Link className="mt-3 text-[#84571B] px-4 py-2 rounded-md border-[1px] border-[#065691] inline-block" href={`/tin-tuc`} > */}
                  <Link className="mt-3 text-[#84571B] px-4 py-2 rounded-md border-[1px] border-[#065691] inline-block" href="/" >
                    Tất cả bài viết
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-3/5">
                {dataWithoutFirstItem.map(item => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-[100px] flex">
                      {/* <Link href={`/tin-tuc/${data[0].slug}`} className="w-full"> */}
                      <Link href="/" className="w-full">
                        <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.imageUrl}`} alt={item.title} width={150} height={100} className="w-full" />
                      </Link>
                    </div>
                    <div className="flex flex-col flex-1">
                      {/* <Link href={`/tin-tuc/${item.slug}`} className="text-[#84571B] font-semibold text-lg">{item.title}</Link> */}
                      <Link href="/" className="text-[#84571B] font-semibold text-lg">{item.title}</Link>
                      <div className="text-[#84571B]">
                        <small>{formatDate(item.createdAt)}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
          <div className="w-full md:w-1/4">
            <div className="mb-4">
              <h2 className="text-3xl font-bold">Tin mới</h2>
            </div>
            <div className="flex mb-7 h-[2px] bg-[#ccc] w-4/5" />
            <ul className="list-decimal max-md:px-4 pl-4">
              {data.map(item => (
                <li key={item.id} className="mb-4">
                  {/* <Link href={`/tin-tuc/${item.slug}`} className="text-[#84571B] font-semibold text-lg">{item.title}</Link> */}
                  <Link href="/" className="text-[#84571B] font-semibold text-lg">{item.title}</Link>
                  <div className="text-[#84571B]">
                    <small>{formatDate(item.createdAt)}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience