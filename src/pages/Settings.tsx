import { useEffect, useState } from 'react'
import { TopBar } from '../components/ui'
import { examsOf, SUBJECTS } from '../data'
import { db, exportBackup, importBackup } from '../db/progress'
import { downloadForOffline, isCached, removeCached } from '../lib/pdf'
import type { Subject } from '../types'

const filesOf = (s: Subject) => examsOf(s).flatMap((e) => [e.examFile, e.keyFile])
const mb = (b: number) => `${(b / 1024 / 1024).toFixed(0)} MB`

export function Settings() {
  const [cached, setCached] = useState<Record<string, number>>({})
  const [busy, setBusy] = useState<string>()
  const [storage, setStorage] = useState<string>()
  const [msg, setMsg] = useState<string>()

  const refresh = async () => {
    const r: Record<string, number> = {}
    for (const s of SUBJECTS) {
      const files = filesOf(s.id)
      r[s.id] = (await Promise.all(files.map(isCached))).filter(Boolean).length
    }
    setCached(r)
    const est = await navigator.storage?.estimate?.()
    if (est?.usage !== undefined) setStorage(`${mb(est.usage)} zajęte${est.quota ? ` z ~${mb(est.quota)}` : ''}`)
  }
  useEffect(() => {
    refresh()
  }, [])

  const download = async (s: Subject) => {
    const files = filesOf(s)
    try {
      await downloadForOffline(files, (n) => setBusy(`${s}: ${n}/${files.length}`))
    } catch {
      setMsg('Nie udało się pobrać wszystkich plików – sprawdź połączenie z internetem.')
    }
    setBusy(undefined)
    refresh()
  }

  const doExport = async () => {
    const data = await exportBackup()
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
    const name = `matura-trener-kopia-${new Date().toISOString().slice(0, 10)}.json`
    const file = new File([blob], name, { type: 'application/json' })
    // na iPhonie najwygodniej przez arkusz „Udostępnij" (Zapisz w Plikach / AirDrop)
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: 'Kopia postępu' }).catch(() => {})
    } else {
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = name
      a.click()
      URL.revokeObjectURL(a.href)
    }
  }

  const doImport = async (f: File) => {
    try {
      const n = await importBackup(JSON.parse(await f.text()))
      setMsg(`Wczytano ${n} wyników z kopii.`)
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Nie udało się wczytać pliku.')
    }
  }

  return (
    <>
      <TopBar title="Ustawienia" back={false} />
      {msg && (
        <div className="result neutral" onClick={() => setMsg(undefined)}>
          {msg}
        </div>
      )}

      <h2>Arkusze offline</h2>
      <p className="muted small" style={{ marginTop: 0 }}>
        Arkusz zapisuje się w telefonie przy pierwszym otwarciu. Możesz też pobrać od razu wszystkie arkusze przedmiotu, żeby
        uczyć się bez internetu. {storage && `Pamięć: ${storage}.`}
      </p>
      <div className="list">
        {SUBJECTS.map((s) => {
          const total = filesOf(s.id).length
          const have = cached[s.id] ?? 0
          return (
            <div key={s.id} className="card row">
              <div className="grow">
                <b>{s.name}</b>
                <div className="muted small">
                  {have}/{total} plików w telefonie
                </div>
              </div>
              {have < total ? (
                <button className="btn" disabled={!!busy} onClick={() => download(s.id)}>
                  {busy?.startsWith(s.id) ? busy.split(': ')[1] : 'Pobierz'}
                </button>
              ) : (
                <button
                  className="btn"
                  onClick={async () => {
                    await removeCached(filesOf(s.id))
                    refresh()
                  }}
                >
                  Usuń
                </button>
              )}
            </div>
          )
        })}
      </div>

      <h2>Kopia zapasowa postępu</h2>
      <p className="muted small" style={{ marginTop: 0 }}>
        Postęp jest zapisany tylko w tym telefonie. Usunięcie aplikacji z ekranu początkowego kasuje go – rób czasem kopię
        (np. do aplikacji Pliki).
      </p>
      <div className="grid2">
        <button className="btn" onClick={doExport}>
          ⬆︎ Zapisz kopię
        </button>
        <label className="btn">
          ⬇︎ Wczytaj kopię
          <input
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(e) => e.target.files?.[0] && doImport(e.target.files[0])}
          />
        </label>
      </div>
      <button
        className="btn block danger"
        style={{ marginTop: 10 }}
        onClick={async () => {
          if (confirm('Na pewno usunąć cały postęp? Tego nie da się cofnąć.')) {
            await db.attempts.clear()
            await db.sessions.clear()
            setMsg('Postęp został usunięty.')
          }
        }}
      >
        Usuń cały postęp
      </button>

      <h2>Jak zainstalować na iPhonie</h2>
      <ol className="small" style={{ paddingLeft: 18 }}>
        <li>Otwórz tę stronę w Safari.</li>
        <li>
          Stuknij <b>Udostępnij</b> (kwadrat ze strzałką) → <b>Dodaj do ekranu początkowego</b>.
        </li>
        <li>Uruchamiaj aplikację z ikony „Matura” – działa na pełnym ekranie i offline.</li>
      </ol>
      <p className="muted small">
        Arkusze i zasady oceniania: Centralna Komisja Egzaminacyjna (cke.gov.pl). Aplikacja nie jest oficjalnym produktem CKE.
      </p>
    </>
  )
}
