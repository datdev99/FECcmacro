import Layout from '@/components/layout'
import React from 'react'
import banner from '../../../public/assets/images/gioi-thieu-banner.jpg'
import Image from 'next/image'
import GoogleMapEmbed from '@/components/GoogleMapEmbed'

const gt = () => {
  return (
    <>
      <Layout>
        <main id='page-gioithieu'>
          <div className='banner'>
            <Image src={banner} alt='crystal'></Image>
          </div>
          <div className='l-container--1'>
            <GoogleMapEmbed />
          </div>
        </main>
      </Layout>
    </>
  )
}

export default gt
