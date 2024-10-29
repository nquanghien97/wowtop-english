import { formatDate } from "@/utils/formatDate"
import Image from "next/image"
import Link from "next/link";
import { getNews } from '@/services/news';
import { NewsEntity } from "@/entities/news";
import { truncateText } from "@/utils/truncateText";

async function Experience() {
  const { data } = await getNews({ page: 1, pageSize: 5 }) as { data: NewsEntity[] }
  const dataWithoutFirstItem = data.slice(1, -1)
  return (
    <section className="mb-20">
      <div className="max-w-6xl m-auto px-4">
        <div className="bg-text font-bold text-4xl uppercase text-center mb-4">
          <p className="py-2">Kinh nghiệm</p>
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
                    <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data[0].imageUrl}`} alt={data[0].title} width={350} height={220} className="m-auto" />
                  </Link>
                  <Link href={`/tin-tuc/${data[0].slug}`} className="mt-2">
                    <p className="text-[#84571B] font-semibold text-lg max-md:text-center">{data[0].title}</p>
                  </Link>
                  <div className="my-3 text-justify" dangerouslySetInnerHTML={{ __html: truncateText(data[0].content, 200) }} />
                  <div className="text-[#84571B]">
                    <small>{formatDate(data[0].createdAt)}</small>
                  </div>
                  <div>
                    <Link className="mt-3 text-[#84571B] px-4 py-2 rounded-md border-[1px] border-[#065691] inline-block" href={`/tin-tuc`} >
                      Tất cả bài viết
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-3/5">
                  {dataWithoutFirstItem.map(item => (
                    <div key={item.id} className="flex gap-6 mb-4">
                      <div className="w-[200px] flex">
                        <Link href={`/tin-tuc/${item.slug}`} className="w-full">
                          <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.imageUrl}`} alt={item.title} width={240} height={200} className="w-full" />
                        </Link>
                      </div>
                      <div className="flex flex-col flex-1">
                        <Link href={`/tin-tuc/${item.slug}`} className="text-[#84571B] font-semibold text-lg">{item.title}</Link>
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
              {data.length === 0 ? (
                <p>Không có dữ liệu</p>
              ) : (
                data.map(item => (
                  <li key={item.id} className="mb-4">
                    <Link href={`/tin-tuc/${item.slug}`} className="text-[#84571B] font-semibold text-lg line-clamp-2">{item.title}</Link>
                    <div className="text-[#84571B]">
                      <small>{formatDate(item.createdAt)}</small>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        {data.length > 0 && (
          <div className="flex gap-4">
            <Link className="w-2/5 overflow-hidden" href={`/tin-tuc/${data[data.length - 1].slug}`}>
              <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data[data.length - 1].imageUrl}`} alt={data[data.length - 1].title} width={440} height={276} className="w-full" />
            </Link>
            <div className="w-3/5">
              <div>
                <Link href={`/tin-tuc/${data[data.length - 1].slug}`} className="text-[#84571B] font-bold text-lg">{data[data.length - 1].title}</Link>
              </div>
              <small className="text-[#9f9e9a]">{`Ngày đăng: ${formatDate(data[data.length - 1].createdAt)}`}</small>
              <div className="my-3 text-justify text-sm line-clamp-4" dangerouslySetInnerHTML={{ __html: data[0].content }} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience