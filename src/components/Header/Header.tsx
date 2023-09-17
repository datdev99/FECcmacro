import React from 'react'
import logo from '../../../public/assets/images/logo.svg';
import Image from 'next/image'

const Header = () => {
  return (
    <>
    {/* <div className="topbar">
        <div className="l-container">
            <div className="title">
                Tin tức thị trường
            </div>
            <div className="login">
            <a href="/login">Đăng nhập</a>
            </div>

        </div>
    </div> */}
    <header className='c-header'>
        <div className="l-container">
            <div className='c-header__inner'>
                <div className="c-header__logo">
                    <a href="/">
                        {/* <img src={logo} alt="Ccmacro" /> */}
                        <Image src={logo} width={160}  height={60} alt='' />
                    </a>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="#">Kiến thức cơ bản</a>
                        <ul>
                            <li><a href="#">Ngoại hối</a></li>
                            <li><a href="#">Chứng khoán</a></li>
                            <li><a href="#">Hàng hóa</a></li>
                            <li><a href="#">Vàng</a></li>
                            <li><a href="#">Dầu thô</a></li>
                            <li><a href="#">Tiền điện tử</a></li>
                            <li><a href="#">Kinh tế, tài chính</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Phân tích</a>
                            <ul>
                                <li><a href="#">Phân tích kỹ thuật</a>
                                    <ul>
                                    <li><a href="#">Các mẫu biểu đồ</a></li>
                                    <li><a href="#">Chỉ báo kỹ thuật</a></li>
                                    <li><a href="#">Khác</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Phân tích thị trường</a>
                                    <ul>
                                        <li><a href="#">Chứng khoán</a></li>
                                        <li><a href="#">Ngoại hối</a></li>
                                        <li><a href="#">Hàng hóa</a></li>
                                        <li><a href="#">Vàng</a></li>
                                        <li><a href="#">Dầu thô</a></li>
                                        <li><a href="#">Hàng hóa khác</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Tin tức</a>
                            <ul>
                                <li><a href="#">Chứng khoán</a></li>
                                <li><a href="#">Ngoại hối</a></li>
                                <li><a href="#">Hàng hóa</a></li>
                                <li><a href="#">Vàng</a></li>
                                <li><a href="#">Dầu thô</a></li>
                                <li><a href="#">Hàng hóa khác</a></li>
                                <li><a href="#">Kinh tế, tài chính</a></li>
                            </ul>
                        </li>
                        <li><a href="/danh-gia-san">Đánh giá sàn</a>
                        </li>
                        <li><a href="#">Giới thiệu</a>
                            <ul>
                                <li><a href="#">Về chúng tôi</a></li>
                                <li><a href="#">Lịch sử hình thành</a></li>
                                <li><a href="#">Tầm nhìn - Sứ mệnh</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Liên hệ</a></li>
                    </ul>
                </nav>
                <div className="login">
                    {/* <form method="get" action="https://brokerchooser.com/search">
                        <input type="text" name="q" placeholder="Search for brokers..." />
                        <button type="submit">
                        <img src="search-icon.png" alt="Search" />
                        </button>
                    </form> */}
                    <a href="/login">Đăng nhập</a>
                </div>
            </div>
            
        </div>
    </header>
    </>
  )
}

export default Header