import './textCaps.css'
import React from 'react'

function TextCaps(props) {

    return (
        <>
            <p className='text'>{props.texto.toUpperCase()}</p>
        </>
    )
}

export default TextCaps