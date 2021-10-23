import { Link } from "react-router-dom"
import PrimaryButton from "../buttons/PrimaryButton"
import { ReactSVG } from "react-svg";
import { Slide } from "react-reveal";
import BlurEffectParticle from "../particles/BlurEffectParticle"

import AstronoutRocketIllustration from '@/assets/img/illustration/astronaut_rocket.svg';

export default function StartMiningSection() {
  return (
    <section className="pb-52 px-10 relative">
      <BlurEffectParticle className="animate-pulse delay-1000 duration-1000" left="-10px" top="0" color="#40488E" />
      <BlurEffectParticle className="animate-pulse delay-3000 duration-3000" top="-20px" right="40%" color="#936AFF" />
      <BlurEffectParticle className="animate-pulse delay-5000 duration-5000" right="-40px" bottom="100px" color="#F14EFF" />
      <div className="grid grid-cols-2 flex-wrap justify-between">
        <div className="p-6">
          <h1 class="section-subtitle">Let's start mining cryptocurrency with us</h1>
          <div className="pb-16">
            <p className="tracking-wide">Don't miss the opportunity to be able to mine cryptocurrency coins with us.</p>
          </div>
          <Link to="/register">
            <PrimaryButton style={{ padding: "16px 30px" }} href="/register">
              Register Now
            </PrimaryButton>
          </Link>
        </div>
        <div className="p-6">
          <div className="relative">
            <Slide right delay="300">
              <ReactSVG className="absolute animate_fly_space duration-5000 -top-10" src={AstronoutRocketIllustration} />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}