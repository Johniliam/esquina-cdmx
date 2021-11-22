import React from 'react'
import navigateTo from '../../hooks/navigateTo'
import chileLogo from '../../images/chile.png'

const NavBarDinamic = () => {

    // highlight navigator when entering a section

    const li = document.querySelectorAll(".navItem");
    const sections = document.querySelectorAll("section");

    const activeMenu = () => {
        let len = sections.length
        while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
        li.forEach(ltx => ltx.classList.remove('active'));
        li[len].classList.add('active');
    }
    activeMenu()
    window.addEventListener("scroll", activeMenu)


    return (
        <div className='navbarDinamic'>
            <div className='logoD'>
                <div className='letrasLogoLinear'>
                    <h2 className='title' style={{marginRight: 10}}>ESQUINA</h2>
                    <h2 className='title'>CD</h2>
                    <h2 className='title' style={{color: '#f50087'}}>MX</h2>
                </div>
                <img src={chileLogo} alt='logo' className='imgLogoD'/>
            </div>
            <nav className='navigator'>
                <li className='botPinkBar'></li>
                <li id='iniIndicator' className='navItem'>
                    <h4 onClick={() => navigateTo(0)} className='navItemText'>Inicio</h4>
                </li>
                <li id='menuIndicator' className='navItem'>
                    <h4 onClick={() => navigateTo(1)} className='navItemText'>Menú</h4>
                </li>
                <li id='sucIndicator' className='navItem'>
                    <h4 onClick={() => navigateTo(2)} className='navItemText'>Sucursales</h4>
                </li>
                <li id='nosIndicator' className='navItem'>
                    <h4 onClick={() => navigateTo(3)} className='navItemText'>Nosotros</h4>
                </li>
                <li id='franqIndicator' className='navItem'>
                    <h4 onClick={() => navigateTo(4)} className='navItemText'>Franquicias</h4>
                </li>
            </nav>
        </div>
    )
}

export default NavBarDinamic
