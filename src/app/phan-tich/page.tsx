import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import New from '@/components/New'
import React from 'react'
import img from '../../../public/assets/images/san/prospero.png'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <Header />
    <main className='l-container--1' id='page-post'>
      <div className='breadcrumbs'>
        <ul>
          <li>
            <Link href="/">Trang chủ</Link>
          </li>
          <li>
            <Link href="/kien-thuc">Kiến thức</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className='title'>Kiến thức</h1>
      </div>
      <div className='content'>
        <div className='post-list'>
          <New data={[]} slug={""}/>
        </div>
        <div className='sidebar'>
          <div className='advertisement'>
            <div className='item'>
              <Image src={img} alt='prospero' />
            </div>
            <div className='item'>
              <Image src={img} alt='prospero' />
            </div>
          </div>
        </div>
      </div>
      
    </main>
    <Footer />
  </>
  )
}

export default page
