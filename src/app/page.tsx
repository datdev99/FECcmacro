"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import New from '@/components/New'
import React from 'react'
// import '../../public/assets/js/three'

const page = () => {
  return (
    <>
      <Header />
      <main className='l-container--1'>
        {/* <Banner /> */}
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