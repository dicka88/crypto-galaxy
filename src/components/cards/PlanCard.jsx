import styled from "styled-components"
import ChecklistIcon from '@/assets/img/icons/checklist_vector.svg'
import PrimaryButton from "../buttons/PrimaryButton"
import { ReactSVG } from "react-svg"


export default function PlanCard({ price, icon, title, ...props }) {

  const Frame = styled.div`
    &:hover {
      transform: scale(1.05);
    }
    background: linear-gradient(45deg, #1D123A, #2A1B54);
    border-radius: 42px;
    border: 1.5px solid #473280;
    padding: 2em 4em;
    color: #d8caff;
    margin: 0 3em;
    margin-bottom: 4em;
    display: inline-block;
    transition: 0.4s ease-in-out;
  `

  const TopIcon = styled.div`
    ${Frame}:hover & {
      & svg {
        fill: #fffc46;
      }
    }
    & svg {
      fill: white;
    }
    display: inline-block;
    border: 2px solid #473280;
    background: #211542;
    border-radius: 50%;
    padding: 1rem;
  `

  return (
    <Frame className="relative">
      <div className="absolute flex justify-center align-middle left-0 right-0 mx-auto" style={{ top: "-30px" }}>
        <TopIcon>
          <ReactSVG src={icon}
            beforeInjection={svg => {
              svg.querySelectorAll('path').forEach(node => node.removeAttribute('fill'))
            }}
          />
        </TopIcon>
      </div>
      <div className="text-center my-4">
        <h1>{title}</h1>
      </div>
      <div className="my-10">
        <ul>
          <li className="block pb-4">
            <div className="inline-flex">
              <img class="mr-12" src={ChecklistIcon} />
              <span>120% Profit</span>
            </div>
          </li>
          <li className="block pb-4">
            <div className="inline-flex">
              <img class="mr-12" src={ChecklistIcon} />
              <span>Daily Payouts</span>
            </div>
          </li>
          <li className="block pb-4">
            <div className="inline-flex">
              <img class="mr-12" src={ChecklistIcon} />
              <span>No Extra Fees</span>
            </div>
          </li>
          <li className="block pb-4">
            <div className="inline-flex">
              <img class="mr-12" src={ChecklistIcon} />
              <span>2 Year Contracts</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="text-center my-4">
        <p>Price :</p>
        <h1>{price} BTC</h1>
      </div>
      <div className="text-center">
        <PrimaryButton>
          Buy now
        </PrimaryButton>
      </div>
    </Frame >
  )
} 