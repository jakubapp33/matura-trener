import { createHashRouter, NavLink, Outlet, ScrollRestoration } from 'react-router'
import { ExamList } from './pages/ExamList'
import { ExamMode } from './pages/ExamMode'
import { ExamResult } from './pages/ExamResult'
import { Home } from './pages/Home'
import { Review } from './pages/Review'
import { Settings } from './pages/Settings'
import { SubjectPage } from './pages/Subject'
import { TaskSet } from './pages/TaskSet'
import { TopicList } from './pages/TopicList'
import { TypeFilter } from './pages/TypeFilter'

function Layout() {
  const tabs = [
    { to: '/', ico: '⌂', label: 'Start', end: true },
    { to: '/powtorka', ico: '↻', label: 'Powtórka' },
    { to: '/statystyki', ico: '▥', label: 'Postęp' },
    { to: '/ustawienia', ico: '⚙', label: 'Ustawienia' },
  ]
  return (
    <>
      <main className="app">
        <Outlet />
      </main>
      <nav className="tabbar">
        {tabs.map((t) => (
          <NavLink key={t.to} to={t.to} end={t.end}>
            <span className="ico" aria-hidden>
              {t.ico}
            </span>
            {t.label}
          </NavLink>
        ))}
      </nav>
      <ScrollRestoration />
    </>
  )
}

// HashRouter: adresy typu #/p/matematyka – działają na GitHub Pages bez konfiguracji serwera
export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/p/:subject', element: <SubjectPage /> },
      { path: '/p/:subject/arkusze', element: <ExamList /> },
      { path: '/p/:subject/dzialy', element: <TopicList /> },
      { path: '/p/:subject/typ/:type', element: <TypeFilter /> },
      { path: '/zadania', element: <TaskSet /> },
      { path: '/egzamin/:examId', element: <ExamMode /> },
      { path: '/egzamin/:examId/wynik', element: <ExamResult /> },
      { path: '/powtorka', element: <Review /> },
      // wykresy (recharts) ładowane dopiero przy wejściu w statystyki
      { path: '/statystyki', lazy: () => import('./pages/Stats').then((m) => ({ Component: m.Stats })) },
      { path: '/ustawienia', element: <Settings /> },
    ],
  },
])
