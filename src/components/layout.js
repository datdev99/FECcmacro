import React from 'react';
import Header from './Header'
import Footer from './Footer'
import '@/css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";

if (typeof window !== 'undefined') {
  $(document).ready(function() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 650) {
        $("#top-btn").addClass("is-visible");
      } else {
        $("#top-btn").removeClass("is-visible");
      }
    });
  })
}

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        {children}
        <a href='#' id='top-btn'>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      <Footer />
    </>
  );
};

export default Layout;