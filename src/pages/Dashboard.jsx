const metrics = [
  { label: 'Active learners', value: '128', change: '+12 this week' },
  { label: 'Quest completion', value: '76%', change: 'Avg. progress' },
  { label: 'Mentor sessions', value: '42', change: 'Booked in the last 7 days' },
]

const timeline = [
  {
    title: 'Career sprint kickoff',
    detail: 'Week 5 session with industry mentors. Prep deck shared.',
    date: 'May 21',
  },
  {
    title: 'Quests sync',
    detail: 'Curriculum team reviewing feedback on Module 3.',
    date: 'May 18',
  },
  {
    title: 'Deploy review',
    detail: 'Netlify deployment verified via npm run build.',
    date: 'May 17',
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Program pulse</h1>
        <p className="text-slate-600">Keep a finger on cohort health with live metrics and upcoming milestones.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900">{metric.value}</p>
            <p className="mt-2 text-xs text-emerald-600">{metric.change}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <article className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <header className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Next actions</h2>
              <p className="text-sm text-slate-500">Short, actionable steps to keep students moving.</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">Auto-updated</span>
          </header>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• Share Module 4 outline with mentors.</li>
            <li>• Approve 6 pending quest submissions.</li>
            <li>• Confirm June employer showcase speakers.</li>
          </ul>
        </article>

        <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Program timeline</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            {timeline.map((item) => (
              <li key={item.title} className="rounded-lg border border-slate-200/60 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.date}</p>
                <p className="mt-1 font-semibold text-slate-900">{item.title}</p>
                <p className="text-slate-600">{item.detail}</p>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  )
}
