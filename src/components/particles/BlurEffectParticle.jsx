import propTypes from "prop-types"
import styled from "styled-components"

export default function BlurEffectParticle({
  width = '100px',
  height = '100px',
  left,
  top,
  bottom,
  right,
  zIndex = -1,
  color = '#56408E',
  ...props
}) {

  const Blur = styled.span`
    filter: blur(350px);
    position: absolute;
    width: ${width};
    height: ${height};
    ${left ? `left: ${left};` : null}
    ${top ? `top: ${top};` : null}
    ${bottom ? `bottom: ${bottom};` : null}
    ${right ? `right: ${right};` : null}
    background: ${color};
    z-index: ${zIndex};
  `

  return (
    <Blur {...props}></Blur>
  )
}

BlurEffectParticle.propType = {
  width: propTypes.string,
  height: propTypes.string,
  left: propTypes.string,
  right: propTypes.string,
  top: propTypes.string,
  bottom: propTypes.string,
}