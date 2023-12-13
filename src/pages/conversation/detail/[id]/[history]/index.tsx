// pages/conversation/detail/[id]/index.tsx
import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout';
import { API_URL, URL_SERVER } from '@/lib/api-request';

const DetailPage = ({ extractedPath, id }:any) => {

  return (
    <>
      <Layout>
        <main className="l-container--1">
          <div>
            <div className="info-trader">
              <p>{extractedPath}</p>
              <p>{id}</p>
            </div>
            <div className="conversation-history">
              <div className="inner">
                
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    // Lấy đường dẫn từ context.req (nếu nó tồn tại)
    const fullPath = context.req ? context.req.url : null;
    const id = context.params.id

    const match = fullPath.match(/conversation\/detail\/history\/(\d+)/);
    const extractedPath = match ? match[0] : null;

    console.log("Extracted Path:", extractedPath);

    // Chuyển giá trị thành số nếu cần thiết
    const idContest = extractedPath ? parseInt(extractedPath, 10) : null;

    console.log("idContest:", idContest);

    // Trả về dữ liệu để render trang
    return {
      props: {
        extractedPath,
        id
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error.message);

    // Xử lý lỗi và trả về dữ liệu mặc định hoặc thông báo lỗi
    return {
      props: {
        idContest: null,
      },
    };
  }
}



export default DetailPage;
