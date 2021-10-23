import styled from "styled-components"
import { Link } from "react-router-dom"
import PrimaryButton from "../buttons/PrimaryButton"

const TransactionTableWrapper = styled.div`
  border-radius: 42px;
  border: 1.5px solid #473280;
  background: linear-gradient(-45deg, #1D123A, #2A1B54);

`

export default function TransactionTable({ data, link }) {
  return (
    <TransactionTableWrapper>
      <div className="grid grid-cols-2">
        <div className="text-center" style={{ borderRight: '1.5px solid #473280' }}>
          <div className="p-4" style={{ borderBottom: '1.5px solid #473280', }}>
            <h5 className="m-0 font-bold">Name</h5>
          </div>
          <div className="p-4">
            <ul>
              {data.map(({ tx_hash, name }) =>
                <li className="mb-4">
                  <span className="block font-bold" style={{ color: "#E1D4FF" }}>{name}</span>
                  <span className="block" style={{ color: '#A393C7' }}>{tx_hash}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <div className="p-4" style={{ borderBottom: '1.5px solid #473280', }}>
            <h5 className="m-0 font-bold">Total</h5>
          </div>
          <div className="p-4">
            <ul>
              {data.map(({ timestamp, amount }) =>
                <li className="mb-4">
                  <span className="block font-bold" style={{ color: "#E1D4FF" }}>{amount}</span>
                  <span className="block" style={{ color: '#A393C7' }}>{timestamp}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 pb-8">
        <div className="text-center">
          <Link to={link}>
            <PrimaryButton href={link}>
              See More
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </TransactionTableWrapper>
  )
}