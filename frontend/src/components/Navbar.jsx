import { NavLink } from "react-router-dom"
import "../App.css"
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <div className="linkset1">
          <NavLink to="/" className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>Home</NavLink>
          <NavLink to='/Shop' className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>Shop</NavLink>
          <NavLink to='/Blog' className={
            ({isActive})=> isActive ? "navlink active" :"navlink"
          }>Blog</NavLink>
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
