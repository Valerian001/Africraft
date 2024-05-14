/* eslint-disable react/prop-types */


export default function Hamburger(props) {
  return (
    <>
      <div className="hamburger" onClick={props.toogle}>
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>
    </>
  )
}
