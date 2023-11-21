import React from 'react'
import './ButtonStyle.css'

const Button = (props) => {
    return (
        <>
            <button className='button' style={props.style}>{props.text}</button>
        </>
    )
}

export default Button