import React from 'react'
import $ from "jquery";
import img1 from '@/assets/images/image-ea.webp'
import img2 from '@/assets/images/image-no-coding.webp'
import img3 from '@/assets/images/image-trading-contest.webp'
import img4 from '@/assets/images/image-get-donation.webp'
import Image from 'next/image';

const Ecosystem = () => {
    function handleClick(id:any, id1:any) {
        $(".ecosystem__tab-item").removeClass("active");
        $(`#${id}`).addClass("active")
        $(".tab-list li").removeClass("active")
        $(`#${id1}`).addClass("active")
    }
    return (
    <>
      <div className='ecosystem'>
        <div className='ecosystem__bg'>
            <div className='c-heading--1'>
                <h3 className='white'>FXCE EA Ecosystem</h3>
                <span>Not Only EA. It's More</span>
            </div>
        </div>
        <div className='ecosystem__box l-container--1'>
            <ul className='tab-list'>
                <li id='tab1' onClick={() =>handleClick('tabcontent1','tab1')} className='active'>
                    <h4>Exclusive EA Collection</h4>
                    <p>Own the EA collection exclusively at FXCE</p>
                </li>
                <li id='tab2' onClick={() => handleClick('tabcontent2','tab2')}>
                    <h4>No Coding</h4>
                    <p>Freely create your own EA without coding</p>
                </li>
                <li id='tab3' onClick={() => handleClick('tabcontent3','tab3')}>
                    <h4>EA Trading Contests</h4>
                    <p>Freely attend and organize EA tournaments at Arena</p>
                </li>
                <li id='tab4' onClick={() => handleClick('tabcontent4','tab4')}>
                    <h4>Get Donation & FXCE Direct</h4>
                    <p>Get donations from EA creation. There is also a chance to get funded by FXCE</p>
                </li>
            </ul>
            <div className='ecosystem__tab-content'>
                <div id='tabcontent1' className='ecosystem__tab-item active'>
                    <Image src={img1} alt='' />
                </div>
                <div id='tabcontent2' className='ecosystem__tab-item'>
                    <Image src={img2} alt='' />
                </div>
                <div id='tabcontent3' className='ecosystem__tab-item'>
                    <Image src={img3} alt='' />
                </div>
                <div id='tabcontent4' className='ecosystem__tab-item'>
                    <Image src={img4} alt='' />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Ecosystem
