import Content from '@/components/Content';
import { API_URL } from '@/lib/api-request';
import { GetPostIdInString } from '@/lib/func';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const index = ({postId, pathArr}:any) => {
  const [content, setContent] = useState([])

  useEffect(() => {
    let apiUrl = `${API_URL}/Post/Get?action=GetDetail&slug=${postId}`;
      axios.get(apiUrl)
        .then(response => {
            // Xử lý dữ liệu nhận được từ API
            setContent(response.data)
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error('Error fetching data: ', error);
        });
    
}, [postId])

  return (
    <div>
      <Content data={content} pathArr={pathArr} />
    </div>
  )
}

export async function getServerSideProps(context:any) {
    const { slug } = context.query;
    const postId = GetPostIdInString(slug)
    const fullPath = context.req.url;
  
    return {
      props: {
        postId: postId, //|| "null",
        pathArr: fullPath
      },
    };
}


export default index
