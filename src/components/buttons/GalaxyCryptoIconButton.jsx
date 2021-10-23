import styled from "styled-components"
import favicon from '@/assets/img/favicon.png'

export default function GalaxyCryptoIconButton() {
  const Logo = styled.img`
    max-height: 60px;
  `

  const LogoText = styled.h1`
    font-family: "Exo";
    max-width: 150px;
    color: white;
  `

  return (
    <a href="/" className="inline-flex justify-between align-middle hover:scale-105 transition-all duration-500">
      <Logo className="mr-4" src={favicon} alt="Crypto Galaxy" />
      <LogoText>Crypto Galaxy</LogoText>
    </a>
  )
}