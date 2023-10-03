"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import New from '@/components/New'
import React, { useEffect, useState } from 'react'
import img from '../../../public/assets/images/san/prospero.png'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

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

const page = () => {
  const [post, setPost] = useState<Post[]>([])
  const [category, setCategory] = useState<Category[]>([])
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
    const apiUrlCategory = 'https://localhost:7190/api/Category/GetHierarchyCategory?action=Get&para1=A';

    // Sử dụng Axios để gửi yêu cầu GET đến API endpoint
    axios.get(apiUrlCategory)
        .then(response => {
            // Xử lý dữ liệu nhận được từ API
            setCategory(response.data);
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error('Error fetching data: ', error);
        });
  }, []);

  useEffect(() => {
    // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
    let apiUrl = ""
    let a = category.filter(item => item.slug == "kien-thuc")
    if (a.length > 0) {
      let b = category.filter(item => item.parentCategoryId == a[0].id);
      b.push(a[0]);
      let idCategory = b.map(item => item.id);
      console.log(idCategory.join(","));
      apiUrl = `https://localhost:7190/api/Post/Get?action=Get&categoryid=${idCategory.join(",")}`;
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

    } else {
        console.log("Không tìm thấy category với slug là 'kien-thuc'");
    }
  }, [category]); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được render

  return (
    <>
    <Header />
    <main className='l-container--1' id='page-post'>
      <div className='breadcrumbs'>
        <ul>
          <li>
            <Link href="/">Trang chủ</Link>
          </li>
          <li>
            <Link href="/kien-thuc">Kiến thức</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className='title'>Kiến thức</h2>
      </div>
      <div className='content'>
        <div className='post-list'>
        {isDataLoaded && <New data={post} />}
        </div>
        <div className='sidebar'>
          <div className='advertisement'>
            <div className='item'>
              <Image src={img} alt='prospero' />
            </div>
            <div className='item'>
              <Image src={img} alt='prospero' />
            </div>
          </div>
        </div>
      </div>
      {/* {post.map((item, i) => (
        <div key={i}>
          {item.title}
        </div>
      ))} */}
    </main>
    <Footer />
  </>
  )
}

export default page
