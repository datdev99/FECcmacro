"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {API_URL} from '@/lib/api-request'
import { getUserID } from '@/utils/auth';
import Link from 'next/link';

const ListDiscussPostOfYou = () => {
    const [listDiscuss, setListDiscuss] = useState([])
    
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        var userId:any = getUserID()
    }
  
    useEffect(() => {
        const apiUrl = `${API_URL}/Discuss/Get?action=GetUserPosts&Para1=${userId}`;
        axios.get(apiUrl)
          .then(response => {
              // Xử lý dữ liệu nhận được từ API
              setListDiscuss(response.data);
          })
          .catch(error => {
              // Xử lý lỗi (nếu có)
              console.error('Error fetching data: ', error);
          });
    }, [userId]);

    return (
        <div className='list-discuss'>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {listDiscuss.map((item:any, index) => (
                        <>
                            <tr>
                                <td>{index+1}</td>
                                <td><Link href={`/forum/${item.slug}&postId=${item.postId}`}>{item.title}</Link></td>
                                <td>
                                    <Link href={`/publish/detail/${item.postId}`}>Sửa</Link>
                                    <button>Xoa</button>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListDiscussPostOfYou