"use client";

// import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  // const router = useRouter();

  const handleSubmit = () => {
    // e.preventDefault();
    // Xử lý đăng nhập ở đây, ví dụ kiểm tra tên người dùng và mật khẩu
    // Nếu đăng nhập thành công, bạn có thể định tuyến đến trang chính
    // router.push('/');
  };

  return (
    <div className="l-container--2">
      <div className='form'>
        <h1>Đăng ký</h1>
        {/* <p>Vui lòng điền tên người dùng và mật khẩu của bạn.</p> */}
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
          <div>
            <label htmlFor="fullname"><b>Họ và tên</b></label>
            <input
              type="text"
              placeholder="Nhập họ và tên"
              name="fullname"
              id="fullname"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="fullname"><b>Số điện thoại</b></label>
            <input
              type="number"
              placeholder="Nhập số điện thoại"
              name="phone"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button type="submit" className="loginbtn">Đăng ký</button>
          <div className="signin">
            <p>Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>.</p>
            <p>Quên mật khẩu? <a href="#">Lấy lại</a>.</p>
          </div>
        </form>
      </div>
      </div>
  );
}

export default (Register);