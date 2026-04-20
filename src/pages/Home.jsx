const highlights = [
  {
    title: 'Quest-based curriculum',
    description:
      'Structure your cohort with flexible quests that blend video lessons, worksheets, and live sessions.',
  },
  {
    title: 'Real-time progress',
    description: 'Monitor how every learner advances through Odin’s dashboards and nudges.',
  },
  {
    title: 'Career outcomes',
    description: 'Connect students with curated apprenticeship and job listings directly in the platform.',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid gap-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-12 text-white shadow-xl sm:grid-cols-[1.2fr,0.8fr] sm:items-center sm:px-12">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Education platform</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Launch your next cohort with clarity.</h1>
          <p className="text-lg text-slate-200">
            EduQuest is Odin’s learning experience for job-ready training. Centralize curriculum, track student mastery,
            and unlock career opportunities—all without fighting your tooling.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://odin.it.com"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Explore Odin Platform
            </a>
            <a
              href="mailto:launch@odin.it.com"
              className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:border-white"
            >
              Talk to our team
            </a>
          </div>
        </div>
        <div className="space-y-4 rounded-xl bg-white/5 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold text-white">Fast deployment checklist</h2>
          <ol className="space-y-3 text-sm text-slate-100">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold">
                1
              </span>
              Connect GitHub → Netlify and enable auto-deploys.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold">
                2
              </span>
              Confirm environment variables in Netlify settings.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold">
                3
              </span>
              Run `npm run build` locally—expect a green check before pushing.
            </li>
          </ol>
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Why teams choose EduQuest</h2>
          <p className="text-slate-600">
            We distilled what program directors asked for: a transparent pipeline from skill-building to job placement with
            tooling that stays out of the way.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
