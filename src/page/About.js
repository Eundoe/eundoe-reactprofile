


function Private(){
  let array2 = [1,2,3,4,5,6]
  return array2.map((item,index) => {
    return(
      <dl>
      <dt>
        <span>icon</span>
        <span>항목</span>
      </dt>
      <dd>콘텐츠</dd>
    </dl>
    )
  })
}



function About(){
  return(
    <article id="about">
      <div id="aboutwrap">
        <h2>About Me</h2>
        <div>
          <img src="" alt=""/>
          <div id="priv">
            <Private />
          </div>
        </div>
      </div>
    </article>
  )
}

export default About