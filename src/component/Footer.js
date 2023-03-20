import {BsInstagram, BsGithub, BsTwitter} from "react-icons/bs"

function Footer(){
  return(
    <footer>
      <ul>
        <li><a href="https://github.com/Eundoe" target="_blank" rel="noreferrer"><BsGithub/></a></li>
        <li><a href="https://twitter.com/Eundoe9002" target="_blank" rel="noreferrer"><BsTwitter/></a></li>
        <li><a href="https://instagram.com/jaeho_cho1225?igshid=NTE5MzUyOTU=" target="_blank" rel="noreferrer"><BsInstagram/></a></li>
      </ul>
      <small>Copyright&copy;2023 Eundoe</small>
    </footer>
  )
}

export default Footer