import { API_URL } from '@/lib/api-request';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout';
import avata from "../../../../public/assets/images/avata.webp";
import Image from 'next/image';
import Link from 'next/link';
import {ConvertDate} from '@/lib/func'

const index = ({userId}:any) => {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get(`${API_URL}/Discuss/Get?action=GetUserPosts&Para1=${userId}`)
        .then(response => {
            // Xử lý dữ liệu nhận được từ API
            setList(response.data);
            console.log(userId,"postId");
            
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error('Error fetching data: ', error);
        });
    },[])

    return (
        <>
            <Layout>
                <main>
                    <div className='user-card'>
                        <div className="l-container--1">
                            <div className="avata">
                                <Image src={avata} alt='' />
                            </div>
                            <div className="DisplayName">
                                Thuong Hoang
                            </div>
                        </div>
                    </div>
                    <div className='profile-tabs'>
                        <div className="l-container--1">
                            <ul>
                                <li>Bài viết</li>
                                <li>Đang theo dõi</li>
                            </ul>
                        </div>
                    </div>
                    <div className='user-profile mt-3'>
                        <div className="l-container--1">
                            <div className="post-feed">
                                {list.map((item:any, index:any) => (
                                    <>
                                        <div className="post-feed-item">
                                            <Link href={`/author/${userId}`}>
                                                <Image src={avata} alt='' className='avata' />
                                            </Link>
                                            <div className="post-feed-item__info">
                                                <div className="name">
                                                    <a href="">{item.authorId}</a>
                                                    <span>{ConvertDate(item.dateCreated)}</span>
                                                </div>
                                                <div className="title">
                                                    <h3>
                                                        <a href={`/forum/${item.slug}&postId=${item.postId}/`}>{item.title}</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context:any) {
    const { id } = context.query;
  
    return {
      props: {
        userId: id //|| "null",
      },
    };
  }

export default index
