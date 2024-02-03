import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <Header />
      <main className='l-container--1'>
        <div className='breadcrumbs'>
        <ul>
          <li>
            <Link href="/">Trang chủ</Link>
          </li>
          <li>
            Liên hệ
          </li>
        </ul>
        <div style={{ width: "100%", height: "450px" }}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.505730818256!2d106.72201444218082!3d10.772524365975304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525f661b0764b%3A0xa47ebe1ba3d02989!2zMzIgxJDGsOG7nW5nIEI0LCBBbiBM4bujaSDEkMO0bmcsIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1695700472813!5m2!1svi!2s"
            width={"100%"}
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>


      </div>
      </main>
      <Footer />
    </>
  )
}

export default Page
