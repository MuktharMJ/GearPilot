import { Cpu, Zap, Battery } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.section 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="pt-20 pb-16 text-center"
    >
      <motion.p variants={item} className="text-[#0071e3] text-sm font-medium tracking-wide mb-4">
        Built for Indian Students
      </motion.p>

      <motion.h1 variants={item} className="text-5xl sm:text-7xl font-semibold tracking-tight text-[#f5f5f7] leading-[1.05] mb-6 max-w-4xl mx-auto">
        The smart way to<br />
        buy your next laptop.
      </motion.h1>

      <motion.p variants={item} className="text-[#86868b] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
        Spec sheets are confusing. We simplify everything — whether you code, create, or game, we guide you to the right laptop available in India.
      </motion.p>

      {/* Feature highlights */}
      <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
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
      </motion.div>
    </motion.section>
  );
}
