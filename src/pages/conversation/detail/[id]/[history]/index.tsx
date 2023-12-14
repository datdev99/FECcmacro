// pages/conversation/detail/[id]/index.tsx
import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout';
import { API_URL, URL_SERVER } from '@/lib/api-request';
import axios from 'axios';
import Link from 'next/link';
import loading from '../../../../../assets/images/Loading.gif'
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

// interface Props {
//   balance: string
//   equity: string
//   margin:string
//   freeMargin: string
//   marginLevel: string
//   //order
//   symbol: string
//   order:string
//   openTime:string
//   type:string
//   openPrice: string
//   sl: string
//   tp: string
//   closePrice:string
//   commission: string
//   swap: string
// }

const DetailPage = ({ MT4Account, id, data, trading}:any) => {
  const [history, setHistory] = useState([])
  const [idLoading, setIsLoading] = useState(false)
  const [currentTab, setCurrentTab] = useState('Trading');
  console.log(trading,"trading");
  
  const openCity = (event:any, cityName:any) => {
    setCurrentTab(cityName);
  };
  
  useEffect(() => {
    axios.get(`${API_URL}/Contest/GetHistory?IdContest=${id}&mt4Account=${MT4Account}&fromdate=${data.createdDate}&todate=${data.expiredDate}`)
      .then(response => {
        setHistory(response.data)
        setIsLoading(true)
      })
      .catch(error => {
          console.error('Error fetching data: ', error);
      })
  }, [MT4Account, id, data.createdDate, data.expiredDate])

  return (
    <>
      <Layout>
        <main className="p-history">
          <div className='l-container--0'>
            <div>
              <Link href={`/conversation/detail/${id}`}>Trở lại</Link>
            </div>
            <div className="info-trader">
              <div>{data.userName}</div>
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
              {/* Tab links */}
              <div className="tab">
                <button className={`tablinks ${currentTab === 'Trading' && 'active'}`} onClick={(e) => openCity(e, 'Trading')}>
                  Trading
                </button>
                <button className={`tablinks ${currentTab === 'History' && 'active'}`} onClick={(e) => openCity(e, 'History')}>
                  History
                </button>
              </div>

              {/* Tab content */}
              <div id="Trading" className={`contentTab ${currentTab === 'Trading' && 'show'}`}>
                <div className="conversation-history">
                  {
                    <table>
                      <thead>
                        <tr>
                          <th className='txt-left'>Sysmbol</th>
                          <th className='txt-left'>Order</th>
                          <th className='txt-left'>Time</th>
                          <th className='txt-left'>Type</th>
                          <th className='txt-left'>Size</th>
                          <th className='txt-left'>Open Price</th>
                          <th className='txt-left'>S/L</th>
                          <th className='txt-left'>T/P</th>
                          <th className='txt-left'>Price</th>
                          <th className='txt-left'>Commission</th>
                          <th className='txt-left'>Swap</th>
                          <th className='txt-left'>Profit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          trading.map((item:any, index:any) => (
                            <>
                              <tr key={index}>
                                <td className='txt-left'>{item.symbol}</td>
                                <td className='txt-left'>{item.ticket}</td>
                                <td className='txt-left'>{ConvertDateTime(item.openTime)}</td>
                                <td className='txt-left'>{item.type}</td>
                                <td className='txt-left'>aaa</td>
                                <td className='txt-left'>{item.openPrice}</td>
                                <td className='txt-left'>{item.ex.sl}</td>
                                <td className='txt-left'>{item.ex.tp}</td>
                                <td className='txt-left'>{item.closePrice}</td>
                                <td className='txt-left'>{item.commission}</td>
                                <td className='txt-left'>{item.swap}</td>
                                <td className='txt-left'>{item.profit}</td>
                              </tr>
                              {
                                index==0 ?
                                <tr className='special'>
                                  <td colSpan={12}>
                                    Balance: <span>{data.balance} USD</span> 
                                    Equity: <span>{data.equity}</span> 
                                    Margin: <span>{data.margin}</span> 
                                    Free Margin: <span>{data.freeMargin}</span> 
                                    Margin Level: <span>{data.marginLevel}%</span> 
                                  </td>
                                </tr>:
                                ""
                              }
                            </>
                          ))
                        }
                      </tbody>
                    </table>
                  }
                </div>
              </div>

              <div id="History" className={`contentTab ${currentTab === 'History' && 'show'}`}>
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
                    <tfoot>
                      <tr>
                        <td colSpan={4}>Total</td>
                        <td className='txt-right'>{history.reduce((sum, item:any) => sum + item.ex.volume, 0)}</td>
                        <td className='txt-right'>{history.reduce((sum, item:any) => sum + item.stopLoss, 0).toFixed(2)}</td>
                        <td className='txt-right'>{history.reduce((sum, item:any) => sum + item.takeProfit, 0).toFixed(2)}</td>
                        <td className='txt-right'>{history.reduce((sum, item:any) => sum + item.profit, 0).toFixed(2)}</td>
                        <td></td>
                      </tr>
                    </tfoot>
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
                      <Image alt='' src={loading} width={60} height={60} />
                      {/* <p>Loading</p> */}
                    </div>
                  </>
                }
                </div>
              </div>
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
      data: {
        createdDate: data.contestInfo.createdDate,
        expiredDate: data.contestInfo.expiredDate,
        userName: data.data.userName,
        //accountInfo
        balance: data.data.accountInfo.balance,
        equity: data.data.accountInfo.equity,
        margin: data.data.accountInfo.margin,
        freeMargin: data.data.accountInfo.freeMargin,
        marginLevel: data.data.accountInfo.marginLevel,
      },
      trading: data.data.accountInfo.orders
    },
  };
}




export default DetailPage;
