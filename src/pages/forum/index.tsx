"use client"

import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import axios from 'axios'
import {API_URL, URL_SERVER} from '@/lib/api-request'

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import SidebarForum from '@/components/SidebarForum'
import {ConvertDate} from '@/lib/func'
import {logo, avata} from '@/lib/image'
import Banner_forum from '@/components/Banner_forum'
import Layout from '@/components/layout'

const Index = () => {
    const [forum, setForum] = useState([])
    const [content, setContent] = useState(false)
    const [isCheck, setIsCheck] = useState(true)
    const [isChecked, setIsChecked] = useState(false)
    
    // const handleTitle = () => {
    //     setContent(false)
    // }
    // const handleContent = () => {
    //     setContent(true)
    // }

    useEffect(() => {
        if(localStorage.getItem("Token")) {
            setIsCheck(true)
        }else {
            setIsCheck(false)
        }
    },[isCheck])

    useEffect(() => {
        axios.get(`${API_URL}/Discuss/Get?action=getdiscuss`)
        .then(response => {
            setForum(response.data)
            console.log(forum,"forum");
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        })
    }, [])

    const handleClick = () => {
        alert("Vui lòng đăng nhập để tạo câu hỏi.")
    }

    const handleCkecked = () => {
        setIsChecked(!isChecked)
        if(isChecked == false) {
            setContent(true)
        }
        else {
            setContent(false)
        }
    }

    return (
    <>
        <Layout >
        <main className='p-forum'>
            <Banner_forum />
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
                            {/* <a data-original-title="Chỉ tiêu đề" onClick={handleTitle}>Tiêu đề </a>
                            <a data-original-title="Xem trước nội dung" onClick={handleContent}>Nội dung</a> */}
                            <label className="switch">
                                <input type="checkbox" checked={isChecked} onClick={handleCkecked} />
                                <span className="slider round"></span>
                            </label>
                            <span>{isChecked ? "Tiêu đề" : "Nội dung"}</span>
                        </div>
                        {forum.map((item:any, index) => (
                            <div className='post-feed-item' key={index}>
                                <a href="">
                                <Image src={item.image != null ? 
                                    `${URL_SERVER}${item.image}` : 
                                    avata} alt='' width={45} height={45} quality={100} unoptimized 
                                />
                                </a>
                                <div className='post-feed-item__info'>
                                    <div className='name'>
                                        <a href="">{item.authorId}</a>
                                        <span>{ConvertDate(item.dateCreated)}</span>
                                    </div>
                                    <div className='title'>
                                        <h3>
                                            <Link href={`/forum/${item.slug}&postId=${item.postId}`}>{item.title}</Link>
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
                        <div className="content d-flex flex-column">
                            <div className="logo-bottom">
                                <Image src={logo} alt='Crystal' width={200} height={100} />
                            </div>
                            <div>
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
        </Layout>
    </>
  )
}

export default Index