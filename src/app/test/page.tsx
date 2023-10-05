"use client"

import React from "react";
import "./styles.css"; // Import file CSS nếu bạn muốn tùy chỉnh giao diện
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import {API_URL} from '../../lib/api-request'
import axios from "axios";

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
      <a href={itemPath}>{item.text}</a>
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

const page = () => {
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
    <div className="menu">
      <ul>{menuData.map((item, i) => <MenuItem key={i} item={item} />)}</ul>
    </div>
  );
};

export default page;
