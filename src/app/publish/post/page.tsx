// pages/index.js
"use client"

// pages/index.js
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {API_URL, API_KEY_TINYMCE} from '@/lib/api-request'
import { getToken, getUserID } from '@/utils/auth';
import Header from '@/components/Header/Header'
import { Editor } from '@tinymce/tinymce-react';
import Footer from "@/components/Footer";

const TinyMCE = dynamic(() => import("@/components/tinymce"), {
  ssr: false,
});

export default function Home() {
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  // const [userId, setUserId] = useState("")
  let token:any = ""
  let userId:any = ""
  if (typeof window !== 'undefined') {
    token = getToken();
    userId = getUserID();
    // Thực hiện các xử lý với token và userId tại đây
  }
  const handleEditorChange = (content:any, editor:any) => {
    console.log(content);
    
    setContent(content);
  };

  const handleEditorDescription = (value:any) => {
    setDescription(value);
  };

  const handleTitleChange = (e:any) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log(content);
    
    if (!token) {
      console.error('User is not authenticated. Please log in.');
      return;
    }
    else {
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
          const response = await fetch(`${API_URL}/post/add`, {
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
    
          // Xử lý khi bài đăng được thêm thành công, ví dụ như chuyển hướng trang
        } catch (error) {
          console.error('Error adding post:', error);
          // Xử lý lỗi nếu có
        }
    }
  }

  return (
    <div>
      <Header />
      <main className="l-container--0">
        <form action="">
          <div>
            <input type="text" value={title} onChange={handleTitleChange} placeholder="Nhập tiêu đề" />
            <button onClick={handleSubmit}>Đăng</button>
          </div>
          <div>
            <p>Nội dung</p>
            <Editor apiKey={API_KEY_TINYMCE} value={content} onChange={handleEditorChange} />
          </div>
          <div style={{ marginTop: '10px' }}>
            <p>Mô tả ngắn</p>
            <div style={{ height: '200px' }}>
              <Editor
                apiKey={API_KEY_TINYMCE}
                value={description}
                onChange={handleEditorDescription}
                init={{
                  // Các cài đặt khác của TinyMCE
                  height: 200,
                  /* Các cài đặt khác */
                }}
              />
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
