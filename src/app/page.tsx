"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import New from '@/components/New'
import React from 'react'
import banner from '../../public/assets/images/banner-san.png'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <Header />
      <main className='l-container--1'>
        {/* <Banner /> */}
        <div className='banner-san'>
          <Image src={banner} alt='' unoptimized />
        </div>
        <div className='list-news'>
          <New />
        </div>
        {/* <RssPage /> */}
      </main>
      <Footer />
    </>
  )
}

export default page