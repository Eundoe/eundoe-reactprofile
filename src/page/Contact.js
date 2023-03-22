import {RiKakaoTalkLine} from "react-icons/ri"
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai"
import './Contact.css'

function Contact({t, bdata}){
  return(
    <article id="contact">
      <div id="contwrap">
        <h2>{t('menu.contact')}</h2>
        <div id="contdetail">
          <div id="myinfo">
          <dl>
            <dt>
              <RiKakaoTalkLine/>
              <span>{t('contact.mypriv.chat')}</span>
            </dt>
            <dd>
              <a href={bdata.chat} target="_blank" rel="noreferrer">Click</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <AiOutlineMail/>
              <span>{t('contact.mypriv.email')}</span>
            </dt>
            <dd>
              {bdata.mail}
            </dd>
          </dl>
          <dl>
            <dt>
              <AiOutlinePhone/>
              <span>{t('contact.mypriv.phone')}</span>
            </dt>
            <dd>
            {bdata.phone}
            </dd>
          </dl>
          <p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.9810202309068!2d126.8616107948685!3d37.53239208460855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c28c52b9291%3A0x980420ca99d373a7!2z7ISc7Jq47Yq567OE7IucIOqwleyEnOq1rCDtmZTqs6E064-ZIDk0MC0x!5e0!3m2!1sko!2skr!4v1676619534994!5m2!1sko!2skr" width="100%" height="100%"  loading="lazy" ></iframe>
            </p>
          </div>
          <form>
            <fieldset>
              <legend id="contform">
                <ul>
                  <li>
                    <label htmlFor="uname">{t('contact.form.name')}</label>
                    <input id="uname" type="text"/>
                  </li>
                  <li>
                    <label htmlFor="uphone">{t('contact.form.phone')}</label>
                    <input id="uphone" type="text"/>
                  </li>
                  <li>
                    <label htmlFor="umail">{t('contact.form.email')}</label>
                    <input id="umail" type="text"/>
                  </li>
                  <li>
                    <label htmlFor="umessage">{t('contact.form.message')}</label>
                    <textarea id="umessage" cols="30" rows="10"/>
                  </li>
                </ul>
                <button>{t('contact.form.send')}</button>
              </legend>
            </fieldset>
          </form>
        </div>
      </div>
    </article>
  )
}

export default Contact