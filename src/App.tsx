import { useState } from 'react';
import './App.css';
import NavBarDinamic from './components/NavBarDinamic';
import NavBarStatic from './components/NavBarStatic/NavBarStatic';

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
      <NavBarDinamic visibility={navbar}/>
      <NavBarStatic visibility={!navbar}/>
      <section id='section0'>
        <h2>Inicio</h2>
      </section>
      <p>Hola</p>
      <p>Hola</p>
      <section id='section1'>
        <h2>Menú</h2>
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
  );
}

export default App;
