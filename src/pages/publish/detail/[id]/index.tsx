import Layout from '@/components/layout'
import { DOMAIN } from '@/lib/api-request'
import Head from 'next/head'
import React from 'react'

const Page = ({postId}:any) => {
  return (
    <>
      <Head>
        <title>Bài viêt chi tiết - Crystal</title>
        <link rel="canonical" href={DOMAIN} />
      </Head>
      <Layout>
        <main className="l-container--1">
          <p>{postId}</p>
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context:any) {
  const { id } = context.query;

  return {
    props: {
      postId: id //|| "null",
    },
  };
}

export default Page