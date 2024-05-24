import { NavLink } from "react-router-dom"
import "../App.css"
import "../responsive.css"
import logo from '../assets/logo.svg'
import Hamburger from "./ui/Hamburger"
import { useState } from "react"
import { useRef } from "react"
import {CSSTransition} from 'react-transition-group'

export default function Navbar() {
  const windowwidth = window.innerWidth
  const [dropdown,setDropdown] = useState(false)
  const nodeRef = useRef() // useEffect(() => {
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

  // className={dropdown ? `menu ${dropdown ? 'active': ' '}`:"nomenu"}

  return (
    <nav className={windowwidth < 1010 ? "smnav":"nav"}> 
      <div className={windowwidth < 1010 ? "smwrapper":"wrapper"}>
        <div className={windowwidth < 1010 ? "linkdrop":"nolinkset1"}>
          <Hamburger toogle={handleclick} />
          <CSSTransition nodeRef={nodeRef} in={dropdown} timeout={500} classNames='node' unmountOnExit>
            <ul ref={nodeRef}>
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

          </CSSTransition>
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
