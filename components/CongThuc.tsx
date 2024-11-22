import Image from 'next/image'

function CongThuc() {
  return (
    <section className="bg-[url('/nen-ct.webp')] relative">
      <div className="flex flex-col items-center justify-center text-[24px] lg:text-[2vw] uppercase text-center py-4 lg:absolute lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <div>
          <p className="bg-text bg-clip-text text-transparent font-bold">The Ultimate Formula</p>
        </div>
        <div>
          <p className=" pt-1">
            <span className="bg-text bg-clip-text text-transparent">for </span>
            <span className="py-2 px-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 rounded-md text-white">Exceptional Height Growth</span>
          </p>
        </div>
      </div>
      <Image src="/artboard12.jpg" alt="" width={1920} height={1080} className="max-lg:hidden w-full" />
      <Image src="/PT.webp" alt="" width={150} height={150} className="absolute bottom-0 right-0 max-lg:hidden" />
      {/* circle */}
      <div className="absolute top-[32%] left-[27%] cursor-pointer w-[12%] hover:scale-110 duration-300 group max-lg:hidden">
        <Image src="/circle1.png" alt="circle1" width={240} height={240} className="w-full h-full" />
        <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-0 left-[-120%] w-[120%] opacity-0 group-hover:opacity-100 duration-300">
          Build Stronger Bones and Achieve Extraordinary Height with <strong>CBP</strong> (125mg/100g) and <strong>CPP</strong> (571mg/100g)<br />
          These ingredients enhance osteoblast activity, ensuring optimal bone development and supporting superior height growth. With Top-Tier <strong>Calcium</strong> Content (1475mg/100g) and the perfect Calcium. Ratio of 1.8:1, combined with Vitamin D3, K1, and essential minerals, this formula maximizes calcium absorption for healthier bones.
        </div>
      </div>
      <div className="absolute top-[14%] left-[54%] cursor-pointer w-[10%] hover:scale-110 duration-300 group max-lg:hidden">
        <Image src="/circle2.png" alt="circle1" width={200} height={200} className="w-full h-full" />
        <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[0%] left-[100%] w-[150%] opacity-0 group-hover:opacity-100 duration-300">
          <strong>DHA and ARA for Brain Development and Vision</strong><br />
          <strong>DHA and ARA</strong> support cognitive function, nervous system growth, and promote clear vision, helping your child develop mentally and visually.
        </div>
      </div>
      <div className="absolute top-[40%] left-[57%] w-[10%] cursor-pointer hover:scale-110 duration-300 group max-lg:hidden">
        <Image src="/circle3.png" alt="circle1" width={200} height={200} className="w-full h-full" />
        <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[10%] left-[100%] w-[120%] opacity-0 group-hover:opacity-100 duration-300">
          <strong>Lactoferrin and IgG for Immune Support</strong><br />
          These ingredients strengthen the immune system, offering antibacterial and antiviral properties that protect the body from harmful invaders.
        </div>
      </div>
      <div className="absolute bottom-[24%] left-[30%] w-[10%] cursor-pointer hover:scale-110 duration-300 group max-lg:hidden">
        <Image src="/circle4.png" alt="circle1" width={200} height={200} className="w-full h-full" />
        <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[0%] left-[-160%] w-[160%] opacity-0 group-hover:opacity-100 duration-300">
          <strong>OPO for Better Digestion</strong><br />
          <strong>OPO</strong> promotes a healthier digestive system by positively influencing the 100 trillion gut bacteria, supporting overall gut health. Additionally, it is enhanced with Bifidobacterium BB12 probiotics and prebiotics (FOS+GOS) for optimal digestive function
        </div>
      </div>
      <div className="absolute bottom-[12%] left-[50%] w-[10%] cursor-pointer hover:scale-110 duration-300 group max-lg:hidden">
        <Image src="/circle5.png" alt="circle1" width={200} height={200} className="w-full h-full" />
        <div className="bg-white shadow-[0px_0px_20px_16px_rgb(0_0_0/_0.05)] p-4 rounded-2xl text-[#84571B] absolute text-[0.9vw] top-[10%] left-[100%] w-[160%] opacity-0 group-hover:opacity-100 duration-300">
          <strong>Complete Nutrition for Lasting Energy</strong><br />
          Provides a steady supply of fat and energy, similar to a full nutritious meal. Hydrolyzed Whey Protein with ultra-small particle size ensures easy absorption, reducing the risk of milk allergies while delivering superior protein benefits.
        </div>
      </div>
      <div className="lg:hidden text-xs">
        <div className="flex flex-col justify-center items-center mt-2 ">
          <Image src="/Artboard 13.png" alt="bg-hop-sua" width={300} height={290} />
          <div className="flex flex-col px-2 mt-[-80px]">
            <div className="flex">
              <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                <Image src="/bong.webp" alt="bong" width={120} height={120} />
                <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Grow Taller and Stronger at the Osteoblast Level</span>
              </div>
              <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                <span className="text-[#84571B] font-semibold">
                  Build Stronger Bones and Achieve Extraordinary Height with CBP (125mg/100g) and CPP (571mg/100g)<br />
                  These ingredients enhance osteoblast activity, ensuring optimal bone development and supporting superior height growth. With Top-Tier Calcium Content (1475mg/100g) and the perfect Calcium
                  Ratio of 1.8:1, combined with Vitamin D3, K1, and essential minerals, this formula maximizes calcium absorption for healthier bones.
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                <Image src="/bong.webp" alt="bong" width={120} height={120} />
                <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Boost Digestion</span>
              </div>
              <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                <span className="text-[#84571B] font-semibold">
                  OPO for Better Digestion
                  OPO promotes a healthier digestive system by positively influencing the 100 trillion gut bacteria, supporting overall gut health. Additionally, it is enhanced with Bifidobacterium BB12 probiotics and prebiotics (FOS+GOS) for optimal digestive function.
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                <Image src="/bong.webp" alt="bong" width={120} height={120} />
                <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Comprehensive Nutritional Support</span>
              </div>
              <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                <span className="text-[#84571B] font-semibold">
                  Complete Nutrition for Lasting Energy
                  Provides a steady supply of fat and energy, similar to a full nutritious meal. Hydrolyzed Whey Protein with ultra-small particle size ensures easy absorption, reducing the risk of milk allergies while delivering superior protein benefits.
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                <Image src="/bong.webp" alt="bong" width={120} height={120} />
                <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Enhance Brain Power and Eye Health</span>
              </div>
              <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                <span className="text-[#84571B] font-semibold">
                  DHA and ARA for Brain Development and Vision
                  DHA and ARA support cognitive function, nervous system growth, and promote clear vision, helping your child develop mentally and visually.
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/4 w-1/3 relative flex justify-center items-center">
                <Image src="/bong.webp" alt="bong" width={120} height={120} />
                <span className="text-[#84571B] text-center text-shadow font-bold absolute max-w-[100px]">Boost Immunity</span>
              </div>
              <div className="md:w-3/4 w-2/3 flex items-center pr-4">
                <span className="text-[#84571B] font-semibold">
                  Lactoferrin and IgG for Immune Support
                  These ingredients strengthen the immune system, offering antibacterial and antiviral properties that protect the body from harmful invaders.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CongThuc