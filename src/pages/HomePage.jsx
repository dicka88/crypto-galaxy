import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'

import HeroSection from '../components/sections/HeroSection'
import PlanSection from '../components/sections/PlanSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import TransactionHistorySection from '../components/sections/TransactionHistorySection'
import StartMiningSection from '../components/sections/StartMiningSection'
import styled from 'styled-components'

import backroundImage from '../assets/img/particles/bg.png'

export default function HomePage() {
  const MainBackground = styled.div`

  `
  return (
    <MainBackground>
      <Header />
      <main className="relative container px-14">
        <HeroSection />
        <PlanSection />
        <WhyChooseUsSection />
        <TransactionHistorySection />
        <StartMiningSection />
      </main>
      <Footer />
    </MainBackground>
  )
}