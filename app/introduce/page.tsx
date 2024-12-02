import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <main className="bg-gioi-thieu">
      <section className="md:mb-20">
        <div className="px-[10%] m-auto bg-[url('/gioi-thieu/asset_1.png')] bg-[length:100%_100%]">
          <div className=" flex justify-between items-center">
            <div className="w-1/2">
              <p className="bg-text-blue uppercase font-bold text-xs md:text-5xl lg:mb-4 py-2 lg:!leading-[64px]">
                Helps increase height from the cellular level
              </p>
            </div>
            <div className="w-1/2">
              <Image src="/gioi-thieu/asset_2.png" alt='' width={1267} height={1162} className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="max-w-7xl m-auto md:bg-[url('/gioi-thieu/asset_3.png')] bg-[length:100%_100%]">
          <div className="flex p-8 max-md:flex-col">
            <div className="w-2/5 md:relative mx-auto">
              <Image src="/gioi-thieu/asset_4.png" alt="asset_4" width={256} height={452} className="w-[90%] md:absolute md:top-[-120px]" />
            </div>
            <div className="w-full md:w-3/5">
              <div>
                <h2 className="text-xl text-[#002A9E] uppercase font-semibold">WOWTOP PREMIUMN NUTRITIONAL GROWTH MILK FORMULA</h2>
                <p className="mb-4 text-xl text-[#002A9E] uppercase font-semibold"> is a high-quality nutritional formula designed for children aged 1 and above, providing essential nutrients for their growth and development.</p>
                <div className="w-full h-[2px] bg-[#002A9E] mb-4" />
                <div className="text-[#84571B]">
                  <p className="mb-2"><strong>WOWTOP nutritional milk</strong> powder is the result of the latest scientific research that applies a mechanism for height growth from osteoblasts—a breakthrough in surpassing genetic.</p>
                  <p className="mb-2">Thanks to its high content of CBP (standardized colostrum protein), WOWTOP increases both the quantity and quality of osteoblasts, promoting bone growth beyond genetic potential. This boosts the body&lsquo;s demand for essential minerals like calcium, phosphorus, and magnesium, ensuring complete bone development. WOWTOP contains the highest mineral content on the market, providing the necessary nutrients for optimal bone growth, helping children exceed their height potential.</p>
                  <p>WOWTOP is imported from New Zealand, renowned for producing the &quot;best milk in the world&quot; from cows that graze on natural grass. This ensures the milk is clean, nutrient-rich, and meets the highest global standards for infant nutrition.</p>
                  <p>Using WOWTOP helps children grow taller not just in height, but also in bone quality. Thanks to the CBP (Standardized Colostrum Protein) mechanism, it activates bone progenitor cells, enhancing the growth and strength of the bone structure. This mechanism maximizes calcium and mineral absorption, supporting superior height development in both &quot;quantity&quot; (cm of height) and &quot;quality&quot; (bone density and strength).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl m-auto px-2">
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center max-w-4xl m-auto mb-8">
            <span className="uppercase font-bold bg-text-blue text-[5vw] md:text-5xl py-2 mt-2">Source & Factory</span>
          </div>
          <div className="flex max-md:flex-col mb-4">
            <div className="w-full md:w-2/5">
              <h3 className="font-bold text-[#002A9E] text-xl mb-2">Produced and imported from New Zealand</h3>
              <p className="text-[#002A9E] mb-2">The premium WOWTOP formula is produced by New Zealand Pure Dairy (NZPDP), located in North Shore, New Zealand. Established in 2010, NZPDP has over 14 years of experience in manufacturing infant formula products for global markets.</p>
              <p className="text-[#84571B] font-semibold mb-2">The New Zealand Pure Dairy factory has the most advanced automation technology</p>
              <ul className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4">
                <li className="flex mb-2">
                  <div className="flex items-center mr-2">
                    <Image src="/gioi-thieu/asset_6.png" alt="asset_6" width={60} height={60} />
                  </div>
                  <p className="text-[#002A9E] font-semibold">Equipped with the most advanced machinery (imported from Sweden, Germany, Japan, and other countries).</p>
                </li>
                <li className="flex mb-2">
                  <div className="flex items-center mr-2">
                    <Image src="/gioi-thieu/asset_6.png" alt="asset_6" width={60} height={60} />
                  </div>
                  <p className="text-[#002A9E] font-semibold">Equipped with the most advanced machinery (imported from Sweden, Germany, Japan, and other countries).</p>
                </li>
                <li className="flex mb-2">
                  <div className="flex items-center mr-2">
                    <Image src="/gioi-thieu/asset_6.png" alt="asset_6" width={60} height={60} />
                  </div>
                  <p className="text-[#002A9E] font-semibold">Equipped with the most advanced machinery (imported from Sweden, Germany, Japan, and other countries).</p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-3/5">
              <Image src="/gioi-thieu/asset_7.png" alt="asset_7" width={791} height={533} className="w-full" />
            </div>
          </div>
          <div className="flex">
            <Image src="/gioi-thieu/asset_8.png" alt="asset_8" width={40} height={40} className="mr-2" />
            <h3 className="font-bold text-[#002A9E] text-xl mb-2">Ensure an optimal environment for livestock breeding and milk extraction to achieve the highest quality.</h3>
          </div>
          <div className="mb-8">
            <p className="mb-2">With a manufacturing foundation of 3 HIGHs: High Technology, High Speed, and High-skilled Technical Team, NZPDP ensures that products comply with international and local standards, obtaining the highest certifications both globally and domestically, such as:</p>
            <Image src="/cn.png" alt='cn' width={828} height={112} className="w-full md:w-1/2 mb-2" />
            <ul className="text-[#002A9E]">
              <li><strong>Non GMO:</strong> Certification for non-GMO ingredients</li>
              <li><strong>Grass Fed:</strong> Certification for milk sourced from grass-fed cows</li>
              <li><strong>Natural Ingredient:</strong> Certification for using natural ingredients</li>
              <li><strong>GMP -</strong> World-class Good Manufacturing Practice certification</li>
              <li><strong>Hazard -</strong> Hazard analysis and control system for infant and toddler formula</li>
              <li>Risk Management Program: Managed by New Zealand&apos;s Ministry for Primary Industries (MPI)</li>
              <li><strong>Animal Product Exporter:</strong> Certified by MPI</li>
              <li>CNCA, CFDA, CCIC: Along with various other certifications</li>
            </ul>
          </div>
          <div className="flex max-md:flex-col mb-8">
            <div className="w-full md:w-3/5">
              <Image src="/gioi-thieu/asset_9.png" alt="asset_9" width={791} height={533} className="w-full" />
            </div>
            <div className="w-full md:w-2/5">
              <h3 className="font-bold text-[#002A9E] text-xl mb-2">State-of-the-art production lines</h3>
              <p className="text-[#84571B] font-semibold mb-2">Cows are guaranteed to live in a natural, clean, and high-quality environment.</p>
              <div>
                <div className="flex gap-8 mb-8">
                  <div className="w-1/2 flex items-center">
                    <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4 relative">
                      <span>The cows are massaged along their back and sides with automatic stiff-bristle brushes.</span>
                      <Image src="/gioi-thieu/arrow_right.png" alt="arrow_right" width={42} height={32} className="absolute right-[-10%] top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <div className="flex items-center w-1/2">
                    <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4 relative">
                      <span>Go to the breakfast area.</span>
                      <Image src="/gioi-thieu/arrow_down.png" alt="arrow_down" width={42} height={32} className="absolute left-1/2 bottom-[-70%] -translate-x-1/2" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 mb-8">
                  <div className="w-1/2 flex items-center">
                    <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4 relative">
                      <p>MILKING.<br />Connect to a computer for real-time monitoring of health indicators and early detection of potential risks in cows.</p>
                      <Image src="/gioi-thieu/arrow_down.png" alt="arrow_down" width={42} height={32} className="absolute left-1/2 bottom-[-30%] -translate-x-1/2" />
                    </div>
                  </div>
                  <div className="flex items-center w-1/2">
                    <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4 relative">
                      <span>The process described involves a cleaning system with mechanical arms that sanitize the cow&apos;s udders and teats using warm water, while also stimulating milk production during the cow&apos;s meal time. This ensures both hygiene and milk flow optimization.</span>
                      <Image src="/gioi-thieu/arrow_left.png" alt="arrow_left" width={42} height={32} className="absolute left-[-16%] top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-4 relative">
                    <span>Moving, playing, and frolicking in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col mb-8">
            <div className="md:w-2/5">
              <h3 className="font-bold text-[#002A9E] text-xl mb-4">The &apos;Best Milk in the World&apos; source from New Zealand.</h3>
              <p className="text-[#002A9E]">Thanks to using New Zealand milk from grass-fed cows and a strict milking process, WOWTOP has a delicious taste and high nutritional content. New Zealand milk is known as the &quot;best milk in the world&quot; coming from free-range cows that graze on fresh grass year-round, nurtured by experienced New Zealand farmers.</p>
            </div>
            <div className="w-full md:w-3/5">
              <Image src="/gioi-thieu/asset_10.png" alt="asset_10" width={791} height={533} className="w-full" />
            </div>
          </div>
          <div className="flex flex-wrap max-md:flex-col">
            <div className="px-2 md:w-1/3">
              <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-8 mb-[16%]">
                <Image src="/gioi-thieu/asset_11.png" alt="asset_11" width={100} height={100} className="m-auto mt-[-20%]" />
                <p>New Zealand, with its vast pastures and mild climate, provides an ideal environment for dairy farming. The country uses organic farming methods, with livestock grazing freely on fresh grass. Growth hormones are strictly prohibited in dairy cattle farming. Due to its isolated location and clean environment, New Zealand is free from external diseases and parasites, ensuring top-quality milk production. This makes New Zealand the perfect place for producing high-quality milk.</p>
              </div>
            </div>
            <div className="px-2 md:w-1/3">
              <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-8 mb-[16%]">
                <Image src="/gioi-thieu/asset_12.png" alt="asset_12" width={100} height={100} className="m-auto mt-[-20%]" />
                <p>New Zealand, with its vast pastures and mild climate, provides an ideal environment for dairy farming. The country uses organic farming methods, with livestock grazing freely on fresh grass. Growth hormones are strictly prohibited in dairy cattle farming. Due to its isolated location and clean environment, New Zealand is free from external diseases and parasites, ensuring top-quality milk production. This makes New Zealand the perfect place for producing high-quality milk.</p>
              </div>
            </div>
            <div className="px-2 md:w-1/3">
              <div className="bg-[url('/gioi-thieu/asset_5.png')] bg-[length:100%_100%] p-8 mb-[16%]">
                <Image src="/gioi-thieu/asset_13.png" alt="asset_13" width={100} height={100} className="m-auto mt-[-20%]" />
                <p>New Zealand, with its vast pastures and mild climate, provides an ideal environment for dairy farming. The country uses organic farming methods, with livestock grazing freely on fresh grass. Growth hormones are strictly prohibited in dairy cattle farming. Due to its isolated location and clean environment, New Zealand is free from external diseases and parasites, ensuring top-quality milk production. This makes New Zealand the perfect place for producing high-quality milk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl m-auto">
          <div className="bg-[url('/asset_24.png')] bg-[length:100%_100%] min-h-[120px] flex items-center justify-center max-w-5xl m-auto mb-8">
            <span className="uppercase font-bold bg-text-blue text-[5vw] md:text-5xl py-2 mt-2">World-class standards.</span>
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 md:w-1/3">
              <Image src="/gioi-thieu/asset_14.png" alt="asset_14" width={213} height={167} className="h-[200px] m-auto" />
              <h3 className="font-bold text-[#002A9E] text-xl mb-4 text-center">WOWTOP uses milk sourced from cows that are naturally pasture-fed.</h3>
              <p className="text-[#84571B] font-semibold mb-2">Grass-fed cow milk is harvested from cows that are raised on grass and are not fed any food containing chemicals or growth hormones. This milk meets Grass-fed standards and is preferred in premium dairy products because it is richer in nutrients and free from potential additives found in non-natural feed. This method promotes animal welfare, environmental sustainability, and produces clean, nutrient-rich dairy products.</p>
            </div>
            <div className="p-4 md:w-1/3">
              <Image src="/gioi-thieu/asset_15.png" alt="asset_15" width={186} height={186} className="h-[200px] m-auto" />
              <h3 className="font-bold text-[#002A9E] text-xl mb-4 text-center">WOWTOP uses milk sourced from cows that are naturally pasture-fed.</h3>
              <p className="text-[#84571B] font-semibold mb-2">Grass-fed cow milk is harvested from cows that are raised on grass and are not fed any food containing chemicals or growth hormones. This milk meets Grass-fed standards and is preferred in premium dairy products because it is richer in nutrients and free from potential additives found in non-natural feed. This method promotes animal welfare, environmental sustainability, and produces clean, nutrient-rich dairy products.</p>
            </div>
            <div className="p-4 md:w-1/3">
              <Image src="/gioi-thieu/asset_16.png" alt="asset_16" width={213} height={167} className="h-[200px] m-auto" />
              <h3 className="font-bold text-[#002A9E] text-xl mb-4 text-center">WOWTOP uses milk sourced from cows that are naturally pasture-fed.</h3>
              <p className="text-[#84571B] font-semibold mb-2">Grass-fed cow milk is harvested from cows that are raised on grass and are not fed any food containing chemicals or growth hormones. This milk meets Grass-fed standards and is preferred in premium dairy products because it is richer in nutrients and free from potential additives found in non-natural feed. This method promotes animal welfare, environmental sustainability, and produces clean, nutrient-rich dairy products.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page