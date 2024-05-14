import { NavLink } from "react-router-dom"
import "../App.css"
import { useEffect, useRef, useState } from "react"
import logo from '../assets/logo.svg'
import Hamburger from "./ui/Hamburger"

export default function Navbar() {
  const parent = useRef(null)
  const child = useRef(null)
  const [childClass,setChildClass] = useState(" ")
  useEffect(() => {
    const handleResize = () => {
      if (parent.current) {
        const parentWidth = parent.current.offsetWidth;
        setChildClass(parentWidth > 1010 ? ' ' : 'smallerscrn');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Call initially to handle initial render

    return () => window.removeEventListener('resize', handleResize);
  }, [])




  return (
    <nav ref={parent}> 
      <div className={childClass} ref={child} id="wrapper">
        <div className="linkset1">
          <Hamburger />

          {/* <NavLink to="/" className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>Home</NavLink>
          <NavLink to='/Shop' className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>Shop</NavLink>
          <NavLink to='/Blog' className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>Blog</NavLink> */}
        </div>
        <img src={logo} alt="Africraft logo" id="logo" />
        <div className="linkset2">
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
