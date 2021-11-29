import { url } from 'inspector'
import React from 'react'
import tachuela from '../../images/tachuela.png'

interface Props {
    image: string
    name: string
}

const MiniPhotoMenu = ( { image, name } : Props) => {
    return (
        <div className='photoBG mini'>
            <div className='displayPhotoContainer'>
                <div className='photoContent mini'>
                    <div className='tachuela'>
                        <img src={tachuela} alt="tachuela" className='tachuelaImg'/>
                    </div>
                    <div className='imageContainer mini'>
                        <img src={image} alt="displayPhoto" className='foodImg'/>
                    </div>
                    <h2 className='photoTitle mini'>{name}</h2>
                </div>
            </div>
        </div>
    )
}

export default MiniPhotoMenu
