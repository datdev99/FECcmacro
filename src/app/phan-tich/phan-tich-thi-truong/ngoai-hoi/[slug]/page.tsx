"use client"

import { useEffect, useState } from 'react';
import {API_URL} from '../../../../../lib/api-request'
import axios from 'axios';
import Content from '@/components/Content';

const Page = () => {
    const [subSlug, setSubSlug] = useState("");
    const [content, setContent] = useState([]);
    const url = window.location.pathname;
    const pathArray = url.split("/").filter(item => item !== "");

    useEffect(() => {
        setSubSlug(pathArray[pathArray.length - 1])
        let apiUrl = `${API_URL}/Post/Get?action=GetDetail&slug=${subSlug}`;
          axios.get(apiUrl)
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                setContent(response.data)
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error('Error fetching data: ', error);
            });
        
    }, [subSlug])

  return (
    <div>
      <Content data={content} pathArr={pathArray} />
    </div>
  );
};

export default Page;
