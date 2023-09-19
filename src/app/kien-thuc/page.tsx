import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import New from '@/components/New'
import React from 'react'
import img from '../../../public/assets/images/san/prospero.png'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <Header />
    <main className='l-container--1' id='page-post'>
      <div className='breadcrumbs'>
        <ul>
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li>
            <a href="/kien-thuc">Kiến thức</a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className='title'>Kiến thức</h1>
      </div>
      <div className='content'>
        <div className='post-list'>
          <New />
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
