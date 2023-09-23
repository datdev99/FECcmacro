'use client'

import React, { useEffect, useState } from 'react';
let Parser = require('rss-parser');

export async function getServerSideProps() {
    console.log("1")
    const parser = new Parser();
    const rssUrl = 'https://vnexpress.net/rss/kinh-doanh.rss'; // Thay thế URL_CUA_RSS bằng đường dẫn RSS thực tế bạn muốn sử dụng.
  
    try {
      const feed = await parser.parseURL(rssUrl);
      if (feed && feed.title) {
        return {
          props: {
            title: feed.title,
          },
        };
      }
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
    }
  
    return {
      props: {
        title: 'RSS Title not found',
      },
    };
  }

const GetRss = ({ title } : any) => {
    getServerSideProps()
  return (
    <div>
        <h1>RSS Title: {title}</h1>
    </div>
  )
}

export default GetRss
