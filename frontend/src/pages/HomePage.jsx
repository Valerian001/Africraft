import '../App.css'
import "../responsive.css"
import Header from '../components/ui/Header'
import Navbar from '../components/Navbar'
import Button from '../components/ui/Button'
import hero_image from '../assets/heroimage.svg'
import african_girl from '../assets/African_girl.png'
import necklace from '../assets/necklace.png'
import pendent from '../assets/pendent.png'
import ring from '../assets/ring.png'
import earring from '../assets/earring.png'
import wcu from '../assets/wcu.png'
import Footer from '../components/ui/Footer'

export default function HomePage() {
  const windowwidth = window.innerWidth
  return (
    <div className='homepage'>
      <Header />
      <Navbar />
      <div className={windowwidth < 1010 ? "smhero": 'hero'}>
        <div className={windowwidth < 1010 ? "smleftdiv": 'leftdiv'}>
          <h1>Welcome to Afri<span>Craft</span></h1>
          <h1>Where Craftsmanship Meets Culture</h1>
          <p>Discover the Essence of African Craftsmanship - Explore our Handmade Jewelry Collections Today. Unearth Unique Pieces That Tell Stories of Culture and Sustainability. Begin Your Journey to Ethical Elegance Now.</p>
          <Button text="Explore"/>
        </div>
        <div className={windowwidth < 1010 ? "smrightdiv": 'rightdiv'}>
          <img src={hero_image} alt="Aficraft illustration" className='heroimage' />
        </div>
      </div>
      <div className={windowwidth<1010? 'smsection2':'section2'}>
        <div className="leftdiv2">
          <p>Discover the beauty of handcrafted African jewelry, each piece telling a story of cultural heritage and artisanal skill. At AfriCraft, we take pride in curating a collection that not only enhances your style but also connects you to the rich traditions of Africa.</p>
        </div>
        <img src={african_girl} alt="Aficraft illustration" className={windowwidth<1010? 'smsection2image':'section2image'} />
      </div>
      <div className={windowwidth<1010? 'smsection3':'section3'}>
        <div className={windowwidth<1010? 'smsection3wrapper':'section3wrapper'}>
          <p>Explore our unique designs, meticulously crafted by skilled artisans using sustainable and ethically sourced materials. Every piece is a testament to our commitment to preserving cultural authenticity and promoting responsible practices.</p>
          <Button text="Shop Now"/>
        </div>
      </div>
      <div className={windowwidth<1010? 'smfeaturedsection':'featuredsection'}>
        <div className={windowwidth<1010? 'smfeaturedwrapper':'featuredwrapper'}>
          <h1>Featured Collections</h1>
          <div className={windowwidth<1010? 'smfcards':'fcards'}>
            <div className={windowwidth<1010? 'smfcard':'fcard'}>
              <img src={necklace} alt="" />
              <p>Necklaces</p>
            </div>
            <div className={windowwidth<1010? 'smfcard':'fcard'}>
              <img src={ring} alt="" />
              <p>Rings</p>
            </div>
            <div className={windowwidth<1010? 'smfcard':'fcard'}>
              <img src={earring} alt="" />
              <p>Earrings</p>
            </div>
            <div className={windowwidth<1010? 'smfcard':'fcard'}>
              <img src={pendent} alt=""/>
              <p>Pendents</p>
            </div>
          </div>

        </div>
      </div>
      <div className={windowwidth<1010? 'smwhyussection':'whyussection'}>
        <div className={windowwidth<1010? 'smabwrapper':'abwrapper'}>
          <img src={wcu} alt="" />
          <div className={windowwidth<1010? 'smwcu':'wcu'}>
            <h1>Why Choose AfriCraft?</h1>
            <ul>
              <li>Authenticity: Each piece is a celebration of African craftsmanship, reflecting the diversity and vibrancy of the continent&#39;s artistic traditions.</li>
              <li>Sustainability: We believe in responsible sourcing and production, ensuring that our jewelry is not only beautiful but also environmentally conscious.</li>
              <li>Cultural Connection: Immerse yourself in the stories behind each piece, connecting with the cultural significance and history woven into every design.</li>
            </ul>

          </div>
        </div>
        <div className={windowwidth<1010? 'smconwrapper':'conwrapper'}>
          <p>Browse our collections and embark on a journey that transcends fashion. Experience the artistry of Africa at</p>
          <div className={windowwidth<1010? 'smconwrapper_inner':'conwrapper_inner'}>
            <p>Afri<span>Craft</span></p>
            <Button text="Browse"/>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

