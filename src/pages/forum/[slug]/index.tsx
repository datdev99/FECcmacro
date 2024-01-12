"use client"

import { useEffect, useState } from 'react';
import {API_URL} from '@/lib/api-request'
import axios from 'axios';
import ContentForum from '@/components/ContentForum';
import Layout from '@/components/layout';
import Banner_forum from '@/components/Banner_forum';

const Page = ({ postId }:any) => {
    const [content, setContent] = useState([]);
    const [infoAuthor, setInfoAuthor] = useState([])

    let url = ""
    let pathArray:any;
    // let postId:any;
    if (typeof window !== 'undefined') {
        url = window.location.pathname;
        pathArray = url.split("/").filter(item => item !== "");
    }

  useEffect(() => {
    if (postId) {
        const fetchData = async () => {
            try {
                const discussResponse = await axios.get(`${API_URL}/Discuss/Get?action=getdiscussdetail&para1=${postId}`);
                setContent(discussResponse.data);

                const authorResponse = await axios.get(`${API_URL}/Discuss/GetAuthor?action=GetInfoAuthorByPostId&para1=${postId}`);
                setInfoAuthor(authorResponse.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }
  }, [postId]);
  
  return (
    <>
      <Layout>
        <main id='page-forum-detail'>
          <Banner_forum />
          <div className="l-container--1">
            <ContentForum data={content} author={infoAuthor} pathArr={pathArray} postId={postId} />
          </div>
        </main>
      </Layout>
      
    </>
  );
};

export async function getServerSideProps(context:any) {
  const { slug } = context.query;
  
  const postIdMatch = typeof slug === 'string' ? slug.match(/postId=(\d+)/) : null;
  const postId = postIdMatch ? postIdMatch[1] : null;

  return {
    props: {
      postId: postId || "null",
    },
  };
}


export default Page;
