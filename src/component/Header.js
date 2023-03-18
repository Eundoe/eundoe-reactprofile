import { Link } from "react-router-dom"

function Header(){
  return(
    <header>
      <div id="headwrap">
        <h1>Logo</h1>
        <nav id="hnav">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/skill'>Skill</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header