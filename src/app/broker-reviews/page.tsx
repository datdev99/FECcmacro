import Header from '@/components/Header/Header'
import React from 'react'
import Broker from './broker'

const page = () => {
  return (
    <>
        <Header />
        <main className='bg-1'>
            <Broker />
        </main>
    </>
  )
}

export default page