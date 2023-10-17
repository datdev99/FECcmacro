"use client"


import Image from "next/image";
import React, { useState } from "react";
import Login from "../login/login";
import Link from "next/link";

//
interface Props {
  data: IF_Data[];
  key?: any;
}

interface IF_Data {
  id: any;
  logo: any;
  company_name: any;
  desc: any;
  best: any;
  alt: any;
  score: any;
  ranking: any;
  slug: any;
}

const Broker = (props: Props) => {
  const [active, setActive] = useState('');
  function checkTokenInCookies() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('token=')) {
        // Tìm thấy cookies có tên "token"
        const token = cookie.substring('token='.length);
        // Kiểm tra token ở đây
        if (isValidToken(token)) {
          return true;
        }
      }
    }

    function isValidToken(token:any) {
      // Thực hiện kiểm tra token ở đây, ví dụ: kiểm tra hết hạn, chữ ký, ...
      // Nếu token hợp lệ, trả về true, ngược lại, trả về false.
      // Ví dụ đơn giản:
      return token && token.length > 0;
    }


    return false;
  }
  console.log(props, "kienthuc")
  const handleDanhGia = () => {
    // Sử dụng hàm kiểm tra
    if (checkTokenInCookies()) {
      setActive('')
      console.log('Có token trong cookies.');
    } else {
      setActive('is-active')
      console.log('Không có token trong cookies.');
    }
  }
  return (
    <>
      <div className="rating">
        <div className="rating-table">
          <div className="rating-table__header">
            <div className="header-actions">
            </div>
          </div>
          <table className="rating-table__body">
            <thead>
              <tr className="table-titles ">
                <th className="level">Xếp hạng </th>
                <th className="icon">Biểu tượng</th>
                <th className="broker">Tên sàn </th>
                <th className="score">Điểm sàn </th>
                <th className="open-account">Hành động </th>
              </tr>
            </thead>
            <tbody>
              {props.data.map(((broker) => (
                <tr className="table-row" key={broker.id}>
                  <td className="level">
                    {broker.ranking}
                  </td>
                  <td className="icon">
                    <Image src={broker.logo} alt={broker.company_name} width={40} height={20} quality={80} unoptimized></Image>
                  </td>
                  <td className="broker">
                    <p>{broker.company_name}</p>
                  </td>
                  <td className="score">
                    <div className="progres-wrap">
                      <div className="bar-wrap">
                        <span className="bar-fill" style={{width: `${broker.score*10}%`}}></span>
                      </div>
                      <span className="bar-value">{broker.score}</span>
                    </div>
                  </td>
                  <td className="open-account">
                    {/* <button className="btn btn--grey-light" onClick={handleDanhGia}>
                      Đánh giá
                    </button> */}
                    <Link className="btn btn--grey-light" href={`/danh-gia-san/${broker.slug}`}>
                      Xem đánh giá
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`popup-login ${active}`}>
        <Login />
      </div>
    </>
  );
};

export default Broker;
