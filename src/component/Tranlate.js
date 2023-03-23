

function Translate({change}){

  function ChangeLng(x){
    change(x.textContent.toLowerCase())
    document.querySelector('.lngselected').classList.remove('lngselected')
    x.classList.add('lngselected')
  }

  return(
      <ul id="translate">
        <li className="lngselected" onClick={(e) => ChangeLng(e.target)}>KR</li>
        <li onClick={(e) => ChangeLng(e.target)}>JP</li>
        <li onClick={(e) => ChangeLng(e.target)}>EN</li>
      </ul>
  )
}

export default Translate