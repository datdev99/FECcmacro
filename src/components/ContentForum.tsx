"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Related_broker from "./related-broker";
import Post from "./Post";
import { API_URL, URL_SERVER } from "@/lib/api-request";
import axios from "axios";
import Image from "next/image";
import {avata} from '@/lib/image'
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { faUserPlus, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { ConvertDate, ListBroker, createMucLuc, replaceSpaceTo_ } from "@/lib/func";
import CommentComponent from "./Comment";
import $ from "jquery";

interface Props {
  data: IF_Data[];
  pathArr: string[];
  author: string[];
  postId: number;
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
  const [commentsData, setCommentsData] = useState([]);
  const [newComment, setNewComment] = useState(null);
  const [postNew, setPostNew] = useState([])
  
  useEffect(() => {
  if (props.postId) {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/Comment/Get?action=GetComment&slug=${props.postId}`);
        const newCommentsData = response.data;

        // console.log('New Data:', newCommentsData);
        // console.log('Current Data:', commentsData);
        // Kiểm tra xem dữ liệu mới có khác với dữ liệu hiện tại không
        setCommentsData(newCommentsData);
        setNewComment(null)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }
}, [newComment, props.postId]);

  const handleAddComment = (text:any) => {
    // Logic để thêm bình luận mới vào danh sách
    setNewComment(text);
    console.log('New Comment:', text);
  };
  const handleReply = (text:any, parentCommentId:any) => {
    // Tạo một bình luận reply mới
    const newReply = {
      id: generateUniqueId(),
      author: 'New User', // Thay thế bằng thông tin người dùng thực tế
      text,
    };

    // Sao chép danh sách bình luận
    const updatedComments = [...commentsData];

    // Tìm bình luận cha để thêm reply
    const parentComment = findCommentById(updatedComments, parentCommentId);

    if (parentComment) {
      // Thêm reply vào mảng children của bình luận cha
      if (!parentComment.children) {
        parentComment.children = [];
      }
      parentComment.children.push(newReply);

      // Cập nhật state
      setCommentsData(updatedComments);
    }
  };

  // Các hàm hỗ trợ
  const findCommentById = (comments:any, commentId:any) => {
    for (const comment of comments) {
      if (comment.id === commentId) {
        return comment;
      }
      if (comment.children) {
        const childComment:any = findCommentById(comment.children, commentId);
        if (childComment) {
          return childComment;
        }
      }
    }
    return null;
  };

  const generateUniqueId = () => {
    return Date.now(); // Thay thế bằng một phương thức tạo ID duy nhất tốt hơn
  };
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
          const newResponse = await axios.get(`${API_URL}/Post/Get?action=GetNewPost&slug=1&categoryId=1`);
          setPostNew(newResponse.data);

          const categoryResponse = await axios.get(`${API_URL}/Category/Get?action=get`);
          setCategory(categoryResponse.data);
          

          const postRelatedResponse = await axios.get(`${API_URL}/Post/Get?action=Get_Related&slug=${props.pathArr[props.pathArr.length - 2]}&categoryId=${props.data[0].postId}`);
          setPostRelated(postRelatedResponse.data);

          const result = await categoryResponse.data.data.filter((item:any) => props.pathArr.includes(item.slug))
              .map((item:any) => ({ title: item.title, slug: item.slug }));
          setCrumb(result)
      } catch (error) {
          console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [props.pathArr])

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
                              <Image src={item.avatar != null ? 
                                    `${URL_SERVER}${item.avatar}` : 
                                    avata} width={30} height={30} quality={100} unoptimized alt='' />
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

          <div className="main-content">
            
            {props.data.map((item: any, index) => (
              <>
                <h3  className="review-title">{item.title}</h3>
                <div>{item.userName}</div>
                <div
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: modifyImagePaths(item.content),
                  }}
                />
              </>
            ))}
            
          </div>
        </div>
        <div className="sidebar">
          <div className="list-san">
            <p className="heading"><FontAwesomeIcon icon={faBook} /> Mục lục</p>
            <ul id="menu">
                
            </ul>
            <p className="heading">
              <FontAwesomeIcon icon={faBook} />
              Review - Đánh giá
            </p>
            <div className="list-related-broker">
              <Related_broker brokerList={ListBroker().slice(0,3)} />
            </div>
            <span className="heading">
              <FontAwesomeIcon icon={faBook} />
              Bài viết mới nhất
            </span>
            <div className="all-news">
              <Post data={postNew} slug={""} />
            </div>
          </div>
        </div>
        
      </div>
      <CommentComponent
        comments={commentsData}
        onReply={handleReply}
        onAddComment={handleAddComment}
        postId={props.postId}
        index={0}
      />
      {createMucLuc()}
    </>
  );
};

export default ContentForum;
