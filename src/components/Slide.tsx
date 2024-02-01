import React from "react";
import Slider from "react-slick";
import New from "./New";
import img from "../../public/assets/images/livestream-1709.webp";
import Image from "next/image";
import Link from "next/link";
import {URL_SERVER} from '@/lib/api-request'

const Slide = ({news}:any) => {

  function formatdate(datetime: Date): string {
    datetime = new Date(datetime);
    let day = String(datetime.getDate()).padStart(2, "0");
    let month = String(datetime.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    let year = datetime.getFullYear();

    let formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  function UrlImage(direc:any) {
    return URL_SERVER + direc;
  }

  return (
    <>
      <Slider {...settings}>
        {news && news.slice(0, 6).map((item: any, index:any) => (
          <div className="box-new" key={index}>
            <article className="new">
              <Link href={`/${item.slug}&postId=${item.postId}`} title={item.time} className="image">
                <span>
                  <img width="320" height="200" src={UrlImage(item.image)} alt="" />
                </span>
              </Link>
              <div className="info">
                <h5>
                  <Link href={`/${item.slug}&postId=${item.postId}`}>{item.title}</Link>
                </h5>
                <p className="desc">{item.description}</p>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Slide;
