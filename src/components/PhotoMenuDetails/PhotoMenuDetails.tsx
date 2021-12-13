import { useEffect, useRef, useState } from 'react';
import tachuela from '../../images/tachuela.png'

import tacosImg from '../../images/tacos.jpg'
import sopesImg from '../../images/sopes.jpg'
import pozoleImg from '../../images/pozole.jpg'
import tostadasImg from '../../images/tostadas.jpeg'
import quesadillaImg from '../../images/quesadilla.jpg'

interface Props {
    name: string;
}

const PhotoMenuDetails = ( { name } : Props) => {

    const precios = useRef({pozole: 68, quesadilla: 32, sopes: 52, tacos: 39, tostadas: 39}).current

    const displayList = (options: string[]) => {

        console.log(options)

        const list = document.getElementById("optionsList");

        while (list?.firstChild) {
            list.removeChild(list.firstChild);
        }
    
        options.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
            list?.appendChild(li);
          });
    }

    const [image, setImage] = useState(quesadillaImg)
    const [description, setDescription] = useState('Antojito mexicano que consiste en una tortilla de masa de maíz o de harina de trigo doblada a la mitad en forma de media luna, rellena con queso fresco derretido y un guiso:')
    const [options, setOptions] = useState(['Papa', 'Tinga', 'Pollo', 'Hongos', 'Cochinita', 'Chicharron', 'Flor de calabaza'])

    const [price, setPrice] = useState(precios.quesadilla)

    useEffect(() => {
        
        switch (name) {
            case 'Pozole':
                setImage(pozoleImg)
                setDescription('Sopa de gran tamaño con carne de cerdo y porciones generosas de maíz cacahuacentle cocido y reventado:')
                setOptions(['Pierna de puerco', 'Pollo', 'Mixto', 'Vegano'])
                setPrice(precios.pozole)
                break;
            case 'Quesadillas':
                setImage(quesadillaImg)
                setDescription('Tortilla de masa de maíz o de harina de trigo doblada a la mitad, rellena con queso fresco derretido y un guiso:')
                setOptions(['Papa', 'Tinga', 'Pollo', 'Hongos', 'Cochinita', 'Chicharron', 'Flor de calabaza'])
                setPrice(precios.quesadilla)
                break;
            case 'Sopes':
                setImage(sopesImg)
                setDescription('Pequeñas tortillas de maíz gruesas con frijoles y un guiso arriba:')
                setOptions(['Papa', 'Tinga', 'Pollo', 'Hongos', 'Cochinita', 'Chicharron', 'Flor de calabaza'])  
                setPrice(precios.sopes)
                break;
            case 'Tacos':
                setImage(tacosImg)
                setDescription('Tortillas de maíz o de harina de trigo, dobladas a la mitas y rellenas de un guiso:')
                setOptions(['Cochinita Pibil'])    
                setPrice(precios.tacos)
                break;
            case 'Tostadas':
                setImage(tostadasImg)
                setDescription('Tortillas de maiz crujientes con frijoles y un guiso:')
                setOptions(['Papa', 'Tinga', 'Pollo', 'Hongos', 'Cochinita', 'Chicharron', 'Flor de calabaza'])
                setPrice(precios.tostadas)
                break;
            default:
                break;
        }
    }, [name])
    
    useEffect(() => {
        displayList(options)
    }, [options])

    return(
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
                            <div className='titleContainer'>
                                <h2 className='photoTitle price'>${price}</h2>
                                <h2 className='photoTitle'>{name}</h2>
                            </div>
                            <p className='photoText'>{description}</p>
                            <ul className='photoOptions' id='optionsList'></ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PhotoMenuDetails
