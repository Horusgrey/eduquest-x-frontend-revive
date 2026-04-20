const jobs = [
  {
    company: 'Horus Labs',
    role: 'Frontend Apprentice',
    location: 'Remote · North America',
    tags: ['React', 'Tailwind'],
  },
  {
    company: 'Odin Fellowship',
    role: 'Learning Experience Designer',
    location: 'Hybrid · NYC',
    tags: ['Instructional Design', 'Curriculum'],
  },
  {
    company: 'Grey Industries',
    role: 'Junior Platform Engineer',
    location: 'Remote · EMEA',
    tags: ['Node', 'TypeScript'],
  },
]

export default function Jobs() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Opportunities for graduates</h1>
        <p className="text-slate-600">
          Pair every learner with apprenticeships and jobs surfaced through Odin’s employer network.
        </p>
      </header>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">Latest postings</h2>
          <button className="rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white">
            Share a role
          </button>
        </div>
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.role} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{job.company}</p>
                  <p className="text-lg font-semibold text-slate-900">{job.role}</p>
                </div>
                <span className="text-xs text-slate-500">{job.location}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {job.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Employer services</h3>
          <p className="mt-3 text-sm text-slate-600">
            Coordinate talent showcases, resume books, and interview loops in one place—without leaving the Odin admin.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Graduate tracking</h3>
          <p className="mt-3 text-sm text-slate-600">
            Automatically collect placement data and prove outcomes with dashboards your partners can trust.
          </p>
        </article>
      </section>
    </div>
  )
}
