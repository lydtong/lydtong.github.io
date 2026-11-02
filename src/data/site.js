// Dates are 'YYYY-MM'; end null = present
export const experience = [
  {
    company: 'AfterQuery',
    url: 'https://www.afterquery.com/',
    role: 'Strategic Projects & Operations',
    start: '2026-06',
    end: null,
    location: 'San Francisco, California',
    tags: ['Data'],
  },
  {
    company: 'The Philadelphia Inquirer',
    url: 'https://www.inquirer.com/',
    role: 'Sports Video Production Intern',
    start: '2025-09',
    end: null,
    location: 'Philadelphia, Pennsylvania',
    tags: ['Eagles', 'Sixers', 'Phillies', 'Flyers', 'Union'],
  },
  {
    company: 'The Daily Pennsylvanian',
    url: 'https://www.thedp.com/',
    role: 'Sports Media Editor',
    start: '2024-08',
    end: '2025-08',
    location: 'Philadelphia, Pennsylvania',
    tags: ['Super Bowl LIX', 'Penn Athletics'],
  },
]

export const projects = [
  { title: 'The Philadelphia Inquirer', type: 'Sports video', to: '/work/inquirer', image: '/inquirer-icon.png', alt: 'The Philadelphia Inquirer logo', logo: true },
  { title: 'The Daily Pennsylvanian', type: 'Photojournalism', to: '/work/daily-pennsylvanian', image: '/DP/dp6.jpg', alt: 'A basketball player rises toward the hoop during a Penn game' },
  { title: 'Projects + Freelance', type: 'Film · Photography', to: '/work/freelance', image: '/Freelance/233-LYD07346.jpg', alt: 'Portrait surrounded by records in a music shop' },
]

export const parks = [
  { name: 'Grand Canyon', location: 'Arizona' },
  { name: 'Zion', location: 'Utah' },
  { name: 'Bryce Canyon', location: 'Utah' },
  { name: 'Death Valley', location: 'California' },
  { name: 'Yosemite', location: 'California' },
  { name: 'Yellowstone', location: 'Wyoming' },
  { name: 'White Sands', location: 'New Mexico' },
  { name: 'Carlsbad Caverns', location: 'New Mexico' },
  { name: 'Guadalupe Mountains', location: 'Texas' },
  { name: 'Big Bend', location: 'Texas' },
  { name: 'Hot Springs', location: 'Arkansas' },
  { name: 'Arches', location: 'Utah' },
  { name: 'Badlands', location: 'South Dakota' },
  { name: 'Everglades', location: 'Florida' },
]

export const hikes = [
  { name: 'South Kaibab to Bright Angel', location: 'Rim-to-Rim — Grand Canyon NP, AZ' },
  { name: 'The Narrows', location: 'Zion NP, UT' },
  { name: 'Fairyland Loop', location: 'Bryce Canyon NP, UT' },
  { name: "Devil's Garden Primitive Loop", location: 'Arches NP, UT' },
  { name: 'Natural Entrance Route', location: 'Carlsbad Caverns NP, NM' },
  { name: 'Alkali Flat Trail', location: 'White Sands NP, NM' },
]

export const bookingFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScH3t5Ww47sKxIXhFd9A7cqUUgE2bRlHg8PZBQwOnEd0l2Huw/viewform'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function parse(ym) {
  const [y, m] = ym.split('-').map(Number)
  return { y, m }
}

export function formatMonth(ym) {
  const { y, m } = parse(ym)
  return `${MONTHS[m - 1].toUpperCase()} ${y}`
}

// Inclusive month count, matching how LinkedIn reports tenure
export function duration(start, end) {
  const s = parse(start)
  const now = new Date()
  const e = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() + 1 }
  const months = (e.y - s.y) * 12 + (e.m - s.m) + 1
  const yrs = Math.floor(months / 12)
  const mos = months % 12
  return [yrs && `${yrs} yr${yrs > 1 ? 's' : ''}`, mos && `${mos} mo${mos > 1 ? 's' : ''}`].filter(Boolean).join(' ')
}
