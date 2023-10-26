"use client";

import Link from 'next/link';
// import { useRouter } from 'next/router';
import React, { useState } from 'react'
import {API_URL} from '@/lib/api-request'
import Image from 'next/image';
import loading from '@/assets/images/loading.gif'

const Register = () => {
  const [rememberPassword, setRememberPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });
  const [checkRegister, setCheckRegister] = useState(false)
  const [pageLoading, setPageLoading] = useState(false)

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API endpoint)
    setPageLoading(true)
    console.log(formData);
    try {
      const response = await fetch(`${API_URL}/User/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle successful registration
        setCheckRegister(true)
        setPageLoading(false)
      } else {
        // Handle registration error
        setPageLoading(false)
        alert("Thất bại")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="l-container--2">
      <div className={`form register ${checkRegister ? "hide" : ""}`}>
        <h1>Đăng ký tài khoản</h1>
        {/* <p>Vui lòng điền tên người dùng và mật khẩu của bạn.</p> */}
        <hr />

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email"><b>Email</b></label>
            <input
              type="text"
              placeholder="Nhập email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.password}
              checked={rememberPassword}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="username"><b>Tên của bạn?</b></label>
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              name="username"
              id="username"
              required
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone"><b>Số điện thoại</b></label>
            <input
              type="number"
              placeholder="Nhập số điện thoại"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="loginbtn">Đăng ký</button>
          <div className="signin">
            <p>Bạn đã có tài khoản? <Link href="/login">Đăng nhập</Link>.</p>
            <p>Quên mật khẩu? <Link href="#">Lấy lại</Link>.</p>
          </div>
        </form>
        <div className={`loading ${pageLoading ? "active" : "hide"}`}>
          <Image src={loading} width={55} height={55} quality={80} unoptimized alt='loading' />
        </div>
      </div>
      <div className={`form confirm ${!checkRegister ? "hide" : ""}`}>
        <h2>Đăng ký tài khoản cho Ccrystal</h2>
        <p className='desc'>
          Chào mừng bạn đến <span>Nền tảng Ccrystal</span> ! Tham gia cùng chúng tôi để tìm kiếm thông tin hữu ích cần thiết để cải thiện kỹ năng và kiến thức của bạn.
        </p>
        <div className='box'>
          <p>
            Chào mừng <span>{formData.username}</span> , tài khoản của bạn đã được <span>đăng ký thành công</span>. Chúng tôi đã gửi cho bạn một email kích hoạt tại địa chỉ email <span>{formData.email}</span>. Vui lòng kiểm tra hộp thư đến của bạn để hoàn thành.
          </p>
          <p>
            Nếu bạn không nhận được email kích hoạt từ chúng tôi, vui lòng ấn <Link href="">gửi lại</Link> email kích hoạt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default (Register);