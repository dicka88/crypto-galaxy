import { Slide } from "react-reveal"
import StarLightParticle from "../particles/StarLightParticle"
import TransactionTable from "../tables/TransactionTable"
import BlurEffectParticle from "../particles/BlurEffectParticle"

const deposit = [
  {
    tx_hash: 'bc1qxy2kgdygjrsqtz...',
    name: "Calvin Nadeak",
    amount: " +0.01 BTC",
    timestamp: '2021-10-13 14:12:14'
  }, {
    tx_hash: '6cc50300f0e96df018...',
    name: "Brimstone Army",
    amount: " +0.000146 BTC",
    timestamp: '2021-10-13 14:12:15'
  }, {
    tx_hash: '019c426f08ec143c4b...',
    name: "Sova Elf Forest",
    amount: " +0.0100144 BTC",
    timestamp: '2021-10-13 14:12:15'
  }, {
    tx_hash: '594d94573ad2dcdeca...',
    name: "Chyper the Hunter",
    amount: " +0.040515 BTC",
    timestamp: '2021-10-13 14:12:17'
  }, {
    tx_hash: '7f841df1154751ec15...',
    name: "Skye Animfinding",
    amount: " +0.00015 BTC",
    timestamp: '2021-10-13 14:12:20'
  }, {
    tx_hash: '7649e74f2d8f6cc233...',
    name: "Reyna Killer",
    amount: " +30 BTC",
    timestamp: '2021-10-13 14:12:21'
  }, {
    tx_hash: '7f841df1154751ec15...',
    name: "Jett Air",
    amount: " +0.61 BTC",
    timestamp: '2021-10-13 14:12:27'
  }, {
    tx_hash: 'a8615fd958ee24ca76...',
    name: "Thomas Breach",
    amount: " +0.01 BTC",
    timestamp: '2021-10-13 14:12:40'
  },
]

const withdrawal = [
  {
    tx_hash: 'bc1qxy2kgdygjrsqtz...',
    name: "Calvin Nadeak",
    amount: "-0.0100 BTC",
    timestamp: '2021-04-13 14:12:14'
  }, {
    tx_hash: 'sffewkgdygjrsqtz...',
    name: "Jack The Ripper",
    amount: "-0.0100 BTC",
    timestamp: '2021-04-13 14:12:14'
  }, {
    tx_hash: 'fefefdsqgdygjrsqtz...',
    name: "Neil Amstrong",
    amount: "-0.0100 BTC",
    timestamp: '2021-04-13 14:12:14'
  }, {
    tx_hash: 'ewfef32dygjrsqtz...',
    name: "Iron Spidy",
    amount: "-0.0100 BTC",
    timestamp: '2021-04-13 14:12:14'
  }, {
    tx_hash: 'b3fwesgdygjrsqtz...',
    name: "Takiya Genji",
    amount: "-0.0100 BTC",
    timestamp: '2021-04-13 14:12:14'
  }, {
    tx_hash: 'waw214dygjrsqtz...',
    name: "Chris Zeruya",
    amount: "-0.0100 BTC",
    timestamp: '2021-04-13 14:12:14'
  }, {
    tx_hash: 'wd6723dygjrsqtz...',
    name: "Elon Musk",
    amount: "-0.0100 BTC",
    timestamp: '2021-04-13 14:12:14'
  }, {
    tx_hash: 'asc1dkgdygjrsqtz...',
    name: "Zoro The Sworder",
    amount: "-0.0100 BTC",
    timestamp: '2021-04-13 14:12:14'
  },
]

export default function TransactionHistorySection() {
  return (
    <section className="pb-52 md:px-10 relative">
      <div className="relative text-center mb-10">
        <div className="relative inline-block">
          <StarLightParticle className="animate-spin duration-5000" top="-50px" left="-50px" />
          <h1 className="section-title">Transaction History</h1>
        </div>
        <p>We will provide proof of transactions from users</p>
      </div>
      <div className="relative grid md:grid-cols-2">
        <BlurEffectParticle />
        <BlurEffectParticle bottom="0" right="0" />
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2>Deposit</h2>
          </div>
          <div className="md:px-12">
            <Slide left>
              <TransactionTable data={deposit} link="/deposit" />
            </Slide>
          </div>
        </div>
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2>Withdrawal</h2>
          </div>
          <div className="md:px-12">
            <Slide right>
              <TransactionTable data={withdrawal} link="/withdrawal" />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}