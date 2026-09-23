import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import SiteNav from './SiteNav'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
