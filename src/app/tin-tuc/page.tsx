import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Post from '@/components/Post'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
        <main className='l-container--1' id='page-tintuc'>
            <div className='content'>
                <div className='tintuc-list'>
                    <Post />
                </div>
                <div className='sidebar'>
                    <div className='all-news'>
                        <Post />
                    </div>
                </div>
            </div>
            
        </main>
    <Footer />
  </>
  )
}

export default page
