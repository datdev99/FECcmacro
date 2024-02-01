import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img1 from "../../public/assets/images/san/prospero.png";
import Post from './Post';
import axios from 'axios';
import { API_URL } from '@/lib/api-request';
import New from './New';

const SidebarNew = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
        let apiUrl = ""
        apiUrl = `${API_URL}/Post/Get?action=Get&slug=tin-tuc`;
          axios.get(apiUrl)
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                setPost(response.data);
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error('Error fetching data: ', error);
            });
      }, []); 
  return (
    <div className="sidebar hide-item">
        <div className="advertisement">
            <div className="item">
                <Image src={img1} alt="prospero" />
            </div>
            <div className='item'>  
                <h4>Bài viết nổi bật</h4>
                <div className='all-news'>
                    <New data={post} slug={''} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SidebarNew
