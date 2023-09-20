"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import New from '@/components/New'
import React from 'react'
import banner from '../../public/assets/images/banner-san.png'
import Image from 'next/image'
import Mainvisual from '@/components/Mainvisual'

const page = () => {
  return (
    <>
      <Header />
      <main >
        <Mainvisual />
        <div className='l-container--1'>
          <div className='banner-san'>
            <Image src={banner} alt='' unoptimized />
          </div>
          <div className='c-heading'>
            <h4>
              <a href="/bai-viet-moi-nhat">Bài viết mới nhất</a>
            </h4>
            <a className='xem-them' href="/bai-viet-moi-nhat">Xem thêm</a>
          </div>
          <div className='list-news'>
            <New />
          </div>
        </div>
        
      </main>
      <Footer />
    </>
  )
}

export default page