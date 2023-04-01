
import {RiToolsFill, RiCalendar2Fill} from "react-icons/ri"
import {BiLinkAlt, BiLinkExternal} from "react-icons/bi"
import {HiOutlineTicket} from "react-icons/hi"
import './Portfolio.css'

function PortDetail({t, item}){
    return (
      <div>
      <dl>
        <dt>
          <RiCalendar2Fill/>
          <span>{t('portfolio.kind.period')}</span>
        </dt>
        <dd>
          {item.period}
        </dd>
      </dl>
      <dl >
        <dt>
          <RiToolsFill/>
          <span>{t('portfolio.kind.devtool')}</span>
        </dt>
        <dd>
          {item.lang}
        </dd>
      </dl>
      <dl >
        <dt>
          <BiLinkAlt/>
          <span>{t('portfolio.kind.domain')}</span>
        </dt>
        <dd><a href={item.path} target="_blank" rel="noreferrer" style={{color : "red"}}>
        {t('portfolio.cont.domain')}
          </a></dd>
      </dl>
      <dl >
        <dt>
          <BiLinkExternal/>
          <span>{t('portfolio.kind.github')}</span>
        </dt>
        <dd>
          <a href= {item.giturl} target="_blank" rel="noreferrer" style={{color : "red"}}>
            {t('portfolio.cont.github')}
          </a>
        </dd>
      </dl>
      </div>
    )
}


function PortList({t, bdata}){
  return bdata.map((item,index) => {
    return(
      <li key={index}>
        <h3>{item.pjname}</h3>
        <div id="portdetail">
          <img src={item.img} alt={item.pjname}/>
          <PortDetail t = {t} item ={item}/>       
        </div>
      </li>
    )
  })
}

function Portfolio({t, bdata}){
  return(
    <article id="portfolio">
      <div id="portwrap">
        <h2>{t('menu.portfolio')}</h2>
        <ul>
          <PortList t = {t} bdata = {bdata}/>
        </ul>
      </div>
    </article>
  )
}

export default Portfolio