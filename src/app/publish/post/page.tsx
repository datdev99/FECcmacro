// pages/index.js
"use client"

// pages/index.js
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {API_URL} from '@/lib/api-request'
import { getToken } from '@/utils/auth';

const TinyMCE = dynamic(() => import("@/components/tinymce"), {
  ssr: false,
});

export default function Home() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  
  const token = getToken();  
  const handleEditorChange = (value:any) => {
    setContent(value);
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
        const newPost = {
          // Các trường khác trong newPost nếu có
          PostId: "0",
          Title: title,
          Description: "Đạt test",
          Image: "",
          Slug: "",
          Content: content,
          CategoryId: "28",
          AuthorId: "ecb3e2e2-f138-4392-8c91-33f47720ca43"
        };
    
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
      <h1>Nextjs 13 with tinymce editor</h1>
      <form action="">
        <button onClick={handleSubmit}>Đăng</button>
        <input type="text" value={title} onChange={handleTitleChange} placeholder="Nhập tiêu đề" />
        <TinyMCE value={content} onChange={handleEditorChange} />
      </form>
      
      {/* <p>Content: {content}</p> */}
    </div>
  );
}
