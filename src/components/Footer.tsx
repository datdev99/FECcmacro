import React from "react";
import logo from '../../public/assets/images/logo.svg';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="l-container--1">
          <div className="footer__info info-footer">
            <div className="info-footer__item desc _ibg">
                <Link href="/">
                    <Image src={logo} width={200}  height={70} alt='' />
                </Link>
            </div>
            <div className="footer__row inline-menu">
              <div className="inline-menu__body">
                <ul className="inline-menu__list">
                  <li>
                    <Link href="/about-us/" className="inline-menu__link">
                      Về chúng tôi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/methodology-for-evaluation-of-brokers/"
                      className="inline-menu__link"
                    >
                      Liên hệ
                    </Link>
                  </li>
                  <li>
                    <Link href="/overall-score/" className="inline-menu__link">
                      Tầm nhìn - Sứ mệnh
                    </Link>
                  </li>
                  <li>
                    <Link href="/news/" className="inline-menu__link">
                      Đánh giá sàn
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/" className="inline-menu__link">
                      Tin tức
                    </Link>
                  </li>
                  <li>
                    <Link href="/vacancies/" className="inline-menu__link">
                      Phân tích
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="inline-menu__body">
                <ul className="inline-menu__list">
                  <li>
                    <Link
                      href="/best-forex-brokers/"
                      className="inline-menu__link"
                    >
                      Ngoại hối
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ratings/prop/common/"
                      className="inline-menu__link"
                    >
                      Chứng khoán
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ratings/crypto/common/"
                      className="inline-menu__link"
                    >
                      Hàng hóa
                    </Link>
                  </li>
                  <li>
                    <Link href="/currencies/" className="inline-menu__link">
                      Vàng
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/interesting-articles/"
                      className="inline-menu__link"
                    >
                      Dầu thô
                    </Link>
                  </li>
                  <li>
                    <Link href="/currencies/" className="inline-menu__link">
                      Tiền điện tử
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/interesting-articles/"
                      className="inline-menu__link"
                    >
                      Kinh tế - Tài chính
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="info-footer__item in-social">
              <div className="info-footer__title">
                <span>Kết nối với chúng tôi</span>
              </div>
              <div className="info-footer__desc info-footer__desc--tunews">
                <div className="social">
                  <Link
                    href="https://www.youtube.com/channel/UC9HTMHvbSEE8knP6jXIk1FA?guided_help_flow=3"
                    className="social__item social__item--footer social__item--green _ibg"
                    rel="nofollow"
                    title="Youtube"
                  >
                    {/* <i className="icon__footer__youtube"></i> */}
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link
                    href="https://www.facebook.com/tradersunioncom/"
                    className="social__item social__item--footer social__item--green _ibg"
                    rel="nofollow"
                    title="Facebook"
                  >
                     <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/tradersunioncom/"
                    className="social__item social__item--footer social__item--green _ibg"
                    rel="nofollow"
                    title="TikTok"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </Link>
                </div>
                {/* <p className="copy">© IAFT Ltd., 2010-2023</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom2" id="footer-bottom2">
        <div className="l-container--1">
          {/* Bạn có thể sao chép phần HTML của footer ở đây */}
        </div>
      </div>
      <div className="footer__bottom3">
        <div className="l-container--1">
          {/* Bạn có thể sao chép phần HTML của footer ở đây */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
