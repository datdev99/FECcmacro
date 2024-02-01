"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Post from '@/components/Post'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL, DOMAIN} from '@/lib/api-request'
import Layout from '@/components/layout'
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

interface Category {
    id: number;
    parentCategoryId?: number;
    slug: string
  }
  
  interface Post {
    categoryId : number;
    content?: any;
    dateCreated: Date;
    description: string;
    image: any;
    slug: any;
    title: any;
  }

const Page = () => {
  const [post, setPost] = useState<Post[]>([])
  const [category, setCategory] = useState<Category[]>([])
  const [discuss, setDiscuss] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const TinTucResponse = await axios.get(`${API_URL}/Post/Get?action=Get&slug=tin-tuc`);
          setPost(TinTucResponse.data);

          setIsDataLoaded(true);

          const discussResponse = await axios.get(`${API_URL}/Discuss/Get?action=getdiscuss`);
          setDiscuss(discussResponse.data);
      } catch (error) {
          console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [category]); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được render
  return (
    <>
    <Head>
        <title>Crystal - Tin Tức</title>
        <link rel="canonical" href={DOMAIN + "tin-tuc"} />
    </Head>
    <Layout >
        <main className='l-container--1' id='page-tintuc'>
            <div className='content'>
                <div className='tintuc-list'>
                    <Post data={post} slug={''} />
                </div>
                <div className='sidebar'>
                  <span className="heading">Bài thảo luận mới nhất</span>
                  <div className='all-news'>
                    <Post data={discuss} slug={''} />
                  </div>
                </div>
            </div>
            
        </main>
    </Layout>
  </>
  )
}

export default Page
