// pages/index.js
"use client"

// pages/index.js
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {API_URL, API_KEY_TINYMCE} from '@/lib/api-request'
import { getToken, getUserID, getRefreshToken } from '@/utils/auth';
import Header from '@/components/Header'
import { Editor } from '@tinymce/tinymce-react';
import Footer from "@/components/Footer";
import $ from "jquery";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { RefreshToken } from "@/lib/func";

const TinyMCE = dynamic(() => import("@/components/tinymce"), {
  ssr: false,
});



export default function Home() {
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [checktitle, setCheckTitle] = useState(true);
  const [checkContent, setCheckContent] = useState(true);
  const router = useRouter();
  // const [userId, setUserId] = useState("")
  let token:any = ""
  let userId:any = ""
  let i = 0

  if (typeof window !== 'undefined') {
    token = getToken();
    userId = getUserID();
    // Thực hiện các xử lý với token và userId tại đây
  }
  const handleEditorChange = (event:any, editor:any) => {
    const newContent = event.target ? event.target.getContent() : editor.getContent();
    console.log(newContent);
    
    setContent(newContent);
  };

  const handleEditorDescription = (event:any, editor:any) => {
    const newContent = event.target ? event.target.getContent() : editor.getContent();
    setDescription(newContent);
  };

  const handleTitleChange = (e:any) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    if (!token) {
      console.error('User is not authenticated. Please log in.');
      return;
    }
    else {
      setCheckTitle(true)
      setCheckContent(true)
      if(content.split(/\s+/).length >= 20 && title.split(/\s+/).length >= 3) {
        const newPost = {
          // Các trường khác trong newPost nếu có
          PostId: "0",
          Title: title,
          Description: description,
          Image: "",
          Slug: "",
          Content: content,
          CategoryId: "28",
          AuthorId: userId
        };
        console.log(newPost);
        
        try {
          const response = await fetch(`${API_URL}/Discuss/add`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(newPost),
          });
    
          if (!response.ok) {
            throw new Error('Failed to add post');
          }
          toast.success(`Thành công`, {
            icon: "😊",
            position: "top-right",
          });
          return router.push("/publish/list")
          // Xử lý khi bài đăng được thêm thành công, ví dụ như chuyển hướng trang
        } catch (error) {
          if(i < 2) {
            i++;
            const DongBo = async () => {
              var result = await RefreshToken();
                  if (result) {
                    handleSubmit(e);
                  }
            }
            DongBo()
          }
        }
      }
      else {
        if(content.split(/\s+/).length < 20) {
          setCheckContent(false)
        }
        if(title.split(/\s+/).length < 3) {
          setCheckTitle(false)
        }
      }
    }
  }

  return (
    <div>
      <Header />
      <main className="l-container--0">
        <form action="" className="publish-post">
          <div>
            <p>Tiêu đề</p>
            <div className="input-title">
              <input type="text" value={title} onChange={handleTitleChange} placeholder="Nhập tiêu đề" />
              {checktitle == false ? <label htmlFor="">Tiêu đề phải nhiều hơn 3 từ</label> : ""}
              <button onClick={handleSubmit}>Đăng</button>
            </div>
          </div>
          <div>
            <p>Nội dung</p>
            {checkContent == false ? <label htmlFor="">Nội dung phải ít nhất 50 từ</label> : ""}
            <Editor apiKey={API_KEY_TINYMCE} value={content} onEditorChange ={handleEditorChange} />
          </div>
          <div style={{ marginTop: '10px' }}>
            <p>Mô tả ngắn</p>
            <div style={{ height: '200px' }}>
              <Editor
                apiKey={API_KEY_TINYMCE}
                value={description}
                onEditorChange ={handleEditorDescription}
                init={{
                  // Các cài đặt khác của TinyMCE
                  height: 200,
                  /* Các cài đặt khác */
                }}
              />
            </div>
          </div>
        </form>
        <ToastContainer autoClose={2000} />
      </main>
      <Footer />
    </div>
  );
}
