import React from 'react'
import img1 from '@/assets/images/trading-analysis.svg'
import img2 from '@/assets/images/trader-guard.svg'
import img3 from '@/assets/images/copy-modes.svg'
import img4 from '@/assets/images/best-execution.svg'
import Image from 'next/image'

const Copytrade = () => {
  return (
    <div className='l-container--4'>
        <div className='copytrade'>
            <div className='c-heading--1'>
                <h3>
                    FXCE COPYTRADE
                </h3>
                <span>
                    First-Class Copying
                </span>
            </div>
            <div className='copytrade__list'>
                <div className='copytrade__item'>
                    <Image src={img1} alt='' />
                    <p>Best Execution</p>
                    <span>Less than 0.1s/order with 100,000 orders/s</span>
                </div>
                <div className='copytrade__item'>
                    <Image src={img2} alt='' />
                    <p>Trading Analysis</p>
                    <span>Filter talented traders and analyze transparent data</span>
                </div>
                <div className='copytrade__item'>
                    <Image src={img3} alt='' />
                    <p>Copy Modes</p>
                    <span>Modify the suitable copy modes & options to your taste</span>
                </div>
                <div className='copytrade__item'>
                    <Image src={img4} alt='' />
                    <p>Trader's Guard</p>
                    <span>Limit the market risk when investing in your masters</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Copytrade