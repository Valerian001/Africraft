/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export default function Button(props) {
  return (
    
    <Link to = "/shop" className="btn">{props.text}</Link>
  )
}

