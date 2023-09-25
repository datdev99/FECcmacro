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
import icon from '../../public/assets/images/icon/icon-chat-luong.png'
import Image from 'next/image'
import { FEEDS, getFeed } from "../lib/rss-news";
import '../css/style.css'
  
export async function getStaticProps() {
    const feed = FEEDS.find((feed) => feed.slug === "");
    console.log(feed,"feed")
    if (!feed) return;

    const detailedFeed = await getFeed(feed.url);

    return {
      props: {
        feed,
        items: detailedFeed.items,
      },
      revalidate: 1,
    };
}



const page = ({ items }:any) => {
  return (
    <>
      <Header />
      <main >
        <Mainvisual />
        <div className='l-container--1'>
          <section>
            <div className='layout'>
              <div className='d-flex'>
                <div className='slide'>
                  <Slide /> 
                </div>
                <div className='tin-nhanh'>
                  <Tabs rssNew={items} />
                </div>
              </div>
              <div className='san-uy-tin'>
                <p className='heading'> <Image src={icon} alt='' width={30} height={30} quality={80} unoptimized /> Top sàn uy tín</p>
                <Related_broker />
              </div>
            </div>
          </section>
          <section>
            <div className='c-heading'>
              <h4>
                <a href="/bai-viet-moi-nhat">Bài viết mới nhất</a>
              </h4>
              <a className='xem-them' href="/bai-viet-moi-nhat">Xem thêm</a>
            </div>
            <div className='list-news'>
              <New />
            </div>
          </section>
          <section>
            <div className='c-heading'>
              <h4>
                <a href="/kien-thuc">Kiến thức cơ bản</a>
              </h4>
              <a className='xem-them' href="/kien-thuc">Xem thêm</a>
            </div>
            <div className='list-news'>
              <New />
            </div>
          </section>
        </div>
        
      </main>
      <Footer />
    </>
  )
}

export default page