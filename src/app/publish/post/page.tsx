// pages/index.js
"use client"

// pages/index.js
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {API_URL} from '@/lib/api-request'
import { getToken, getUserID } from '@/utils/auth';
import Header from '@/components/Header/Header'

const TinyMCE = dynamic(() => import("@/components/tinymce"), {
  ssr: false,
});

export default function Home() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  // const [userId, setUserId] = useState("")
  let token:any = ""
  let userId:any = ""
  if (typeof window !== 'undefined') {
    token = getToken();
    userId = getUserID();
    // Thực hiện các xử lý với token và userId tại đây
  }
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
          AuthorId: userId
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
      <Header />
      <main>
        <form action="">
          <div>
            <input type="text" value={title} onChange={handleTitleChange} placeholder="Nhập tiêu đề" />
            <button onClick={handleSubmit}>Đăng</button>
          </div>
          <TinyMCE value={content} onChange={handleEditorChange} />
        </form>
      </main>
    </div>
  );
}
