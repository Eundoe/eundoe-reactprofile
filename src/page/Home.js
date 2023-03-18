

function Slogun(){
  let arrayex = [1,2,3,4]
  return arrayex.map((item,index) => {
    return(
      <li>
        <p>Slogun{item}</p>
      </li>
    )
  })

}


function Home(){
  return(
    <article id="home">
      <div id="homewrap">
        <ul>
          <Slogun/>
        </ul>
      <p className="next">next</p>
      <p className="prev">prev</p>
      </div>
    </article>
  )
}

export default Home