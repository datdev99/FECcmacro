"use client"

import Header from '@/components/Header/Header'
import Image from 'next/image'
import React, { useEffect } from 'react'
import img from '../../../../public/assets/images/san/prospero.png'
import Footer from '@/components/Footer'
import { useParams, useRouter } from 'next/navigation'
import { useState } from "react";
import Link from 'next/link'
import axios from 'axios'
import {API_URL} from '@/lib/api-request'
import Post from '@/components/Post'

const Page = () => {
    const [title, setTitle] = useState("")
    const [post, setPost] = useState([])

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const router = useRouter();
    let route = [
        {
            slug: "ngoai-hoi",
            name: "Ngoại hối"
        },
        {
            slug: "chung-khoan",
            name: "Chứng khoán"
        },
        {
            slug: "hang-hoa",
            name: "Hàng hóa"
        },
        {
            slug: "vang",
            name: "Vàng"
        },
        {
            slug: "dau-tho",
            name: "Dầu thô"
        },
        {
            slug: "tien-dien-tu",
            name: "Tiền điện tử"
        },
        {
            slug: "kinh-te-tai-chinh",
            name: "Kinh tế tài chính"
        }
    ]
    let { slug }   = useParams();
    
    let check = route.filter(item => item.slug == slug)

    useEffect(() => {
        if (check.length === 0) {
          router.push("/");
        } else {
          setTitle(check[0].name); // Sử dụng check[0].name thay vì check.name
        }
    }, [check, router]);
   
      useEffect(() => {
          const apiUrl = `${API_URL}/Post/Get?action=Get&slug=${slug}`;
          axios.get(apiUrl)
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                setPost(response.data);
                setIsDataLoaded(true);
                console.log(API_URL,"API_URL")
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error('Error fetching data: ', error);
            });
      }, [slug]); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được render

    if(!title) {
        return <div>1</div>
    }
    
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
                    <li>
                        {title}
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='title'>{title}</h1>
            </div>

            <div className='content'>                
                <div className='post-list'>
                    {isDataLoaded && <Post data={post} slug={slug} />}
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
        
        </main>
        <Footer />
    </>
  )
}

export default Page