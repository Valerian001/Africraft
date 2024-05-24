import '../../App.css'
import whatsapp from "../../assets/whatapp.svg"
import insta from "../../assets/insta.svg"
import facebook from "../../assets/facebook.svg"

export default function Footer() {
  const windowwidth = window.innerWidth
  return (
    <footer className={windowwidth < 1010 ? "smfooter": 'footer'}>
      <div className={windowwidth < 1010 ? "smfooterwrapper": 'footerwrapper'}>
        <address className='fleft'>
          Contact us On
          <li> <img src={whatsapp} alt="" /><a href="tel:+2348058969978">+2348058969978</a></li>
          <li> <img src={insta} alt="" /><a href="https://www.instagram.com/valerian.chinecherem/">@Africraft</a></li>
          <li> <img src={facebook} alt="" /><a href="https://web.facebook.com/Valerian.Chinecherem/">Africraft</a></li>
        </address>
        <div className="fright">
          <a href="/">Return Policy</a>
          <a href="/">About us</a>
        </div>
      </div>
      <hr />
      <p>powered by <span>Vlack🖤</span></p>
    </footer>
  )
}
