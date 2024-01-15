"use client"

import React, { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import axios from 'axios'
import {API_URL} from '@/lib/api-request'
import img from '../../../../public/assets/images/banner-forum.png'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import SidebarForum from '@/components/SidebarForum'

const Page = () => {
    const [forum, setForum] = useState([])
    const [content, setContent] = useState(false)
    const [isCheck, setIsCheck] = useState(true)
    
    const handleTitle = () => {
        setContent(false)
    }
    const handleContent = () => {
        setContent(true)
    }

    useEffect(() => {
        if(localStorage.getItem("Token")) {
            setIsCheck(true)
        }else {
            setIsCheck(false)
        }
    },[isCheck])

    useEffect(() => {
        axios.get(`${API_URL}/Post/Get?action=get&slug=forum`)
        .then(response => {
            setForum(response.data)
            console.log(forum,"forum");
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        })
    }, [forum])

    const handleClick = () => {
        alert("2")
    }

    return (
    <>
        <Header />
        <main className='p-forum'>
            <div className='banner-forum'>
                <div className='l-container--1'>
                    <Image src={img} alt='' />
                </div>
            </div>
            <div className='sub-menu'>
                <div className='l-container--1'>
                    <ul>
                        <li>Câu hỏi</li>
                        <li>Đang theo dõi</li>
                    </ul>
                    {
                    isCheck == true ? 
                        <Link href="/publish/post"><FontAwesomeIcon icon={faCircleQuestion} />Tạo câu hỏi</Link>
                        :
                        <Link href="#" onClick={handleClick}><FontAwesomeIcon icon={faCircleQuestion} />Tạo câu hỏi</Link>
                    } 
                </div>
            </div>
            <div className='l-container--1'>
                <div className='layout-forum'>
                    <div className='post-feed'>
                        <div className='post-feed-switcher'>
                            <a data-original-title="Chỉ tiêu đề" onClick={handleTitle}>Tiêu đề </a>
                            <a data-original-title="Xem trước nội dung" onClick={handleContent}>Nội dung</a>
                        </div>
                        {forum.map((item:any, index) => (
                            <div className='post-feed-item' key={index}>
                                <a href="">
                                    {/* <img className='avata' src={item.avata} alt="" /> */}
                                </a>
                                <div className='post-feed-item__info'>
                                    <div className='name'>
                                        <a href="">{item.userName}</a>
                                        <span>{item.created}</span>
                                    </div>
                                    <div className='title'>
                                        <h3>
                                            <a href={`/${item.slug}`}>{item.title}</a>
                                        </h3>
                                        {/* <div className='tags'>
                                            {
                                                item.tags.map((tag:any, i:number) => (
                                                    <a href="#" key={i}>{tag}</a>
                                                ))
                                            }
                                        </div> */}
                                    </div>
                                    {
                                        content ? 
                                        <div className='content' dangerouslySetInnerHTML={{ __html: item.content }}>
                                        
                                        </div>:
                                        ""
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                    <SidebarForum data={forum} text='NEWEST POST' />
                </div>
            </div>
            {isCheck == false ? 
                <div className="fixed-bottom-bar">
                    <div className="wrapper d-flex">
                        <div className="logo-bottom">
                        </div>
                        <div className="content d-flex flex-column">
                        <div className="text">
                            <span className="text-register">Hãy đăng ký một tài khoản Ccrystal để nhận được nhiều bài viết thú vị hơn.</span>
                        </div>
                        <div className="button d-flex mt-1">
                            <button className="login-button">
                            Đăng nhập
                            </button>
                            <a
                            href="https://accounts.viblo.asia/register"
                            className="register-button"
                            >
                            Đăng kí
                            </a>
                        </div>
                        </div>
                        <div className="icon-close" style={{ cursor: "pointer" }}>
                        <i className="icon fa fa-close" />
                        </div>
                    </div> 
                </div>
            :
                ""
            }
        </main>
        <Footer />
    </>
  )
}

export default Page