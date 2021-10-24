import { Link } from "react-router-dom"
import PrimaryButton from "../buttons/PrimaryButton"
import { ReactSVG } from "react-svg";
import { Slide } from "react-reveal";
import BlurEffectParticle from "../particles/BlurEffectParticle"

import AstronoutRocketIllustration from '@/assets/img/illustration/astronaut_rocket.svg';

export default function StartMiningSection() {
  return (
    <section className="pb-52 md:px-10 relative">
      <BlurEffectParticle className="animate-pulse delay-1000 duration-1000" left="-10px" top="0" color="#5D69D3" />
      <BlurEffectParticle className="animate-pulse delay-3000 duration-3000" top="-20px" right="40%" color="#936AFF" />
      <BlurEffectParticle className="animate-pulse delay-5000 duration-5000" right="-40px" bottom="100px" color="#F14EFF" />
      <div className="grid md:grid-cols-2 flex-wrap justify-between">
        <div className="order-2 md:order-1 p-6 text-center md:text-left">
          <h1 className="section-subtitle">Let's start mining cryptocurrency with us</h1>
          <div className="pb-16">
            <p className="tracking-wide">Don't miss the opportunity to be able to mine cryptocurrency coins with us.</p>
          </div>
          <Link to="/register">
            <PrimaryButton style={{ padding: "16px 30px" }} href="/register">
              Register Now
            </PrimaryButton>
          </Link>
        </div>
        <div className="order-1 md:order-2 p-6">
          <div className="relative mb-8">
            <BlurEffectParticle className="animate-pulse duration-5000" color="#40488e" />
            <BlurEffectParticle className="animate-pulse delay-4000 duration-4000" color="#D332CB" right="0" bottom="0" />
            <Slide right delay={300}>
              <ReactSVG
                style={{ maxWidth: '80%' }}
                beforeInjection={(svg) => {
                  svg.setAttribute('style', 'width: 100%;height:100%;')
                }}
                className="animate_fly_space duration-5000 -mt-10 mx-auto" src={AstronoutRocketIllustration} />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}