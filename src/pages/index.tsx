"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import New from '@/components/New'
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
import '../css/style.css'
import Link from 'next/link'
import axios from 'axios'
import {API_URL} from '../lib/api-request'
  
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



const Page = ({ items }:any) => {
  const [postTinTuc, setPostTinTuc] = useState([])
  const [postKienThuc, setPostKienThuc] = useState([])
  const [postPhanTich, setPostPhanTich] = useState([])
  useEffect(() => {
    // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
    const apiUrlCategory = `${API_URL}/Post/Get?action=get&slug=tin-tuc`;
    const apiUrlKienThuc = `${API_URL}/Post/Get?action=get&slug=kien-thuc`;
    const apiUrlPhanTich = `${API_URL}/Post/Get?action=get&slug=phan-tich`;
    // Sử dụng Axios để gửi yêu cầu GET đến API endpoint
    axios.get(apiUrlCategory)
        .then(response => {
            setPostTinTuc(response.data);
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error('Error fetching data: ', error);
        });
    axios.get(apiUrlKienThuc)
    .then(response => {
      setPostKienThuc(response.data);
    })
    .catch(error => {
        // Xử lý lỗi (nếu có)
        console.error('Error fetching data: ', error);
    });
    axios.get(apiUrlPhanTich)
    .then(response => {
      setPostPhanTich(response.data);
    })
    .catch(error => {
        // Xử lý lỗi (nếu có)
        console.error('Error fetching data: ', error);
    });
  }, []);

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
                  <Slide news={postPhanTich} /> 
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
          <section>
            <div className='c-heading'>
              <h4>
                <Link href="/bai-viet-moi-nhat">Bài viết mới nhất</Link>
              </h4>
              <Link className='xem-them' href="/bai-viet-moi-nhat">Xem thêm</Link>
            </div>
            <div className='list-news'>
              <New data={postTinTuc} slug={""}/>
            </div>
          </section>
          <section>
            <div className='c-heading'>
              <h4>
                <Link href="/kien-thuc">Kiến thức cơ bản</Link>
              </h4>
              <Link className='xem-them' href="/kien-thuc">Xem thêm</Link>
            </div>
            <div className='list-news'>
              <New data={postKienThuc} slug={""}/>
            </div>
          </section>
        </div>
        
      </main>
      <Footer />
    </>
  )
}

export default Page