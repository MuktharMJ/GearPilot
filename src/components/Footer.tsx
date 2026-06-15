import { Laptop as LaptopIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-550 py-12 border-t border-zinc-900 text-center text-xs space-y-4 font-sans">
      <div className="flex justify-center items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center">
          <LaptopIcon className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-white tracking-widest text-sm uppercase">GearPilot India</span>
      </div>
      <p className="max-w-md mx-auto text-zinc-500 text-xs leading-relaxed px-4">
        Empowering college students, programmers, and first-time laptop buyers with curated, real retail recommendations and easy-to-understand specifications.
      </p>
      <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
        &copy; 2026 GearPilot &bull; Handcrafted Spec Matching Suite
      </p>
    </footer>
  );
}
