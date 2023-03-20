import { Link } from "react-router-dom"

function Header({t}){

  return(
    <header>
      <div id="headwrap">
        <h1>Logo</h1>
        <nav id="hnav">
          <ul>
            <li><Link to='/'>{t('menu.home')}</Link></li>
            <li><Link to='/about'>{t('menu.about')}</Link></li>
            <li><Link to='/skill'>{t('menu.skill')}</Link></li>
            <li><Link to='/portfolio'>{t('menu.portfolio')}</Link></li>
            <li><Link to='/contact'>{t('menu.contact')}</Link></li>
          </ul>
          <p id="hclose">Close</p>
        </nav>
        <p id="hmenu">Menu</p>
      </div>
    </header>
  )
}

export default Header