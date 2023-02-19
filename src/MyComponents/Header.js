
import "./style.css"
import { Link } from "react-scroll";
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)
  const [menu,showmenu] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className="menuSidebar" style={{display : menu===true ?"block":"none"}}>
    <i onClick={() => showmenu(!menu)}class="fa-solid fa-xmark"></i>
    <div className="Sidebarmenu">
    <ul className={click ? " active" : ""}>
          <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>HOME</Link></li>
          <li><Link to="veridian" spy={true} smooth={true} offset={-100} duration={500}onClick={closeMenu} >WHY VERIDIAN TECH?</Link></li>
          <li><Link to="services" spy={true} smooth={true} offset={-100} duration={500}onClick={closeMenu} >SERVICES</Link></li>
          <li><Link to="benifits" spy={true} smooth={true} offset={-100} duration={500}onClick={closeMenu} >BENIFITS</Link></li>
        </ul>
    </div>
    </div>
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header_details">
      <div className="logo">
        <img src="img/logo.png" alt="" />
      </div>
      <div className="menu_bar" onClick={() => showmenu(!menu)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className= "menu">
        <ul className={click ? " active" : ""}>
          <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>HOME</Link></li>
          <li><Link to="veridian" spy={true} smooth={true} offset={-100} duration={500}onClick={closeMenu} >WHY VERIDIAN TECH?</Link></li>
          <li><Link to="services" spy={true} smooth={true} offset={-100} duration={500}onClick={closeMenu} >SERVICES</Link></li>
          <li><Link to="benifits" spy={true} smooth={true} offset={-100} duration={500}onClick={closeMenu} >BENIFITS</Link></li>
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}
