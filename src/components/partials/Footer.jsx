import { ReactSVG } from "react-svg"
import styled from "styled-components"
import GalaxyCryptoIconButton from "../buttons/GalaxyCryptoIconButton"

import FacebookIcon from '@/assets/img/icons/facebook_social.svg'
import InstagramIcon from '@/assets/img/icons/instagram_social.svg'
import TwitterIcon from '@/assets/img/icons/twitter_social.svg'
import TelegramIcon from '@/assets/img/icons/telegram_social.svg'

import FancyText from '@/components/texts/FancyText'

const FooterWrapper = styled.footer`
  background: linear-gradient(90deg, #40306B, #2A1A54);
  font-family: "Poppins";
  font-size: 22px;
`

const SocialLink = styled.a`
  & svg {
    height: 22px;
    max-height: 25px;
  }
  &:hover {
    transform: translateY(-3px);
  }
  transition: 0.2s ease-in;

`

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="flex justify-between pt-14 pb-16 px-14">
        <div className="flex-2">
          <div className="block">
            <GalaxyCryptoIconButton />
          </div>
          <p>You can start mining <br /> Cryptocurrency Coins with us</p>
        </div>
        <div className="flex justify-between flex-wrap px-28">
          <div className="pr-28">
            <div className="block">
              <h1>About</h1>
              <ul>
                <li className="pb-4">
                  <a href="">About Us</a>
                </li>
                <li className="pb-4">
                  <a href="">Features</a>
                </li>
                <li className="pb-4">
                  <a href="">News</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pr-24">
            <div className="block">
              <h1>Support</h1>
              <ul>
                <li className="pb-4">
                  <a href="">About Us</a>
                </li>
                <li className="pb-4">
                  <a href="">Features</a>
                </li>
                <li className="pb-4">
                  <a href="">News</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <h1>Follow Us</h1>
          <div className="block">
            <div className="inline-flex">
              <SocialLink height="22px" className="mr-8" href="https://facebook.com" target="_blank">
                <ReactSVG src={FacebookIcon} />
              </SocialLink>
              <SocialLink height="22px" className="mr-8" href="https://twitter.com" target="_blank">
                <ReactSVG src={TwitterIcon} />
              </SocialLink>
              <SocialLink height="22px" className="mr-8" href="https://instagram.com" target="_blank">
                <ReactSVG src={InstagramIcon} />
              </SocialLink>
              <SocialLink height="22px" className="mr-8" href="https://telegram.com" target="_blank">
                <ReactSVG src={TelegramIcon} />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm pb-4">
        Design by <a target="_blank" href="https://dribbble.com/calvinnadeak"><FancyText>Calvin Nadeak</FancyText></a> - Code By <a target="_blank" href="https://github.com/dicka88"><FancyText>Dicka Ismaji</FancyText></a>
      </div>
    </FooterWrapper>
  )
}