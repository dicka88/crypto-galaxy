
import styled from 'styled-components'

const FancyText = styled.span`
  font-size: inherit;
  background: -webkit-linear-gradient(45deg,#FFC3FB,#F1FFB4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export default function Text({ children }) {
  return (
    <FancyText className="animate_background_movingX">
      {children}
    </FancyText>
  )
}