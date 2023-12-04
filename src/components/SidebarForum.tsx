import Link from 'next/link'
import React from 'react'
import Author from './Author'

interface Props {
    data: IF_Data[]
    text: string
}

interface IF_Data {
    userName: any,
    title: any,
    slug: any,
}

const SidebarForum = (props: Props) => {
  return (
    <div className='siderbar-forum'>
        <div className='d-flex'>
            <p>{props.text}</p>
            <hr />
        </div>
        <div className='list'>
            <ul>
                {props.data.slice(0, 6).map((item:any, index:any) => (
                    <>
                        <li>
                            <Link href={`${item.slug}`}>{item.title}</Link>
                            <p>{item.userName}</p>
                        </li>
                    </>
                ))}
            </ul>
        </div>
        <div className='top-author'>
            <div className='d-flex'>
                <p>TOP AUTHORS</p>
                <hr />
            </div>
            <Author />
        </div>
    </div>
  )
}

export default SidebarForum