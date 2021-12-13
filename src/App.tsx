import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGlasses, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons';

import navTo from './utils/navTo';
import MapContainer from './components/Map';
import { useNavbar } from './hooks/useNavbar';
import InfoDisplay from './components/InfoDisplay'
import NavBarDinamic from './components/NavBarDinamic';
import PhotoMenuDetails from './components/PhotoMenuDetails';
import NavBarStatic from './components/NavBarStatic/NavBarStatic';
import MiniPhotoMenu from './components/MiniPhotoMenu/MiniPhotoMenu';

import tacosImg from './images/tacos.jpg'
import sopesImg from './images/sopes.jpg'
import pozoleImg from './images/pozole.jpg'
import ProxImg from './images/proximamente.jpg'
import tostadasImg from './images/tostadas.jpeg'
import quesadillaImg from './images/quesadilla.jpg'
import Franquicias from './components/Franquicias';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const App = () => {
  const navbar = useNavbar()

  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === 1) { //TODO: Deprecated
        window.location.href = '';
      }
    }
  }, [])

  const [selection, setSelection] = useState('Quesadilla')

  return (
    <div>
      <div className='navbarContainer'>
        <NavBarStatic visibility={!navbar}/>
        <NavBarDinamic visibility={navbar}/>
      </div>
      <div className='background'>
        <div className='content'> {/*  TODO: es necesario? */}
          <div className='sectionsContainer'>
            <section id='section0'>
              <div className='inicioBG'>
                <div className='cover'>
                    <h2 className='pink'>YA ABRIMOS 🎉</h2>
                    <h2>VE NUESTRO MENU AHORA Y ORDENA</h2>
                    <h2>O RESERVA AHORA MISMO</h2>
                    <div className='buttonsContainer'>
                      <button className='left-button' onClick={() => navTo(1)}>
                        <h2>VER</h2>
                        <h2>MENU</h2>
                      </button>
                      <button className='right-button' onClick={() => navTo(5)}>
                        <div className='row'>
                          <div>
                            <h2>RESERVA</h2>
                            <h2>AHORA</h2>
                          </div>
                          <p className='whatsIcon'><FontAwesomeIcon icon={faWhatsapp}/></p>  
                        </div>
                      </button>
                    </div>
                </div>
                <div className='bloqueR'></div>
              </div>
            </section>
            <section id='section1'>
              <div id='menuContainer' className='menuContainer'>
                <PhotoMenuDetails name={selection} />
                <div className='miniPhotosContainer'>
                  <div className='photoBG mini' onClick={ () => setSelection('Quesadillas')}>
                    <MiniPhotoMenu image={quesadillaImg} name='Quesadillas' />
                  </div>
                  <div className='photoBG mini' onClick={ () => setSelection('Pozole')}>
                    <MiniPhotoMenu image={pozoleImg} name='Pozole' />
                  </div>
                  <div className='photoBG mini' onClick={ () => setSelection('Sopes')}>
                    <MiniPhotoMenu image={sopesImg} name='Sopes' />
                  </div>
                  <div className='photoBG mini' onClick={ () => setSelection('Tacos')}>
                    <MiniPhotoMenu image={tacosImg} name='Tacos' />
                  </div>
                  <div className='photoBG mini' onClick={ () => { setSelection('Tostadas')}}>
                    <MiniPhotoMenu image={tostadasImg} name='Tostadas' />
                  </div>
                  <div className='photoBG mini' >
                    <MiniPhotoMenu image={ProxImg} name='Mas...' />
                  </div>
                </div>
              </div>
            </section>
            <section id='section2'>
              <h2>Sucursales</h2>
              <MapContainer/>
            </section>
            <section id='section3'>
              <h2>Quienes Somos</h2>
              <div className='infoStructure'>
                <InfoDisplay icon={faGlasses} title='Vision' info='Brindar la mejor calidad y servicio posible en cada visita de nuestros comensales y ser representantes globales y nacionales de la gastronomía mexicana.'/>
                <InfoDisplay icon={faQuestion} title='Mision' info='Ser una empresa posicionada a nivel global siento la principal cadera representante de comida típica mexicana y no solo de la zona centro del país.'/>
                <InfoDisplay icon={faHeart} title='Valores' info='Honestidad, Lealtad, Respeto, Actitud de Servicio, Calidad, Higiene, Ambiente cordial, Trabajo en Equipo, Tradición, Liderazgo.'/>
              </div>
            </section>
            <section id='section4'>
              <h2>Franquicias</h2>
              <Franquicias/>
            </section>
          </div>
        </div>
        <section id='section5'>
          <Footer/>
        </section>
      </div>
    </div>
  );
}

export default App;
