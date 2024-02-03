import React from "react";
import logo from '../../public/assets/images/logo 1.png';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-area footer--light">
      <div className="l-container--1">
        <div className="footer-big">
        <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-widget">
                  <div className="widget-about">
                    <Link href="/"><Image src={logo} alt="" width={250} height={80} /></Link>
                    <p>
                      Ccrystal dẫn đầu ngành về quản lý tài chính. Chúng tôi có hơn 5 năm kinh nghiệm trong ngành.
                    </p>
                  </div>
                </div>
                {/* Ends: .footer-widget */}
              </div>
              {/* end /.col-md-4 */}
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu footer-menu--1">
                    <h4 className="footer-widget-title">Danh mục phổ biến</h4>
                    <ul>
                      <li>
                        <Link href="/kien-thuc">Kiến Thức</Link>
                      </li>
                      <li>
                        <Link href="/tin-tuc">Tin Tức</Link>
                      </li>
                      <li>
                        <Link href="/danh-gia-san">Đánh Giá Sàn</Link>
                      </li>
                      <li>
                        <Link href="/conversation">Cuộc Thi</Link>
                      </li>
                      <li>
                        <Link href="/forum">Cộng Đồng</Link>
                      </li>
                    </ul>
                  </div>
                  {/* end /.footer-menu */}
                </div>
                {/* Ends: .footer-widget */}
              </div>
              {/* end /.col-md-3 */}
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">Công ty chúng tôi</h4>
                    <ul>
                      <li>
                        <Link href="/gioi-thieu">Giới Thiệu</Link>
                      </li>
                      <li>
                        <Link href="/lien-he">Liên Hệ</Link>
                      </li>
                    </ul>
                  </div>
                  {/* end /.footer-menu */}
                </div>
                {/* Ends: .footer-widget */}
              </div>
              {/* end /.col-lg-3 */}
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu no-padding">
                    <h4 className="footer-widget-title">Liên hệ chúng tôi</h4>
                    <ul>
                      <li><span>Điện thoại: </span><Link href="tel:09090909">09090909</Link></li>
                      <li><span>Email: </span><Link href="mailto:support@ccmacro.com">support@ccmacro.com</Link></li>
                      <li><span>Địa chỉ: </span><Link href="#">999 Điện Biên Phủ</Link></li>
                    </ul>
                  </div>
                  {/* end /.footer-menu */}
                </div>
                {/* Ends: .footer-widget */}
              </div>
              {/* Ends: .col-lg-3 */}
            </div>
        </div>
      </div>
      <div className="mini-footer">
        <div className="l-container--1">
          <div className="row">
            <div className="footer-end col-md-12">
              <div className="copyright-text">
                <p>
                  © 2023 <Link href="/">Ccrystal</Link>
                </p>
              </div>
              <div className="socials">
                <p>Kết nối:</p>
                <ul>
                  <li><Link href="facebook.com"><FontAwesomeIcon icon={faFacebook} fontSize={25}/></Link></li>
                  <li><Link href="tiktok.com"><FontAwesomeIcon icon={faTiktok} fontSize={25}/></Link></li>
                  <li><Link href="youtube.com"><FontAwesomeIcon icon={faYoutube} fontSize={25}/></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
