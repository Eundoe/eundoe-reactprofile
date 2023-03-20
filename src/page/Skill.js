

function SkillGuage(){
  return(
    <div id="skilldetail">
      <h3>SkillName</h3>
      <p id="skilldesc">설명</p>
      <p id="skillguage"></p>
    </div>
  )
}


function SkillDetail({bdata}){
  return bdata.map((item,index) => {
    return(
      <li key={index}>
        <img src= {item.path} alt={item.name}/>
      </li>
    )
  })
}


function Skill({t, bdata}){
  return(
    <article id="skill">
      <div id="skillwrap">
        <h2>{t('menu.skill')}</h2>
        <ul>
          <SkillDetail bdata ={bdata} />
        </ul>
        <SkillGuage />
      </div>
    </article>
  )

}

export default Skill