import React from 'react'
import './ServicesStyle.css'
import '../button/ButtonStyle.css'

import service1 from '../../assets/services-1.jpg'
import service2 from '../../assets/services-2.jpg'
import service3 from '../../assets/services-3.jpg'
import service4 from '../../assets/services-4.jpg'
import service5 from '../../assets/services-5.jpg'
import service6 from '../../assets/services-6.jpg'

import Card from '../card/Card'

const Services = () => {

    const cardData1 = [
        {
            id: 1,
            image: service1,
            title: 'One Bedroom Apartment',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
            id: 2,
            image: service2,
            title: 'Window Cleaning',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
            id: 3,
            image: service3,
            title: 'Residential Cleaning',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
    ]

    const cardData2 = [
        {
            id: 4,
            image: service4,
            title: 'Construction Cleaning',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
            id: 5,
            image: service5,
            title: 'Commercial Cleaning',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
            id: 6,
            image: service6,
            title: 'Two Bedroom Apartment',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
    ]


    return (
        <section className='services'>
            <div className="services__content">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

                <div className="services__cards">
                    <div className="cards__row-1">
                        {cardData1.map((item) => (
                            <Card key={item.id} data={item}/>
                        ))}
                    </div>
                    <div className="cards__row-2">
                    {cardData2.map((item) => (
                            <Card key={item.id} data={item}/>
                        ))}
                    </div>
                </div>
        </section>
    )
}

export default Services