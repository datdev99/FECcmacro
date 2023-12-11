import React from 'react'

interface Props {
    data: IFData[]
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


const ContestDetail = (props: Props) => {
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
                <tr>
                    <td>{item.mT4Account}</td>
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
