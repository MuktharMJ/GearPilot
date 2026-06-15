import { Cpu, Zap, Battery } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 text-center">
      <p className="text-[#0071e3] text-sm font-medium tracking-wide mb-4">
        Built for Indian Students
      </p>

      <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-[#f5f5f7] leading-[1.05] mb-6 max-w-4xl mx-auto">
        The smart way to<br />
        buy your next laptop.
      </h1>

      <p className="text-[#86868b] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
        Spec sheets are confusing. We simplify everything — whether you code, create, or game, we guide you to the right laptop available in India.
      </p>

      {/* Feature highlights */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center">
            <Cpu className="w-5 h-5 text-[#86868b]" />
          </div>
          <span className="text-[13px] font-medium text-[#f5f5f7]">Coding & Tech</span>
          <span className="text-[11px] text-[#6e6e73]">16 GB RAM, i5 or Ryzen 5</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center">
            <Zap className="w-5 h-5 text-[#86868b]" />
          </div>
          <span className="text-[13px] font-medium text-[#f5f5f7]">CAD & Gaming</span>
          <span className="text-[11px] text-[#6e6e73]">Dedicated GPU, RTX chips</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center">
            <Battery className="w-5 h-5 text-[#86868b]" />
          </div>
          <span className="text-[13px] font-medium text-[#f5f5f7]">Travel & Study</span>
          <span className="text-[11px] text-[#6e6e73]">Under 1.6 kg, 8+ hours</span>
        </div>
      </div>
    </section>
  );
}
