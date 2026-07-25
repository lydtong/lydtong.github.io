import PageTransition from '../../components/PageTransition'
import BackNav from '../../components/BackNav'
import SlugLine from '../../components/SlugLine'
import FadeIn from '../../components/FadeIn'
import FilmEntry from '../../components/FilmEntry'
import PhotoGrid from '../../components/PhotoGrid'

const photos = [
  '/Freelance/12-LYD05008.jpg',
  '/Freelance/142-LYD06513.jpg',
  '/Freelance/233-LYD07346.jpg',
  '/Freelance/261-LYD07511.jpg',
  '/Freelance/303-LYD07934.jpg',
  '/Freelance/LYD-1767.jpg',
  '/Freelance/LYD-4682.jpg',
  '/Freelance/LYD02538 (1).jpg',
  '/Freelance/LYD02538.jpg',
  '/Freelance/LYD02788.jpg',
  '/Freelance/LYD02817.JPG',
  '/Freelance/LYD02890.jpg',
  '/Freelance/LYD04501.JPG',
  '/Freelance/LYD04527.JPG',
  '/Freelance/LYD04545.jpg',
  '/Freelance/LYD05370.jpg',
  '/Freelance/LYD05817.jpg',
  '/Freelance/LYD05944.jpg',
  '/Freelance/LYD06285.jpg',
  '/Freelance/LYD06535.JPG',
  '/Freelance/LYD06546.JPG',
  '/Freelance/LYD07130.jpg',
  '/Freelance/LYD07865.jpg',
  '/Freelance/LYD08834.JPG',
]

const tunnelVisionDesc = (
  <div className="space-y-4">
    <p className="text-body text-base leading-relaxed">
      TUNNEL VISION is a psychological corporate thriller set within the
      high-pressure, hyper-competitive culture at the University of
      Pennsylvania. The story follows Eric and Dalton, two freshman year
      roommates whose already-fragile bond fractures during the ruthless
      recruitment process for an elite finance club, the Wharton Investment
      Banking Group (W.I.B.G.).
    </p>
    <p className="text-body text-base leading-relaxed">
      Eric, an anxious, financially-burdened student, sees the club as his sole
      chance at a better life. Dalton, the advantaged son of a finance titan,
      drifts through the process with ease. As the boys navigate misleading
      clues, long-buried tensions broil over. Their childhood friendship is
      tested, and their rivalry spirals into a feral, violent confrontation
      through the historic Quadrangle tunnels.
    </p>
    <p className="text-body text-base leading-relaxed">
      This short film takes a twist on truth to the brutal human cost of
      privilege, and the systems that uphold them.
    </p>
  </div>
)

export default function FreelancePage() {
  return (
    <PageTransition>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-16 md:py-20 w-full">
        <BackNav showWork current="Freelance" />
        <SlugLine text="Int. Independent Work — Various Locations" />
        <FadeIn>
          <h2 className="text-[clamp(3rem,6vw,6rem)] text-dark-green tracking-tight leading-[0.92] mb-8">
            Projects + Freelance
          </h2>
        </FadeIn>

        <FilmEntry
          title="Tunnel Vision: A Short Film"
          role="Director, Editor"
          description={tunnelVisionDesc}
          video="https://www.youtube.com/embed/Vn96L3t_EUo"
          delay={0.1}
        />

        <hr className="border-t border-border my-14" />
        <FadeIn>
          <h3 className="text-2xl text-dark-green mb-4">Photography</h3>
        </FadeIn>

        <PhotoGrid images={photos} />
      </div>
    </PageTransition>
  )
}
