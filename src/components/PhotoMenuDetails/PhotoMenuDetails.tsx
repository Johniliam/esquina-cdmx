import React, { useEffect } from 'react'
import tachuela from '../../images/tachuela.png'

interface Props {
    image: string;
    name: string;
    description: string;
    options: string[];
}

const PhotoMenuDetails = ( { image, name, description, options } : Props) => {

    const displayList = (options: string[]) => {

        const list = document.getElementById("optionsList");
    
        options.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
            list?.appendChild(li);
          });
    }
    
    useEffect(() => {
        displayList(options)
    }, [])

    return (
        <div className='photoBG details'>
            <div className='displayPhotoContainer'>
                <div className='tachuela details'>
                    <img src={tachuela} alt="tachuela" className='tachuelaImg'/>
                </div>
                <div className='photoContent'>
                    <div className='imageContainer'>
                        <img src={image} alt="displayPhoto" className='foodImg'/>
                    </div>
                    <div className='textDetails'>
                        <h2 className='photoTitle'>{name}</h2>
                        <p className='photoText'>{description}</p>
                        <ul className='photoOptions' id='optionsList'></ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoMenuDetails
