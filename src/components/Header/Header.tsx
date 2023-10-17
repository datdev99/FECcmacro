"use client"

import React from "react";
// import "../../css/style.css"; // Import file CSS nếu bạn muốn tùy chỉnh giao diện
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import {API_URL} from '@/lib/api-request'
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/assets/images/logo 1.png';

  interface MenuItem {
    text: string;
    children: MenuItem[];
    id: number;
    slug: string;
    // Thêm các trường dữ liệu khác nếu cần thiết
  }
  
  interface Props {
    item: MenuItem;
    parentPath?: string;
  }
  
const MenuItem: React.FC<Props> = ({ item, parentPath = "" }) => {
    

  const itemPath = `${parentPath}/${item.slug}`;
  return (
    <li>
      <a href={itemPath}>{item.text}{item.children.length > 0 && <FontAwesomeIcon icon={faAngleDown} />}</a>
      {item.children.length > 0 && (
        <ul>
          {item.children.map(child => (
            <MenuItem key={child.id} item={child} parentPath={itemPath} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Page = () => {
    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        // Địa chỉ API endpoint bạn muốn gửi yêu cầu GET
        const apiUrlCategory = `${API_URL}/Category/GetTreeCategory?action=get&para1=a`;
    
        // Sử dụng Axios để gửi yêu cầu GET đến API endpoint
        axios.get(apiUrlCategory)
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                setMenuData(response.data);
            })
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error('Error fetching data: ', error);
            });
      }, []);
  return (
    <>
      <header className='c-header'>
        <div className="l-container">
            <div className='c-header__inner'>
                <div className="c-header__logo">
                    <Link href="/">
                        <Image src={logo} width={160}  height={60} alt='' />
                    </Link>
                </div>
                <nav className="menu">
                  <ul>{menuData.map((item, i) => <MenuItem key={i} item={item} />)}</ul>
                </nav>
                <div className="login">
                    <Link href="/login">Đăng nhập</Link>
                </div>
                <div className='burger'>
                    <div className='burger__menu'>
                        <span></span><span></span><span></span>
                    </div>
                    <p>MENU</p>
                </div>
            </div>
            
        </div>
    </header>
    </>
  );
};

export default Page;
