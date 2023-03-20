import {BsTags, BsPinAngle} from "react-icons/bs"
import {RiCake2Line, RiBookMarkLine, RiGamepadLine} from "react-icons/ri"


function About({t}){
  return(
    <article id="about">
      <div id="aboutwrap">
        <h2>{t('menu.about')}</h2>
        <div  id="priv">
          <img src="" alt=""/>
          <div>
          <dl>
            <dt className="ptitle">
              <span><BsTags/></span>
              <span>{t('private.name.kind')}</span>
            </dt>
            <dd className="pcontent">{t('private.name.content')}</dd>
          </dl>
          <dl>
            <dt className="ptitle">
              <span><RiCake2Line/></span>
              <span>{t('private.birth.kind')}</span>
            </dt>
            <dd className="pcontent">{t('private.birth.content')}</dd>
          </dl>
          <dl>
            <dt className="ptitle">
              <span><RiBookMarkLine/></span>
              <span>{t('private.major.kind')}</span>
            </dt>
            <dd className="pcontent">{t('private.major.content')}</dd>
          </dl>
          <dl>
            <dt className="ptitle">
              <span><RiGamepadLine/></span>
              <span>{t('private.hobby.kind')}</span>
            </dt>
            <dd className="pcontent">{t('private.hobby.content')}</dd>
          </dl>
          <dl>
            <dt className="ptitle">
              <span><BsPinAngle/></span>
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