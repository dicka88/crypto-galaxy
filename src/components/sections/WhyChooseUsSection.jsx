import { ReactSVG } from "react-svg"
import { Fade } from "react-reveal"

import AstronautWitchIllustration from '@/assets/img/illustration/astronaut_witch.svg'

import CostIcon from '@/assets/img/icons/cost_icon.svg'
import ServiceIcon from '@/assets/img/icons/service_icon.svg'
import SecurityIcon from '@/assets/img/icons/security_icon.svg'

import ServiceCardItem from '@/components/cards/ServiceCardItem'
import StarLightParticle from "../particles/StarLightParticle"
import BlurEffectParticle from "../particles/BlurEffectParticle"


export default function WhyChooseUsSection() {
  const services = [
    {
      title: "Low Cost",
      description: "Cheap coin mining fees for you",
      icon: CostIcon
    },
    {
      title: "Guaranteed Security",
      description: "Data security to protect your account.",
      icon: SecurityIcon
    }, {
      title: "24 Hours Service",
      description: "We are ready to service you anytime",
      icon: ServiceIcon
    },
  ]

  return (
    <section id="#whychooseus" className="pb-52 relative">
      <div className="grid md:grid-cols-2">
        <div className="relative pr-8 md:pr-28 mb-16">
          <BlurEffectParticle color="#936AFF" />
          <BlurEffectParticle color="#936AFF" className="animate-pulse" right="30%" bottom="20%" />
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 100%;height:100%;')
            }}
            className="animate__rotate duration-4000 max-w-full" src={AstronautWitchIllustration} />
        </div>
        <div className="relative order-1 lg:pr-24">
          <BlurEffectParticle top="0" right="0" />
          <div className="pb-8 text-center md:text-left" style={{ maxWidth: '510px' }}>
            <div className="relative inline-block">
              <StarLightParticle className="animate-spin duration-5000" top="-50px" left="-50px" />
              <h1 className="section-subtitle">
                Why Must Choose Us?
              </h1>
            </div>
            <p className="tracking-widest">We will give you the reasons why you should choose us</p>
          </div>
          <div>
            {services.map((props, i) =>
              <div key={i} className="block">
                <Fade bottom delay={i * 500}>
                  <ServiceCardItem className="hover:-translate-y-2 hover:scale-105 transition-all" {...props} />
                </Fade>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}