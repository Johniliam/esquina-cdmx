import { useState } from 'react';
import './App.css';
import NavBarDinamic from './components/NavBarDinamic';
import NavBarStatic from './components/NavBarStatic/NavBarStatic';
import MiniPhotoMenu from './components/MiniPhotoMenu/MiniPhotoMenu';
import PhotoMenuDetails from './components/PhotoMenuDetails';
import pozoleImg from './images/pozole.jpg'
import quesadillaImg from './images/quesadilla.jpg'
import sopesImg from './images/sopes.jpg'
import tacosImg from './images/tacos.jpg'
import tostadasImg from './images/tostadas.jpeg'
import ProxImg from './images/proximamente.jpg'

const App = () => {

  const desc = 'Antojito mexicano que consiste en una tortilla de masa de maíz o de harina de trigo doblada a la mitad en forma de media luna, rellena con queso fresco derretido y un guiso:'

  const options = ['Papa', 'Tinga', 'Pollo', 'Hongos', 'Cochinita', 'Chicharron', 'Flor de calabaza']

  const [navbar, setDinamicNavbar] = useState(false)

  const changeNabar = () => {
    if (window.scrollY >= 90) {
      setDinamicNavbar(true)
    } else{
      setDinamicNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNabar)

  return (
    <div className='background'>
      <div className='content'> {/*  TODO: es necesario? */}
        <NavBarStatic visibility={!navbar}/>
        <NavBarDinamic visibility={navbar}/>
        <div className='sectionsContainer'>
          <section id='section0'>
            <h2>Inicio</h2>
          </section>
          <p>Hola</p>
          <p>Hola</p>
          <section id='section1'>
            <h2>Menú</h2>
            <div className='menuContainer'>
              <PhotoMenuDetails image={pozoleImg} name='Pozole' description={desc} options={options}/>
              <div className='miniPhotosContainer'>
                <MiniPhotoMenu image={pozoleImg} name='Pozole'/>
                <MiniPhotoMenu image={quesadillaImg} name='Quesadillas'/>
                <MiniPhotoMenu image={sopesImg} name='Sopes'/>
                <MiniPhotoMenu image={tacosImg} name='Tacos'/>
                <MiniPhotoMenu image={tostadasImg} name='Tostadas'/>
                <MiniPhotoMenu image={ProxImg} name='Mas...'/>
              </div>
            </div>
          </section>
          <p>Hola</p>
          <p>Hola</p>
          <section id='section2'>
            <h2>Sucursales</h2>
          </section>
          <p>Hola</p>
          <p>Hola</p>
          <section id='section3'>
            <h2>Nosotros</h2>
          </section>
          <p>Hola</p>
          <p>Hola</p>
          <section id='section4'>
            <h2>Franquicias</h2>
          </section>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
          <p>Hola</p>
        </div>
      </div>
    </div>
  );
}

export default App;
