export default function SectionHeader({ number, label }) {
  return (
    <div className="section-head">
      <span>{number}. {label}</span>
    </div>
  )
}
