import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Register from './register'

const Page = () => {
  return (
    <>
        <Header />
        <main className='p-register'>
          <Register />
        </main>
    </>
  )
}

export default Page