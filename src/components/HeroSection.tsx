import { Code, Gamepad2, Battery, GraduationCap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="mb-12 rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/10 border border-zinc-800/80">
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-y-1/10 select-none">
        <GraduationCap className="w-96 h-96 text-sky-500" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-300 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold mb-6">
          <GraduationCap className="w-4 h-4 text-sky-400" />
          <span>Tailored for Engineering, Tech & General Majors</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
          The Smart Way to <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Buy Your Next Laptop</span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
          Spec sheets are needlessly confusing. We simplify everything. Whether you need to compile large code bases, render 3D CAD files, edit class project videos, or play AAA gaming titles, we guide you to real laptops available in India.
        </p>

        {/* Student Cheat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border-t border-zinc-800/85 pt-8 mt-4">
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/60 transition-all">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 mb-3">
              <Code className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-white">Coding & Tech Major</h4>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">Prioritize 16GB RAM for heavy VMs, IDEs, and local server containers. An Intel Core i5 or Ryzen 5 is ideal.</p>
          </div>
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-[#818cf8]/40 transition-all">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-white">CAD & Gaming Streams</h4>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">AutoCAD and modern games require a dedicated GPU. Look for NVIDIA RTX chips (e.g. RTX 3050 or RTX 4050/4060).</p>
          </div>
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/60 transition-all">
            <div className="w-8 h-8 rounded-lg bg-zinc-500/10 flex items-center justify-center text-zinc-400 mb-3">
              <Battery className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-white">General & Travel Basics</h4>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">Aim for thin-and-light chassis shapes under 1.6 kg and over 8+ hours of real-use battery life for running around campus.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
