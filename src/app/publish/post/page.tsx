// pages/index.js
"use client"

// pages/index.js
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {API_URL, API_KEY_TINYMCE} from '@/lib/api-request'
import { getToken, getUserID, getRefreshToken } from '@/utils/auth';
import Header from '@/components/Header/Header'
import { Editor } from '@tinymce/tinymce-react';
import Footer from "@/components/Footer";
import $ from "jquery";

const TinyMCE = dynamic(() => import("@/components/tinymce"), {
  ssr: false,
});



export default function Home() {
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [checktitle, setCheckTitle] = useState(true);
  const [checkContent, setCheckContent] = useState(true);

  // const [userId, setUserId] = useState("")
  let token:any = ""
  let userId:any = ""
  let i = 0

  const RefreshToken = () => {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: `${API_URL}/User/Refresh`,
            data: JSON.stringify({
              AccessToken: localStorage.getItem('Token'),
              RefreshToken: localStorage.getItem('RefreshToken'),
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (d) {
                localStorage.setItem('Token', d.accessToken);
                resolve(true); // Resolve the promise with true
            },
            error: function (e) {
                reject(false); // Reject the promise with false
            }
        });
    });
  }

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
        <form action="">
          <div>
            <div>
              <input type="text" value={title} onChange={handleTitleChange} placeholder="Nhập tiêu đề" />
              {checktitle == false ? <label htmlFor="">Tiêu đề phải nhiều hơn 3 từ</label> : ""}
            </div>
            <button onClick={handleSubmit}>Đăng</button>
          </div>
          <div>
            <p>Nội dung</p>
            {checkContent == false ? <label htmlFor="">Nội dung phải ít nhất 50 từ</label> : ""}
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
