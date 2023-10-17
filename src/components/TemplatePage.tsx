"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {API_URL} from '../lib/api-request'
import Category from '@/components/Category';

const TemplatePage = ({slug}:any) => {
    const [post, setPost] = useState([])

    useEffect(() => {
        // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
        let apiUrl = ""
        apiUrl = `${API_URL}/Post/Get?action=Get&slug=${slug}`;
          axios.get(apiUrl)
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                setPost(response.data);
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

export default TemplatePage