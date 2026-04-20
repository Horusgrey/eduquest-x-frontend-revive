import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/quests', label: 'Quests' },
  { to: '/jobs', label: 'Jobs' },
]

const navLinkClasses = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-slate-900 text-white shadow-sm'
      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
  }`

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Odin Platform</p>
            <span className="text-2xl font-semibold text-slate-900">EduQuest</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {links.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={navLinkClasses}>
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <main id="main" className="mx-auto max-w-6xl px-4 py-12">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Odin · EduQuest Platform.</p>
          <p className="text-xs">
            Need deployment help? Email <a className="font-medium text-slate-700" href="mailto:support@odin.it.com">support@odin.it.com</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
