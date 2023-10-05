"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import Post from "@/components/Post";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Related_broker from "@/components/related-broker";
import Link from "next/link";
import {API_URL} from '@/lib/api-request'
import axios from "axios";
import '../../../css/style.css'
import { useRouter } from "next/router";

const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const router = useRouter();
  const { slug, subslug } = router.query;
  // useEffect(() => {
  //   setTitle(slug);
  // }, [slug]);

  useEffect(() => {
    // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
    const apiUrl = `${API_URL}/Post/Get?action=GetDetail&categoryid=1&postid=${subslug}`;

    // Sử dụng Axios để gửi yêu cầu GET đến API endpoint
    axios.get(apiUrl)
        .then(response => {
            setContent(response.data);
            setIsDataLoaded(true);
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error('Error fetching data: ', error);
        });
  }, [slug]);
 
  return (
    <div>
      <Header />
      <main className="l-container--1" id="page-review">
        <div className="breadcrumbs">
          <ul>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li>
              <Link href="/kien-thuc">Đánh giá sàn</Link>
            </li>
            <li>
              <Link href={`/kien-thuc/${title}`}>{title}</Link>
            </li>
            <li>{subslug}</li>
          </ul>
        </div>
        <div className="review-page">
          <div className="review-content">
            {isDataLoaded && content && content.map((item:any, index) => (
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
                <Post />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
