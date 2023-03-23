import {BsTags, BsPinAngle} from "react-icons/bs"
import {RiCake2Line, RiBookMarkLine, RiGamepadLine} from "react-icons/ri"
import './About.css'


function About({t}){
  return(
    <article id="about">
      <div id="aboutwrap">
        <h2>{t('menu.about')}</h2>
        <div  id="priv">
          <img src="./Images/mychar.png" alt="mychar"/>d
          <div>
          <dl>
            <dt className="ptitle">
              <BsTags/>
              <span>{t('private.name.kind')}</span>
            </dt>
            <dd className="pcontent">{t('private.name.content')}</dd>
          </dl>
          <dl>
            <dt className="ptitle">
              <RiCake2Line/>
              <span>{t('private.birth.kind')}</span>
            </dt>
            <dd className="pcontent">{t('private.birth.content')}</dd>
          </dl>
          <dl>
            <dt className="ptitle">
              <RiBookMarkLine/>
              <span>{t('private.major.kind')}</span>
            </dt>
            <dd className="pcontent">{t('private.major.content')}</dd>
          </dl>
          <dl>
            <dt className="ptitle">
              <RiGamepadLine/>
              <span>{t('private.hobby.kind')}</span>
            </dt>
            <dd className="pcontent">{t('private.hobby.content')}</dd>
          </dl>
          <dl>
            <dt className="ptitle">
              <BsPinAngle/>
              <span>{t('private.creed.kind')}</span>
            </dt>
            <dd className="pcontent">{t('private.creed.content')}</dd>
          </dl>
          </div>
        </div>
      </div>
    </article>
  )
}

export default About