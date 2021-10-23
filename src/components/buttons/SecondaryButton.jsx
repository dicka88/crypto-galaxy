import styled from 'styled-components'
import propTypes from 'prop-types'

const Ahref = styled.a`
  &:hover {
    background: -webkit-linear-gradient(45deg, #FBFFAA,#ff10a9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  transition: 0.5s;
  vertical-align: middle;
  margin: 0 5px;
  border-radius: 18px;
  color: white;
  padding: 14px 30px;
  font-size: 19px;
`

export default function SecondaryButton({ href, children, ...props }) {
  return (
    <Ahref href={href} {...props}>
      {children}
    </Ahref>
  )
}

SecondaryButton.propTypes = {
  href: propTypes.string
}