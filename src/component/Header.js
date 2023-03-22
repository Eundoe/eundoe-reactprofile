import { Link } from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"
import {CgMenuGridR} from "react-icons/cg"



function Header({t}){
  window.addEventListener('resize', () => {
   
  })
  return(
    <header>
      <div id="headwrap">
        <h1><img src="./Images/Logo.png" alt="Logo"/></h1>
        <nav id="hnav">
          <ul>
            <li><Link to='/'>{t('menu.home')}</Link></li>
            <li><Link to='/about'>{t('menu.about')}</Link></li>
            <li><Link to='/skill'>{t('menu.skill')}</Link></li>
            <li><Link to='/portfolio'>{t('menu.portfolio')}</Link></li>
            <li><Link to='/contact'>{t('menu.contact')}</Link></li>
          </ul>
          <p id="hclose"><AiOutlineClose /></p>
        </nav>
        <p id="hmenu"><CgMenuGridR/></p>
      </div>
    </header>
  )
}

export default Header