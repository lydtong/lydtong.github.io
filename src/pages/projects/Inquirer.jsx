import PageTransition from '../../components/PageTransition'
import BackNav from '../../components/BackNav'
import SlugLine from '../../components/SlugLine'
import FadeIn from '../../components/FadeIn'

const bylines = [
  { title: "Howie Roseman responds to 'unfair' recent reporting around Jalen Hurts", coauthor: 'Jeff Neiburg', date: 'April 14, 2026', url: 'https://www.inquirer.com/eagles/howie-roseman-responds-unfair-recent-reporting-around-jalen-hurts-20260414.html' },
  { title: 'Porter Martone takes the ice for the first time as a member of the Flyers', coauthor: 'Jackie Spiegel', date: 'April 1, 2026', url: 'https://www.inquirer.com/flyers/porter-martone-takes-ice-first-time-member-flyers-20260401.html' },
  { title: "Eagles owner Jeffrey Lurie provides an update on the team's stadium situation", coauthor: 'Olivia Reiner', date: 'April 1, 2026', url: 'https://www.inquirer.com/eagles/eagles-owner-jeffrey-lurie-provides-an-update-teams-stadium-situation-20260401.html' },
  { title: 'Sixers team up with Bank of America to host youth clinic', coauthor: 'Ariel Simpson', date: 'March 18, 2026', url: 'https://www.inquirer.com/sixers/sixers-team-up-with-bank-america-host-youth-clinic-20260318.html' },
  { title: "Jordan Davis 'thankful' after signing contract extension to stay with Eagles", coauthor: 'Olivia Reiner', date: 'March 12, 2026', url: 'https://www.inquirer.com/eagles/jordan-davis-thankful-after-signing-contract-extension-stay-with-eagles-20260312.html' },
  { title: "Helping local youth enter the world of motorsports 'means more than the world' to Lavar Scott", coauthor: 'Devin Jackson', date: 'March 5, 2026', url: 'https://www.inquirer.com/sports/helping-local-youth-enter-world-motorsports-means-more-than-world-lavar-scott-20260305.html' },
  { title: "Shane Victorino's advice to Justin Crawford: 'Just be Justin Crawford'", coauthor: 'Courtesy of the Phillies', date: 'March 3, 2026', url: 'https://www.inquirer.com/phillies/shane-victorinos-advice-justin-crawford-just-be-justin-crawford-20260303.html' },
  { title: 'Oliver Bonk on his current season, learning from his father, and his focus moving forward', coauthor: 'Jackie Spiegel', date: 'Feb. 26, 2026', url: 'https://www.inquirer.com/flyers/oliver-bonk-his-current-season-learning-his-father-his-focus-moving-forward-20260226.html' },
  { title: 'Nick Sirianni on the expectation that the Tush Push will not be banned', coauthor: 'Olivia Reiner', date: 'Feb. 25, 2026', url: 'https://www.inquirer.com/eagles/nick-sirianni-expectation-that-tush-push-will-not-be-banned-20260225.html' },
  { title: "POV: You're at the Palestra for the Philadelphia Catholic League championship", coauthor: null, date: 'Feb. 23, 2026', url: 'https://www.inquirer.com/high-school-sports/pov-youre-palestra-philadelphia-catholic-league-championship-20260223.html' },
  { title: "Breaking down the Union's newcomers for the 2026 season", coauthor: 'Jonathan Tannenwald', date: 'Feb. 12, 2026', url: 'https://www.inquirer.com/soccer/breaking-down-unions-newcomers-2026-season-20260212.html' },
  { title: 'Flyers defenseman Rasmus Ristolainen on representing Finland in the Winter Olympics', coauthor: 'Jackie Spiegel', date: 'Feb. 9, 2026', url: 'https://www.inquirer.com/flyers/flyers-defenseman-rasmus-ristolainen-representing-finland-winter-olympics-20260209.html' },
  { title: 'Hang out with Flyers defenseman Cam York during the 2026 Flyers Carnival', coauthor: null, date: 'Feb. 5, 2026', url: 'https://www.inquirer.com/flyers/hang-out-with-flyers-defenseman-cam-york-during-2026-flyers-carnival-20260205.html' },
  { title: 'Flyers GM Danny Briere on the relationship between Rick Tocchet and Matvei Michkov', coauthor: 'Gabriela Carroll', date: 'Feb. 3, 2026', url: 'https://www.inquirer.com/flyers/flyers-gm-danny-brire-relationship-between-rick-tocchet-matvei-michkov-20260203.html' },
  { title: "Meet Philly's first public elementary school to compete in the national cheer finals", coauthor: 'Courtesy of Smedley Elementary', date: 'Jan. 29, 2026', url: 'https://www.inquirer.com/sports/meet-phillys-first-public-elementary-school-compete-national-cheer-finals-20260129.html' },
  { title: 'Breaking down the top candidates to replace Kevin Patullo as Eagles offensive coordinator', coauthor: 'Jeff Neiburg', date: 'Jan. 14, 2026', url: 'https://www.inquirer.com/eagles/breaking-down-top-candidates-replace-kevin-patullo-eagles-offensive-coordinator-20260114.html' },
  { title: 'Sixers guard Kyle Lowry receives standing ovation from Raptors fans', coauthor: 'Gina Mizell', date: 'Jan. 13, 2026', url: 'https://www.inquirer.com/sixers/sixers-guard-kyle-lowry-receives-standing-ovation-raptors-fans-20260113.html' },
  { title: 'How confident are Eagles fans in the chances of repeating as Super Bowl champions?', coauthor: 'Ariane Datil', date: 'Jan. 10, 2026', url: 'https://www.inquirer.com/eagles/asking-philadelphians-if-they-think-eagles-can-be-back-to-back-super-bowl-champions-20260110.html' },
  { title: 'How many Big 5 schools can Big 5 students name?', coauthor: 'Jeremy Shover', date: 'Dec. 9, 2025', url: 'https://www.inquirer.com/college-sports/how-many-big-5-schools-can-big-5-students-name-20251209.html' },
  { title: 'La Salle\'s Truth Harris, Darris Nichols on how NIL, transfer portal have impacted college basketball', coauthor: 'Kerith Gabriel', date: 'Dec. 3, 2025', url: 'https://www.inquirer.com/college-sports/la-salle/la-salles-truth-harris-darris-nichols-how-nil-transfer-portal-have-impacted-college-basketball-20251203.html' },
  { title: 'Tyrese Maxey walks a dog in the 2025 National Dog Show', coauthor: 'Ryan Mack', date: 'Nov. 17, 2025', url: 'https://www.inquirer.com/sixers/tyrese-maxey-walks-dog-2025-national-dog-show-20251117.html' },
  { title: 'Sixers fans share their favorite memories of former mascot Hip Hop', coauthor: 'Ariel Simpson', date: 'Nov. 7, 2025', url: 'https://www.inquirer.com/sixers/sixers-fans-share-their-favorite-memories-former-mascot-hip-hop-20251107.html' },
  { title: "How do Eagles fans feel about Brandon Graham's return?", coauthor: null, date: 'Oct. 23, 2025', url: 'https://www.inquirer.com/eagles/how-do-eagles-fans-feel-about-brandon-grahams-return-20251023.html' },
  { title: "Local artist Dhwani Saraiya on what went into the design of the Flyers' home opener T-shirt", coauthor: 'Gabriela Carroll', date: 'Oct. 14, 2025', url: 'https://www.inquirer.com/flyers/local-artist-dhwani-saraiya-what-went-into-design-flyers-home-opener-t-shirt-20251014.html' },
  { title: "Scenes from the latest chapter in the St. Joe's Prep-La Salle rivalry", coauthor: null, date: 'Oct. 6, 2025', url: 'https://www.inquirer.com/high-school-sports/scenes-latest-chapter-st-joes-prep-la-salle-rivalry-20251006.html' },
]

export default function Inquirer() {
  return (
    <PageTransition>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-16 md:py-20 w-full">
        <BackNav showWork current="Inquirer" />
        <SlugLine text="Int. The Philadelphia Inquirer — Sports Desk" />
        <FadeIn>
          <h2 className="text-[clamp(3rem,6vw,6rem)] text-dark-green tracking-tight leading-[0.92] mb-6">
            The Philadelphia Inquirer
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-body text-[1.05rem] leading-relaxed mb-12 max-w-[700px]">
            Sports Video Production Intern covering the Eagles, Sixers, Phillies,
            Union, Flyers, and local college and high school teams.
          </p>
        </FadeIn>

        <div className="border-t border-border">
          {bylines.map((item, i) => (
            <FadeIn key={item.url} delay={0.02 * i}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener"
                className="group flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-5 border-b border-border no-underline transition-all duration-200 hover:bg-dark-green/[0.03] hover:pl-3 hover:-ml-3 hover:pr-3"
              >
                <span className="font-mono text-[0.68rem] tracking-wide text-muted whitespace-nowrap shrink-0 md:w-[120px]">
                  {item.date}
                </span>
                <span className="text-dark-green text-[1.02rem] leading-snug transition-colors group-hover:text-mid-green flex-1">
                  {item.title}
                </span>
                {item.coauthor && (
                  <span className="text-[0.8rem] text-muted whitespace-nowrap shrink-0">
                    w/ {item.coauthor}
                  </span>
                )}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
