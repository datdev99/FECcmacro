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

export async function getStaticProps() {
  alert("1")
  const feed = FEEDS.find((feed) => feed.slug === "/");

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


const page = ({ feed, items } : any) => {
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
                  <Tabs />
                </div>
              </div>
              <div className='san-uy-tin'>
                <p className='heading'> <Image src={icon} alt='' width={30} height={30} quality={80} unoptimized /> Top sàn uy tín</p>
                <Related_broker />
              </div>
            </div>
          </section>
          <h1>{feed?.title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
            {items?.map((item:any, index:any) => (
                <a
                  key={index}
                  className="block p-4 border border-gray-200 hover:border-gray-500 rounded-lg"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {console.log(item)}
                  {item.enclosure?.url && (<img src={item.enclosure.url} alt={item.title} />)}
                  <h3 className="font-bold">{item.title}</h3>
                  <p>{item.content}</p>
                </a>
              ))}
          </div>
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