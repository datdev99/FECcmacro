"use client";

import React, { useEffect, useState } from "react";
import img from "../../public/assets/images/san/prospero.png";
import Image from "next/image";
import Link from "next/link";
import Post from "./Post";
import Layout from '@/components/layout';
import SidebarNew from "./SidebarNew";

interface Props {
  data: IF_Data[];
  slug: string;
}

interface IF_Data {
  categoryId: number;
  content?: any;
  dateCreated: Date;
  description: string;
  image: any;
  slug: any;
  title: any;
}

const Category = (props: Props) => {
  const [isDataLoaded, setIsDataLoaded] = useState(true);

  return (
    <>
      <Layout>
        <main className="l-container--1" id="page-post">
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link href="/">Trang chủ</Link>
              </li>
              <li>
                <Link href="/kien-thuc">Kiến thức</Link>
              </li>
              <li>
                Ngoại hối
              </li>
            </ul>
          </div>
          <div>
            <h2 className="title">Kiến thức</h2>
          </div>
          <div className="content">
            <div className="post-list">
              {isDataLoaded && <Post data={props.data} slug={""} />}
            </div>
            <SidebarNew />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Category;
