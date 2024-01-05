import Container from '@/app/utils/Container'
import React from 'react'
import "./Nav.scss"
import Image from 'next/image'
import Logo from "../../assets/images/pexelLogo.svg"

const Nav = () => {
  return (
    <nav>
        <Container>
           <div className="nav-wrapper">
            <div className="nav__logo">
                <Image width={120} height={50} src={Logo}/>
            </div>
           </div>
        </Container>
    </nav>
  )
}

export default Nav