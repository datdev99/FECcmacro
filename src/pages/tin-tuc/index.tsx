"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Post from '@/components/Post'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '@/lib/api-request'
import Layout from '@/components/layout'

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
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
    let apiUrl = ""
    apiUrl = `${API_URL}/Post/Get?action=Get&slug=tin-tuc`;
      axios.get<Post[]>(apiUrl)
        .then(response => {
            // Xử lý dữ liệu nhận được từ API
            setPost(response.data);
            setIsDataLoaded(true);
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error('Error fetching data: ', error);
        });
  }, [category]); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được render
  return (
    <>
    <Layout >
        <main className='l-container--1' id='page-tintuc'>
            <div className='content'>
                <div className='tintuc-list'>
                    <Post data={post} slug={''} />
                </div>
                <div className='sidebar'>
                    <div className='all-news'>
                        <Post data={post} slug={''} />
                    </div>
                </div>
            </div>
            
        </main>
    </Layout>
  </>
  )
}

export default Page
