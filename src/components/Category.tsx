"use client"

import React, { useEffect, useState } from 'react'
import img from '../../public/assets/images/san/prospero.png'
import Image from 'next/image'
import Link from 'next/link'
import Post from './Post'
import Header from "@/components/Header/Header";

interface Props {
    data: IF_Data[];
    slug: string;
}

interface IF_Data {
  categoryId : number;
  content?: any;
  dateCreated: Date;
  description: string;
  image: any;
  slug: any;
  title: any;
}

const Category = (props: Props) => {
  const [isDataLoaded, setIsDataLoaded] = useState(true);

  return (
    <>
    <Header />
    <main className='l-container--1' id='page-post'>
      <div className='breadcrumbs'>
        <ul>
          <li>
            <Link href="/">Trang chủ</Link>
          </li>
          <li>
            <Link href="/kien-thuc">Kiến thức</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className='title'>Kiến thức</h2>
      </div>
      <div className='content'>
        <div className='post-list'>
        {isDataLoaded && <Post data={props.data} slug={''} />}
        </div>
        <div className='sidebar'>
          <div className='advertisement'>
            <div className='item'>
              <Image src={img} alt='prospero' />
            </div>
            <div className='item'>
              <Image src={img} alt='prospero' />
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default Category