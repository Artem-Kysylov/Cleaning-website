import React from 'react'
import './CardStyle.css'

const Card = ({data}) => {
    const {image, title, descr} = data

    const cardStyle = {
        backgroundImage: `url(${image})`,
    }

    return (
        <div className='card'>
            <div className="card__img" style={cardStyle}>
            </div>
            <h3 className="card__title">{title}</h3>
            <p className="card__descr">{descr}</p>
        </div>
    )
}

export default Card