import React from 'react'
import navTo from '../../utils/navTo'
import chileLogo from '../../images/chile.png'

interface Props {
    visibility: boolean
}

const NavBarStatic = ( {visibility}: Props ) => {
    return (
        <div className='navbarStatic' style={!visibility ? {visibility: 'hidden'}: {visibility:'visible'}}>
            <div className='topPinkLine'></div>
            <div className='logo'>
                <div className='letrasLogo'>
                    <h1 className='title'>ESQUINA</h1>
                    <div className='bottomTitle'>
                        <h1 className='title'>CD</h1>
                        <h1 className='title' style={{color: '#f50087'}}>MX</h1>
                    </div>
                </div>
                <img src={chileLogo} alt='logo' className='imgLogo'/>
            </div>
            <nav className='navigator'>
                <li className='botPinkBar'></li>
                <li id='iniIndicator' className='navItem' style={{backgroundColor: '#f50087'}}>
                    <h4 onClick={() => navTo(0)} className='navItemText'>Inicio</h4>
                </li>
                <li id='menuIndicator' className='navItem'>
                    <h4 onClick={() => navTo(1)} className='navItemText'>Menú</h4>
                </li>
                <li id='sucIndicator' className='navItem'>
                    <h4 onClick={() => navTo(2)} className='navItemText'>Sucursales</h4>
                </li>
                <li id='nosIndicator' className='navItem'>
                    <h4 onClick={() => navTo(3)} className='navItemText'>Nosotros</h4>
                </li>
                <li id='franqIndicator' className='navItem'>
                    <h4 onClick={() => navTo(4)} className='navItemText'>Franquicias</h4>
                </li>
            </nav>
        </div>
    )
}

export default NavBarStatic