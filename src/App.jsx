import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#0A1628]/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="font-bold text-[#0A1628] text-xl">O</span>
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tight">ODIN</div>
              <div className="text-[10px] text-white/60 -mt-1">NO DEBT. REAL SKILLS. GET HIRED.</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#explore" className="hover:text-orange-400 transition-colors">Explore Edegrees</a>
            <a href="#jobs" className="hover:text-orange-400 transition-colors">Job Board</a>
            <a href="#profile" className="hover:text-orange-400 transition-colors">Profile</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-[#0A1628] px-5 py-2 rounded-full font-medium text-sm transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-xs tracking-[3px] mb-6 border border-white/10">
          FREE • SKILL-BASED • JOB-READY
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Learn real skills.<br />
          <span className="text-orange-500">Get hired.</span><br />
          No debt.
        </h1>
        
        <p className="max-w-md mx-auto text-xl text-white/70 mb-10">
          The anti-college platform. Practical Edegrees. Real XP. Direct job pipelines.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#0A1628] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all">
            Start Learning Free
          </button>
          <button className="border border-white/30 hover:bg-white/5 px-8 py-4 rounded-2xl font-semibold text-lg transition-all">
            Browse Edegrees
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="border-y border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-500">47</div>
            <div className="text-sm text-white/60 mt-1">Edegrees Live</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500">12.4k</div>
            <div className="text-sm text-white/60 mt-1">Skills Earned</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500">891</div>
            <div className="text-sm text-white/60 mt-1">Hired This Month</div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 text-center text-white/50">
        Full platform coming live in the next deploy.<br />
        Repo is now being built out on the odin-revive-2026 branch.
      </div>
    </div>
  )
}

export default App