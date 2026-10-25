import type { Exam, Subject, Task } from '../types'
import examsJson from './exams.json'

export const EXAMS = examsJson as Exam[]

const taskModules = import.meta.glob<Task[]>('./tasks/*.json', { eager: true, import: 'default' })

/** Wszystkie zadania, w kolejności: najnowsze arkusze najpierw, w arkuszu wg numeru. */
export const TASKS: Task[] = EXAMS.flatMap((e) => taskModules[`./tasks/${e.id}.json`] ?? [])

export const TASK_BY_ID = new Map(TASKS.map((t) => [t.id, t]))
export const EXAM_BY_ID = new Map(EXAMS.map((e) => [e.id, e]))

export const SUBJECTS: { id: Subject; name: string; short: string }[] = [
  { id: 'polski', name: 'Język polski', short: 'Polski' },
  { id: 'angielski', name: 'Język angielski', short: 'Angielski' },
  { id: 'matematyka', name: 'Matematyka', short: 'Matematyka' },
]

export const subjectName = (s: Subject) => SUBJECTS.find((x) => x.id === s)?.name ?? s

export const examsOf = (s: Subject) => EXAMS.filter((e) => e.subject === s)
export const tasksOfExam = (examId: string) => TASKS.filter((t) => t.examId === examId)
export const examMaxPoints = (examId: string) => tasksOfExam(examId).reduce((s, t) => s + t.maxPoints, 0)

const SESSION_NAMES: Record<string, string> = {
  maj: 'maj',
  czerwiec: 'czerwiec',
  sierpien: 'sierpień',
  probna: 'próbna',
  diagnostyczna: 'diagnostyczna',
}
export const examLabel = (e: Exam) => `${e.year} – ${SESSION_NAMES[e.session] ?? e.session}`
