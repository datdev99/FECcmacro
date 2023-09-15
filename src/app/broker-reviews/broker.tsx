import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/broker-img.webp'

//
interface Props {
  data: IF_Data[]
  key?: any
}

interface IF_Data {
  id: any
  logo: any
  company_name: any
  desc: any
  best: any
  alt: any
}


const Broker = (props: Props) => {
  return (
    <div className='list-broker'>
        {props.data.map(broker => (
          <div className='broker-box'>
            <div>
            <p>{broker.id}</p>
            </div>
            <div className='broker-box__logo'>
                <Image src={broker.logo} width={64} height={64}  alt='a' />
            </div>
            <h3>{broker.company_name}</h3>
            <p>
              {broker.desc}
            </p>
          </div>
        ))}
        
    </div>
  )
}

export default Broker