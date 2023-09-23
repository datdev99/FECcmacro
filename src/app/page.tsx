"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import New from '@/components/New'
import React from 'react'
import Mainvisual from '@/components/Mainvisual'
import Tabs from '@/components/Tabs'
import Related_broker from '@/components/related-broker'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from '@/components/Slide'

const page = () => {
  return (
    <>
      <Header />
      <main >
        <Mainvisual />
        <div className='l-container--1'>
          <div className='layout'>
            <div className='d-flex'>
              <div className='slide'>
                <Slide /> 
              </div>
              <div className='tin-nhanh'>
                <Tabs />
              </div>
            </div>
            <div className='san-uy-tin'>
              <p className='heading'>Top 3 sàn uy tín</p>
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