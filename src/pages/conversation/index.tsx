import React from 'react'
import {API_URL} from '@/lib/api-request'
import Contest from '@/components/Contest';
import Layout from '@/components/layout';


const page = ({ data }:any) => {
  return (
    <>
      <Layout>
        <main className='p-conversation'>
          <section className="l-container--1">
            <div className="list-conversation">
              <Contest data={data} />
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch dữ liệu từ API hoặc nguồn dữ liệu khác
  const res = await fetch(`${API_URL}/Contest/GetContest`);
  const data = await res.json();

  // Trả về dữ liệu để render trang
  return {
    props: {
      data,
    },
  };
}

export default page
