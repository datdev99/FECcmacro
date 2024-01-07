"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Related_broker from "./related-broker";
import Post from "./Post";
import Header from "@/components/Header/Header";
import { API_URL, URL_SERVER } from "@/lib/api-request";
import axios from "axios";
import Related_articles from "./Related-articles";
import Image from "next/image";
import img from '../../public/assets/images/avata.webp'
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { faUserPlus, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { ConvertDate } from "@/lib/func";

interface Props {
  data: IF_Data[];
  pathArr: string[];
  author: string[];
}

interface IF_Data {
  postId: any;
  content: any;
  title: any;
  slug: any;
  dateUpdated: any;
}

interface Category {
  title: any;
  slug: any;
}

const ContentForum = (props: Props) => {
  const [category, setCategory] = useState<Category[]>([]);
  const [crumb, setCrumb] = useState<Category[]>([]);
  const [postRelated, setPostRelated] = useState([]);
  
  useEffect(() => {
    // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
    let apiUrl = "";
    apiUrl = `${API_URL}/Category/Get?action=get`;
    axios
      .get(apiUrl)
      .then((response) => {
        // Xử lý dữ liệu nhận được từ API
        setCategory(response.data.data);
        
      })
      .catch((error) => {
        // Xử lý lỗi (nếu có)
        console.error("Error fetching data: ", error);
      });
  }, []); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được render

  useEffect(() => {
    // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
    let apiUrl = "";
    if (props.data.length > 0) {
      apiUrl = `${API_URL}/Post/Get?action=Get_Related&slug=${
        props.pathArr[props.pathArr.length - 2]
      }&categoryId=${props.data[0].postId}`;
      axios
        .get(apiUrl)
        .then((response) => {
          // Xử lý dữ liệu nhận được từ API
          setPostRelated(response.data);
        })
        .catch((error) => {
          // Xử lý lỗi (nếu có)
          console.error("Error fetching data: ", error);
        });
    }
  }, [props.data, props.pathArr]); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được render

  useEffect(() => {
    let result = category
      .filter((item) => props.pathArr.includes(item.slug))
      .map((item) => ({ title: item.title, slug: item.slug }));
    setCrumb(result);
  }, [props.pathArr, category]);

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
  type TooltipProps = any
  const tooltipProps: TooltipProps = {
    title: 'Followers: 375',
    position: 'top',
    trigger: 'mouseenter',
    interactive: true,
};
  return (
    <>
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
          <div className="top-info">
            {props.author.map((item: any, index: any) => (
              <>
                <div className="author author--detail">
                  <div className='item' key={index}>
                      <div className='info'>
                          <div className='avata'>
                              <Image src={img} alt='' />
                          </div>
                          <div>
                            <div className='name'>
                                <a href={`/author/${item.userId}`}>{item.userName}</a>
                                <button><FontAwesomeIcon icon={faPlus} />Follow</button>
                            </div>
                            <div className='param'>
                              <Tooltip {...tooltipProps} title="Followers: 375" position="bottom" trigger="mouseenter" interactive>
                                  <span>
                                      <FontAwesomeIcon icon={faUserPlus} />375
                                  </span>
                              </Tooltip>
                              <Tooltip {...tooltipProps} title={`bài đăng: ${item.postQuantity}`} position="bottom" trigger="mouseenter" interactive>
                                  <span>
                                      <span><FontAwesomeIcon icon={faPen} />{item.postQuantity}</span>
                                  </span>
                              </Tooltip>
                            </div>
                          </div>
                      </div>
                      
                  </div>
                </div>
              </>
            ))}
            <p>Đã đăng bài vào ngày {props.data.length > 0 && ConvertDate(props.data[0].dateUpdated)}</p>
          </div>

          {props.data.map((item: any, index) => (
            <>
              <h3 className="review-title">{item.title}</h3>
              <div>{item.userName}</div>
              <div
                key={index}
                dangerouslySetInnerHTML={{
                  __html: modifyImagePaths(item.content),
                }}
              />
            </>
          ))}
          {/* <Related_articles brokerList={postRelated} /> */}
        </div>
        <div className="list-san">
          <p className="heading">
            <FontAwesomeIcon icon={faBook} />
            Review - Đánh giá
          </p>
          <div className="list-related-broker">
            <Related_broker />
          </div>
          <span className="heading">
            <FontAwesomeIcon icon={faBook} />
            Bài viết mới nhất
          </span>
          <div className="all-news">
            <Post data={[]} slug={""} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentForum;
