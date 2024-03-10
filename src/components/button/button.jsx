import React from 'react'
import './button.css'

function Button() {
    function clickHere() {
        alert(`A label desse Botão é "Baixar CV"`)
    }
    return (
        <div className='container'>
            <label For="boton">Baixar CV</label>
            <button onClick={clickHere} className='button' name='boton'>Botão</button>
        </div>
    )
}


export default Button