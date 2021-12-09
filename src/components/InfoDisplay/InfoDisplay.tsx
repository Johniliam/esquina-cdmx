import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props{
    icon: IconProp;
    title: string;
    info: string;
}

const InfoDisplay = ( { icon, info, title } : Props ) => {
    return (
        <div className='nosotrosContainer'>
            <div>
                <p><FontAwesomeIcon icon={icon} size='3x'/></p>
                <h3 className='logoTitle'>{title}</h3>
            </div>
            <p className='infoText'>{info}</p>
        </div>
    )
}

export default InfoDisplay