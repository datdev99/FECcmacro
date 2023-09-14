import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/broker-img.webp'

const Broker = () => {
  return (
    <div className='broker-box'>
        <div>
            <p>Best online broker</p>
        </div>
        <div className='broker-box__logo'>
            <Image src={logo} width={64} height={64}  alt='a' />
        </div>
        <h3>Interactive Brokers</h3>
        <p>
            Recommended for traders looking for broad market access and a professional trading environment
        </p>
        <div>
            
        </div>
    </div>
  )
}

export default Broker