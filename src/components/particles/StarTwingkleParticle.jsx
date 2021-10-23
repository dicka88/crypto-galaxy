import StarTwingkleImage from '@/assets/img/particles/star_twingkle.svg'

export default function StarTwingkleParticle({ top, left, right, bottom, ...props }) {
  return (
    <span style={{
      position: 'absolute',
      top, left, right, bottom
    }}
      {...props}
    >
      <img src={StarTwingkleImage} />
    </span>
  )
}