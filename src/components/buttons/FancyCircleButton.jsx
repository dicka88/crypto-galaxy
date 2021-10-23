import styled from 'styled-components'

const FancyCircle = styled.div`
  &:hover {
    box-shadow: none;
    transform: scale(1.05);
  }
  display: inline-block;
  transition: 0.4s ease-in-out;
  border-radius: 18px;
  color: white;
  margin: 0 5px;
  font-weight: 600;
  padding: 12px 30px; 
  font-size: 19px;
  border: solid 3px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #743ad5, #d53a9d);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #1e133a inset;
`

export default function PrimaryButton({ href, children, ...props }) {
  return (
    <FancyCircle href={href} {...props}>
      {children}
    </FancyCircle>
  )
}