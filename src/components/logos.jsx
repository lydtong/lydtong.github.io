// 28px logo marks for the About card and Experience timeline

export function PennLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 100 110" fill="none" aria-hidden="true">
      <path d="M50 2C50 2 8 2 8 2V68C8 90 28 108 50 108C72 108 92 90 92 68V2H8Z" fill="#fff" stroke="#011F5B" strokeWidth="4" />
      <rect x="8" y="2" width="84" height="28" fill="#990000" stroke="#011F5B" strokeWidth="2" />
      <rect x="16" y="8" width="6" height="16" rx="1" fill="none" stroke="#fff" strokeWidth="1.5" />
      <rect x="24" y="8" width="6" height="16" rx="1" fill="none" stroke="#fff" strokeWidth="1.5" />
      <rect x="70" y="8" width="6" height="16" rx="1" fill="none" stroke="#fff" strokeWidth="1.5" />
      <rect x="78" y="8" width="6" height="16" rx="1" fill="none" stroke="#fff" strokeWidth="1.5" />
      <ellipse cx="50" cy="16" rx="10" ry="7" fill="#fff" opacity="0.9" />
      <path d="M50 40L15 75H50H85L50 40Z" fill="#011F5B" />
      <path d="M50 40L15 75V68C15 68 50 100 50 100C50 100 85 68 85 68V75L50 40Z" fill="#011F5B" />
      <circle cx="50" cy="58" r="7" fill="#fff" />
      <circle cx="35" cy="75" r="7" fill="#fff" />
      <circle cx="65" cy="75" r="7" fill="#fff" />
    </svg>
  )
}

export function AfterQueryLogo() {
  const lines = [[13, 15, 7], [11.5, 16.5, 10], [10, 18, 13], [8.5, 19.5, 16], [7, 21, 19], [5.5, 22.5, 22]]
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#000" />
      {lines.map(([x1, x2, y]) => (
        <line key={y} x1={x1} y1={y} x2={x2} y2={y} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  )
}

export function DPLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#B01E24" />
      <text x="14" y="19.5" textAnchor="middle" fontFamily="'Cormorant Garamond', 'Times New Roman', serif" fontSize="15" fontWeight="700" fill="#fff">DP</text>
    </svg>
  )
}

export function InquirerLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#000" />
      <image href="/inquirer-icon.png" x="6" y="4" width="16" height="20" preserveAspectRatio="xMidYMid meet" />
    </svg>
  )
}
