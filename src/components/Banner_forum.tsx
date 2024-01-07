import Image from 'next/image'
import React from 'react'
import img from '../../public/assets/images/banner-forum.png'

const Banner_forum = () => {
  return (
    <div className='banner-forum'>
        <div className='l-container--1'>
            <Image src={img} alt='' />
        </div>
    </div>
  )
}

export default Banner_forum