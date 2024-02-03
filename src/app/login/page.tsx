import React from 'react'
import Login from './login'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <>
        <Header />
        <main className='p-login'>
          <Login />
        </main>
    </>
  )
}

export default Page