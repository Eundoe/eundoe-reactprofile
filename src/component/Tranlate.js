

function Translate({change}){
  return(
    <aside>
      <ul id="translate">
        <li onClick={(e) => change(e.target.textContent.toLowerCase())}>KR</li>
        <li onClick={(e) => change(e.target.textContent.toLowerCase())}>JP</li>
        <li onClick={(e) => change(e.target.textContent.toLowerCase())}>EN</li>
      </ul>
    </aside>
  )
}

export default Translate