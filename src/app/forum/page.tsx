"use client"

import React, { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import axios from 'axios'

const Page = () => {
    const [forum, setForum] = useState([])
    const [content, setContent] = useState(false)
    const handleTitle = () => {
        setContent(false)
    }
    const handleContent = () => {
        setContent(true)
    }
    useEffect(() => {
        axios.get('/api/forum')
        .then(response => {
            setForum(response.data.data)
            console.log(forum,"forum");
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        })
    },[])
    return (
    <>
        <Header />
        <main className='p-forum'>
            <div className='l-container--1'>
                <div className='post-feed'>
                    <div className='post-feed-switcher'>
                        <a data-original-title="Chỉ tiêu đề" onClick={handleTitle}>Tiêu đề</a>
                        <a data-original-title="Xem trước nội dung" onClick={handleContent}>Nội dung</a>
                    </div>
                    {forum.map((item:any, index) => (
                        <div className='post-feed-item' key={index}>
                            <a href="">
                                <img className='avata' src={item.avata} alt="" />
                            </a>
                            <div className='post-feed-item__info'>
                                <div className='name'>
                                    <a href="">{item.userName}</a>
                                    <span>{item.created}</span>
                                </div>
                                <div className='title'>
                                    <h3>
                                        <a href="#">{item.title}</a>
                                    </h3>
                                    <div className='tags'>
                                        {
                                            item.tags.map((tag:any, i:number) => (
                                                <a href="#" key={i}>{tag}</a>
                                            ))
                                        }
                                    </div>
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
            </div>
        </main>
        <Footer />
    </>
  )
}

export default Page