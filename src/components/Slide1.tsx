import React from "react";
import img from "@/assets/images/slide.png";
import Image from "next/image";
import Slider from "react-slick";

const Slide1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <div className="programme">
                <Slider {...settings}>
                    <div className="programme__item">
                        <a href="#">
                        <Image src={img} alt="" />
                        </a>
                    </div>
                    <div className="programme__item">
                        <a href="#">
                        <Image src={img} alt="" />
                        </a>
                    </div>
                    <div className="programme__item">
                        <a href="#">
                        <Image src={img} alt="" />
                        </a>
                    </div>
                    <div className="programme__item">
                        <a href="#">
                        <Image src={img} alt="" />
                        </a>
                    </div>
                    <div className="programme__item">
                        <a href="#">
                        <Image src={img} alt="" />
                        </a>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Slide1;
