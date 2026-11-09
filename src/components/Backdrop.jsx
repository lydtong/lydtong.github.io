// Film grain plus the dashed row/column guides from garcinuno.me
export default function Backdrop() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="dash-row" aria-hidden="true" />
      <div className="dash-col" aria-hidden="true" />
    </>
  )
}
