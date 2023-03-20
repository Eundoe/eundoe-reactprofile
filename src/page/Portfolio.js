


function PortDetail({t}){
    return (
      <div>
      <dl >
        <dt>
          <span>icon</span>
          <span>{t('portfolio.kind.period')}</span>
        </dt>
        <dd>
          컨텐츠
        </dd>
      </dl>
      <dl >
        <dt>
          <span>icon</span>
          <span>{t('portfolio.kind.devtool')}</span>
        </dt>
        <dd>
          컨텐츠
        </dd>
      </dl>
      <dl >
        <dt>
          <span>icon</span>
          <span>{t('portfolio.kind.domain')}</span>
        </dt>
        <dd>
          컨텐츠
        </dd>
      </dl>
      <dl >
        <dt>
          <span>icon</span>
          <span>{t('portfolio.kind.github')}</span>
        </dt>
        <dd>
          컨텐츠
        </dd>
      </dl>
      <dl >
        <dt>
          <span>icon</span>
          <span>{t('portfolio.kind.detail')}</span>
        </dt>
        <dd>
          컨텐츠
        </dd>
      </dl>
      </div>
    )
}


function PortList({t}){
  let array4 = [1,2,3]
  return array4.map((item,index) => {
    return(
      <li key={index}>
        <h3>PJ Title</h3>
        <div id="portdetail">
          <img src="" alt=""/>
          <PortDetail t = {t}/>       
        </div>
      </li>
    )
  })
}

function Portfolio({t}){
  return(
    <article id="portfolio">
      <div id="portwrap">
        <h2>{t('menu.portfolio')}</h2>
        <ul>
          <PortList t = {t}/>
        </ul>
      </div>
    </article>
  )
}

export default Portfolio