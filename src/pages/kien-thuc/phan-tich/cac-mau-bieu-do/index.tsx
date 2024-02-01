"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import img from '../../../../../public/assets/images/san/prospero.png'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import {API_URL} from '@/lib/api-request'
import Post from '@/components/Post'
import Layout from '@/components/layout';
import SidebarNew from '@/components/SidebarNew'

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
    apiUrl = `${API_URL}/Post/Get?action=Get&slug=cac-mau-bieu-do`;
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
    <Layout>
        <main className='l-container--1' id='page-post'>
        <div className='breadcrumbs'>
            <ul>
              <li>
                  <Link href="/">Trang chủ</Link>
              </li>
              <li>
                  <Link href="/kien-thuc">Kiến thức</Link>
              </li>
              <li>
                  <Link href="/kien-thuc/phan-tich">Phân tích</Link>
              </li>
              <li>
                  Các mẫu biểu đồ
              </li>
            </ul>
        </div>
        <div>
            <h2 className='title'>Các mẫu biểu đồ</h2>
        </div>
        <div className='content'>
            <div className='post-list'>
            {isDataLoaded && <Post data={post} slug={''} />}
            </div>
            <SidebarNew />
        </div>
        </main>
      </Layout>
  </>
  )
}

export default Page
