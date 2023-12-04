import Link from 'next/link'
import React from 'react'
import img from '../../public/assets/images/avata.webp'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

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
            <div className='list'>
                <div className='item'>
                    <div className='info'>
                        <div className='avata'>
                            <Image src={img} alt='' />
                        </div>
                        <div className='name'>
                            <a href="#">Ngyễn Hữu Kim</a>
                            <button><FontAwesomeIcon icon={faPlus} />Follow</button>
                        </div>
                    </div>
                    <div className='param'>
                        <Tooltip title="Followers: 375" position="bottom" trigger="mouseenter" interactive>
                            <span>
                                <FontAwesomeIcon icon={faUserPlus} />375
                            </span>
                        </Tooltip>
                        <Tooltip title="bài đăng: 20" position="bottom" trigger="mouseenter" interactive>
                            <span>
                                <span><FontAwesomeIcon icon={faPen} />20</span>
                            </span>
                        </Tooltip>
                        
                    </div>
                </div>
                <div className='item'> 
                    <div className='info'>
                        <div className='avata'>
                            <Image src={img} alt='' />
                        </div>
                        <div className='name'>
                            <a href="#">Ngyễn Hữu Kim</a>
                            <button><FontAwesomeIcon icon={faPlus} />Follow</button>
                        </div>
                    </div>
                    <div className='param'>
                        <Tooltip title="Followers: 375" position="bottom" trigger="mouseenter" interactive>
                            <span>
                                <FontAwesomeIcon icon={faUserPlus} />375
                            </span>
                        </Tooltip>
                        <Tooltip title="bài đăng: 20" position="bottom" trigger="mouseenter" interactive>
                            <span>
                                <span><FontAwesomeIcon icon={faPen} />20</span>
                            </span>
                        </Tooltip>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SidebarForum