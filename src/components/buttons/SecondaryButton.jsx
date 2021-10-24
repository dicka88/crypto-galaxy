import styled from 'styled-components'
import propTypes from 'prop-types'

const Ahref = styled.a`
  &:hover {
    background: -webkit-linear-gradient(45deg, #FBFFAA,#ff10a9);
    -webkit-background-clip: text;
  }
  font-weight: 600;
  transition: 0.5s;
  vertical-align: middle;
  margin: 0 5px;
  border-radius: 18px;
  color: white;
  padding: 0.75em 2em;
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