"use client"

import Header from '@/components/Header/Header'
// import React, { useEffect, useState } from 'react'
import Broker from './broker'
// import { apiGetSuperHero } from "@/lib/api-request"


const page = () => {
  
  const brokerProps = [
      {
        id: 1,
        logo: '/assets/images/broker-img.webp',
        company_name: 'Prospero',
        desc: 'Description 2',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 9.75,
        ranking: 1,
      }, 
      {
        id: 2,
        logo: '/assets/images/broker-img.webp',
        company_name: 'TMGM',
        desc: 'Description 1',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 9.45,
        ranking: 2,
      },
      {
        id: 3,
        logo: '/assets/images/broker-img.webp',
        company_name: 'IG',
        desc: 'Description 2',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 9.25,
        ranking: 3,
      }, 
      {
        id: 4,
        logo: '/assets/images/broker-img.webp',
        company_name: 'Oanda',
        desc: 'Description 1',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.95,
        ranking: 4,
      },
      {
        id: 5,
        logo: '/assets/images/broker-img.webp',
        company_name: 'Oanda',
        desc: 'Description 2',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.85,
        ranking: 5,
      }, 
      {
        id: 6,
        logo: '/assets/images/broker-img.webp',
        company_name: 'XM',
        desc: 'Description 1',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.65,
        ranking: 6,
      },
      {
        id: 7,
        logo: '/assets/images/broker-img.webp',
        company_name: 'XTB',
        desc: 'Description 2',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.55,
        ranking: 7,
      }, 
      {
        id: 8,
        logo: '/assets/images/broker-img.webp',
        company_name: 'ATFX',
        desc: 'Description 1',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.55,
        ranking: 8,
      },
      {
        id: 9,
        logo: '/assets/images/broker-img.webp',
        company_name: 'XM',
        desc: 'Description 2',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.50,
        ranking: 9,
      }, 
      {
        id: 10,
        logo: '/assets/images/broker-img.webp',
        company_name: 'IC marketq',
        desc: 'Description 1',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.45,
        ranking: 10,
      },
    ]
  return (
    <>
        <Header />
        <main className='bg-1'>
          <div className='l-container--3'>
            <Broker data={brokerProps} />
          </div>
        </main>
    </>
  )
}

export default page