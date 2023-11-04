"use client"

import React, { useEffect, useState } from 'react'
import {API_URL} from '@/lib/api-request'
import axios from 'axios'
import Layout from '@/components/layout';

const Page = () => {
    const [content, setContent] = useState([])
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
        let apiUrl = ""
        apiUrl = `${API_URL}/Category/Get?action=getdetail&para1=gioi-thieu`;
          axios.get(apiUrl)
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                setContent(response.data.data);
                setIsDataLoaded(true);
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error('Error fetching data: ', error);
            });
      }, []); 
  return (
    <>
        <Layout>
          <main className='bg-1'>
            <div className='l-container--3'>
              {isDataLoaded && content && content.map((item:any, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: item.description }} />
              ))}
            </div>
          </main>
        </Layout> 
    </>
  )
}

export default Page