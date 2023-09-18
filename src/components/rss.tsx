// Trong /pages/rss.js
import { Feed } from 'feed';
import React, { useState, useEffect } from 'react';

export default function RssPage({ titles }  : any ) {
  // Khởi tạo state cho tiêu đề
  const [datas, setData] = useState([]);

  // Sử dụng useEffect để cập nhật state khi props thay đổi
  useEffect(() => {
    setData(titles);
  }, [titles]);

  // Component để hiển thị tiêu đề của các bài viết
  return (
    <div>
      <h1>Danh sách tiêu đề</h1>
      <ul>
        {datas?.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  // Lấy dữ liệu từ url rss
  const res = await fetch('https://vnexpress.net/rss/kinh-doanh.rss');
  const data = await res.text();

  // Tạo một đối tượng Feed từ dữ liệu
  const feed = new Feed(data);

  // Lấy tiêu đề của các bài viết
  const titles = feed.items.map((item) => item.title);

  // In ra giá trị của titles trên terminal hoặc console của máy chủ
  console.log(titles,"titles")

  // Trả về tiêu đề như props
  return {
    props: {
      titles,
    },
  };
}
