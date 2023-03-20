

function Slogun({slogun, picture}){
  return picture.map((item, index) => {
    return (
      <li key={index}>
        <p>{slogun('slogun.' + index)}</p>
      </li>
    )
  })
  
}


function Home({t, slogun}){
  return(
    <article id="home">
      <div id="homewrap">
        <div id="slogungall">
          <ul>
            <Slogun slogun = {t} picture = {slogun}/>
          </ul>
        </div>
      <p className="next">next</p>
      <p className="prev">prev</p>
      </div>
    </article>
  )
}

export default Home