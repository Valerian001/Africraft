import '../App.css'
import Header from '../components/ui/Header'
import Navbar from '../components/Navbar'
import Button from '../components/ui/Button'
import hero_image from '../assets/heroimage.svg'


export default function HomePage() {

  return (
    <>
      <Header />
      <Navbar />
      {/* <div className="hero ">
        <div className="leftdiv">
          <h1>Welcome to Afri<span>Craft</span></h1>
          <h1>Where Craftsmanship Meets Culture</h1>
          <p>Discover the Essence of African Craftsmanship - Explore our Handmade Jewelry Collections Today. Unearth Unique Pieces That Tell Stories of Culture and Sustainability. Begin Your Journey to Ethical Elegance Now.</p>
          <Button text="Explore"/>
        </div>
        <div className="rightdiv">
          <img src={hero_image} alt="Aficraft illustration" className='heroimage' />
        </div>
      </div> */}
      

    </>
  )
}

