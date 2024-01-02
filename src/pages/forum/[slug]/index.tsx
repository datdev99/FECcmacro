"use client"

import { useEffect, useState } from 'react';
import {API_URL} from '@/lib/api-request'
import axios from 'axios';
import ContentForum from '@/components/ContentForum';
import Layout from '@/components/layout';

const Page = ({ postId }:any) => {
    const [content, setContent] = useState([]);
    let url = ""
    let pathArray:any;
    // let postId:any;
    if (typeof window !== 'undefined') {
        url = window.location.pathname;
        pathArray = url.split("/").filter(item => item !== "");
        
        // postId = url.split("=")[1].split("/").join("")
        console.log(postId,"postId");
        // Tiếp tục xử lý dữ liệu
    }
    useEffect(() => {
        let apiUrl = `${API_URL}/Discuss/Get?action=getdiscussdetail&para1=${postId}`;
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
    <>
      <Layout>
        <main className="l-container--1">
          <ContentForum data={content} pathArr={pathArray} />
        </main>
      </Layout>
      
    </>
  );
};

export async function getServerSideProps(context:any) {
  const { slug } = context.query;
  
  const postIdMatch = typeof slug === 'string' ? slug.match(/postId=(\d+)/) : null;
  const postId = postIdMatch ? postIdMatch[1] : null;

  return {
    props: {
      postId: postId || "null",
    },
  };
}


export default Page;
