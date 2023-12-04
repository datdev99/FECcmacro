import React from 'react'
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import img from '../../public/assets/images/avata.webp'
import Image from 'next/image'

type TooltipProps = any
const Author = () => {
    const tooltipProps: TooltipProps = {
        title: 'Followers: 375',
        position: 'top',
        trigger: 'mouseenter',
        interactive: true,
      };
  return (
    <>
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
                        <Tooltip {...tooltipProps} title="Followers: 375" position="bottom" trigger="mouseenter" interactive>
                            <span>
                                <FontAwesomeIcon icon={faUserPlus} />375
                            </span>
                        </Tooltip>
                        <Tooltip {...tooltipProps} title="bài đăng: 20" position="bottom" trigger="mouseenter" interactive>
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
                        <Tooltip {...tooltipProps} title="Followers: 375" position="bottom" trigger="mouseenter" interactive>
                            <span>
                                <FontAwesomeIcon icon={faUserPlus} />375
                            </span>
                        </Tooltip>
                        <Tooltip {...tooltipProps} title="bài đăng: 20" position="bottom" trigger="mouseenter" interactive>
                            <span>
                                <span><FontAwesomeIcon icon={faPen} />20</span>
                            </span>
                        </Tooltip>
                        
                    </div>
                </div>
            </div>
    </>
  )
}

export default Author