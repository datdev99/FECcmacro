import TemplatePage from '@/components/TemplatePage'
import React from 'react'
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
          <title>Kiến Thức - Ngoại Hối - Crystal</title>
      </Head>
       <TemplatePage slug={'ngoai-hoi'} />
    </>
  )
}

export default index
