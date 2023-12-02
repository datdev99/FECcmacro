"use client";

import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import {API_URL} from '@/lib/api-request'
import { log } from 'console';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const router = useRouter();
  

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/User/login`, { email, password });
      console.log(response.data.data, response.data.statusCode);
      
      if(response.data.data === null) {
        if(response.data.statusCode === 500) {
            toast.error(`${response.data.message}`, {
              icon: "😢",
              position: "top-right",
            });
          }
      }else {
        const  token  = response.data.data.accessToken;
        const  refreshToken  = response.data.data.refreshToken;
        const  userId  = response.data.data.id;
        const userName = response.data.data.userName
        // Lưu token vào cookie
        // document.cookie = `token=${token}; path=/`;
        if (typeof window !== "undefined") {
          localStorage.setItem("Token", token)
          localStorage.setItem("RefreshToken", refreshToken)
          localStorage.setItem("userId", userId)
          localStorage.setItem("userName", userName)
        }
  
        if (token) {
          return router.push("/")
        }
        
        if(response.data.status == "401") {
          alert("11")
        }
      }
      
      
      
      // Redirect hoặc thực hiện hành động khác sau khi đăng nhập thành công
    } catch (error:any) {
      // Xử lý lỗi đăng nhập
      console.error(error,"e");
      // if(error.statusCode == 500) {
      //   toast.error(`${error.message}`, {
      //     icon: "😢",
      //     position: "top-right",
      //   });
      // }
      // if(error.response.status == "402") {
      //   toast.error("Sai mật khẩu!", {
      //     icon: "😢",
      //     position: "top-right",
      //   });
      // }
    }
  };

  return (
    <div className="l-container--2">
      <div className='form'>
        <h1>Đăng nhập</h1>
        <p className='txt-small'>Vui lòng điền tên người dùng và mật khẩu của bạn.</p>
        <hr />

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email"><b>Tên người dùng</b></label>
            <input
              type="text"
              placeholder="Nhập tên người dùng"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password"><b>Mật khẩu</b></label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              name="password"
              id="password"
              required
              value={password}
              checked={rememberPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="loginbtn">Đăng nhập</button>

          <label>
            <input type="checkbox" defaultChecked={true} name="remember" /> Nhớ mật khẩu
          </label>

          <div className="signin">
            <p>Bạn chưa có tài khoản? <Link href="/register">Đăng ký</Link>.</p>
            <p>Quên mật khẩu? <Link href="/forgot-password">Lấy lại</Link>.</p>
          </div>
        </form>
        <ToastContainer autoClose={2000} />
      </div>
      </div>
  );
}

export default (Login);