import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import BackNav from '../components/BackNav'
import SlugLine from '../components/SlugLine'
import FadeIn from '../components/FadeIn'

const workItems = [
  {
    num: '01',
    title: 'The Philadelphia Inquirer',
    tags: 'Eagles · Sixers · Phillies · Union · Flyers · College · High School',
    logline: 'Sports video production covering every major Philadelphia team.',
    year: '2025',
    to: '/work/inquirer',
  },
  {
    num: '02',
    title: 'The Daily Pennsylvanian',
    tags: 'Super Bowl LIX · Penn Relays · Athletics Coverage · ACP Award Winner',
    logline: 'Award-winning multimedia coverage for Penn\'s independent student newspaper.',
    year: '2023–24',
    to: '/work/daily-pennsylvanian',
  },
  {
    num: '03',
    title: 'Projects + Freelance',
    tags: 'Short Films · Scripts · Photoshoots',
    logline: 'Independent short films, photography, and creative direction.',
    year: '2022–',
    to: '/work/freelance',
  },
]

export default function Work() {
  return (
    <PageTransition>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-16 md:py-20">
        <BackNav />
        <SlugLine text="Ext. Selected Works — Ongoing" />
        <FadeIn>
          <h2 className="text-[clamp(3.5rem,7vw,7rem)] text-dark-green tracking-tight leading-[0.92] mb-8">
            Work
          </h2>
        </FadeIn>

        {/* Currently */}
        <FadeIn delay={0.1}>
          <div className="mb-10">
            <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-muted block mb-2">
              Currently:
            </span>
            <ul className="list-disc pl-6 text-body text-base leading-relaxed space-y-1">
              <li>
                Strategic Projects at{' '}
                <a
                  href="https://www.afterquery.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-dark-green underline underline-offset-[3px] transition-opacity hover:opacity-65"
                >
                  AfterQuery
                </a>
                , advancing frontier models (San Francisco, CA)
              </li>
              <li>Writing my first feature film</li>
              <li>Planning the Tour De Mont Blanc</li>
            </ul>
          </div>
        </FadeIn>

        {/* Work list */}
        <div className="border-t border-border">
          {workItems.map((item, i) => (
            <FadeIn key={item.num} delay={0.05 * i}>
              <Link
                to={item.to}
                className="group grid grid-cols-[2.5rem_1fr_auto_auto] md:grid-cols-[3.5rem_1fr_auto_auto] gap-4 md:gap-8 items-center py-8 md:py-9 border-b border-border no-underline transition-all duration-200 hover:bg-dark-green/[0.03] hover:pl-4 hover:pr-4 hover:-mx-4"
              >
                <span className="text-[0.75rem] text-dark-green/25 tracking-wide self-start pt-1">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-[clamp(1.3rem,2.2vw,1.9rem)] text-dark-green leading-tight mb-1 transition-colors group-hover:text-mid-green">
                    {item.title}
                  </h3>
                  <p className="text-[0.9rem] text-muted">{item.tags}</p>
                  <p className="text-[0.88rem] italic text-muted max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-2 leading-relaxed">
                    {item.logline}
                  </p>
                </div>
                <span className="font-mono text-[0.72rem] tracking-wide text-dark-green/30 self-center whitespace-nowrap hidden md:block">
                  {item.year}
                </span>
                <span className="text-2xl text-dark-green/15 font-sans leading-none transition-all duration-200 group-hover:text-dark-green group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
