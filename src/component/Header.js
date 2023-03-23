import { Link } from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"
import {CgMenuGridR} from "react-icons/cg"
import Translate from "./Tranlate"



function Header({t, change}){
  window.addEventListener('resize', () => {
   window.outerWidth <= 980 ? document.querySelector('nav#hnav').style.display = "none" : document.querySelector('nav#hnav').style.display = "block"
  })

  return(
    <header>
      <div id="headwrap">
        <h1><img src="./Images/Logo.png" alt="Logo"/><span id="logo">Eundoe's Pond</span></h1>
        <nav id="hnav">
          <ul>
            <li><Link to='/'>{t('menu.home')}</Link></li>
            <li><Link to='/about'>{t('menu.about')}</Link></li>
            <li><Link to='/skill'>{t('menu.skill')}</Link></li>
            <li><Link to='/portfolio'>{t('menu.portfolio')}</Link></li>
            <li><Link to='/contact'>{t('menu.contact')}</Link></li>
          </ul>
          <p id="hclose" onClick={() => {document.querySelector('nav#hnav').style.display = 'none'}}><AiOutlineClose /></p>
        </nav>
        <p id="hmenu" onClick={() => {document.querySelector('nav#hnav').style.display = 'block'}}><CgMenuGridR/></p>
      </div>
      <Translate change = {change}/>
    </header>
  )
}

export default Header