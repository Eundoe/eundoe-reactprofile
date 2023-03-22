
import { useState } from "react"
import {GrNext, GrPrevious} from "react-icons/gr"
import './Home.css'


function Slogun({slogun, picture}){
  return picture.map((item, index) => {
    return (
      <li key={index} style ={{
        backgroundImage : `url(${item.bg})`,
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
        backgroundPosition : 'center'
      }}>
        <p>{slogun('slogun.' + index)}</p>
      </li>
    )
  })
  
}


function Home({t, slogun}){
  const [slide, setSlide] = useState(0)

  function Next(){
      if ((slide > (slogun.length - 2))){
        setSlide(0)
      }
      else{
        setSlide(slide + 1)
      }
  }

  function Prev(){
    if (slide === 0){
      setSlide((slogun.length - 1))
    }
    else{
      setSlide(slide - 1)
    }
  }


  return(
    <article id="home">
      <div id="homewrap">
        <div id="slogungall">
          <ul className= {"slide" + slide}>
            <Slogun slogun = {t} picture = {slogun}/>
          </ul>
        </div>
      <p className="next" ><GrNext onClick={() => Next()}/></p>
      <p className="prev"><GrPrevious onClick={() => Prev()}/></p>
      </div>
    </article>
  )
}

export default Home