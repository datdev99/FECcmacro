"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import {User_img} from '@/lib/image';
import Image from 'next/image';
import { getUserID } from '@/utils/auth';
import axios from 'axios'
import { API_URL, DOMAIN } from '@/lib/api-request';
import Layout from '@/components/layout'
import Head from 'next/head';

const Page = () => {
  const route = useRouter();
  const handleLogOut = () => {
      if (typeof window !== "undefined") {
          // Chỉ truy cập localStorage khi chạy trong môi trường trình duyệt
          localStorage.removeItem("Token")
          route.push('/login')
          // Thực hiện các thao tác với token ở đây
        }
  }

  const changeAvata = () => {
    
  }

  return (
    <>
        <Head>
          <title>Crystal</title>
          <link rel="canonical" href={DOMAIN} />
        </Head>
        <Layout>
        <main id='page-account'>
            <div className='l-container--4'>
              <section className='c-account mt-3'>
                <div className="sidebar">
                  <div className="user">
                    <div className="avata">
                      <Image src={User_img} alt="" />
                    </div>Nv$68qe64
                    <div className="username">
                      Đạt Nguyễn
                    </div>
                  </div>
                  <div className='list-func'>
                    <ul>
                      <li>Bài viết</li>
                      <li>Đang theo dõi</li>
                      <li>Đổi mật khẩu</li>
                      <li onClick={changeAvata}>Đổi ảnh đại diện</li>
                      <li onClick={handleLogOut}>Đăng xuất</li>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <div className='post-new'>
                    <div className="avata">
                      <Image src={User_img} alt="" />
                    </div>
                    <input type="text" placeholder='Bạn đang nghĩ gì?' />
                  </div>
                  <p className='heading'>Bài viết</p>
                  <section className='list-post'>
                    <div className='post-item'>
                      <div className='info'>
                        <div className='post-user'>
                          <div className="avata">
                            <Image src={User_img} alt="" />
                          </div>
                          <div>
                            <p className='username'>Đạt Nguyễn</p>
                            <span className='date_created'>9 thang 10, 2023</span>
                          </div>
                        </div>
                        <h3>Đây là tiêu đề</h3>
                      </div>
                      <div className='actions'>
                        <p>Bình luận</p>
                        <p>Chia sẻ</p>
                      </div>
                    </div>
                    <div className='post-item'>
                      <div className='info'>
                        <div className='post-user'>
                          <div className="avata">
                            <Image src={User_img} alt="" />
                          </div>
                          <div>
                            <p className='username'>Đạt Nguyễn</p>
                            <span className='date_created'>9 thang 10, 2023</span>
                          </div>
                        </div>
                        <h3>Đây là tiêu đề</h3>
                      </div>
                      <div className='actions'>
                        <p>Bình luận</p>
                        <p>Chia sẻ</p>
                      </div>
                    </div>
                    <div className='post-item'>
                      <div className='info'>
                        <div className='post-user'>
                          <div className="avata">
                            <Image src={User_img} alt="" />
                          </div>
                          <div>
                            <p className='username'>Đạt Nguyễn</p>
                            <span className='date_created'>9 thang 10, 2023</span>
                          </div>
                        </div>
                        <h3>Đây là tiêu đề</h3>
                      </div>
                      <div className='actions'>
                        <p>Bình luận</p>
                        <p>Chia sẻ</p>
                      </div>
                    </div>
                    <div className='post-item'>
                      <div className='info'>
                        <div className='post-user'>
                          <div className="avata">
                            <Image src={User_img} alt="" />
                          </div>
                          <div>
                            <p className='username'>Đạt Nguyễn</p>
                            <span className='date_created'>9 thang 10, 2023</span>
                          </div>
                        </div>
                        <h3>Đây là tiêu đề</h3>
                      </div>
                      <div className='actions'>
                        <p>Bình luận</p>
                        <p>Chia sẻ</p>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </main>
        </Layout>
    </>
  )
}

// export async function getServerSideProps() {
//   const userId = getUserID();
//   const TinTucResponse = axios.get(`${API_URL}/Post/Get?action=Get&slug=tin-tuc`);

//   return {
//     props: {
//       postId: postId,
//     },
//   };
// }
export default Page