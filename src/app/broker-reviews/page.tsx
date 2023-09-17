"use client"

import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'
import Broker from './broker'
import { apiGetSuperHero } from "@/lib/api-request"

// interface BrokerProps {
//   term: {
//     id: number;
//     logo: string;
//     company_name: string;
//     desc: string;
//     best: string;
//     alt: string;
//   }[];
// }


const page = () => {
  const [data, setData] = useState([])
  async function fetchData() {
    try {
      const superHeroData = await apiGetSuperHero();
      setData(superHeroData)
      console.log(data,"data");
      // Do something with superHeroData
    } catch (error) {
      // Handle any errors that occurred during the API request
      console.error('API Error:', error);
    }
  }
  
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Call the fetchData function
  
  
  const brokerProps = [
      {
        id: 1,
        logo: '/assets/images/broker-img.webp',
        company_name: 'Company 1',
        desc: 'Description 2',
        best: 'Best 1',
        alt: 'Alt 1',
      }, 
      {
        id: 2,
        logo: '/assets/images/broker-img.webp',
        company_name: 'Company 1',
        desc: 'Description 1',
        best: 'Best 1',
        alt: 'Alt 1',
      },
    ]
  return (
    <>
        <Header />
        <main className='bg-1'>
          <div className='l-container--1'>
            <Broker data={brokerProps} />

            {/* {data.map((item) => (
              <>
                <p>{item.firstName}</p>
                <p>{item.lastName}</p>
              </>
            ))} */}
          </div>
        </main>
    </>
  )
}

export default page