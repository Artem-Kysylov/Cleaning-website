import React from 'react'
import './AboutStyle.css'

import Button from '../button/Button'

const About = () => {
    return (
        <section className='section__about'>
            <div className="container">
                <div className="about__content">
                    <span>About Us</span>
                    <h2>Let us takecare of all your cleaning service needs.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Lo</p>
                    <Button text='Request A Quote'
                        style={{ 
                            backgroundColor: '#000', 
                            border: '1px solid #000', 
                            color: '#fff',
                            padding: '12px 20px',
                        }} 
                    />
                </div>

                <div className="about__image"></div>
            </div>
        </section>
    )
}

export default About