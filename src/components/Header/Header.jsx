'use client'

import React, { useEffect, useState } from 'react'
import './Header.scss'
import Image from 'next/image'
import { CiMenuBurger } from "react-icons/ci";

import logo from '@/assets/neonPageLogo.png'

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false)

  useEffect(() => {

    const changeMobileMenu = () => setmobileMenu(window.innerWidth <=768 ? true : false)
    window.addEventListener("resize", changeMobileMenu)
    
    return () => {
      window.removeEventListener("resize", changeMobileMenu)
    }
 
  }, [])
  return (
    <header>
        <Image src={logo} alt="Logo" width={80} height={100} className="logo" priority />
        {mobileMenu && 
          <button className="menuIcon">
            <CiMenuBurger  />
          </button>
          }
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </header>
  )
}

export default Header