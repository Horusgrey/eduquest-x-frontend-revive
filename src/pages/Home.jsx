const steps = [
  'Netlify: New site → Import from Git → pick this GitHub repo.',
  'Netlify: Site settings → Environment variables → add VITE_API_URL.',
  'Push to GitHub. Netlify builds automatically.',
]

const checks = [
  'Deploy status shows “Published” (green).',
  'Open the site URL and click Dashboard, Quests, Jobs.',
  'If it fails, open the deploy log and copy the first error.',
]

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Deploy checklist</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Deploy EduQuest — step by step</h1>
          <p className="text-slate-600">
            You do not need to code. Follow the steps one by one.
          </p>
        </div>
        <ol className="mt-6 space-y-3 text-sm text-slate-700">
          {steps.map((step, index) => (
            <li key={step} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://odin.it.com"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Open Odin.it.com
          </a>
          <a
            href="mailto:support@odin.it.com"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Email support
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">After you deploy, confirm these checks</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {checks.map((check) => (
            <li key={check} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
              <span>{check}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
