
// Library
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Component
import Header from "./component/Header"
import Footer from "./component/Footer"
import Translate from "./component/Tranlate"
import Home from "./page/Home"
import About from "./page/About"
import Skill from "./page/Skill"
import Portfolio from "./page/Portfolio"
import Contact from "./page/Contact"



function App(){
  const [language, setLanguage] = useState('ko')

  return(
    <BrowserRouter>
      <Header />
      <div id="wrap">
          <Routes>
            <Route path ="/" element ={<Home/>}/>
            <Route path ="/about" element ={<About/>}/>
            <Route path ="/skill" element={<Skill/>}/>
            <Route path ="/portfolio" element={<Portfolio/>}/>
            <Route path ="/contact" element={<Contact/>}/>
          </Routes>
      </div>
      <Translate/>
      <Footer />
    </BrowserRouter>
  )
}

export default App