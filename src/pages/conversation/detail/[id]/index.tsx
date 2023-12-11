// pages/conversation/detail/[id]/index.tsx
import React, { useState } from 'react'
import Contest from '@/components/Contest';
import Layout from '@/components/layout';
import { API_URL } from '@/lib/api-request';
import ContestDetail from '@/components/ContestDetail';

const DetailPage = ({ id, data }:any) => {
  const [filter, setFilter] = useState(data)

  let timeoutId:any;
  const handleInputChange = (e:any) => {
    clearTimeout(timeoutId);
    var filteredArray = filter.filter(function(item:any) {
      // Kiểm tra kiểu dữ liệu của mT4Account
      if (typeof item.mT4Account === 'string') {
        // Kiểm tra xem giá trị của trường mT4Account có chứa giá trị tìm kiếm không
        return item.mT4Account.toLowerCase().includes(e.target.value);
      }
      return false; // Nếu không phải là chuỗi, không thỏa mãn điều kiện
    });
    console.log(filteredArray, "filteredArray", filter);
    
    // Đặt timeout mới
    timeoutId = setTimeout(function() {
      // Thực hiện hành động sau khi chờ 3 giây
      console.log("Thực hiện hành động sau khi chờ 3 giây", e.target.value);
    }, 3000);
  }
  return (
    <>
      <Layout>
        <main className="l-container--1">
          <div>
            <div>
              <input type="text" onChange={handleInputChange} placeholder='search' />
            </div>
            <div className="conversation-tbl">
              <div className="inner">
                <ContestDetail data={data} />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }:any) {
  // params.id chứa giá trị của [id] từ URL
  const id = params.id;
  const res = await fetch(`${API_URL}/Contest/GetDetailContest?IdContest=${id}`);
  console.log('res', res);
  const data = await res.json();
  
  // Fetch dữ liệu chi tiết dựa trên id từ API hoặc nguồn dữ liệu khác
  // const data = await fetchData(id);

  // Trả về dữ liệu để render trang
  return {
    props: {
      id,
      data
    },
  };
}

export default DetailPage;
