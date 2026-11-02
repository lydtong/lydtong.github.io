const contours = [
  'M -50 180 C 200 120, 400 240, 650 190 S 1100 120, 1490 200',
  'M -50 230 C 220 170, 420 290, 680 240 S 1120 170, 1490 250',
  'M -50 290 C 240 230, 440 350, 710 300 S 1140 230, 1490 310',
  'M -50 560 C 260 500, 480 620, 760 570 S 1180 500, 1490 580',
  'M -50 620 C 280 560, 500 680, 790 630 S 1200 560, 1490 640',
  'M -50 700 C 300 640, 520 760, 820 710 S 1220 640, 1490 720',
  'M 900 -20 C 980 120, 1180 220, 1300 400 S 1400 760, 1340 980',
  'M 960 -20 C 1040 130, 1240 230, 1360 410 S 1460 770, 1400 980',
]

export default function TopoBackground() {
  return (
    <svg className="topo-layer" viewBox="0 0 1440 960" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="gridSmall" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="var(--color-contour)" strokeWidth="0.6" strokeDasharray="2 4" />
        </pattern>
        <pattern id="gridLarge" width="400" height="400" patternUnits="userSpaceOnUse">
          <path d="M 400 0 L 0 0 0 400" fill="none" stroke="var(--color-contour)" strokeWidth="0.9" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridSmall)" />
      <rect width="100%" height="100%" fill="url(#gridLarge)" />
      {contours.map((d) => <path key={d} className="contour" d={d} />)}
      <circle cx="720" cy="480" r="2" fill="var(--color-contour)" />
    </svg>
  )
}
