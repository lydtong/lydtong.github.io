import PageTransition from '../../components/PageTransition'
import BackNav from '../../components/BackNav'
import SlugLine from '../../components/SlugLine'
import FadeIn from '../../components/FadeIn'
import PhotoGrid from '../../components/PhotoGrid'

const photos = Array.from({ length: 12 }, (_, i) => `/DP/dp${i + 1}.jpg`)

export default function DailyPenn() {
  return (
    <PageTransition>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-16 md:py-20 w-full">
        <BackNav showWork current="Daily Pennsylvanian" />
        <SlugLine text="Int. The Daily Pennsylvanian — Newsroom" />
        <FadeIn>
          <h2 className="text-[clamp(3rem,6vw,6rem)] text-dark-green tracking-tight leading-[0.92] mb-6">
            The Daily Pennsylvanian
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-body text-[1.05rem] leading-relaxed mb-4 max-w-[700px]">
            Previous Sports Media Editor at The Daily Pennsylvanian. Notable
            coverage features Super Bowl LIX, Penn Relays, and every Penn
            Athletics game during season.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-body text-[1.05rem] leading-relaxed mb-8 max-w-[700px]">
            Associated College Press Multimedia Story of The Year Winner, 1st and
            2nd Place
          </p>
        </FadeIn>

        <PhotoGrid images={photos} />
      </div>
    </PageTransition>
  )
}
