"use client"

import Header from '@/components/Header'
// import React, { useEffect, useState } from 'react'
import Broker from './broker'
import Footer from '@/components/Footer'
// import { apiGetSuperHero } from "@/lib/api-request"


const page = () => {
  
  const brokerProps = [
      {
        id: 1,
        logo: '/assets/images/san/prospero.jpg',
        company_name: 'Prospero',
        desc: 'Description 2',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 9.75,
        ranking: 1,
        slug: 'Prospero',
      }, 
      {
        id: 2,
        logo: '/assets/images/san/TMGM.jpg',
        company_name: 'TMGM',
        desc: 'Description 1',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 9.45,
        ranking: 2,
        slug: 'TMGM',
      },
      {
        id: 3,
        logo: '/assets/images/san/IG.jpg',
        company_name: 'IG',
        desc: 'Description 2',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 9.25,
        ranking: 3,
        slug: 'IG',
      }, 
      {
        id: 4,
        logo: '/assets/images/san/Oanda.jpg',
        company_name: 'Oanda',
        desc: 'Description 1',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.95,
        ranking: 4,
        slug: 'Oanda',
      },
      {
        id: 5,
        logo: '/assets/images/san/XM.jpg',
        company_name: 'XM',
        desc: 'Description 2',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.85,
        ranking: 5,
        slug: 'XM',
      }, 
      {
        id: 6,
        logo: '/assets/images/san/XTB.jpg',
        company_name: 'XTB',
        desc: 'Description 1',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.65,
        ranking: 6,
        slug: 'XTB',
      },
      {
        id: 7,
        logo: '/assets/images/san/ATFX.jpg',
        company_name: 'ATFX',
        desc: 'Description 2',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.55,
        ranking: 7,
        slug: 'ATFX',
      }, 
      {
        id: 8,
        logo: '/assets/images/san/IC Markets.jpg',
        company_name: 'IC Market',
        desc: 'Description 1',
        best: 'Best 1',
        alt: 'Alt 1',
        score: 8.45,
        ranking: 8,
        slug: 'IC-Market',
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
        <Footer />
    </>
  )
}

export default page