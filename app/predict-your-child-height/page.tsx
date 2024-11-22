
import Form from './Form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://wowtop.com.vn'),
  title: 'Phác đồ dự đoán chiều cao tương lai',
  description: '',
  keywords: 'Oz Farm Wowtop',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Wowtop',
    url: 'https://wowtop.com.vn/du-doan-chieu-cao',
    siteName: 'Wowtop',
    type: 'website'
  }
}
function DuDoanChieuCao() {
  return (
    <main>
      <section className="mb-8">
        <div className="my-12 text-[#7f4807]">
          <div className="max-w-4xl m-auto max-md:px-4">
            <h1 className="text-4xl font-bold text-center my-4 uppercase">FUTURE HEIGHT PREDICTION PLAN</h1>
            <p className="text-center">Developing height is not only a desire of parents but also of the children themselves. Height is influenced not only by genetics but also significantly by nutrition, lifestyle, and exercise.</p>
            <p className="text-center">Join WOWTOP in creating a future height prediction plan to identify the golden stages for maximizing your child&apos;s height development journey!</p>
          </div>
        </div>
        <Form />
      </section>
    </main>
  )
}

export default DuDoanChieuCao 