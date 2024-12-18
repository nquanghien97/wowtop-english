import Feedback from '@/components/HomePage/Feedback';
import FormOrder from '@/components/HomePage/FormOrder';
import Image from 'next/image'
import Link from 'next/link';
// import Experience from '@/components/HomePage/Experience';
import dynamic from "next/dynamic";
import CongThuc from '@/components/CongThuc';
import LazyYouTubeEmbed from '@/components/YoutubeEmbed';
const Experience = dynamic(() => import('@/components/HomePage/Experience'), { ssr: false })

// export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <section className="relative">
        <div className="px-[10%] m-auto absolute top-1/2 -translate-y-1/2">
          <div className=" flex justify-between items-center">
            <div className="w-1/2">
              <p className="bg-text-blue uppercase font-bold text-xs md:text-5xl lg:mb-4 py-2 lg:!leading-[64px]">
                Support height growth at the osteoblast level
              </p>
              <Link href="/" className="header-bg px-6 py-2 text-xs md:text-2xl rounded-full uppercase text-white">
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <Image src="/bg-banner.png" alt="bg-banner" width={1920} height={1080} className="w-full" />
      </section>
      <CongThuc />
      <section className="mb-20 bg-[url('/pt-bg-yellow.webp')] bg-[length:100%_100%]">
        <div className="max-w-4xl m-auto">
          <div className="flex flex-col items-center justify-center text-2xl md:text-3xl uppercase mb-8 text-center">
            <div>
              <p className="bg-[#002A9E] bg-clip-text text-transparent pt-2">Boosting Height at the Osteoblast Level*</p>
            </div>
            <div>
              <p className="bg-[#002A9E] bg-clip-text font-bold text-transparent pt-2">Grow Taller in Both Quantity and Quality</p>
            </div>
          </div>
          <div className="mt-4 mb-14 px-4">
            <div className="border-[1px] border-[#84571B] rounded-full px-2">
              <span className="relative top-[-15px] bg-[#e9fafb] text-xs md:text-base rounded-full text-[#84571B] font-semibold inline-block px-3 py-2 text-center">(*) Osteoblasts build the bone matrix, guiding calcium and minerals into the bones. This process directly impacts bone quality and the body’s maximum height potential.</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex max-md:flex-col gap-10 px-4">
              <div className="md:w-1/2 bg-[url('/bg2f.png')] bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl">
                <Image src="/cbp.png" alt="bg-sua" width={160} height={175} className="m-auto" />
                <span className="text-[#135689]">
                  <strong>The CBP</strong> in WOWTOP features an exceptionally small molecular size of <strong>30 kilodaltons (roughly 1/50 billionth the size of a nano particle)</strong>, enabling it to penetrate deeply and effectively stimulate osteoblast activity.
                </span>
              </div>
              <div className="md:w-1/2 bg-10-lit bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl">
                <Image src="/10l.webp" alt="bg-sua" width={320} height={175} />
                <span className="text-[#135689]">
                  <strong>CBP</strong> is one of the rarest ingredients in the dairy industry. It takes <strong>10 liters of natural</strong> grass-fed colostrum to extract just <strong>4 grams of CBP</strong>.
                </span>
              </div>
            </div>
            <div className="px-4 mt-10 md:mt-16">
              <div className="bg-[url('/bg2f.png')] bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl relative">
                <Image src="/xuong.webp" alt="bg-sua" width={215} height={290} className="mx-auto md:hidden" />
                <span className="w-full md:w-3/5 inline-block text-[#135689]">
                  <strong>CBP</strong> enhances osteoblast production and activity, forming the bone matrix and accelerating bone elongation. Additionally, <strong>CBP</strong> increases bone density and improves absorption of critical nutrients like calcium, iron, and zinc, promoting height <strong>growth in both quantity and quality</strong>.
                </span>
                <Image src="/xuong.webp" alt="bg-sua" width={276} height={276} className="mx-auto max-md:hidden absolute top-[-40px] right-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8 md:mb-20">
        <div className="max-w-6xl m-auto px-4">
          <div>
            <p className="bg-text text-center text-2xl md:text-3xl uppercase">New Zealand Experts <br /><strong>Reveal the Science of Height Growth</strong><br /> at the Osteoblast Level</p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 w-full">
              <LazyYouTubeEmbed videoId='izcwyjUpurI' />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-[#84571B] text-justify">Bone lengthening occurs through the ossification of growth cartilage into bone tissue, a process primarily driven by osteoblasts. These cells create the bone matrix (the structural framework of bones) while enhancing metabolism and depositing calcium and phosphorus to fill and harden the matrix. This activity results in bone lengthening at both ends.<br /><strong>WOWTOP</strong> not only provides essential nutrients like <strong>Calcium, Phosphorus, Vitamin D3, and K2</strong> as building blocks for bone formation but also contains <strong>CBP</strong>, a unique ingredient that stimulates osteoblast activity. This combination accelerates the ossification process, promoting height growth in both quantity and quality.</p>
              <Image src="/asset_11.png" alt='asset_11' width={400} height={1} className="mx-auto my-4" />
              <p className="text-[#84571B] mb-4"><strong>David, Height Growth Specialist – New Zealand Nutrition Institute</strong></p>
              <Link href="#" className="text-[#84571B] underline">Learn More Today!</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mb-16">
        <div className="max-w-6xl m-auto md:px-4">
          <div className="mb-4">
            <h2 className="text-3xl md:text-5xl bg-text py-4 font-bold uppercase text-center">Common Mistakes in Increasing Height</h2>
          </div>
          <div className="p-3 bg-[#f6f0de] border-2 border-[#fcf2d9] rounded-2xl flex flex-wrap justify-center relative">
            <Image src="/PT.webp" alt="" width={175} height={175} className="absolute bottom-[-10%] left-[-10%] max-md:hidden" />
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h4.png" alt="h4" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Focusing Only on Centimeters</h4>
                <p className="text-[#002A9E]">
                  Height in centimeters is important, but if bone quality isn’t ensured, children can easily face issues like osteoporosis and weak bones. WOWTOP helps improve height by supporting osteoblast activity, ensuring growth in both quantity and quality.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h5.png" alt="h5" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Thinking Calcium and Minerals Are Enough</h4>
                <p className="text-[#002A9E]">
                  Bones determine height, but calcium and minerals alone are just the building materials. CBP and CPP are needed to activate osteoblasts, helping bones absorb calcium better, grow longer, and become stronger.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h1.png" alt="h1" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Believing Milk Alone Is Enough</h4>
                <p className="text-[#002A9E]">
                  Milk is an excellent source of nutrition, but it needs to be paired with exercise and proper routines to maximize growth. WOWTOP’s Health Coaches will guide your child with customized nutrition and activity plans to reach their full height potential.
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/5 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h3.png" alt="h3" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Thinking Genetics Are Everything</h4>
                <p className="text-[#002A9E]">
                  Genetics only account for 23% of a child’s height. The real key lies in nutrition, exercise, and a healthy lifestyle, which make a significant difference.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex justify-center items-center mb-4">
                <Image src="/h2.png" alt="h2" width={136} height={136} />
              </div>
              <div>
                <h4 className="text-[#002A9E] font-semibold text-center text-xl mb-4">Ignoring Critical Growth Phases</h4>
                <p className="text-[#002A9E]">
                  The golden periods for growth—from 0 to 5 years old and pre-puberty—are vital for a child’s height. During these times, proper nutrition and care are essential to unlock their maximum growth potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/dong-co.png')] bg-[length:100%_100%] bg-center h-[1062px] relative max-lg:hidden z-[30]">
        <div className="max-w-6xl m-auto px-4">
          <div className="flex justify-center py-4">
            <div className="bg-text2 flex px-12 py-4 text-4xl rounded-full">
              <h3 className="text-[#84571B] font-bold">Sign Up for Free Trial</h3>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl md:text-5xl text-[#002A9E] uppercase text-center !leading-tight">Milk from the Happiest Cows <br /><span><strong>in the World</strong></span></h2>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between w-full mb-8">
              <div className="m-auto w-2/3 flex justify-center">
                <div className="flex justify-between w-full mb-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center flex-1">
                      <Image src="/conbo_img_1.png" alt="conbo_img_1" width={100} height={45} className='' />
                    </div>
                    <div className="flex items-center flex-1">
                      <p className="text-white font-bold text-2xl text-center">NON-GMO</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center flex-1">
                      <Image src="/conbo_img_2.png" alt="conbo_img_2" width={100} height={45} className='' />
                    </div>
                    <div className="flex items-center flex-1">
                      <p className="text-white font-bold text-2xl text-center">NATURAL <br />INGREDIENTS</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center flex-1">
                      <Image src="/conbo_img_3.png" alt="conbo_img_3" width={100} height={45} className='' />
                    </div>
                    <div className="flex items-center flex-1">
                      <p className="text-white font-bold text-2xl text-center">GRASS FED</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center relative mb-24">
              <div className="relative w-1/2 flex justify-center items-center">
                <Image src="/chung-nhan-bg.png" alt="chung-nhan-bg" width={543} height={357} className="absolute w-full" />
                <div className="flex flex-col items-center relative z-20 p-8">
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-1.png" alt='chung-nhan-1' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">Non-GMO: Certified milk from non-genetically modified sources.</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-2.png" alt='chung-nhan-2' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">GRASS FED: Certified 100% natural grass-fed cows.</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src="/chung-nhan-3.png" alt='chung-nhan-3' width={276} height={276} className="w-1/6" />
                    <p className="text-[#002A9E] font-bold text-xl">NATURAL INGREDIENTS: Using natural resources.</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={467} height={382} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/bg-co-m.png')] bg-center bg-[length:100%_100%] relative lg:hidden py-8 z-[30]">
        <div className="mb-8">
          <h2 className="text-[5vw] text-[#002A9E] uppercase text-center !leading-tight">Milk from the Happiest Cows <br /><span><strong>in the World</strong></span></h2>
        </div>
        <div className="flex justify-center w-full flex-col">
          <div className="mx-auto w-2/3">
            <div className="flex justify-between mb-4 w-full">
              <Image src="/conbo_img_1.png" alt="conbo_img_1" width={120} height={90} className="w-1/4" />
              <Image src="/conbo_img_2.png" alt="conbo_img_2" width={120} height={90} className="w-1/4" />
              <Image src="/conbo_img_3.png" alt="conbo_img_3" width={120} height={90} className="w-1/4" />
            </div>
          </div>
          <div className="flex flex-col items-center relative z-20 w-2/3 m-auto">
            <div className="flex justify-center items-center gap-2 w-full">
              <Image src="/chung-nhan-1.png" alt='chung-nhan-1' width={150} height={150} className="w-1/4" />
              <p className="text-[#002A9E] text-3xl font-bold flex-1">NON-GMO</p>
            </div>
            <div className="flex justify-center items-center gap-2 w-full">
              <Image src="/chung-nhan-2.png" alt='chung-nhan-2' width={150} height={150} className="w-1/4" />
              <p className="text-[#002A9E] text-3xl font-bold flex-1">GRASS FED</p>
            </div>
            <div className="flex justify-center items-center gap-2 w-full">
              <Image src="/chung-nhan-3.png" alt='chung-nhan-3' width={150} height={150} className="w-1/4" />
              <p className="text-[#002A9E] text-3xl font-bold flex-1">NATURAL INGREDIENTS</p>
            </div>
          </div>
          <div className="flex justify-center w-2/3 m-auto mb-9">
            <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={500} height={400} className="w-full" />
          </div>
        </div>
      </section>
      <section className="lg:pb-[40%] pb-[80%] bg-[length:100%_100%] pt-[120px] lg:pt-40 relative z-20 top-[-150px] mb-8">
        <Image src="/nha-may.jpeg" width={2400} height={1800} alt='nhà máy' className="absolute inset-0 h-full w-full" />
        <div className="px-4 relative z-10">
          <div className="bg-[url('/asset_10.png')] bg-[length:100%_100%] text-center py-4">
            <h2 className="uppercase md:text-4xl text-[#002A9E] font-bold pb-1">WOWTOP&apos;S MANUFACTURING FACILITY IN NEW ZEALAND</h2>
            <p className="md:text-4xl text-[#002A9E] uppercase">SETTING THE STANDARD IN MILK INNOVATION!</p>
          </div>
        </div>
      </section>
      <div className="mt-[-120px]">
        {/* <Feedback /> */}
        <FormOrder />
        <Experience />
      </div>
    </main>
  )
}
