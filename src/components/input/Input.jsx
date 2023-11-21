import React from 'react'
import './InputStyle.css'

const Input = (props) => {
    return (
        <div className="input__wrapper">
            <label htmlFor={props.name}>{props.labelText}</label>
            <input type={props.type} style={props.style} name={props.name} />
        </div>

    )
}

export default Input