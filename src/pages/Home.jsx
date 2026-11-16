import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page-col intro">
      <h1>Lydia Tong</h1>
      <p>Bellaire, TX.</p>
      <p>Film &amp; Economics / Data Science and Analytics, University of Pennsylvania.</p>
      <p>Strategic Projects &amp; Operations, <a href="https://www.afterquery.com/" target="_blank" rel="noopener">AfterQuery</a></p>
      <p>Sports Video Production, <a href="https://www.inquirer.com/" target="_blank" rel="noopener">The Philadelphia Inquirer</a></p>
      <p className="work-link"><Link to="/work">Work</Link></p>
    </div>
  )
}
