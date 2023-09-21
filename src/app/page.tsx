"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import New from '@/components/New'
import React from 'react'
import Mainvisual from '@/components/Mainvisual'
import Tabs from '@/components/Tabs'
import Related_broker from '@/components/related-broker'

const page = () => {
  return (
    <>
      <Header />
      <main >
        <Mainvisual />
        <div className='l-container--1'>
          <div className='tin-nhanh'>
            <Tabs />
            <div className='san-uy-tin'>
              <p className='heading'>Các sàn uy tín</p>
              <Related_broker />
            </div>
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