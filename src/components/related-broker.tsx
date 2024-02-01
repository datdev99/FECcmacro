import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Related_broker = ({brokerList}:any) => {
    // const brokerList = [
    //     {
    //       id: 1,
    //       logo: '/assets/images/san/prospero.jpg',
    //       company_name: 'Prospero',
    //       desc: 'Description 2',
    //       best: 'Best 1',
    //       alt: 'Alt 1',
    //       score: 9.75,
    //       ranking: 1,
    //       slug: 'Prospero',
    //     }, 
    //     {
    //       id: 2,
    //       logo: '/assets/images/san/TMGM.jpg',
    //       company_name: 'TMGM',
    //       desc: 'Description 1',
    //       best: 'Best 1',
    //       alt: 'Alt 1',
    //       score: 9.45,
    //       ranking: 2,
    //       slug: 'TMGM',
    //     },
    //     {
    //       id: 3,
    //       logo: '/assets/images/san/IG.jpg',
    //       company_name: 'IG',
    //       desc: 'Description 2',
    //       best: 'Best 1',
    //       alt: 'Alt 1',
    //       score: 9.25,
    //       ranking: 3,
    //       slug: 'IG',
    //     }, 
    //     {
    //       id: 4,
    //       logo: '/assets/images/san/Oanda.jpg',
    //       company_name: 'Oanda',
    //       desc: 'Description 1',
    //       best: 'Best 1',
    //       alt: 'Alt 1',
    //       score: 8.95,
    //       ranking: 4,
    //       slug: 'Oanda',
    //     },
    //     {
    //       id: 5,
    //       logo: '/assets/images/san/XM.jpg',
    //       company_name: 'XM',
    //       desc: 'Description 2',
    //       best: 'Best 1',
    //       alt: 'Alt 1',
    //       score: 8.85,
    //       ranking: 5,
    //       slug: 'XM',
    //     }, 
    //     {
    //       id: 6,
    //       logo: '/assets/images/san/XTB.jpg',
    //       company_name: 'XTB',
    //       desc: 'Description 1',
    //       best: 'Best 1',
    //       alt: 'Alt 1',
    //       score: 8.65,
    //       ranking: 6,
    //       slug: 'XTB',
    //     },
    //     {
    //       id: 7,
    //       logo: '/assets/images/san/ATFX.jpg',
    //       company_name: 'ATFX',
    //       desc: 'Description 2',
    //       best: 'Best 1',
    //       alt: 'Alt 1',
    //       score: 8.55,
    //       ranking: 7,
    //       slug: 'ATFX',
    //     }, 
    //     {
    //       id: 8,
    //       logo: '/assets/images/san/IC Markets.jpg',
    //       company_name: 'IC Market',
    //       desc: 'Description 1',
    //       best: 'Best 1',
    //       alt: 'Alt 1',
    //       score: 8.45,
    //       ranking: 8,
    //       slug: 'IC-Market',
    //     },
    //   ]
  return (
    <div className='list-brokers'>
        {brokerList.map((broker:any, index:any) => (
            <>
                <div className="related-broker" key={index}>
                    <div className="box">
                        <div className="col-3">
                        <Image src={broker.logo} alt={broker.alt} width={40} height={20} quality={80} unoptimized />
                        </div>
                        <div className="col-9" style={{ position: "relative" }}>
                        <span className="h2-related">
                            <Link href={`/danh-gia-san/${broker.slug}`} data-wpel-link="internal">
                             {broker.company_name}
                            </Link>
                        </span>
                        <p>
                            Đánh giá: <span>{broker.score}/10</span>
                        </p>
                        <Link
                            className="sidebar-broker-link"
                            href={`/danh-gia-san/${broker.slug}`}
                            data-wpel-link="internal"
                        >
                            <svg
                            className="svg-inline--fa fa-angle-right"
                            style={{ color: "#DAAA51" }}
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="angle-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                            data-fa-i2svg=""
                            >
                            <path
                                fill="currentColor"
                                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
                            />
                            </svg>
                        </Link>
                        </div>
                    </div>
                    </div>
            </>
        ))}
        

    </div>
  )
}

export default Related_broker
