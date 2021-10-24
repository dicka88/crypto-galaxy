import PlanCard from "../cards/PlanCard"
import { Slide } from 'react-reveal'

import moonIcon from '@/assets/img/icons/moon_vector.svg'
import saturnIcon from '@/assets/img/icons/saturn_vector.svg'
import starIcon from '@/assets/img/icons/star_vector.svg'
import StarLightParticle from "../particles/StarLightParticle"
import BlurEffectParticle from "../particles/BlurEffectParticle"

export default function PlanSection() {
  return (
    <section id="#plans" className="pb-52 relative">
      <div className="relative mb-10 text-center">
        <div className="relative inline-block">
          <StarLightParticle className="animate-spin duration-5000" top="-50px" left="-50px" />
          <h1 className="section-title">Plan Mining</h1>
        </div>
        <p>We provide 3 plans for there to choose your mining.</p>
      </div>
      <div className="flex flex-wrap justify-center relative pt-10">
        <BlurEffectParticle className="animate-pulse duration-5000" color="#B4A1E7" right="-20px" top="100px" />
        <BlurEffectParticle className="animate-pulse duration-3000" color="#A382FF" left="-20px" bottom="100px" />
        <div className="flex justify-center flex-wrap">
          <div className="block md:inline-block sm:mx-4 md:mx-6">
            <Slide left>
              <PlanCard title="Moon" icon={moonIcon} price="0.0001"></PlanCard>
            </Slide>
          </div>
          <div className="block md:inline-block sm:mx-4 md:mx-6">
            <Slide className="inline-block" bottom>
              <PlanCard title="Planet" icon={saturnIcon} price="0.0003"></PlanCard>
            </Slide>
          </div>
          <div className="block md:inline-block sm:mx-4 md:mx-6">
            <Slide className="inline-block" right>
              <PlanCard title="Star" icon={starIcon} price="0.0010"></PlanCard>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}