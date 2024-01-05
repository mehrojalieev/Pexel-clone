import Container from '@/app/utils/Container'
import React from 'react'
import "./Nav.scss"
import Image from 'next/image'
import Logo from "../../assets/images/pexelLogo.svg"
import Link from 'next/link'
import {FiBell} from 'react-icons/fi'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';


const Nav = () => {
  return (
    <nav className='header-nav'>
            <div className="nav-wrapper">
                <Link href={"/"} className='nav__logo-wrapper'>
                    <Image className='nav__logo' src={Logo} width={130} height={50}/>
                </Link>
                <ul className='nav__menu'>
                    <li className='menu__item'>Explore</li>
                    <li className='menu__item'>License</li>
                    <li className='menu__item'><FiBell/></li>
                    <li><Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar></li>
                </ul>
            </div>
    </nav>
  )
}

export default Nav