import React from 'react'
import logo from '../../../public/assets/images/logo.svg';
import Image from 'next/image'

const Header = () => {
  return (
    <>
    <header className='c-header'>
        <div className="l-container">
            <div className='c-header__inner'>
                <div className="c-header__logo">
                    <a href="/">
                        {/* <img src={logo} alt="Ccmacro" /> */}
                        <Image src={logo} width={160}  height={60} alt='' />
                    </a>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="https://brokerchooser.com/broker-reviews">Broker Reviews</a></li>
                        <li><a href="https://brokerchooser.com/compare-brokers">Compare Brokers</a></li>
                        <li><a href="https://brokerchooser.com/how-to-invest">How to Invest</a></li>
                        <li><a href="https://brokerchooser.com/blog">Blog</a></li>
                        <li><a href="https://brokerchooser.com/about-us">About Us</a></li>
                    </ul>
                </nav>
                {/* <div className="search">
                    <form method="get" action="https://brokerchooser.com/search">
                        <input type="text" name="q" placeholder="Search for brokers..." />
                        <button type="submit">
                        <img src="search-icon.png" alt="Search" />
                        </button>
                    </form>
                </div> */}
            </div>
            
        </div>
    </header>
    </>
  )
}

export default Header