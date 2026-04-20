const quests = [
  {
    title: 'Foundations of Frontend',
    description: 'Students ship a responsive layout with React and Tailwind.',
    duration: '1 week',
    status: 'Live',
  },
  {
    title: 'API Storytelling',
    description: 'Learners integrate the Odin API and visualize insights.',
    duration: '10 days',
    status: 'Draft',
  },
  {
    title: 'Career Sprint',
    description: 'Prepare portfolios and match with industry mentors.',
    duration: '2 weeks',
    status: 'Planned',
  },
]

export default function Quests() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Curate the journey</h1>
        <p className="text-slate-600">
          Manage multi-week quests that combine content, checkpoints, and live instruction for every cohort.
        </p>
      </header>

      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">Quest library</h2>
          <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
            Create quest
          </button>
        </div>
        <p className="text-sm text-slate-500">
          Import from templates or build from scratch. Drag and drop modules, embed videos, and attach worksheets.
        </p>
        <ul className="divide-y divide-slate-200 text-sm text-slate-600">
          {quests.map((quest) => (
            <li key={quest.title} className="flex flex-wrap items-center justify-between gap-4 py-4">
              <div className="space-y-1">
                <p className="text-base font-semibold text-slate-900">{quest.title}</p>
                <p>{quest.description}</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">{quest.status}</span>
                <span>{quest.duration}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Built for iteration</h3>
          <p className="mt-3 text-sm text-slate-600">
            Duplicate and remix quests without breaking history. Odin keeps previous versions so instructors can roll back
            whenever they experiment.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Connected to progress</h3>
          <p className="mt-3 text-sm text-slate-600">
            Track quest completion in the dashboard and trigger nudges or mentor invites automatically.
          </p>
        </article>
      </section>
    </div>
  )
}
