"use client"

import { useEffect, useState } from 'react';
import {API_URL} from '@/lib/api-request'
import axios from 'axios';
import ContentForum from '@/components/ContentForum';

const Page = () => {
    const [subSlug, setSubSlug] = useState("");
    const [content, setContent] = useState([]);
    let url = ""
    let pathArray:any;
    if (typeof window !== 'undefined') {
        url = window.location.pathname;
        pathArray = url.split("/").filter(item => item !== "");
        // Tiếp tục xử lý dữ liệu
    }
    useEffect(() => {
        setSubSlug(pathArray[pathArray.length - 1])
        let apiUrl = `${API_URL}/Post/Get?action=GetDetail&slug=forum/${subSlug}`;
          axios.get(apiUrl)
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                setContent(response.data)
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error('Error fetching data: ', error);
            });
        
    }, [subSlug, pathArray])

  return (
    <div>
      <ContentForum data={content} pathArr={pathArray} />
    </div>
  );
};

export default Page;
