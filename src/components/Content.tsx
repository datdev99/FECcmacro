"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Related_broker from './related-broker';
import Post from './Post';
import {API_URL, DOMAIN, URL_SERVER} from '@/lib/api-request'
import axios from 'axios';
import Related_articles from './Related-articles-forum';
import Layout from '@/components/layout';
import Head from 'next/head';
import Related_articles_post from './Related-articles-post';
import { ListBroker } from '@/lib/func';

interface Props {
    data: IF_Data[]
    pathArr: string
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
            let arr = props.pathArr.split("/").filter((value:any) => value !== "");
            let str = "";
            for(let i = 0;i < arr.length - 1; i++) {
              str += arr[i]
            }
            console.log(str,"str", arr);
            
            const newResponse = await axios.get(`${API_URL}/Post/Get?action=GetNewPost&slug=1&categoryId=1`);
            setPostNew(newResponse.data);

            const categoryResponse = await axios.get(`${API_URL}/Category/Get?action=get`);
            setCategory(categoryResponse.data.data);

            let result = categoryResponse.data.data.filter((item:any) => str.includes(item.slug))
                .map((item:any) => ({ title: item.title, slug: item.slug }));
            setCrumb(result)

            console.log(props,"props.pathArr");
            
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
    
    const modifyImagePaths = (content: any) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const images = doc.querySelectorAll("img");
  
      const domain = URL_SERVER;
  
      images.forEach((img) => {
        const currentSrc = img.getAttribute("src");
        // Kiểm tra nếu đường dẫn hiện tại không bắt đầu bằng "https://"
        if (currentSrc && !currentSrc.startsWith("https://")) {
          // Thay thế đường dẫn của thẻ <img> thành đường dẫn tuyệt đối
          const newSrc = domain + currentSrc.replace("/Image", "/Image");
          img.setAttribute("src", newSrc);
        }
      });
  
      return doc.body.innerHTML;
    };

  return (
    <>
      <Head>
          <title>Crystal - Bài Viết</title>
          <link rel="canonical" href={props.data.length > 0 ? DOMAIN + props.data[0].slug : ""} />
      </Head>
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
              {props.data.length > 0 && props.data.map((item:any, index) => (
                <>
                  <h1>{item.title}</h1>
                  <p>
                    {item.description}
                  </p>
                  <div key={index} dangerouslySetInnerHTML={{ __html: modifyImagePaths(item.content) }} />
                </>
              ))}
              <Related_articles_post brokerList={postRelated} type={"Bài viết liên quan"} />
            </div>
            <div className="list-san">
              <p className="heading"><FontAwesomeIcon icon={faBook} />Review - Đánh giá</p>
              <div className="list-related-broker">
                <Related_broker brokerList={ListBroker().slice(0,3)} />
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