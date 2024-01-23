"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Related_broker from './related-broker';
import Post from './Post';
import {API_URL} from '@/lib/api-request'
import axios from 'axios';
import Related_articles from './Related-articles';
import Layout from '@/components/layout';

interface Props {
    data: IF_Data[]
    pathArr: string[]
}

interface IF_Data {
    postId: any,
    content: any,
    title: any,
    slug: any,
    categoryId: any,
}

interface Category {
    title: any,
    slug: any
}

const Content = (props: Props) => {
    
    const [category, setCategory] = useState<Category[]>([])
    const [crumb, setCrumb] = useState<Category[]>([])
    const [postRelated, setPostRelated] = useState([])
    const [postNew, setPostNew] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        try {
            const newResponse = await axios.get(`${API_URL}/Post/Get?action=GetNewPost&slug=1&categoryId=1`);
            setPostNew(newResponse.data);

            const categoryResponse = await axios.get(`${API_URL}/Category/Get?action=get`);
            setCategory(categoryResponse.data);

            let result = categoryResponse.data.filter((item:any) => props.pathArr.includes(item.slug))
                .map((item:any) => ({ title: item.title, slug: item.slug }));
            setCrumb(result)
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
      };

      fetchData();
    }, [props.pathArr])

    useEffect(() => {
      // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
      let apiUrl = ""
      if(props.data.length > 0) {
        apiUrl = `${API_URL}/Post/Get?action=Get_Related&slug=${props.data[0].postId}&categoryId=${props.data[0].categoryId}`;
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

  return (
    <>
      <Layout>
        <main className="l-container--1" id="page-review">
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link href="/">Trang chủ</Link>
              </li>
              {crumb.map((item, index) => {
                  const accumulatedPath = crumb.slice(0, index + 1).map(crumbItem => crumbItem.slug).join('/');
                  return (
                      <li key={index}>
                          <Link href={`/${accumulatedPath}`}>
                              {item.title}
                          </Link>
                      </li>
                  );
              })}
            </ul>
          </div>
          <div className="review-page">
            <div className="review-content">
              {props.data.map((item:any, index) => (
                <>
                  <h1>{item.title}</h1>
                  <div key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
                </>
              ))}
              <Related_articles brokerList={postRelated} type={"Bài viết liên quan"} />
            </div>
            <div className="list-san">
              <p className="heading"><FontAwesomeIcon icon={faBook} />Review - Đánh giá</p>
              <div className="list-related-broker">
                <Related_broker />
              </div>
              <span className="heading"><FontAwesomeIcon icon={faBook} />Bài viết mới nhất</span>
              <div className='all-news'>
                <Post data={postNew} slug={''}/>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Content