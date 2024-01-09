import Image from "next/image";
import React from "react";
import Link from "next/link";
import {URL_SERVER} from '@/lib/api-request'

interface Props {
    data: IF_Data[];
    slug: string;
}

interface IF_Data {
    categoryId : number;
    content?: any;
    dateCreated: Date;
    description: string;
    image: any;
    slug: any;
    title: any;
}

const Post = (props: Props) => {// Lấy giá trị của slug từ URL
    
    function formatdate(datetime : Date) : string {
        datetime = new Date(datetime);
        let day = String(datetime.getDate()).padStart(2, '0');
        let month = String(datetime.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        let year = datetime.getFullYear();

        let formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }

    function UrlImage(direc:any) {
        return URL_SERVER + direc;
    }


    return (
    <>
        {
            props.data.length === 0           
            ? 
                <p>Chưa có bài viết nào</p>
            :
            props.data.map((item:any, index) => (
                <div className="box-new" key={index}>
                    <article className="new">
                        <Link href={`/${item.slug}&postId=${item.postId}`} title={item.time} className="image">
                            <span>
                                <img src={UrlImage(item.image)} alt={item.description} />
                            </span>
                        </Link>
                        <div className="info">
                        <h5>
                            <Link href={`/${item.slug}&postId=${item.postId}`}>
                                {item.title}
                            </Link>
                        </h5>
                        <div className="time">
                            <span></span>
                            <time dateTime={item.time}>{formatdate(item.dateCreated)}</time>
                        </div>
                        <p className="desc">
                            {item.description}
                        </p>
                        </div>
                    </article>
                </div>
            ))
        }
    </>
  );
};

export default Post;
