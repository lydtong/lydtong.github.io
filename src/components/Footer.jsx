const links = [
  { label: 'linkedin', href: 'https://www.linkedin.com/in/lydiatong' },
  { label: 'instagram', href: 'https://www.instagram.com/lydiatongmedia' },
  { label: 'letterboxd', href: 'https://letterboxd.com/lydtong' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="page-col site-footer-inner">
        {links.map((l, i) => (
          <span key={l.label}>
            {i > 0 && ' / '}
            <a href={l.href} target="_blank" rel="noopener">{l.label}</a>
          </span>
        ))}
      </p>
    </footer>
  )
}
