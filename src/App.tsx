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
import { LearnHub } from './pages/learn/LearnHub'
import { GrammarLesson, GrammarList } from './pages/learn/Grammar'
import { MathList, MathMethodPage } from './pages/learn/MathMethods'
import { PolishGuide, ReadingList, ReadingPage, TermsPage } from './pages/learn/Polish'
import { OralEnglish, OralHub, OralPolish } from './pages/learn/Oral'

function Layout() {
  const tabs = [
    { to: '/', ico: '⌂', label: 'Start', end: true },
    { to: '/nauka', ico: '✎', label: 'Nauka' },
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
      { path: '/nauka', element: <LearnHub /> },
      { path: '/nauka/gramatyka', element: <GrammarList /> },
      { path: '/nauka/gramatyka/:id', element: <GrammarLesson /> },
      { path: '/nauka/matematyka', element: <MathList /> },
      { path: '/nauka/matematyka/:id', element: <MathMethodPage /> },
      { path: '/nauka/lektury', element: <ReadingList /> },
      { path: '/nauka/lektury/:id', element: <ReadingPage /> },
      { path: '/nauka/pojecia', element: <TermsPage /> },
      { path: '/nauka/poradnik', element: <PolishGuide /> },
      { path: '/nauka/ustna', element: <OralHub /> },
      { path: '/nauka/ustna/polski', element: <OralPolish /> },
      { path: '/nauka/ustna/angielski', element: <OralEnglish /> },
      // wykresy (recharts) ładowane dopiero przy wejściu w statystyki
      { path: '/statystyki', lazy: () => import('./pages/Stats').then((m) => ({ Component: m.Stats })) },
      { path: '/ustawienia', element: <Settings /> },
    ],
  },
])
