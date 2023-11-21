import React from 'react'
import './HeroStyle.css'

import Button from '../button/Button'

const Hero = () => {
    return (
        <section className='section__hero'>
            <div className="hero__content">
                <h1>
                A Clean Home,
                A Happy Life,
                Let Us Handle the Dirty Work!
                </h1>
                <p className="hero__text">We develop innovative design solutions that enable our clients to enhance their competitive advantage.</p>
                <div className="hero__btns">
                    <Button text='Request A Quote'
                        style={{ 
                            backgroundColor: '#000', 
                            border: '1px solid #000', 
                            color: '#fff',
                            padding: '12px 20px',
                        }} />
                    <Button text='Learn More'
                        style={{ 
                            backgroundColor: 'transparent', 
                            border: '1px solid #000', 
                            color: '#000',
                            padding: '12px 20px',
                        }}
                    />
                </div>
            </div>
            <div className="hero__image"></div>
        </section>
    )
}

export default Hero