import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-footer py-12 text-center">
      <div className="max-w-[980px] mx-auto px-6 flex flex-col items-center">
        <p className="text-[12px] text-[#86868b] leading-relaxed max-w-lg mb-8">
          GearPilot helps Indian college students, developers, and first-time buyers find the right laptop with curated recommendations and honest specs.
        </p>

        {/* Subtle Divider */}
        <div className="w-full h-[1px] bg-white/[0.06] mb-8 max-w-[120px]" />

        {/* Creator Attribution Section */}
        <div className="flex flex-col items-center space-y-3">
          <p className="text-[13px] font-medium text-white/80 tracking-wide">GearPilot v1</p>
          <p className="text-[12px] text-[#86868b]">Built by Mukthar M J</p>
          
          <div className="flex items-center gap-4 text-[#86868b] pt-2">
            <a 
              href="https://github.com/MuktharMJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] hover:text-white transition-all duration-300 hover:-translate-y-[1px] ease-out"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-[10px] opacity-30">•</span>
            <a 
              href="https://www.linkedin.com/in/mukthar-m-j-/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] hover:text-white transition-all duration-300 hover:-translate-y-[1px] ease-out"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <p className="text-[11px] text-[#6e6e73] mt-12">
          &copy; 2026 GearPilot
        </p>
      </div>
    </footer>
  );
}
