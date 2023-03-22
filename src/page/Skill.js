import './Skill.css'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

function SkillGuage({detail}){

  function skillreset(){
    document.querySelector('div#skilldetail').classList.remove('show')
    document.querySelector('p#skillguage>img.show').style.width = '0%'
  }


  return(
    <div id="skilldetail">
      <h3>{detail.name}</h3>
      <p id="skillguage">
        <img className='show' src='./Images/gage.png' alt='gage' />
        <span id="skilldesc">{detail.master + '%'}</span>
      </p>
      <p id='gageclose'><AiOutlineClose onClick={() => {skillreset()}}/></p>
    </div>
  )
}


function SkillDetail({bdata, setGuage}){

  function Guage(x,y){
    setGuage(y)
    document.querySelector('div#skilldetail').classList.add('show')
    document.querySelector('p#skillguage>img').classList.add('show')
    document.querySelector('p#skillguage>img.show').style.width = x + '%'
  }

  return bdata.map((item,index) => {
    return(
      <li key={index}>
        <img src= {item.path} alt={item.name} onClick = {() => {Guage(item.master,index)}}/>
      </li>
    )
  })
}


function Skill({t, bdata}){
  const [guage, setGuage] = useState(0)
  let detail = bdata[guage]
  return(
    <article id="skill">
      <div id="skillwrap">
        <h2>{t('menu.skill')}</h2>
        <ul>
          <SkillDetail bdata ={bdata} setGuage ={setGuage} />
        </ul>
        <SkillGuage detail = {detail}/>
      </div>
    </article>
  )

}

export default Skill