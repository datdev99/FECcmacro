import Link from 'next/link'
import React, { useState } from 'react'

interface Props {
    data: IFData[],
    contestInfo: ContestInfo
}

interface IFData {
    id: number,
    mT4Account: string,
    token: string,
    gain: number,
    totalProfit: number,
    balance: number,
    credit: number,
    profit: number,
    equity: number,
    isInvestor: string,
}

interface ContestInfo {
  id: number,
  createdDate: any,
  expiredDate: any
}

const ContestDetail = (props: Props) => {
  console.log(props.contestInfo.id,"ee");
  
  return (
    <>
      <table>
        <thead>
            <tr>
                <th>Account</th>
                <th>Gain</th>
                <th>Balance</th>
                <th>Equity</th>
                <th>Profit</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((item, index) => (
                <tr key={index}>
                    <td><Link href={`./${props.contestInfo.id}/${item.mT4Account}`}>{item.mT4Account}</Link></td>
                    <td>{item.gain}</td>
                    <td>{item.balance}</td>
                    <td>{item.equity}</td>
                    <td>{item.profit}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default ContestDetail
