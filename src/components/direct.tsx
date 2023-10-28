import React from 'react'
import img from '@/assets/images/dollar_coin.webp'
import Image from 'next/image'
import img1 from '@/assets/images/fair-profit.svg'
import img2 from '@/assets/images/free_easy_access.svg'
import img3 from '@/assets/images/funded.svg'
import img4 from '@/assets/images/investment.svg'

const Direct = () => {
  return (
    <>
        <div className='direct'>
            <div className='c-heading--1'>
                <h3>
                    FXCE DIRECT
                </h3>
                <span>
                    Chance To Get A 100% Funded Account
                </span>
            </div>
            <div className='direct__content'>
                <div className='direct__list'>
                    <div className='direct__item'>
                        <Image src={img3} alt='' />
                        <div className='direct__info'>
                            <p>100% Funded By FXCE</p>
                            <ul>
                                <li>Pass free challenge</li>
                                <li>Get a funded account</li>
                                <li>From <span>$5,000</span> to <span>$10,000</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='direct__item'>
                        <Image src={img1} alt='' />
                        <div className='direct__info'>
                            <p>Fair Profit Sharing</p>
                            <ul>
                                <li>Receive <span>20% profit</span></li>
                                <li>On a <span>quarterly</span> basis</li>
                                <li>With performance review</li>
                            </ul>
                        </div>
                    </div>
                    <div className='direct__item'>
                        <Image src={img2} alt='' />
                        <div className='direct__info'>
                            <p>Free & Easy Access</p>
                            <ul>
                                <li>Use <span>Demo Direct account</span></li>
                                <li>Qualify fund conditions</li>
                                <li>EAs are allowed</li>
                            </ul>
                        </div>
                    </div>
                    <div className='direct__item'>
                        <Image src={img4} alt='' />
                        <div className='direct__info'>
                            <p>Boundless Investment</p>
                            <ul>
                                <li>Investment from <span>$100,000</span></li>
                                <li>Increase every 3 months</li>
                                <li><span>No limit</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='direct__image'>
                    <Image src={img} alt=""></Image>
                </div>
            </div>
        </div>
    </>
  )
}

export default Direct