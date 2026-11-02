import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import SiteHeader from './SiteHeader'
import TopoBackground from './TopoBackground'
import CursorTrail from './CursorTrail'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopoBackground />
      <CursorTrail />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
