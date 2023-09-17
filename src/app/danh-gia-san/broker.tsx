import Image from "next/image";
import React from "react";
import logo from "@/assets/images/broker-img.webp";

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
}

const Broker = (props: Props) => {
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
                <th className="level">Position </th>
                <th className="score">Overall score </th>
                <th className="broker">Broker </th>
                <th className="deposit">Min. deposit </th>
                <th className="vote">Vote</th>
                <th className="open-account">Review </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="level">
                  <div className="icon icon--first">
                    <i className="icon__rating__cup1-clear"></i>
                  </div>
                  <div className="place hide-desktop">Ranking position </div>
                </td>
                <td className="score">
                  <div>
                    {/* <a href="https://po.trade/smart/9IhmiQxQt9V6Li" target="_blank" rel="nofollow sponsored" className="link-not-filled">
                    <Image src={logo} width={60} height={25} loading="lazy" alt="Logo Pocket Option">
                  </a> */}
                  </div>
                  <div className="progres-wrap">
                    <div className="bar-wrap">
                      <span className="bar-fill" style={{width: '96.5%'}}></span>
                    </div>
                    <span className="bar-value">9.65</span>
                  </div>
                </td>
                <td className="broker">
                  {/* <a href="/brokers/binary/view/pocketoption/" className="link-not-filled hide-mobile">Pocket Option</a> */}
                  <p>Pocket Option</p>
                  <div className="progres-wrap hide-desktop">
                    <span>
                      <span className="mobile-label">Overall score:</span>
                      <span className="bar-value">9.65</span>/10
                    </span>
                    <div className="bar-wrap">
                      <span className="bar-fill"></span>
                    </div>
                  </div>
                </td>
                <td className="deposit">
                  <span className="mobile-label">Min. deposit:</span>
                  <p>$5</p>
                </td>
                <td className="vote">
                  <button className="btn btn--grey-light">
                    Đánh giá
                  </button>
                </td>
                <td className="open-account">
                  <a className="btn btn--grey-light" href="/brokers/binary/view/pocketoption/">
                    STUDY REVIEW 
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
    // <div className='list-broker'>
    //     {props.data.map(broker => (
    //       <div className='broker-box'>
    //         <div>
    //         <p>{broker.id}</p>
    //         </div>
    //         <div className='broker-box__logo'>
    //             <Image src={broker.logo} width={64} height={64}  alt='a' />
    //         </div>
    //         <h3>{broker.company_name}</h3>
    //         <p>
    //           {broker.desc}
    //         </p>
    //       </div>
    //     ))}

    // </div>
  );
};

export default Broker;
