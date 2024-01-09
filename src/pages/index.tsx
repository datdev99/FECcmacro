"use client"

import React, { useEffect, useState } from 'react'
import Mainvisual from '@/components/Mainvisual'
import Tabs from '@/components/Tabs'
import Related_broker from '@/components/related-broker'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from '@/components/Slide'
import icon from '../../public/assets/images/icon/icon-chat-luong.png'
import Image from 'next/image'
import { FEEDS, getFeed } from "../lib/rss-news";
import {API_URL} from '../lib/api-request'
import Slide1 from '@/components/Slide1'
import Direct from '@/components/direct'
import Copytrade from '@/components/copytrade'
import Ecosystem from '@/components/Ecosystem'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the styles
import Layout from '@/components/layout'




const Page = ({ postKienThuc, postPhanTich, items }:any) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing options
    });
  }, []); // Run this effect once on mount

  return (
    <>
      <Layout>
        <main >
          <Mainvisual />
          <div>
            <section className='l-container--1'>
              <Slide1 />
            </section>
            <section className='l-container--1'>
              <div className='layout'>
                <div className='d-flex'>
                  <div className='slide'>
                    <Slide news={postKienThuc} /> 
                  </div>
                  <div className='tin-nhanh'>
                    <Tabs rssNew={items} phantich={postPhanTich} />
                  </div>
                </div>
                <div className='san-uy-tin'>
                  <p className='heading'> <Image src={icon} alt='' width={30} height={30} quality={80} unoptimized /> Top sàn uy tín</p>
                  <Related_broker />
                </div>
              </div>
            </section>
            <section className='l-container--1 aos-animate' data-aos="fade-right">
              <Direct />
            </section>
            <section className='aos-animate' data-aos="fade-up">
              <Ecosystem />
            </section>
            <section className='l-container--1 aos-animate' data-aos="fade-right">
              <Copytrade />
            </section>
          </div>

        </main>
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  const resDataKienThuc = await fetch(`${API_URL}/Post/Get?action=get&slug=kien-thuc`);
  const postKienThuc = await resDataKienThuc.json();

  const resDataPhanTich = await fetch(`${API_URL}/Post/Get?action=get&slug=phan-tich`);
  const postPhanTich = await resDataPhanTich.json();
  
  const feed = FEEDS.find((feed) => feed.slug === "");
  console.log(feed,"feed")
  if (!feed) return;

  const detailedFeed = await getFeed(feed.url);

  return {
    props: {
      postKienThuc,
      postPhanTich,
      items: detailedFeed.items,
    },
    revalidate: 1,
  };
}


export default Page