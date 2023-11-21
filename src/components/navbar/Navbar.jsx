import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavbarStyle.css'

import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'
import Linkedin from '../../assets/LinkedIn.svg'
import Twitter from '../../assets/Twitter.svg'
import Logo from '../../assets/logo.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

import Button from '../button/Button'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)

    return (
        <header className='header'>
            <div className="container">
                <div className="header__top">
                    <div className="top__content">
                        <p className='content__emergency'>For emergency cases: 567 123 45 67</p>
                        <p className='content__contact'>Location: 121 Wallstreet Street, NY , USA </p>
                        <p className='content__contact'>Open hours: 9.00-24.00 Mon-Sat</p>
                        <p className='content__contact'>Email:info@ddsgnr.com</p>
                    </div>

                    <div className="top__socials">
                        <div className="social__icon">
                            <img src={Facebook} alt="icon" />
                        </div>
                        <div className="social__icon">
                            <img src={Instagram} alt="icon" />
                        </div>
                        <div className="social__icon">
                            <img src={Linkedin} alt="icon" />
                        </div>
                        <div className="social__icon">
                            <img src={Twitter} alt="icon" />
                        </div>                        
                    </div>
                </div>

                <div className="header__main">
                    <div className="main__logo">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <nav className={nav ? 'main__nav active' : 'main__nav'}>
                        <ul>
                            <Link to='/about'>
                                <li className='nav__link'>About us</li>
                            </Link>
                            <Link to='/our services'>
                                <li className='nav__link'>Our services</li>
                            </Link>
                        </ul>

                        <div className="header__topMobile">
                            <div className="top__content">
                                <p className='content__emergency'>For emergency cases: 567 123 45 67</p>
                                <p className='content__contact'>Location: 121 Wallstreet Street, NY , USA </p>
                                <p className='content__contact'>Open hours: 9.00-24.00 Mon-Sat</p>
                                <p className='content__contact'>Email:info@ddsgnr.com</p>
                            </div>

                            <div className="top__socialsMobile">
                                <div className="social__icon">
                                    <img src={Facebook} alt="icon" />
                                </div>
                                <div className="social__icon">
                                    <img src={Instagram} alt="icon" />
                                </div>
                                <div className="social__icon">
                                    <img src={Linkedin} alt="icon" />
                                </div>
                                <div className="social__icon">
                                    <img src={Twitter} alt="icon" />
                                </div>                        
                            </div>
                        </div>
                        <Button text='Request a quote' 
                            style={{
                                padding: '9px 20px'
                            }}
                        />
                    </nav>

                    <div className="mobile__menu" onClick={handleNav}>
                        {nav ? (<AiOutlineClose className='icon'/>) : (<AiOutlineMenu className='icon'/>)}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar