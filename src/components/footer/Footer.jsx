import React from 'react'
import './FooterStyle.css'
import Button from '../button/Button'

import Logo from '../../assets/logo.svg'
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'
import Linkedin from '../../assets/LinkedIn.svg'
import Twitter from '../../assets/Twitter.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__top">
                    <div className="footer__newsletter">
                        <div className="main__logo">
                                <img src={Logo} alt="Logo" />
                        </div>
                        <p className="newsletter__text">Join our newsletter to stay up to date on features and releases.</p>
                        <div className="newsletter__inputWrapper">
                            <input type="email" placeholder='Enter your email'/>
                            <Button text='Subscribe' 
                                style={{ 
                                    backgroundColor: 'transparent', 
                                    border: '1px solid #000', 
                                    color: '#000',
                                    padding: '12px 20px',
                                }}
                                />
                        </div>
                        <p className='newsletter__agreement'>By subscribing you agree to with our <span>Privacy Policy</span> and provide consent to receive updates from our company.</p>
                    </div>

                    <nav className="footer__nav">
                        <div className="footer__navCol">
                            <p className="navCol__title">About Us</p>
                            <ul className='navCol__items'>
                                <li>
                                    <p className="navCol__item">Home</p>
                                </li>
                                <li>
                                    <p className="navCol__item">About</p>
                                </li>
                                <li>
                                    <p className="navCol__item">Services</p>
                                </li>
                                <li>
                                    <p className="navCol__item">Teams</p>
                                </li>
                                <li>
                                    <p className="navCol__item">Contact</p>
                                </li>
                            </ul>
                        </div>

                        <div className="footer__navCol">
                            <p className="navCol__title">Services</p>
                            <ul className='navCol__items'>
                                <li>
                                    <p className="navCol__item">Window</p>
                                </li>
                                <li>
                                    <p className="navCol__item">Residential</p>
                                </li>
                                <li>
                                    <p className="navCol__item">Commercial</p>
                                </li>
                                <li>
                                    <p className="navCol__item">Apartment</p>
                                </li>
                                <li>
                                    <p className="navCol__item">Residential</p>
                                </li>
                            </ul>
                        </div>

                        <div className="footer__navCol">
                            <p className="navCol__title">Follow Us</p>
                            <ul className='navCol__items'>
                                <li className="navCol__social">
                                    <img src={Facebook} alt="icon" />
                                    <span>Facebook</span>
                                </li>
                                <li className="navCol__social">
                                    <img src={Instagram} alt="icon" />
                                    <span>Instagram</span>
                                </li>
                                <li className="navCol__social">
                                    <img src={Linkedin} alt="icon" />
                                    <span>Linkedin</span>
                                </li>
                                <li className="navCol__social">
                                    <img src={Twitter} alt="icon" />
                                    <span>Twitter</span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="footer__bottom">
                    <div className="bottom__copy">
                        <span>2023 Ddsgnr. All right reserved.</span>
                    </div>
                    <div className="bottom__tech">
                        <p className="bottom__techLink">Privacy Policy</p>
                        <p className="bottom__techLink">Terms of Service</p>
                        <p className="bottom__techLink">Cookies Settings</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer