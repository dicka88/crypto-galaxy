import styled from 'styled-components'
import propTypes from 'prop-types'

const Ahref = styled.a`
  &:hover {
    transform: scale(1.05);
  }
  display: inline-block;
  transition: 0.4s;
  border-radius: 18px;
  color: white;
  margin: 0 5px;
  font-weight: 600;
  padding: 20px 54px; 
  font-size: 19px;
  border: solid 3px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(180deg, #B470FF, #FF368F);
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export default function StartedButton({ href, children, ...props }) {
  return (
    <Ahref href={href} {...props}>
      {children}
    </Ahref>
  )
}

StartedButton.propTypes = {
  href: propTypes.string
}