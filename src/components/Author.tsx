import React, { useEffect, useState } from 'react'
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import img from '../../public/assets/images/avata.webp'
import Image from 'next/image'
import axios from 'axios';
import { API_URL } from "@/lib/api-request";

type TooltipProps = any
const Author = () => {
    const [author, setAuthor] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/Discuss/GetAuthor?action=GetAuthors`)
        .then(response => {
            // Xử lý dữ liệu nhận được từ API
            setAuthor(response.data);
            console.log(author);
            
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error('Error fetching data: ', error);
        });
    },[])

    const tooltipProps: TooltipProps = {
        title: 'Followers: 375',
        position: 'top',
        trigger: 'mouseenter',
        interactive: true,
    };

    return (
    <>
        <div className='list'>
            {author.slice(0,5).map((item:any, index) => (
                <>
                    <div className='item' key={index}>
                        <div className='info'>
                            <div className='avata'>
                                <Image src={img} alt='' />
                            </div>
                            <div className='name'>
                                <a href={`/author/${item.userId}`}>{item.userName}</a>
                                <button><FontAwesomeIcon icon={faPlus} />Follow</button>
                            </div>
                        </div>
                        <div className='param'>
                            <Tooltip {...tooltipProps} title="Followers: 375" position="bottom" trigger="mouseenter" interactive>
                                <span>
                                    <FontAwesomeIcon icon={faUserPlus} />375
                                </span>
                            </Tooltip>
                            <Tooltip {...tooltipProps} title={`bài đăng: ${item.postQuantity}`} position="bottom" trigger="mouseenter" interactive>
                                <span>
                                    <span><FontAwesomeIcon icon={faPen} />{item.postQuantity}</span>
                                </span>
                            </Tooltip>
                            
                        </div>
                    </div>
                </>
            ))}
        </div>
    </>
  )
}

export default Author