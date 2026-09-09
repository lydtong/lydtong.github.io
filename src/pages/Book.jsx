import PageTransition from '../components/PageTransition'
import BackNav from '../components/BackNav'
import SlugLine from '../components/SlugLine'
import FadeIn from '../components/FadeIn'

const bookingFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScH3t5Ww47sKxIXhFd9A7cqUUgE2bRlHg8PZBQwOnEd0l2Huw/viewform'

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
          <p className="text-muted mb-6">
            Trouble viewing the form?{' '}
            <a href={bookingFormUrl} target="_blank" rel="noopener noreferrer" className="text-dark-green underline underline-offset-4">
              Open the booking form in a new tab ↗
            </a>
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <iframe
            src={`${bookingFormUrl}?embedded=true`}
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
