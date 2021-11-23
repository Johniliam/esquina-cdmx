import { useState } from 'react';
import './App.css';
import NavBarDinamic from './components/NavBarDinamic';
import NavBarStatic from './components/NavBarStatic/NavBarStatic';
import MiniPhotoMenu from './components/MiniPhotoMenu/MiniPhotoMenu';
import PhotoMenuDetails from './components/PhotoMenuDetails';

const App = () => {

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
              <div className='photoDetails'>
                <PhotoMenuDetails/>
              </div>
              <div className='miniPhotoContainer'>
                <MiniPhotoMenu/>
                <MiniPhotoMenu/>
                <MiniPhotoMenu/>
                <MiniPhotoMenu/>
                <MiniPhotoMenu/>
                <MiniPhotoMenu/>
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
