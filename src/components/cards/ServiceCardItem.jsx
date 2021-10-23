import { ReactSVG } from "react-svg"
import styled from "styled-components"

const FeatureCard = styled.div`
  border-radius: 42px;
  border: 1.5px solid #473280;
  background: linear-gradient(-45deg, #1D123A, #2A1B54);
  padding: 24px;
  margin-bottom: 26px;
  max-width: 500px;
  width: 100%;  
`

const IconWrapper = styled.div`
  border-radius: 30px;
  background: linear-gradient(45deg, #7A61B8, #513790);
  margin-right: 24px;
  padding: 14px;
  height: 77px;
  width: 77px;
`

export default function ServiceCardItem({ className, icon, title, description }) {
  return (
    <FeatureCard className={`inline-flex ${className}`}>
      <IconWrapper className="flex">
        <ReactSVG className="flex justify-center items-center" src={icon} />
      </IconWrapper>
      <div>
        <h4 className="mb-2 font-semibold">{title}</h4>
        <p style={{ color: '#a393c7' }}>{description}</p>
      </div>
    </FeatureCard>
  )
}