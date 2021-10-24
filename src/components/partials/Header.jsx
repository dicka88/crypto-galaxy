import { Link } from "react-router-dom"

import favicon from '@/assets/img/favicon.png'
import styled from "styled-components"
import PrimaryButton from '@/components/buttons/PrimaryButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'

import { Icon } from '@iconify/react'
import menuOutlined from '@iconify/icons-ant-design/menu-outlined'


import ParticleBlur from '@/components/particles/BlurEffectParticle'
import GalaxyCryptoIconButton from "../buttons/GalaxyCryptoIconButton"

const Logo = styled.img`
  max-height: 60px;
`

const LogoText = styled.h1`
  max-width: 150px;
`

const NavButton = ({ children, href }) => {
  return (
    <SecondaryButton href={href} style={{ fontWeight: 600, fontSize: '19px', padding: '14px 40px' }}>
      {children}
    </SecondaryButton>
  )
}

export default function Header() {
  return (
    <header className="relative py-7">
      <ParticleBlur className="animate-pulse duration-5000" width="267px" height="267px" left="-53px" top="-20px" />
      <div className="flex justify-between items-center">
        <GalaxyCryptoIconButton />
        <div className="hidden md:block">
          <div className="justify-between flex">
            <NavButton href="/#" >
              <span>Home</span>
            </NavButton>
            <NavButton href="#plans" >
              <span>Plan</span>
            </NavButton>
            <NavButton href="#withdrawal" >
              <span>Withdrawal</span>
            </NavButton>
            <NavButton href="#faq" >
              <span>FAQ</span>
            </NavButton>
          </div>
        </div>
        <div className="flex justify-between">
          <SecondaryButton className="hidden md:block" href="/login">
            <span>Login</span>
          </SecondaryButton>
          <PrimaryButton href="/register">
            <span>Register</span>
          </PrimaryButton>
          <button className="mx-4">
            <Icon icon={menuOutlined} height="32px" width="32px" />
          </button>
        </div>
      </div>
    </header>
  )
}