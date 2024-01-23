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
            {/* <div className="item investing">
                <iframe
                    className="custom-iframe"
                    src="https://ssltsw.investing.com?lang=52&forex=1,2,3,5,7,9,10&commodities=8830,8836,8831,8849,8833,8862,8832&indices=23660,166,172,27,179,170,174&stocks=345,346,347,348,349,350,352&tabs=3,1,2,4"
                    width="100%"
                    height="467"
                    title="Technical Summary Widget"
                ></iframe>
            </div> */}
            <div className="item">
                <Image src={img1} alt="prospero" />
            </div>
            {/* <div className="item">
                <Image src={img1} alt="prospero" />
            </div> */}
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
