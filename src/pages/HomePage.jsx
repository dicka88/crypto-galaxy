import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'

import HeroSection from '../components/sections/HeroSection'
import PlanSection from '../components/sections/PlanSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import TransactionHistorySection from '../components/sections/TransactionHistorySection'
import StartMiningSection from '../components/sections/StartMiningSection'


export default function HomePage() {
  return (
    <>
      <div class="container mx-auto">
        <main className="relative px-4 md:px-14">
          <Header />
          <HeroSection />
          <PlanSection />
          <WhyChooseUsSection />
          <TransactionHistorySection />
          <StartMiningSection />
        </main>
      </div>
      <Footer />
    </>
  )
}