import '../App.css'
import "../responsive.css"
import Header from '../components/ui/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/ui/Footer'
import wcu from '../assets/wcu.png'
import Button from '../components/ui/Button'
import hero_image from '../assets/heroimage.svg'


export default function Aboutuspage() {
  const windowwidth = window.innerWidth

  return (
    <div className='About_us'>
      <Header />
      <Navbar />
      <div className={windowwidth<1010? 'smabsection1':'absection1'}>
        <div className="absectionleft">
          <img src={wcu} alt="" />
        </div>
        <div className="absectionright">
          <h1>About Us</h1>
          <p>Welcome to AfriCraft, where we celebrate the rich tapestry of African culture through our handcrafted jewelry.</p>
          <p>At AfriCraft we believe that every piece of jewelry tells a story—a story of tradition, craftsmanship, and connection to the land. Our journey began with a passion for preserving and honoring the beauty and diversity of African heritage, and it has evolved into a commitment to sharing that beauty with the world.</p>
        </div>
      </div>
      <div className={windowwidth<1010? 'smabsection2':'absection2'}>
        <h1>Our Mission</h1>
        <p>Our mission is simple: to create jewelry that not only captivates the eye but also captures the spirit of Africa. We strive to empower local artisans and promote sustainable practices, ensuring that each piece we offer is ethically sourced and crafted with care.</p>
      </div>
      <div className={windowwidth<1010? 'smabsection3':'absection3'}>
        <h1>Our Promise</h1>
        <p>When you choose AfriCraft, you're not just buying jewelry—you're investing in a piece of art that embodies the spirit of Africa. From our hands to yours, we promise to deliver quality, authenticity, and a connection to something truly special.</p>
      </div>
      <div className={windowwidth<1010? 'smabsection4':'absection4'}>
        <div className="absectionleft">
          <h1>Join Us on Our Journey</h1>
          <p>We invite you to explore our collections, each one a reflection of the vibrant colors, textures, and stories of Africa. Thank you for supporting our mission and joining us on this journey of cultural celebration and sustainable style.</p>
          <p>Discover the beauty of Africa with Afri<span>Craft</span>.</p>
          <Button text="Explore Collections"/>
        </div>
        <div className="absectionright">
          <img src={hero_image} alt="" />
        </div>
      </div>
      <Footer />

    </div>
  )
}
