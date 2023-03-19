

function Slogun(){
  let arrayex = [1,2,3,4]
  return arrayex.map((item,index) => {
    return(
      <li>
        <h2>Slogun{item}</h2>
      </li>
    )
  })

}


function Home(){
  return(
    <article id="home">
      <div id="homewrap">
        <div id="slogungall">
          <ul>
            <Slogun/>
          </ul>
        </div>
      <p className="next">next</p>
      <p className="prev">prev</p>
      </div>
    </article>
  )
}

export default Home