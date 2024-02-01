"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Related_broker from "@/components/related-broker";
import Link from "next/link";
import {API_URL} from '@/lib/api-request'
import axios from "axios";
import Layout from '@/components/layout'
import New from '@/components/New'
import { GetPostIdInString } from "@/lib/func";

const Page = ({slug}:any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([])
  const [newPost, setNewPost] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [processedContent, setProcessedContent] = useState([]);


  const processContent = (data:any) => {
    const modifiedContent = data.map((item:any) => {
      const modifiedItem = { ...item };
      modifiedItem.content = item.content.replace(/src="\/Image\//g, 'src="https://api.ccmacro.com/Image/');
      return modifiedItem;
    });
    return modifiedContent;
  };

  useEffect(() => {
    // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
    // const apiUrl = `${API_URL}/Post/Get?action=GetDetailPostBySlug&slug=${slug}`;

    // // Sử dụng Axios để gửi yêu cầu GET đến API endpoint
    // axios.get(apiUrl)
    //     .then(response => {
    //         setContent(response.data);
    //         setIsDataLoaded(true);

    //         const data = response.data;
    //         const processedData = processContent(data);
    //         setContent(data);
    //         setProcessedContent(processedData);
    //         setIsDataLoaded(true);
    //     })
    //     .catch(error => {
    //         // Xử lý lỗi (nếu có)
    //         console.error('Error fetching data: ', error);
    //     });
    const fetchData = async () => {
      try {
          const detailPost = await axios.get(`${API_URL}/Post/Get?action=GetDetailPostBySlug&slug=danh-gia-san/${slug}`);
          setIsDataLoaded(true);
          const processedData = processContent(detailPost.data);
          setProcessedContent(processedData);

          const newPost = await axios.get(`${API_URL}/Post/Get?action=GetNewPost&slug=null`);
          setNewPost(newPost.data);
      } catch (error) {
          console.error('Error fetching data: ', error);
      }
  };

  fetchData();
  }, [slug]);
 
  return (
    <div>
      <Layout >
      <main className="l-container--1" id="page-review">
        <div className="breadcrumbs">
          <ul>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li>
              <Link href="/kien-thuc">Đánh giá sàn</Link>
            </li>
            <li>{slug}</li>
          </ul>
        </div>
        <div className="review-page">
          <div className="review-content">
            {isDataLoaded && processedContent && processedContent.map((item, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
            ))}
          </div>
          <div className="list-san">
            <p className="heading"><FontAwesomeIcon icon={faBook} />Review - Đánh giá</p>
            <div className="list-related-broker">
              <Related_broker />
            </div>
            <span className="heading"><FontAwesomeIcon icon={faBook} />Bài viết mới nhất</span>
            <div className='all-news'>
              <New data={newPost} slug='' />
            </div>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context:any) {
  const { slug } = context.query;
  // const postId = GetPostIdInString(slug);

  return {
    props: {
      slug: slug
    },
  };
}


export default Page;
