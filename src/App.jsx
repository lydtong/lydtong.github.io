import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Book from './pages/Book'
import Inquirer from './pages/projects/Inquirer'
import DailyPenn from './pages/projects/DailyPenn'
import FreelancePage from './pages/projects/Freelance'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/work/inquirer" element={<Inquirer />} />
        <Route path="/work/daily-pennsylvanian" element={<DailyPenn />} />
        <Route path="/work/freelance" element={<FreelancePage />} />
      </Route>
    </Routes>
  )
}
