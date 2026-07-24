import PageTransition from '../../components/PageTransition'
import BackNav from '../../components/BackNav'
import SlugLine from '../../components/SlugLine'
import FadeIn from '../../components/FadeIn'
import FilmEntry from '../../components/FilmEntry'

export default function Inquirer() {
  return (
    <PageTransition>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-16 md:py-20 w-full">
        <BackNav showWork />
        <SlugLine text="Int. The Philadelphia Inquirer — Sports Desk" />
        <FadeIn>
          <h2 className="text-[clamp(3rem,6vw,6rem)] text-dark-green tracking-tight leading-[0.92] mb-6">
            The Philadelphia Inquirer
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-body text-[1.05rem] leading-relaxed mb-8 max-w-[700px]">
            Former Sports Video Production Intern at the Sports Desk at The
            Philadelphia Inquirer, assisted in video strategy expansion for the
            Eagles, Sixers, Phillies, Union, Flyers, College, and High School
            teams.
          </p>
        </FadeIn>

        <FilmEntry title="Video 1" role="Sports Video Production" description="Coming soon." delay={0.15} />
        <FilmEntry title="Video 2" role="Sports Video Production" description="Coming soon." delay={0.2} />
        <FilmEntry title="Video 3" role="Sports Video Production" description="Coming soon." delay={0.25} />
      </div>
    </PageTransition>
  )
}
