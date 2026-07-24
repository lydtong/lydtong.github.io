import PageTransition from '../components/PageTransition'
import BackNav from '../components/BackNav'
import SlugLine from '../components/SlugLine'
import FadeIn from '../components/FadeIn'

export default function Book() {
  return (
    <PageTransition>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-16 md:py-20 w-full">
        <BackNav />
        <SlugLine text="Int. Contact — Now" />
        <FadeIn>
          <h2 className="text-[clamp(3.5rem,7vw,7rem)] text-dark-green tracking-tight leading-[0.92] mb-4">
            Book
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-muted mb-6">As serious as you want it to be.</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScH3t5Ww47sKxIXhFd9A7cqUUgE2bRlHg8PZBQwOnEd0l2Huw/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            title="Contact form"
          />
        </FadeIn>
      </div>
    </PageTransition>
  )
}
