

function SkillGuage(){
  return(
    <div id="skilldetail">
      <h3>SkillName</h3>
      <p id="skilldesc">레벨</p>
      <p id="skillguage"></p>
    </div>
  )
}


function SkillDetail(){
  let array3 = [1,2,3,4,5,6,7,8,9,10,11,12]
  return array3.map((item,index) => {
    return(
      <li>{item}</li>
    )
  })
}


function Skill(){
  return(
    <article id="skill">
      <div id="skillwrap">
        <h2>My Skills</h2>
        <ul>
          <SkillDetail/>
        </ul>
        <SkillGuage />
      </div>
    </article>
  )

}

export default Skill