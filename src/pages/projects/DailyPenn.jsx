import BackNav from '../../components/BackNav'
import PageTransition from '../../components/PageTransition'
import FadeIn from '../../components/FadeIn'
import PhotoGrid from '../../components/PhotoGrid'

const photos = Array.from({ length: 12 }, (_, i) => `/DP/dp${i + 1}.jpg`)

export default function DailyPenn() {
  return (
    <PageTransition>
      <div className="container-rr subpage">
        <BackNav />
        <FadeIn>
          <div className="mono-label" style={{ marginTop: 40 }}>Work — 02</div>
          <h1>The Daily Pennsylvanian</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="lede" style={{ marginBottom: 16 }}>
            Previous Sports Media Editor at The Daily Pennsylvanian. Notable
            coverage features Super Bowl LIX, Penn Relays, and every Penn
            Athletics game during season.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="lede">
            Associated College Press Multimedia Story of The Year Winner, 1st and
            2nd Place
          </p>
        </FadeIn>

        <PhotoGrid images={photos} />
      </div>
    </PageTransition>
  )
}
