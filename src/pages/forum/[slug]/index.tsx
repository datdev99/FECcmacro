"use client"

import { useEffect, useState } from 'react';
import {API_URL} from '@/lib/api-request'
import axios from 'axios';
import ContentForum from '@/components/ContentForum';
import Layout from '@/components/layout';
import Banner_forum from '@/components/Banner_forum';
import Related_articles from '@/components/Related-articles';

const Page = ({ postId }:any) => {
    const [content, setContent] = useState([]);
    const [listForum, setlistForum] = useState([]);
    const [infoAuthor, setInfoAuthor] = useState([]);
    const [userPost, setUserPost] = useState([])

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

                const forumResponse = await axios.get(`${API_URL}/Discuss/Get?action=getdiscuss`);
                setlistForum(forumResponse.data);

                const authorResponse = await axios.get(`${API_URL}/Discuss/GetAuthor?action=GetInfoAuthorByPostId&para1=${postId}`);
                setInfoAuthor(authorResponse.data);

                const userPostResponse = await axios.get(`${API_URL}/Discuss/Get?action=GetUserPosts&para1=${authorResponse.data[0].userId}`);
                setUserPost(userPostResponse.data);

                console.log(userPost.filter((item:any) => item.PostId != postId), "eee");
                
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
            <Related_articles brokerList={listForum} type={"Bài viết liên quan"} />
            <Related_articles brokerList={userPost.filter((item:any) => item.postId != postId)} type={`Bài viết khác từ ${infoAuthor.length == 0 ? "" : infoAuthor[0].userName}`} />
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
