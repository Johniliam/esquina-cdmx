import React from 'react'
import navigateTo from '../../hooks/navigateTo'
import chileLogo from '../../images/chile.png'

interface Props {
    visibility: boolean
}

const NavBarDinamic = ( {visibility}: Props ) => {

    // highlight navigator when entering a section

    const navLi = document.querySelectorAll(".navItemD");
    const sections = document.querySelectorAll("section");

    const activeMenu = () => {
        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            if(window.scrollY >= (sectionTop - 55)){
                const attribute = section.getAttribute('id');
                if (attribute !== null) {
                    current = attribute;
                }
            }
        })

        navLi.forEach( li => {
            li.classList.remove('active');
            if (li.classList.contains(current)) {
                li.classList.add('active')
            }
        })
    }
    activeMenu()
    window.addEventListener("scroll", activeMenu)

    // const li = document.querySelectorAll(".navItemD");
    // const sections = document.querySelectorAll("section");

    // const activeMenu = () => {
    //     let len = sections.length
    //     while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    //     li.forEach(ltx => ltx.classList.remove('active'));
    //     li[len].classList.add('active');
    // }
    // activeMenu()
    // window.addEventListener("scroll", activeMenu)


    return (
        <div className='navbarDinamic' style={!visibility ? {visibility: 'hidden'}: {visibility:'visible'}}>
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
                <li id='iniIndicator' className='navItemD section0'>
                    <h4 onClick={() => navigateTo(0)} className='navItemText'>Inicio</h4>
                </li>
                <li id='menuIndicator' className='navItemD section1'>
                    <h4 onClick={() => navigateTo(1)} className='navItemText'>Menú</h4>
                </li>
                <li id='sucIndicator' className='navItemD section2'>
                    <h4 onClick={() => navigateTo(2)} className='navItemText'>Sucursales</h4>
                </li>
                <li id='nosIndicator' className='navItemD section3'>
                    <h4 onClick={() => navigateTo(3)} className='navItemText'>Nosotros</h4>
                </li>
                <li id='franqIndicator' className='navItemD section4'>
                    <h4 onClick={() => navigateTo(4)} className='navItemText'>Franquicias</h4>
                </li>
            </nav>
        </div>
    )
}

export default NavBarDinamic