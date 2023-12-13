// pages/conversation/detail/[id]/index.tsx
import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout';
import { API_URL, URL_SERVER } from '@/lib/api-request';
import axios from 'axios';
import Link from 'next/link';
import loading from '../../../../../assets/images/Loading1.gif'
import Image from 'next/image';

function ConvertDateTime(Datetime:any) {
  const originalDate = new Date(Datetime);

  // Lấy các thành phần của ngày và giờ
  const day = originalDate.getDate();
  const month = originalDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
  const year = originalDate.getFullYear();
  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();
  
  // Tạo chuỗi mới theo định dạng mong muốn
  const formattedDateString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  return formattedDateString
}

const DetailPage = ({ MT4Account, id, data}:any) => {
  const [history, setHistory] = useState([])
  const [idLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    axios.get(`${API_URL}/Contest/GetHistory?IdContest=${id}&mt4Account=${MT4Account}&fromdate=${data.contestInfo.createdDate}&todate=${data.contestInfo.expiredDate}`)
      .then(response => {
        setHistory(response.data)
        setIsLoading(true)
      })
      .catch(error => {
          console.error('Error fetching data: ', error);
      })
  }, [MT4Account, id, data.contestInfo.createdDate, data.contestInfo.expiredDate])

  return (
    <>
      <Layout>
        <main className="l-container--1">
          <div>
            <div className="info-trader">
              <div>{data.data.userName}</div>
                <div>
                  Trading Stats
                  <ul>
                    <li><p>Total fund:</p><span>2000</span></li>
                    <li><p>Growth:</p></li>
                    <li><p>Balance drawdown:</p></li>
                    <li><p>Balance:</p></li>
                    <li><p>Profit:</p></li>
                    <li><p>Gain:</p></li>
                    <li><p>Win rate:</p></li>
                    <li><p>Profit factor:</p></li>
                    <li><p>Avg. orders per week:</p></li>
                    <li><p>Avg. duration per order:</p></li>
                    <li><p>CAGR/MDD:</p></li>
                    <li><p>Investors (0):</p></li>
                  </ul>
                </div>
            </div>
            <div>
              <Link href={`/conversation/detail/${id}`}>Trở lại</Link>
            </div>
            <div className="conversation-history">
              {
              idLoading == true ? 
                <table>
                  <thead>
                    <tr>
                      <th className='txt-left'>Date</th>
                      <th className='txt-right'>Type</th>
                      <th className='txt-right'>Symbol</th>
                      <th className='txt-right'>Open price<br></br>Close price</th>
                      <th className='txt-right'>Volume</th>
                      <th className='txt-right'>Stop loss</th>
                      <th className='txt-right'>Take profit</th>
                      <th className='txt-right'>Profit percent</th>
                      <th>Copy from</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      history.map((item:any, index:any) => (
                        <>
                          <tr key={index}>
                            <td>{ConvertDateTime(item.openTime)}<br></br>{ConvertDateTime(item.closeTime)}</td>
                            <td className='txt-right'>{item.type}</td>
                            <td className='txt-right'>{item.ex.symbol}</td>
                            <td className='txt-right'>{item.openPrice}<br></br>{item.closePrice}</td>
                            <td className='txt-right'>{item.ex.volume}</td>
                            <td className='txt-right'>{item.stopLoss}</td>
                            <td className='txt-right'>{item.takeProfit}</td>
                            <td className='txt-right'>{item.profit}</td>
                            <td></td>
                          </tr>
                        </>
                      ))
                    }
                    </tbody>
                </table>
                :
                <>
                  <table>
                  <thead>
                    <tr>
                      <th className='txt-left'>Date</th>
                      <th className='txt-right'>Type</th>
                      <th className='txt-right'>Symbol</th>
                      <th className='txt-right'>Open price<br></br>Close price</th>
                      <th className='txt-right'>Volume</th>
                      <th className='txt-right'>Stop loss</th>
                      <th className='txt-right'>Take profit</th>
                      <th className='txt-right'>Profit percent</th>
                      <th>Copy from</th>
                    </tr>
                  </thead>
                  </table>
                  <div className='Loading'>
                    <Image alt='' src={loading} width={190} height={150} />
                    <p>Loading</p>
                  </div>
                </>
               }
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params, req }: any) {
  // params.id chứa giá trị của [id] từ URL
  const id = params.id;

  // Lấy đường dẫn từ request
  const fullPath = req.url;
  let match = ""
  // Sử dụng URL để lấy query string
  const pathSegments = fullPath.split('/').filter((value:any) => value !== '');

  // Lấy lastSegment từ pathSegments
  let MT4Account = pathSegments[pathSegments.length - 1];
  if(MT4Account.includes("history")) {
    match = MT4Account.match(/(?:^|&)history=([^&]+)/);
    MT4Account = match[1]
  }

  // Tiếp tục xử lý như bình thường
  const res = await fetch(`${API_URL}/Contest/GetAccountDetail?IdContest=${id}&MT4Account=${MT4Account}`);
  const data = await res.json();

  // Trả về dữ liệu để render trang
  return {
    props: {
      MT4Account,
      id,
      data
    },
  };
}




export default DetailPage;
