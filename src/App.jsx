import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home.jsx'
import Jobs from './pages/Jobs.jsx'
import Quests from './pages/Quests.jsx'

const navLinkClasses = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${
    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
  }`

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="bg-white shadow-sm">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <span className="text-lg font-semibold">EduQuest</span>
            <div className="flex gap-2">
              <NavLink to="/" end className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/dashboard" className={navLinkClasses}>
                Dashboard
              </NavLink>
              <NavLink to="/quests" className={navLinkClasses}>
                Quests
              </NavLink>
              <NavLink to="/jobs" className={navLinkClasses}>
                Jobs
              </NavLink>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
