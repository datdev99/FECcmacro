"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Related_broker from './related-broker';
import Post from './Post';
import Header from "@/components/Header/Header";
import {API_URL} from '@/lib/api-request'
import axios from 'axios';
import Related_articles from './Related-articles';

interface Props {
    data: IF_Data[]
    pathArr: string[]
}

interface IF_Data {
    postId: any,
    content: any,
    title: any,
    slug: any,
}

interface Category {
    title: any,
    slug: any
}

const Content = (props: Props) => {
    
    const [category, setCategory] = useState<Category[]>([])
    const [crumb, setCrumb] = useState<Category[]>([])
    const [postRelated, setPostRelated] = useState([])
    useEffect(() => {
        // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
        let apiUrl = ""
        apiUrl = `${API_URL}/Category/Get?action=get`;
          axios.get(apiUrl)
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                setCategory(response.data.data);
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error('Error fetching data: ', error);
            });
    }, []); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được render

    useEffect(() => {
      // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
      let apiUrl = ""
      if(props.data.length > 0) {
        apiUrl = `${API_URL}/Post/Get?action=Get_Related&slug=${props.pathArr[props.pathArr.length - 2]}&categoryId=${props.data[0].postId}`;
        axios.get(apiUrl)
          .then(response => {
              // Xử lý dữ liệu nhận được từ API
              setPostRelated(response.data);
          })
          .catch(error => {
              // Xử lý lỗi (nếu có)
              console.error('Error fetching data: ', error);
          });
      }
      
    }, [props.data, props.pathArr]); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được render

    useEffect(() => {
      let result = category.filter(item => props.pathArr.includes(item.slug))
                .map(item => ({ title: item.title, slug: item.slug }));
      setCrumb(result)
    }, [props.pathArr, category])
  return (
    <>
    <Header />
      <main className="l-container--1" id="page-review">
        <div className="breadcrumbs">
          <ul>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            {crumb.map((item, index) => (
                <li key={index}>
                    <Link href={`/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="review-page">
          <div className="review-content">
            {props.data.map((item:any, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
            ))}
            <Related_articles brokerList={postRelated} />
          </div>
          <div className="list-san">
            <p className="heading"><FontAwesomeIcon icon={faBook} />Review - Đánh giá</p>
            <div className="list-related-broker">
              <Related_broker />
            </div>
            <span className="heading"><FontAwesomeIcon icon={faBook} />Bài viết mới nhất</span>
            <div className='all-news'>
                <Post data={[]} slug={''}/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Content