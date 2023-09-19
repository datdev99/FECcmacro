import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/broker-img.webp";
import Login from "../login/login";

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
              {/* <div className="search">
                <input type="text" value="" placeholder="Find a Broker" className="search-input" data-url="/ratings/get-brokers-rating/?showCompareIcon=0&amp;type=binary" fdprocessedid="ujxfw9">
              </div> */}
            </div>
          </div>
          <table className="rating-table__body">
            <thead>
              <tr className="table-titles ">
                <th className="level">Xếp hạng </th>
                <th className="score">Điểm sàn </th>
                <th className="broker">Tên sàn </th>
                <th className="vote">Vote</th>
                <th className="open-account">Review </th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((broker) => (
                <tr className="table-row" key={broker.id}>
                  <td className="level">
                    {/* <div className="icon icon--first">
                      <i className="icon__rating__cup1-clear"></i>
                    </div>
                    <div className="place hide-desktop">Ranking position </div> */}
                    {broker.ranking}
                  </td>
                  <td className="score">
                    <div className="progres-wrap">
                      <div className="bar-wrap">
                        <span className="bar-fill" style={{width: `${broker.score*10}%`}}></span>
                      </div>
                      <span className="bar-value">{broker.score}</span>
                    </div>
                  </td>
                  <td className="broker">
                    <p>{broker.company_name}</p>
                  </td>
                  <td className="vote">
                    <button className="btn btn--grey-light" onClick={handleDanhGia}>
                      Đánh giá
                    </button>
                  </td>
                  <td className="open-account">
                    <a className="btn btn--grey-light" href="/brokers/binary/view/pocketoption/">
                      Xem đánh giá
                    </a>
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
      {/* <div className='list-broker'>
          {props.data.map(broker => (
            <div className='broker-box'>
              <div>
              <p>{broker.id}</p>
              </div>
              <div className='broker-box__logo'>
                  <Image src={broker.logo} width={64} height={64}  alt='a' />
              </div>
              <h3>{broker.company_name}</h3>
              <p>
                {broker.desc}
              </p>
            </div>
          ))}

      </div> */}
    </>
  );
};

export default Broker;
