import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {URL_SERVER} from '@/lib/api-request'
import Link from 'next/link';
import { calculateReadingTime } from '@/lib/func';

const Related_articles = ({brokerList, type}:any) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
  };
  
  return (
    <div className='Related-articles'>
      <h3>{type}</h3>
      {brokerList.length > 4 ?
        <div className='Related-articles__list'>
          <Slider {...settings}>
              {brokerList.map((item:any, index:any) => (
                <article className='Related-articles__item' key={index}>
                  <Link href={`/forum/${item.slug}&postId=${item.postId}`}>{item.title}</Link>
                  <div className='author'>
                    {item.authorId}
                  </div>
                  <span>{calculateReadingTime(item.content)} phút đọc</span>
                </article>
              ))}
          </Slider>
        </div>
      :
        <div className='Related-articles__list__no-slide'>
          {brokerList.map((item:any, index:any) => (
            <article className='Related-articles__item' key={index}>
              <Link href={`/forum/${item.slug}&postId=${item.postId}`}>{item.title}</Link>
              <div className='author'>
                {item.authorId}
              </div>
            </article>
          ))}
        </div>
      }
      
    </div>
  );
}

export default Related_articles