import React from "react";
import logo from '../../public/assets/images/logo.svg';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="l-container--1">
          <div className="footer__info info-footer">
            <div className="info-footer__item desc _ibg">
                <a href="/">
                    <Image src={logo} width={200}  height={70} alt='' />
                </a>
            </div>
            <div className="footer__row inline-menu">
              <div className="inline-menu__body">
                <ul className="inline-menu__list">
                  <li>
                    <a href="/about-us/" className="inline-menu__link">
                      Our team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/methodology-for-evaluation-of-brokers/"
                      className="inline-menu__link"
                    >
                      Our methodology
                    </a>
                  </li>
                  <li>
                    <a href="/overall-score/" className="inline-menu__link">
                      TU Overall Score
                    </a>
                  </li>
                  <li>
                    <a href="/news/" className="inline-menu__link">
                      TU News
                    </a>
                  </li>
                  <li>
                    <a href="/support/" className="inline-menu__link">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href="/vacancies/" className="inline-menu__link">
                      Vacancies
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inline-menu__body">
                <ul className="inline-menu__list">
                  <li>
                    <a
                      href="/best-forex-brokers/"
                      className="inline-menu__link"
                    >
                      Best Forex Brokers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ratings/prop/common/"
                      className="inline-menu__link"
                    >
                      Best Prop Trading Firms
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ratings/crypto/common/"
                      className="inline-menu__link"
                    >
                      Best Crypto Exchanges
                    </a>
                  </li>
                  <li>
                    <a href="/currencies/" className="inline-menu__link">
                      Live Quotes and Charts
                    </a>
                  </li>
                  <li>
                    <a
                      href="/interesting-articles/"
                      className="inline-menu__link"
                    >
                      Interesting Articles
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="info-footer__item in-social">
              <div className="info-footer__title">
                <span>We are in Social Media</span>
              </div>
              <div className="info-footer__desc info-footer__desc--tunews">
                <div className="social">
                  <a
                    href="https://www.youtube.com/channel/UC9HTMHvbSEE8knP6jXIk1FA?guided_help_flow=3"
                    className="social__item social__item--footer social__item--green _ibg"
                    rel="nofollow"
                    title="Youtube"
                  >
                    <i className="icon__footer__youtube"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/tradersunioncom/"
                    className="social__item social__item--footer social__item--green _ibg"
                    rel="nofollow"
                    title="Facebook"
                  >
                    <i className="icon__footer__facebook"></i>
                  </a>
                  <a
                    href="https://twitter.com/tradersunion_tu"
                    className="social__item social__item--footer social__item--green _ibg"
                    rel="nofollow"
                    title="Twitter"
                  >
                    <i className="icon__footer__twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/tradersunioncom/"
                    className="social__item social__item--footer social__item--green _ibg"
                    rel="nofollow"
                    title="Instagram"
                  >
                    <i className="icon__footer__instagram"></i>
                  </a>
                </div>
                <p className="copy">© IAFT Ltd., 2010-2023</p>
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
