
import {RiToolsFill, RiCalendar2Fill} from "react-icons/ri"
import {BiLinkAlt, BiLinkExternal} from "react-icons/bi"
import {HiOutlineTicket} from "react-icons/hi"

function PortDetail({t, item}){
    return (
      <div>
      <dl>
        <dt>
          <span><RiCalendar2Fill/></span>
          <span>{t('portfolio.kind.period')}</span>
        </dt>
        <dd>
          {item.period}
        </dd>
      </dl>
      <dl >
        <dt>
          <span><RiToolsFill/></span>
          <span>{t('portfolio.kind.devtool')}</span>
        </dt>
        <dd>
          {item.lang}
        </dd>
      </dl>
      <dl >
        <dt>
          <span><BiLinkAlt/></span>
          <span>{t('portfolio.kind.domain')}</span>
        </dt>
        <dd>
          {item.path}
        </dd>
      </dl>
      <dl >
        <dt>
          <span><BiLinkExternal/></span>
          <span>{t('portfolio.kind.github')}</span>
        </dt>
        <dd>
          {item.giturl}
        </dd>
      </dl>
      <dl >
        <dt>
          <span><HiOutlineTicket/></span>
          <span>{t('portfolio.kind.detail')}</span>
        </dt>
        <dd>
          Click Here
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