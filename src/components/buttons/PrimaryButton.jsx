import styled from 'styled-components'
import propTypes from 'prop-types'

const Ahref = styled.a`
  &:hover {
    box-shadow: none;
    transform: scale(1.05);
  }
  display: inline-block;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  border-radius: 18px;
  color: white;
  margin: 0 5px;
  font-weight: 600;
  padding: 0.75rem 2rem; 
  font-size: 19px;
  vertical-align: middle;
  border: solid 2px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), 
                    linear-gradient(180deg, #743ad5, #d53a9d);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #251844 inset;
`

export default function PrimaryButton({ href, children, ...props }) {
  return (
    <Ahref href={href} {...props}>
      {children}
    </Ahref>
  )
}

PrimaryButton.propTypes = {
  href: propTypes.string
}