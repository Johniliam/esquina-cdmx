import React from 'react'
import chileLogo from '../../images/chile.png'

const NavBarStatic = () => {

    const navTo = (dest: number) => {
        switch (dest) {
            case 0:
                window.location.href = '#section0';
                break;
            case 1:
                window.location.href = '#section1';
                break;
            case 2:
                window.location.href = '#section2';
                break;
            case 3:
                window.location.href = '#section3';
                break;
            case 4:
                window.location.href = '#section4';
                break;        
            default:
                window.location.href = '#';
                break;
        }
    }

    //highlight navigator when entering a section

    // const sections = document.querySelectorAll("section");
    // const li = document.querySelectorAll(".navItem");

    // document.addEventListener('DOMContentLoaded', function() {
    //     const activeMenu = () => {
    //         var len = sections.length
    //         while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    //         li.forEach(ltx => ltx.classList.remove('active'));
    //         li[len].classList.add('active');
    //     }
    //     window.addEventListener("scroll", activeMenu)
    // })


    return (
        <div className='navbarStatic'>
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
                <li id='iniIndicator' className='navItem'>
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