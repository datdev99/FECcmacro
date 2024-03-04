import ListDiscussPostOfYou from '@/components/ListDiscussPostOfYou'
import Layout from '@/components/layout'
import { DOMAIN } from '@/lib/api-request'
import Head from 'next/head'
import React from 'react'

const Page = () => {
  return (
    <>
      <Head>
        <title>Danh sách bài viêt - Crystal</title>
        <link rel="canonical" href={DOMAIN} />
      </Head>
      <Layout>
        <ListDiscussPostOfYou />
      </Layout>
    </>
  )
}

export default Page
