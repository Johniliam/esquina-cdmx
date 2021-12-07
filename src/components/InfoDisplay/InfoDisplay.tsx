import React from 'react'

interface Props{
    img: string;
    info: string;
}

const InfoDisplay = ( { img, info } : Props ) => {
    return (
        <div className='nosotrosContainer'>
            <img src={img} alt="" />
        </div>
    )
}

export default InfoDisplay
