import StarLight from '@/assets/img/particles/star_light.svg'
import { ReactSVG } from 'react-svg'

export default function StarLightParticle({ top, left, right, bottom, ...props }) {
  return (
    <span style={{
      position: 'absolute',
      top, left, right, bottom
    }}
      {...props}
    >
      <ReactSVG src={StarLight} />
    </span>
  )
}