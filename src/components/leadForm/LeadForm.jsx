import React from 'react'
import './LeadFormStyle.css'

import Button from '../button/Button'
import Input from '../input/Input'

const LeadForm = () => {
    return (
        <form className='lead__form'>
            <div className="container">
                <Input type='text' name='fullname' labelText='Full name' style={{
                    width: '290px',
                }} />
                <Input type='tel' name='phone' labelText='Phone number' style={{
                    width: '290px',
                }}/>
                <Input type='text' name='message' labelText='Comment' style={{
                    width: '290px',
                }}/>

            <Button text='Request A Quote'
                style={{ 
                    backgroundColor: '#000', 
                    border: '1px solid #000', 
                    color: '#fff',
                    padding: '12px 20px',
                    height: '48px',
                }} />
            </div>
        </form>
    )
}

export default LeadForm