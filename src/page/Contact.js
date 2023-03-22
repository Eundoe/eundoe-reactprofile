import {RiKakaoTalkLine} from "react-icons/ri"
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai"
import './Contact.css'
import { useState } from "react"



function SendResult({check, t}){
  return(
    <div id="sendmodal" style={{display:"none"}}>
      <div id="modalwrap">
        <p>
          {(check === true) ? t('contact.send.compl') : t('contact.send.wrong.0')+" "+ check.join(',') +" "+ t('contact.send.wrong.1')}
        </p>
        <p id="modalclose" onClick={() => {document.querySelector('div#sendmodal').style.display = "none"}}>{t('contact.send.close')}</p>
      </div>
    </div>
  )
}



function Contact({t, bdata}){
  const [check, setCheck] = useState([1])
 

  function SendMessage(e){
    e.preventDefault()
    let message = {
      name : document.querySelector('input#uname').value,
      email : document.querySelector('input#umail').value,
      phone : document.querySelector('input#uphone').value,
      msg : document.querySelector('input#uname').value
    }
    let alert = []
    if ((/^[가-힣|a-z|A-Z]+$/.test(message.name)) !== true || message.name === null){
      alert.push(t('contact.form.name'))
    }
    if ((/\d{3}-\d{3,4}-\d{4}$/.test(message.phone)) !== true || message.phone === null){
      alert.push(t('contact.form.phone'))
    }
    if ((/(^[-_.]?[0-9a-zA-Z]{4,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i.test(message.email)) !== true || message.email === null){
      alert.push(t('contact.form.email'))
    }
    if (alert.length > 0){
      setCheck(alert)
      document.querySelector('div#sendmodal').style.display = "flex"
    }
    else{
      setCheck(true)
      document.querySelector('div#sendmodal').style.display = "flex"
    }


  }



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
                    <input id="uname" type="text" placeholder={t('contact.pholder.name')}/>
                  </li>
                  <li>
                    <label htmlFor="uphone">{t('contact.form.phone')}</label>
                    <input id="uphone" type="text" placeholder={t('contact.pholder.phone')} />
                  </li>
                  <li>
                    <label htmlFor="umail">{t('contact.form.email')}</label>
                    <input id="umail" type="text" placeholder={t('contact.pholder.email')}/>
                  </li>
                  <li>
                    <label htmlFor="umessage">{t('contact.form.message')}</label>
                    <textarea id="umessage" cols="30" rows="10"/>
                  </li>
                </ul>
                <button onClick={(e) => {return SendMessage(e)}}>{t('contact.form.send')}</button>
              </legend>
            </fieldset>
          </form>
        </div>
      </div>
      <SendResult t = {t} check = {check}/>
    </article>
  )
}

export default Contact