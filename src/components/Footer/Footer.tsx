import React from 'react'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className='footContainer'>
            <div className='direction'>
                <p className='footTitle'>Direcciones</p>
                <p>Suc. Country: Av. Paseo de Las Americas 2451</p>
                <p><FontAwesomeIcon icon={faWhatsapp}/> Tel: 8181232454</p>
                <p>Suc. Carretera Nacional: Carr Nacional 5500, Villas La Rioja, 64988</p>
                <p><FontAwesomeIcon icon={faWhatsapp}/> Tel: 8184332624</p>
            </div>
            <div className='contact'>
                <p className='footTitle'>Contactanos</p>
                <p>Email. tacosbara@gmail.com</p>
                <p>Info. info importante</p>
                <p>Horario. Lunes - Sabado 5pm a 2am</p>
            </div>
        </div>
    )
}

export default Footer
