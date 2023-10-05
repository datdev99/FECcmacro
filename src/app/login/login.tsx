"use client";

import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const router = useRouter();
  

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://localhost:7256/api/Auth/login`, { username, password });
      const  token  = response.data;
      // Lưu token vào cookie
      document.cookie = `token=${token}; path=/`;

      if (token) {
        return router.push("/profile")
      }
      
      if(response.data.status == "401") {
        alert("11")
      }
      
      // Redirect hoặc thực hiện hành động khác sau khi đăng nhập thành công
    } catch (error:any) {
      // Xử lý lỗi đăng nhập
      console.error(error.response.status,"e");
      if(error.response.status == "401") {
        toast.error("Sai tài khoản!", {
          icon: "😢",
          position: "top-right",
        });
      }
      if(error.response.status == "402") {
        toast.error("Sai mật khẩu!", {
          icon: "😢",
          position: "top-right",
        });
      }
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
            <label htmlFor="username"><b>Tên người dùng</b></label>
            <input
              type="text"
              placeholder="Nhập tên người dùng"
              name="username"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <p>Quên mật khẩu? <Link href="#">Lấy lại</Link>.</p>
          </div>
        </form>
        <ToastContainer autoClose={2000} />
      </div>
      </div>
  );
}

export default (Login);