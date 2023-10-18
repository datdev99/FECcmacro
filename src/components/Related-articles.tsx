import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {URL_SERVER} from '@/lib/api-request'

const Related_articles = ({brokerList}:any) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 5000,
    dots: true,
    adaptiveHeight: true
  };
  return (
    <div className='Related-articles'>
      <h3>Bài viết liên quan</h3>
      <div className='Related-articles__list'>
        {
        brokerList.length > 4 ? 
          <Slider {...settings}>
            {brokerList.map((item:any, index:any) => (
              <article className='Related-articles__item' key={index}>
                <div className="Related-articles__img">
                  <Image src={`${URL_SERVER}${item.image}`} alt="" width={0} height={0} style={{ width: '100%', height: '100%' }} quality={80} unoptimized />
                </div>
                <h4>{item.title}</h4>
              </article>
            ))}
          </Slider>
          :
          brokerList.map((item:any, index:any) => (
            <article className='Related-articles__item' key={index}>
              <div className="Related-articles__img">
                <Image src={`${URL_SERVER}${item.image}`} alt="" width={0} height={0} style={{ width: '100%', height: '100%' }} quality={80} unoptimized />
              </div>
              <h4>{item.title}</h4>
            </article>
          ))
        }
        
      </div>
    </div>
  );
}

export default Related_articles