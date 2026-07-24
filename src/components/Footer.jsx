const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:lydtong@sas.upenn.edu',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current shrink-0">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lydiatong',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current shrink-0">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lydiatongmedia',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current shrink-0">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Letterboxd',
    href: 'https://letterboxd.com/lydtong',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current shrink-0">
        <path d="M8.235 9.166a2.835 2.835 0 1 0 0 5.669 2.835 2.835 0 0 0 0-5.669zm7.529 0a2.835 2.835 0 1 0 0 5.669 2.835 2.835 0 0 0 0-5.669zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm8.235-4.669a4.669 4.669 0 0 0-2.424 8.684 4.669 4.669 0 0 0 7.283-2.18 4.669 4.669 0 0 0 7.287 2.165A4.669 4.669 0 0 0 15.764 7.34a4.669 4.669 0 0 0-3.764 1.908 4.669 4.669 0 0 0-3.765-1.917z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="max-w-[1200px] mx-auto px-8 py-6 flex items-center justify-between max-md:flex-col max-md:gap-4">
        <span className="text-[0.8rem] text-dark-green/25 tracking-wide">
          © Lydia Tong
        </span>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener'}
              className="text-muted flex items-center gap-2 no-underline text-[0.85rem] transition-all duration-200 hover:text-dark-green hover:-translate-y-px"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
