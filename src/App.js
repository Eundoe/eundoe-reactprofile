
// Library
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import i18n from "i18next"
import {initReactI18next, useTranslation} from "react-i18next"
import './Component.css'


// Component
import Header from "./component/Header"
import Footer from "./component/Footer"
import Translate from "./component/Tranlate"
import Home from "./page/Home"
import About from "./page/About"
import Skill from "./page/Skill"
import Portfolio from "./page/Portfolio"
import Contact from "./page/Contact"

// JSON data
import baseData from './data/data.json'


// translation
const resources = {
  kr : {
    translation : baseData.lng.kr
  },
  jp : {
    translation : baseData.lng.jp
  },
  en : {
    translation : baseData.lng.en
  }
}

i18n.use(initReactI18next)
.init({
  resources,
  lng : "kr",
  keySeparator : ".",
  interpolation : {
    escapeValue : false
  }

})


function App(){
  const {t, i18n} = useTranslation()

  function ChangeLng(x){
    i18n.changeLanguage(x)
  }

  return(
    <BrowserRouter>
      <Header t = {t} />
      <div id="wrap">
          <Routes>
            <Route path ="/" element ={<Home t= {t} slogun = {baseData.slogun}/>}/>
            <Route path ="/about" element ={<About t = {t}/>}/>
            <Route path ="/skill" element={<Skill t = {t} bdata = {baseData.skill}/>}/>
            <Route path ="/portfolio" element={<Portfolio t = {t} bdata = {baseData.portfolio}/>}/>
            <Route path ="/contact" element={<Contact t = {t} bdata = {baseData.contact}/>}/>
          </Routes>
      </div>
      <Translate change = {ChangeLng}/>
      <Footer />
    </BrowserRouter>
  )
}

export default App