import React from 'react'
import logo from '../../../public/assets/images/logo.svg';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Header = () => {
  return (
    <>
    {/* <div className="topbar">
        <div className="l-container">
            <div className="title">
                Tin tức thị trường
            </div>
            <div className="login">
            <Link href="/login">Đăng nhập</Link>
            </div>

        </div>
    </div> */}
    <header className='c-header'>
        <div className="l-container">
            <div className='c-header__inner'>
                <div className="c-header__logo">
                    <Link href="/">
                        <Image src={logo} width={160}  height={60} alt='' />
                    </Link>
                </div>
                <nav className="menu">
                    <ul>
                        <li><Link href="/kien-thuc">Kiến thức cơ bản <FontAwesomeIcon icon={faAngleDown} /></Link>
                        <ul>
                            <li><Link href="/kien-thuc/ngoai-hoi">Ngoại hối</Link></li>
                            <li><Link href="/kien-thuc/chung-khoan">Chứng khoán</Link></li>
                            <li><Link href="/kien-thuc/hang-hoa">Hàng hóa</Link></li>
                            <li><Link href="/kien-thuc/vang">Vàng</Link></li>
                            <li><Link href="/kien-thuc/dau-tho">Dầu thô</Link></li>
                            <li><Link href="/kien-thuc/tien-dien-tu">Tiền điện tử</Link></li>
                            <li><Link href="/kien-thuc/kinh-te-tai-chinh">Kinh tế, tài chính</Link></li>
                        </ul>
                        </li>
                        <li><Link href="/phan-tich">Phân tích <FontAwesomeIcon icon={faAngleDown} /></Link>
                            <ul>
                                <li><Link href="/phan-tich/phan-tich-ky-thuat">Phân tích kỹ thuật <FontAwesomeIcon icon={faAngleDown} /></Link>
                                    <ul>
                                    <li><Link href="/phan-tich/cac-mau-bieu-do">Các mẫu biểu đồ</Link></li>
                                    <li><Link href="#">Chỉ báo kỹ thuật</Link></li>
                                    <li><Link href="#">Khác</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/phan-tich/phan-tich-thi-truong">Phân tích thị trường <FontAwesomeIcon icon={faAngleDown} /></Link>
                                    <ul>
                                        <li><Link href="#">Chứng khoán</Link></li>
                                        <li><Link href="#">Ngoại hối</Link></li>
                                        <li><Link href="#">Hàng hóa</Link></li>
                                        <li><Link href="#">Vàng</Link></li>
                                        <li><Link href="#">Dầu thô</Link></li>
                                        <li><Link href="#">Hàng hóa khác</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="/tin-tuc">Tin tức <FontAwesomeIcon icon={faAngleDown} /></Link>
                            <ul>
                                <li><Link href="#">Chứng khoán</Link></li>
                                <li><Link href="#">Ngoại hối</Link></li>
                                <li><Link href="#">Hàng hóa</Link></li>
                                <li><Link href="#">Vàng</Link></li>
                                <li><Link href="#">Dầu thô</Link></li>
                                <li><Link href="#">Hàng hóa khác</Link></li>
                                <li><Link href="#">Kinh tế, tài chính</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/danh-gia-san">Đánh giá sàn</Link>
                        </li>
                        <li><Link href="#">Giới thiệu <FontAwesomeIcon icon={faAngleDown} /></Link>
                            <ul>
                                <li><Link href="#">Về chúng tôi</Link></li>
                                <li><Link href="#">Lịch sử hình thành</Link></li>
                                <li><Link href="#">Tầm nhìn - Sứ mệnh</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#">Liên hệ</Link></li>
                    </ul>
                </nav>
                <div className="login">
                    <Link href="/login">Đăng nhập</Link>
                </div>
                <div className='burger'>
                    <div className='burger__menu'>
                        <span></span><span></span><span></span>
                    </div>
                    <p>MENU</p>
                </div>
            </div>
            
        </div>
    </header>
    </>
  )
}

export default Header