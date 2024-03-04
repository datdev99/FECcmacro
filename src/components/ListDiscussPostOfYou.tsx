"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {API_URL} from '@/lib/api-request'
import { getUserID } from '@/utils/auth';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faTrashCan  } from '@fortawesome/free-solid-svg-icons';

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
        <>
            <h1 className='mt-2'>Danh sách bài viết của bạn</h1>
            <div className='list-discuss mt-2'>
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
                                        <Link href={`/publish/detail/${item.postId}`} className='btn-edit'><FontAwesomeIcon icon={faPenToSquare} /></Link>
                                        <Link href={"#"} className='btn-delete'><FontAwesomeIcon icon={faTrashCan}/></Link>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListDiscussPostOfYou