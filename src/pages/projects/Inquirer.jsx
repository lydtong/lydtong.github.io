import PageTransition from '../../components/PageTransition'
import BackNav from '../../components/BackNav'
import SlugLine from '../../components/SlugLine'
import FadeIn from '../../components/FadeIn'

const teamStyles = {
  Eagles: 'bg-[#004C54]/10 text-[#004C54] border-[#004C54]/20',
  Flyers: 'bg-[#CF4520]/10 text-[#CF4520] border-[#CF4520]/20',
  Sixers: 'bg-[#006BB6]/10 text-[#006BB6] border-[#006BB6]/20',
  Phillies: 'bg-[#E81828]/10 text-[#E81828] border-[#E81828]/20',
  Union: 'bg-[#69B3E7]/10 text-[#1A5B8A] border-[#69B3E7]/25',
  'High School': 'bg-dark-green/8 text-dark-green border-dark-green/15',
  College: 'bg-dark-green/8 text-dark-green border-dark-green/15',
  Sports: 'bg-dark-green/8 text-dark-green border-dark-green/15',
}

function getTeam(url) {
  const path = new URL(url).pathname
  if (path.startsWith('/eagles')) return 'Eagles'
  if (path.startsWith('/flyers')) return 'Flyers'
  if (path.startsWith('/sixers')) return 'Sixers'
  if (path.startsWith('/phillies')) return 'Phillies'
  if (path.startsWith('/soccer')) return 'Union'
  if (path.startsWith('/high-school')) return 'High School'
  if (path.startsWith('/college')) return 'College'
  return 'Sports'
}

const bylines = [
  { title: "Howie Roseman responds to 'unfair' recent reporting around Jalen Hurts", coauthor: 'Jeff Neiburg', date: 'April 14, 2026', url: 'https://www.inquirer.com/eagles/howie-roseman-responds-unfair-recent-reporting-around-jalen-hurts-20260414.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F04-14-2026%2Ft_1e7566f4169d451d9669ca2ae253615f_name_Copy_of_GDC_Extra_Thumbnails___2026_04_14T185304_513.png?auth=e1c3df100bb4c214c5ad2d23f4972a139fac537a519f104453af00ca881f9d34&width=760&height=507&smart=true' },
  { title: 'Porter Martone takes the ice for the first time as a member of the Flyers', coauthor: 'Jackie Spiegel', date: 'April 1, 2026', url: 'https://www.inquirer.com/flyers/porter-martone-takes-ice-first-time-member-flyers-20260401.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F04-01-2026%2Ft_3590116d26524558a45fbe0342960635_name_Copy_of_GDC_Extra_Thumbnails___2026_04_01T113638_122.png?auth=9560ca99ac2c8336aca3ee2b56aac0a9bafbf342bb7a845e854a5f81e68092db&width=760&height=507&smart=true' },
  { title: "Eagles owner Jeffrey Lurie provides an update on the team's stadium situation", coauthor: 'Olivia Reiner', date: 'April 1, 2026', url: 'https://www.inquirer.com/eagles/eagles-owner-jeffrey-lurie-provides-an-update-teams-stadium-situation-20260401.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F04-01-2026%2Ft_99f040ce89824023aa96b747e31f1ea5_name_Copy_of_GDC_Extra_Thumbnails___2026_04_01T103655_063.png?auth=6003798ae6f3b3fa5b1bd9aa9163ffad3b9bf2f79488d772dca0a835042f594b&width=760&height=507&smart=true' },
  { title: 'Sixers team up with Bank of America to host youth clinic', coauthor: 'Ariel Simpson', date: 'March 18, 2026', url: 'https://www.inquirer.com/sixers/sixers-team-up-with-bank-america-host-youth-clinic-20260318.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F03-19-2026%2Ft_72f8949d698647eea9adcb59ecca4af6_name_Copy_of_GDC_Extra_Thumbnails__83_.png?auth=92f7b10ada968bda5314604990c0c34a14e96d1363551520e448f08bc2e99138&width=760&height=507&smart=true' },
  { title: "Jordan Davis 'thankful' after signing contract extension to stay with Eagles", coauthor: 'Olivia Reiner', date: 'March 12, 2026', url: 'https://www.inquirer.com/eagles/jordan-davis-thankful-after-signing-contract-extension-stay-with-eagles-20260312.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F03-12-2026%2Ft_8c86c29693b849208b9e1ea12133de46_name_Copy_of_GDC_Extra_Thumbnails__66_.png?auth=282c38f04960b4cc14fa88b740fe136b1f24420d0ec845a6e8ffe2cf90dee46f&width=760&height=507&smart=true' },
  { title: "Helping local youth enter the world of motorsports 'means more than the world' to Lavar Scott", coauthor: 'Devin Jackson', date: 'March 5, 2026', url: 'https://www.inquirer.com/sports/helping-local-youth-enter-world-motorsports-means-more-than-world-lavar-scott-20260305.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F03-05-2026%2Ft_de873bb71b194d1d93358269a685f4fc_name_Copy_of_GDC_Extra_Thumbnails__53_.png?auth=ee3fad93cf10ebe8e6b8a881aa5226bac2081b249b2598bde527444c29495e80&width=760&height=507&smart=true' },
  { title: "Shane Victorino's advice to Justin Crawford: 'Just be Justin Crawford'", coauthor: 'Courtesy of the Phillies', date: 'March 3, 2026', url: 'https://www.inquirer.com/phillies/shane-victorinos-advice-justin-crawford-just-be-justin-crawford-20260303.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F03-03-2026%2Ft_4e5a606e6e214813b3df5eb5ecb76a54_name_Copy_of_GDC_Extra_Thumbnails__47_.png?auth=f97c4b0ceb898cfee39067bacc121e7c04379075faeca24325289eb666bfeaf1&width=760&height=507&smart=true' },
  { title: 'Oliver Bonk on his current season, learning from his father, and his focus moving forward', coauthor: 'Jackie Spiegel', date: 'Feb. 26, 2026', url: 'https://www.inquirer.com/flyers/oliver-bonk-his-current-season-learning-his-father-his-focus-moving-forward-20260226.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F02-26-2026%2Ft_7e5a481b32d7407aa7b3b0769c714e99_name_Copy_of_GDC_Extra_Thumbnails__43_.png?auth=0abb14885f9185936e68ab6ff22bb05f423297a6db8ae1667e3bbde3b475e95f&width=760&height=507&smart=true' },
  { title: 'Nick Sirianni on the expectation that the Tush Push will not be banned', coauthor: 'Olivia Reiner', date: 'Feb. 25, 2026', url: 'https://www.inquirer.com/eagles/nick-sirianni-expectation-that-tush-push-will-not-be-banned-20260225.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F02-25-2026%2Ft_388373d0200140cc96b49c0871089fba_name_Copy_of_GDC_Extra_Thumbnails__36_.png?auth=58559d92e9895bcc70070355c0dff8ca4c7a67afdc360df60e631398d6d35948&width=760&height=507&smart=true' },
  { title: "POV: You're at the Palestra for the Philadelphia Catholic League championship", coauthor: null, date: 'Feb. 23, 2026', url: 'https://www.inquirer.com/high-school-sports/pov-youre-palestra-philadelphia-catholic-league-championship-20260223.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F02-23-2026%2Ft_6aad36255f0a4af595de5937cb2e2f9a_name_Copy_of_GDC_Extra_Thumbnails__29_.png?auth=4f9a599e4a2c0d5d247fbd3413ef2f7ea805b5daa3a9f168a3f399904f6abc2c&width=760&height=507&smart=true' },
  { title: "Breaking down the Union's newcomers for the 2026 season", coauthor: 'Jonathan Tannenwald', date: 'Feb. 12, 2026', url: 'https://www.inquirer.com/soccer/breaking-down-unions-newcomers-2026-season-20260212.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F02-12-2026%2Ft_ab828528c5dd4e5d9130fbb9c59a95f9_name_Copy_of_GDC_Extra_Thumbnails__13_.png?auth=a77eae66d8f2c49505c10775e19a9d110fd32b9e4690d7ac1834d2500ae13647&width=760&height=507&smart=true' },
  { title: 'Flyers defenseman Rasmus Ristolainen on representing Finland in the Winter Olympics', coauthor: 'Jackie Spiegel', date: 'Feb. 9, 2026', url: 'https://www.inquirer.com/flyers/flyers-defenseman-rasmus-ristolainen-representing-finland-winter-olympics-20260209.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F02-09-2026%2Ft_5e22ff3b58e74e3e824b85458f8258d1_name_RASMUS.png?auth=43b807291b7f955f0077912ace2013c9fa5d04f836bef0c41da197c6b8cf35c4&width=760&height=507&smart=true' },
  { title: 'Hang out with Flyers defenseman Cam York during the 2026 Flyers Carnival', coauthor: null, date: 'Feb. 5, 2026', url: 'https://www.inquirer.com/flyers/hang-out-with-flyers-defenseman-cam-york-during-2026-flyers-carnival-20260205.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F02-05-2026%2Ft_17dc35e6ac6e448eb1b865c7821de18f_name_Copy_of_GDC_Extra_Thumbnails.png?auth=0c093d90116d3a2c6b2f50a057813527348dd1258e52b481388ce427ef359a67&width=760&height=507&smart=true' },
  { title: 'Flyers GM Danny Briere on the relationship between Rick Tocchet and Matvei Michkov', coauthor: 'Gabriela Carroll', date: 'Feb. 3, 2026', url: 'https://www.inquirer.com/flyers/flyers-gm-danny-brire-relationship-between-rick-tocchet-matvei-michkov-20260203.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F02-04-2026%2Ft_cf53bb7573ff4df3ac8f66b1950b9359_name_Copy_of_GDC_Extra_Thumbnails___2026_02_03T214915_024.png?auth=f060f3a7be23173b1f9f0fef14d46f2751a79308a92e360aadedf66ec03b7190&width=760&height=507&smart=true' },
  { title: "Meet Philly's first public elementary school to compete in the national cheer finals", coauthor: 'Courtesy of Smedley Elementary', date: 'Jan. 29, 2026', url: 'https://www.inquirer.com/sports/meet-phillys-first-public-elementary-school-compete-national-cheer-finals-20260129.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F01-29-2026%2Ft_24ca80c6ddd0452a8f213aa87b1a0d10_name_Copy_of_GDC_Extra_Thumbnails___2026_01_29T174050_790.png?auth=974741a93719e4c58b806892b931cd688072041ac924cee6eaa3dabe12874b2a&width=760&height=507&smart=true' },
  { title: 'Breaking down the top candidates to replace Kevin Patullo as Eagles offensive coordinator', coauthor: 'Jeff Neiburg', date: 'Jan. 14, 2026', url: 'https://www.inquirer.com/eagles/breaking-down-top-candidates-replace-kevin-patullo-eagles-offensive-coordinator-20260114.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F01-14-2026%2Ft_2f307e919ea047cbb01496a2ff7ffc17_name_Copy_of_GDC_Extra_Thumbnails___2026_01_14T102239_688.png?auth=3bd38aa2f4becf58d2a225768d3294972e6c3cf11f5a490bb8233230d328c28e&width=760&height=507&smart=true' },
  { title: 'Sixers guard Kyle Lowry receives standing ovation from Raptors fans', coauthor: 'Gina Mizell', date: 'Jan. 13, 2026', url: 'https://www.inquirer.com/sixers/sixers-guard-kyle-lowry-receives-standing-ovation-raptors-fans-20260113.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F01-13-2026%2Ft_4fb3f73dbd4742ac9312d0e0b4ff96f8_name_Copy_of_GDC_Extra_Thumbnails___2026_01_13T164100_954.png?auth=7543d06612fa93a0ddffaaa15c3a5b5a1d827f4dec83f01b80236ecea7eab2e0&width=760&height=507&smart=true' },
  { title: 'How confident are Eagles fans in the chances of repeating as Super Bowl champions?', coauthor: 'Ariane Datil', date: 'Jan. 10, 2026', url: 'https://www.inquirer.com/eagles/asking-philadelphians-if-they-think-eagles-can-be-back-to-back-super-bowl-champions-20260110.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F01-10-2026%2Ft_e2f38859f4b9495797a987e2e3887a0b_name_crafts__1_.png?auth=0cc5a0463539e8ac1ea6246e77d4af1b6919a75ebb9767b61e856f540eeb5b3c&width=760&height=507&smart=true' },
  { title: 'How many Big 5 schools can Big 5 students name?', coauthor: 'Jeremy Shover', date: 'Dec. 9, 2025', url: 'https://www.inquirer.com/college-sports/how-many-big-5-schools-can-big-5-students-name-20251209.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F12-09-2025%2Ft_e27924b663d14332af35f0025f99a4f0_name_Copy_of_GDC_Extra_Thumbnails___2025_12_09T164108_933.png?auth=3232f56eba901a68dc3f1cadc80f926aa6d592d32161a546496a95c2b546fa56&width=760&height=507&smart=true' },
  { title: "La Salle's Truth Harris, Darris Nichols on how NIL, transfer portal have impacted college basketball", coauthor: 'Kerith Gabriel', date: 'Dec. 3, 2025', url: 'https://www.inquirer.com/college-sports/la-salle/la-salles-truth-harris-darris-nichols-how-nil-transfer-portal-have-impacted-college-basketball-20251203.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F12-03-2025%2Ft_6e9f811394b14e2eae734e313c55f7cd_name_Copy_of_GDC_Extra_Thumbnails___2025_12_03T162538_595.png?auth=87b2106ed9c3b5502487a2354fef6ad14c0ff216eb233a7d833e6119b8195eef&width=760&height=507&smart=true' },
  { title: 'Tyrese Maxey walks a dog in the 2025 National Dog Show', coauthor: 'Ryan Mack', date: 'Nov. 17, 2025', url: 'https://www.inquirer.com/sixers/tyrese-maxey-walks-dog-2025-national-dog-show-20251117.html', image: null },
  { title: 'Sixers fans share their favorite memories of former mascot Hip Hop', coauthor: 'Ariel Simpson', date: 'Nov. 7, 2025', url: 'https://www.inquirer.com/sixers/sixers-fans-share-their-favorite-memories-former-mascot-hip-hop-20251107.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F11-08-2025%2Ft_7d95f5422c4d49508a6141f6f70b62e7_name_Copy_of_GDC_Extra_Thumbnails___2025_11_07T190724_856.png?auth=03080f24515a89b94252ab1688ff5df6a3d815bf4a8fb27f488c731f9e03fa6d&width=760&height=507&smart=true' },
  { title: "How do Eagles fans feel about Brandon Graham's return?", coauthor: null, date: 'Oct. 23, 2025', url: 'https://www.inquirer.com/eagles/how-do-eagles-fans-feel-about-brandon-grahams-return-20251023.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F10-23-2025%2Ft_2731e817c5114096aa782e5693a3c67c_name_Copy_of_GDC_Extra_Thumbnails___2025_10_23T151738_062.png?auth=fe24e5f9185658817a36a3eee07ea06ac30747360117ee83877bf21a1efa25cd&width=760&height=507&smart=true' },
  { title: "Local artist Dhwani Saraiya on what went into the design of the Flyers' home opener T-shirt", coauthor: 'Gabriela Carroll', date: 'Oct. 14, 2025', url: 'https://www.inquirer.com/flyers/local-artist-dhwani-saraiya-what-went-into-design-flyers-home-opener-t-shirt-20251014.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F10-14-2025%2Ft_f1e009cfdae745a8a69ef88dd985e924_name_Copy_of_GDC_Extra_Thumbnails___2025_10_14T160656_283.png?auth=57c9e327bee734393f913a1c64bc9aa4c7cc60e24ac896ae9a660099bf561919&width=760&height=507&smart=true' },
  { title: "Scenes from the latest chapter in the St. Joe's Prep-La Salle rivalry", coauthor: null, date: 'Oct. 6, 2025', url: 'https://www.inquirer.com/high-school-sports/scenes-latest-chapter-st-joes-prep-la-salle-rivalry-20251006.html', image: 'https://www.inquirer.com/resizer/v2/https%3A%2F%2Fd1dazej9q2gz23.cloudfront.net%2F10-06-2025%2Ft_e042472a19f24fd188bc384acdc0317a_name_Copy_of_GDC_Extra_Thumbnails___2025_10_06T093258_106.png?auth=6e9864a08091b0491810f17e39e91a9b7382cd10d0ff9e22e357e67e5a7a3d92&width=760&height=507&smart=true' },
]

const instagramData = {
  "Howie Roseman responds to 'unfair' recent reporting around Jalen Hurts": { views: 5756, likes: 131, reelUrl: 'https://www.instagram.com/reel/DXIarfTkZXv/' },
  'Porter Martone takes the ice for the first time as a member of the Flyers': { views: 4280, likes: 224, reelUrl: 'https://www.instagram.com/reel/DWmImWYEfpn/' },
  "Eagles owner Jeffrey Lurie provides an update on the team's stadium situation": { views: 42600, likes: 593, reelUrl: 'https://www.instagram.com/reel/DWl-ncXESVt/' },
  'Sixers team up with Bank of America to host youth clinic': { views: 1964, likes: 30, reelUrl: 'https://www.instagram.com/reel/DWCrRxzEYSf/' },
  "Jordan Davis 'thankful' after signing contract extension to stay with Eagles": { views: 3763, likes: 154, reelUrl: 'https://www.instagram.com/reel/DVy6dKOkfmk/' },
  "Helping local youth enter the world of motorsports 'means more than the world' to Lavar Scott": { views: 1968, likes: 25, reelUrl: 'https://www.instagram.com/reel/DVhpBlIkbNj/' },
  "Shane Victorino's advice to Justin Crawford: 'Just be Justin Crawford'": { views: 9261, likes: 192, reelUrl: 'https://www.instagram.com/reel/DVcXJmUEedA/' },
  'Oliver Bonk on his current season, learning from his father, and his focus moving forward': { views: 2587, likes: 45, reelUrl: 'https://www.instagram.com/reel/DVO10dNEf75/' },
  "POV: You're at the Palestra for the Philadelphia Catholic League championship": { views: 14800, likes: 344, reelUrl: 'https://www.instagram.com/reel/DVG2NFbEev0/' },
  "Breaking down the Union's newcomers for the 2026 season": { views: 4562, likes: 115, reelUrl: 'https://www.instagram.com/reel/DUt0yCmkUrX/' },
  'Flyers defenseman Rasmus Ristolainen on representing Finland in the Winter Olympics': { views: 3406, likes: 70, reelUrl: 'https://www.instagram.com/reel/DUjfwM2kTBE/' },
  'Hang out with Flyers defenseman Cam York during the 2026 Flyers Carnival': { views: 7252, likes: 157, reelUrl: 'https://www.instagram.com/reel/DU1b-w7kdqS/' },
  'Breaking down the top candidates to replace Kevin Patullo as Eagles offensive coordinator': { views: 6271, likes: 156, reelUrl: 'https://www.instagram.com/reel/DTfwWeaEUUn/' },
  'Sixers guard Kyle Lowry receives standing ovation from Raptors fans': { views: 13300, likes: 640, reelUrl: 'https://www.instagram.com/reel/DTd5wTQkUrD/' },
}

const rankedBylines = bylines
  .map((item) => ({ ...item, ...(instagramData[item.title] || {}) }))
  .sort((a, b) => (b.views || -1) - (a.views || -1))

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rankedBylines.map((item, i) => {
            const team = getTeam(item.url)
            return (
              <FadeIn key={item.url} delay={0.04 * i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  className="group block no-underline rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,46,9,0.12)] hover:-translate-y-1"
                >
                  <div className="aspect-[3/2] overflow-hidden bg-dark-green/5">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted/30 text-4xl">
                        ▶
                      </div>
                    )}
                  </div>
                  <div className="px-3 pt-3 pb-4 bg-cream">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`text-[0.6rem] font-mono tracking-wider uppercase px-[6px] py-[1px] rounded-sm border ${teamStyles[team]}`}>
                        {team}
                      </span>
                      <span className="font-mono text-[0.62rem] tracking-wide text-muted">
                        {item.date}
                      </span>
                      {item.views && (
                        <span className="ml-auto font-mono text-[0.62rem] tracking-wide text-dark-green/70">
                          {item.views >= 1000 ? `${(item.views / 1000).toFixed(item.views % 1000 === 0 ? 0 : 1)}K` : item.views.toLocaleString()} views
                        </span>
                      )}
                    </div>
                    <h3 className="text-dark-green text-[0.92rem] leading-snug transition-colors group-hover:text-mid-green line-clamp-3">
                      {item.title}
                    </h3>
                    {item.coauthor && (
                      <p className="text-[0.75rem] text-muted mt-1.5">
                        w/ {item.coauthor}
                      </p>
                    )}
                    {item.likes && (
                      <p className="font-mono text-[0.58rem] tracking-wide text-muted/75 mt-2 uppercase">
                        {item.likes.toLocaleString()} likes on Instagram
                      </p>
                    )}
                  </div>
                </a>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </PageTransition>
  )
}
