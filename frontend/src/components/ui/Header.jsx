import "../../App.css"
import "../../responsive.css"
import { useRef, useState, useEffect } from "react"
export default function Header() {
  // const [scroll, setScroll] = useState("noscroll")
  const parent = useRef(null)
  const child = useRef(null)
  const [childClass,setChildClass] = useState(" ")
  useEffect(() => {
    const handleResize = () => {
      if (parent.current) {
        const parentWidth = parent.current.offsetWidth;
        const childWidth = child.current.offsetWidth;
        setChildClass(childWidth > parentWidth ? 'scroll' : '');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Call initially to handle initial render

    return () => window.removeEventListener('resize', handleResize);
  }, [])
  return (
    <header>
        <div ref={parent} className="text" id='text' >
            <h1 ref={child} id="inner_text" className={childClass}>Announcement</h1> 
        </div>
    </header>
  )
}
