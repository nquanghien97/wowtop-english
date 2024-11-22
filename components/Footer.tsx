import FacebookIcon from "@/assets/icons/FacebookIcon"
import PhoneIcon from "@/assets/icons/PhoneIcon"
import YoutubeIcon from "@/assets/icons/YoutubeIcon"
import Image from "next/image"
import Link from "next/link"
function Footer() {
  return (
    <footer className="footer-bg">
      <div className="max-w-6xl m-auto px-4">
        <div className="flex items-center gap-8 py-2">
          <Image src="/logo-ngang.png" alt="logo" width={275} height={75} />
          <h3 className="uppercase text-xs md:text-xl font-semibold">
            <Link href={`/`} className="text-white">Get Expert Advice</Link>
          </h3>
          <h3 className="uppercase text-xs md:text-xl font-semibold">
            <Link href={`/`} className="text-white">Share Your Feedback</Link>
          </h3>
        </div>
      </div>
      <div className="bg-[url('/bg-footer.webp')] bg-cover bg-[80%] relative">
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="max-w-6xl m-auto px-4 py-7 relative z-10">
          <div className="flex w-full justify-between mb-8 flex-col md:flex-row">
            <div className="max-md:mb-4">
              <h3 className="text-xl text-white font-bold">Follows us</h3>
              <div className="flex gap-4">
                <Link href="#">
                  <FacebookIcon fill="white" width={32} height={32} />
                </Link>
                <Link href="#">
                  <YoutubeIcon fill="white" width={32} height={32} />
                </Link>
                <Link href="#">
                  <PhoneIcon fill="white" width={32} height={32} />
                </Link>
              </div>
            </div>
            <ul className="text-white">
              <li className="py-2">Message to Parents</li>
              <li className="py-2">Cookie Notice</li>
              <li className="py-2">Cookie Settings</li>
              <li className="py-2">Legal</li>
            </ul>
            <ul className="text-white">
              <li className="py-2">NZ - VN Supply Chain</li>
              <li className="py-2">Privacy Policy</li>
              <li className="py-2">Privacy Settings</li>
              <li className="py-2">Height growth formula</li>
            </ul>
            <ul className="text-white">
              <li className="py-2">Ordering and Payment Guide</li>
              <li className="py-2">Return and Exchange Policy</li>
              <li className="py-2">Shipping Policy</li>
              <li className="py-2">Frequently Asked Questions</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <p className="text-white font-bold">Manufactured in: NEW ZEALAND PURE DAIRY PRODUCTS LIMITED</p>
              <p className="text-white font-bold mb-4">Address: Unit 3, 14 Canaveral drive, Rosedale, Auckland, New Zealand.</p>
              {/* <div className="mb-4">
                <p className="text-white font-bold">Số giấy chứng nhận đăng ký kinh doanh</p>
                <p className="text-white">0110015834</p>
              </div> */}
              <div className="flex gap-4 mb-4">
                <Image src="/footer-image/bct.png" alt="Bộ công thương" width={130} height={40} />
                <Image src="/footer-image/dmca.png" alt="DMCA" width={130} height={40} />
              </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-white font-bold">This is an application website.</h4>
              <p className="text-white mb-4">On this website, we provide objective product information, active ingredient analysis, nutritional details, height growth planning tools, and educational games for children. However, children should obtain parental consent to access the website.</p>
              <p className="text-white mb-4">Wowtop products are manufactured by New Zealand Pure Dairy Products Ltd.</p>
              <p className="text-white mb-4">Distributed by The Wow System Co., Ltd. in Vietnam under declaration number: 25TPCN/CB-CP/VN2024.</p>
              <p className="text-white mb-4">The Wowtop brand is endorsed by The Wow System. Distributors, direct retailers, and affiliate marketers are allowed to use the Wowtop brand to promote products but are responsible for the legal accuracy of the information they provide.</p>
              <p className="text-white uppercase">LOVE WOWTOP? FEEL FREE TO DISCOVER MORE PRODUCTS OFFERED BY THE WOW SYSTEM.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer