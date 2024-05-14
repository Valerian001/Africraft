import { NavLink } from "react-router-dom"
import "../App.css"
import logo from '../assets/logo.svg'
import Hamburger from "./ui/Hamburger"
import { useState } from "react"

export default function Navbar() {
  const windowwidth = window.innerWidth
  const [dropdown,setDropdown] = useState(false)
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (parent.current) {
  //       const parentWidth = parent.current.offsetWidth;
  //       setChildClass(parentWidth > 1010 ? ' ' : 'smallerscrn');
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);

  //   handleResize(); // Call initially to handle initial render

  //   return () => window.removeEventListener('resize', handleResize);
  // }, [])
  console.log(windowwidth)
  function handleclick(){
    setDropdown(prev => !prev)
  }



  return (
    <nav> 
      <div id="wrapper">
        <div className="linkset1">
          <Hamburger toogle={handleclick} />
          <ul className={dropdown ? "menu":"nomenu"}>
            <NavLink to="/" className={
              ({isActive})=> isActive ? "navlink active" :"navlink"
            }  >Home</NavLink>
            <NavLink to='/Shop' className={
              ({isActive})=> isActive ? "navlink active" :"navlink"
            }>Shop</NavLink>
            <NavLink to='/Blog' className={
              ({isActive})=> isActive ? "navlink active" :"navlink"
            }>Blog</NavLink>
            <NavLink to='/Aboutus' className={
              ({isActive})=> isActive ? "navlink active" :"navlink"
            }>AboutUs</NavLink>
            <NavLink to='/ContactUs' className={
              ({isActive})=> isActive ? "navlink active" :"navlink"
            }>ContactUs</NavLink>
            <NavLink to='/Faq' className={
              ({isActive})=> isActive ? "navlink active" :"navlink"
            }>FAQ</NavLink>
          </ul>
        </div>
        <div className={windowwidth < 1010 ? "nolinkset1":"linkset1"}>

          <NavLink to="/" className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }  >Home</NavLink>
          <NavLink to='/Shop' className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>Shop</NavLink>
          <NavLink to='/Blog' className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>Blog</NavLink>
        </div>
        <img src={logo} alt="Africraft logo" id="logo" />
        <div className={windowwidth < 1010 ? "nolinkset2":"linkset2"}>
          <NavLink to='/Aboutus' className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>AboutUs</NavLink>
          <NavLink to='/ContactUs' className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>ContactUs</NavLink>
          <NavLink to='/Faq' className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>FAQ</NavLink>
          
        </div>
      </div>
      
    </nav>
  )
}
