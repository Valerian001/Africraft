import '../App.css'
import "../responsive.css"
import Header from '../components/ui/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/ui/Footer'
import instalogo from '../assets/insta.svg'
import facebooklogo from '../assets/facebook.svg'
import whatsapplogo from '../assets/whatapp.svg'


export default function ContactUsPage() {

  return (
    <>
      <Header />
      <Navbar />
      <div className="contact">
        <div className="contact_container">
          <div className="contact_left">
            <svg width="50" height="50" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="42.4264" width="50" height="50" transform="rotate(-45 0 42.4264)" fill="#4D0D00"/>
            </svg>
            <h1>Contact Us</h1>
            <p>Feel free to contact us any time. We will get back to you as soon as we can </p>
            <form action="">
              <input type="text" placeholder='Name' name='name'/>
              <input type="text" placeholder='Email' name='Email'/>
              <input type="text" placeholder='Message' name='message'/>
              <button type='submit'>Send</button> 
            </form>
          </div>
          <div className='contact_right'>
            <div className="info_wrapper">
              <h1>Info</h1>
              <address>
                <a href="" className='scale_animation'><img src={whatsapplogo} alt="" /><span>Phone Number</span></a>
                <a href="" className='scale_animation'><img src={instalogo} alt="" /><span>@Africraft</span></a>
                <a href="" className='scale_animation'><img src={facebooklogo} alt="" /><span>Africraft</span></a>
              </address>
            </div>
            <address className="social_wrapper">
              <a href="" className='scale_animation'><img src={instalogo} alt="instagram" /></a>
              <a href="" className='scale_animation'><img src={facebooklogo} alt="Facebook" /></a>
              <a href="" className='scale_animation'><img src={whatsapplogo} alt="Whatsapp" /></a>
            </address>
          </div>
        </div>
      </div>
      <Footer/>
      
    </>
  )
}