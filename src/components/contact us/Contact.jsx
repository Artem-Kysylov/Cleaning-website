import React from 'react'
import { useMediaQuery } from 'react-responsive';
import './ContactStyle.css'

import Button from '../button/Button'
import Input from '../input/Input'

const ContactUs = () => {

    const isMobile = useMediaQuery({maxWidth: 768});

    return (
        <section className='section__contact'>
            <div className="container">
                <div className="contact__content">
                    <span className='contact__content-caption'>Contact us</span>
                    <h2 className='contact__content-title'>Request a quote</h2>
                    <p className='contact__content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <form>
                        <div className="inputs__wrapper">
                            <Input type='text' name='fullname' labelText='Full name' 
                                style={{
                                    width: isMobile ? '100%' : '290px',
                                }} 
                            />
                            <Input type='tel' name='phone number' labelText='Phone number'
                                style={{
                                    width: isMobile ? '100%' : '290px',
                                }}
                            />
                        </div>
                        <div className="inputs__wrapper">
                            <Input type='text' name='service' labelText='Select service'              
                                style={{
                                    width: isMobile ? '100%' : '290px',
                                }}
                            />
                            <Input type='text' name='time' labelText='Select time' 
                                style={{
                                    width: isMobile ? '100%' : '290px',
                                }}
                            />
                        </div>
                        <div className="textarea__wrapper">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" placeholder='Type your message...'></textarea>
                        </div>

                        <div className="checkbox__wrapper">
                            <input className='checkbox' type="checkbox"/>
                            <p className='checkbox__text'>I accept the <span className='checkbox__link'>Terms</span></p>
                        </div>

                        <Button text='Submit' 
                            style={{
                                backgroundColor: '#000', 
                                border: '1px solid #000', 
                                color: '#fff',
                                padding: '12px 20px',
                            }}
                        />
                    </form>
                </div>

                <div className="contact__image"></div>
            </div>
        </section>
    )
}

export default ContactUs