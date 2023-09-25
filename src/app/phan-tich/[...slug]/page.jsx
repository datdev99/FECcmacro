"use client"

import Header from '@/components/Header/Header'
import New from '@/components/New'
import Image from 'next/image'
import React, { useEffect } from 'react'
import img from '../../../../public/assets/images/san/prospero.png'
import Footer from '@/components/Footer'
import { useParams, useRouter } from 'next/navigation'
import { useState } from "react";

const Page = () => {
    const [title, setTitle] = useState("")
    const router = useRouter();
    let route = [
        {
            slug: "phan-tich-ky-thuat",
            name: "Phân tích kỹ thuật"
        },
        {
            slug: "phan-tich-thi-truong",
            name: "Phân tích thị trường"
        },
        {
            slug: "cac-mau-bieu-do",
            name: "Cac mau bieu do"
        }
    ]
    let { slug }   = useParams();
    console.log(slug)
    
    let check = route.filter(item => item.slug == slug)

    useEffect(() => {
        if (check.length === 0) {
        //   router.push("/");
        } else {
          setTitle(check[0].name); // Sử dụng check[0].name thay vì check.name
        }
    }, [check, router]);

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
                        <a href="/">Trang chủ</a>
                    </li>
                    <li>
                        <a href="/phan-tich">Phân tích</a>
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
                    <New />
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