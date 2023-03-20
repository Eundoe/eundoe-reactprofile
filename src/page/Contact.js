

function Contact({t}){
  return(
    <article id="contact">
      <div id="contwrap">
        <h2>{t('menu.contact')}</h2>
        <div id="contdetail">
          <div id="myinfo">
          <dl>
            <dt>
              <span>icon</span>
              <span>{t('contact.mypriv.chat')}</span>
            </dt>
            <dd>
              컨텐츠
            </dd>
          </dl>
          <dl>
            <dt>
              <span>icon</span>
              <span>{t('contact.mypriv.email')}</span>
            </dt>
            <dd>
              컨텐츠
            </dd>
          </dl>
          <dl>
            <dt>
              <span>icon</span>
              <span>{t('contact.mypriv.phone')}</span>
            </dt>
            <dd>
              컨텐츠
            </dd>
          </dl>
          <p>Mapspace</p>
          </div>
          <form>
            <fieldset>
              <legend>
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