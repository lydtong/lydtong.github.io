const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lydiatong' },
  { label: 'Instagram', href: 'https://www.instagram.com/lydiatongmedia' },
  { label: 'Letterboxd', href: 'https://letterboxd.com/lydtong' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-rr site-footer-inner">
        <span>© {new Date().getFullYear()} Lydia Tong</span>
        <div className="site-footer-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener">{l.label}</a>
          ))}
          <a className="email" href="mailto:lydtong@sas.upenn.edu">lydtong@sas.upenn.edu</a>
        </div>
      </div>
    </footer>
  )
}
