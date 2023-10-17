"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {API_URL} from '../../../../lib/api-request'
import Category from '@/components/Category';

const Page = () => {
    const [post, setPost] = useState([])
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
        let apiUrl = ""
        apiUrl = `${API_URL}/Post/Get?action=Get&slug=chi-bao-ky-thuat`;
          axios.get(apiUrl)
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                setPost(response.data);
                setIsDataLoaded(true);
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error('Error fetching data: ', error);
            });
      }, []); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được render
  return (
    <div>
        <Category data={post} slug={''} />
    </div>
  )
}

export default Page