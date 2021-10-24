import styled from 'styled-components'

import HeroCardImage from '@/assets/img/illustration/card_hero.png'
import HeroCardImagePlaceholder from '@/assets/img/illustration/card_hero_shadow_1.png'

import StartedButton from '../buttons/StartedButton'
import SecondaryButton from '../buttons/SecondaryButton'

import SvgEarthRocket from '@/assets/img/illustration/earth_rocket.svg'
import Favicon from '@/assets/img/favicon.png'
import FancyText from '@/components/texts/FancyText'

import ParticleBlur from '@/components/particles/BlurEffectParticle'
import StarTwingkleParticle from '@/components/particles/StarTwingkleParticle'

import FancyCircle from '../buttons/FancyCircleButton'
import PlayIcon from '@/assets/img/icons/play.svg'

const BounceAnimation = styled.div`
  animation: bounce 2s infinite alternate; 
`

const TutorialButton = styled(SecondaryButton)`
  &:hover > div {
    box-shadow: none;
    transform: scale(1.05);
  }
  display: inline-block;
  padding: 1em!important;
`

export default function HeroSection() {
  return (
    <section id="#" className="py-10 pb-52">
      <div className="flex justify-between">
        <div className="flex justify-between w-full">
          <div className="relative col-auto" style={{ maxWidth: '600px' }}>
            <ParticleBlur className="animate-pulse duration-3000" width="267px" height="267px" right="40px" bottom="20px" zIndex="-4" />
            <p className="font-bold" style={{ fontSize: '20px', lineHeight: 'auto' }}>
              <img className="inline-block mr-2" style={{ maxWidth: '36px', width: '36px' }} src={SvgEarthRocket} alt="" />
              Explore the Cryptocurrency
            </p>
            <div className="mb-14 relative">
              <StarTwingkleParticle className="animate-ping delay-1000 duration-3000" top="-20px" right="0" />
              <span className="font-bold" style={{ fontSize: '4em', lineHeight: 'auto' }}>Mining Crypto Coins with <img className="inline-block mr-2 animate-spin duration-5000" style={{ maxWidth: '64px', width: '64px' }} src={Favicon} alt="" /> <FancyText>CryptoGalaxy</FancyText></span>
            </div>
            <p>With us, now you can earn by mining the cryptocurrency you choose with CryptoGalaxy</p>
            <div className="mt-10">
              <StartedButton href="/mine">
                Mine Now
              </StartedButton>
              <TutorialButton className="sm:px-6" href="/tutorial">
                <div className="inline-flex items-center">
                  <FancyCircle style={{ padding: '13px', borderRadius: '50%', marginRight: '10px' }}>
                    <img src={PlayIcon} />
                  </FancyCircle>
                  See tutorial
                </div>
              </TutorialButton>
            </div>
          </div>
          <div className="hidden md:flex justify-center w-full p-6 relative">
            <ParticleBlur className="animate-pulse animate_delay_1500" width="267px" height="267px" right="-40px" top="-20px" zIndex="-4" />
            <BounceAnimation className="relative">
              <img className="animate__rotate" style={{ zIndex: 3, maxWidth: '340px' }} src={HeroCardImage} alt="" />
              <img className="absolute animate__rotate delay-1500" style={{ zIndex: -1, maxWidth: '360px', left: '50px', top: '40px', transform: 'rotate(3deg)' }} src={HeroCardImagePlaceholder} alt="" />
              <img className="absolute animate__rotate delay-3000" style={{ zIndex: -2, maxWidth: '360px', left: '100px', top: '80px', transform: 'rotate(7.5deg)' }} src={HeroCardImagePlaceholder} alt="" />
            </BounceAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}