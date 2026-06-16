import { Cpu, Zap, Battery, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

/* ── Shared easing: Apple-style spring-like cubic ── */
const ease = [0.25, 0.1, 0.25, 1] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;

/* ── Feature data ── */
const features = [
  { Icon: Cpu, label: 'Coding & Tech', sub: '16 GB RAM, i5 or Ryzen 5' },
  { Icon: Zap, label: 'CAD & Gaming', sub: 'Dedicated GPU, RTX chips' },
  { Icon: Battery, label: 'Travel & Study', sub: 'Under 1.6 kg, 8+ hours' },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ── 7. Section transition: fade + slide as user scrolls away ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const sectionY = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0, -40]);

  /* ── Stagger orchestrator ── */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  /* ── Base reveal item ── */
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      style={{ opacity: sectionOpacity, y: sectionY }}
      className="pt-20 pb-16 text-center relative"
    >
      {/* ── 6. Gradient glow behind heading ── */}
      <motion.div
        aria-hidden
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[480px] h-[220px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,113,227,0.08) 0%, rgba(0,113,227,0.02) 50%, transparent 80%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── Kicker ── */}
      <motion.p variants={fadeUp} className="text-[#0071e3] text-sm font-medium tracking-wide mb-4 relative z-10">
        Built for Indian Students
      </motion.p>

      {/* ── 1. Hero Heading: fade-up + scale hover (no reflow) ── */}
      <motion.h1
        variants={fadeUp}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.28, ease }}
        className="text-5xl sm:text-7xl font-semibold tracking-tight text-[#f5f5f7] leading-[1.05] mb-6 max-w-4xl mx-auto relative z-10 cursor-default"
      >
        The smart way to<br />
        buy your next laptop.
      </motion.h1>

      {/* ── 2. Hero Description: fade-in with stagger delay ── */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: easeOut, delay: 0.06 },
          },
        }}
        className="text-[#86868b] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 relative z-10"
      >
        Spec sheets are confusing. We simplify everything — whether you code, create, or game, we guide you to the right laptop available in India.
      </motion.p>

      {/* ── 4. "Find Your Match" CTA ── */}
      <motion.div variants={fadeUp} className="mb-16 relative z-10">
        <motion.a
          href="#scrolling-target"
          whileHover={{
            scale: 1.02,
            boxShadow: '0 0 20px rgba(0,113,227,0.25), 0 0 40px rgba(0,113,227,0.1)',
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease }}
          className="inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[14px] font-medium px-7 py-3 rounded-full cursor-pointer transition-colors"
        >
          Find Your Match
        </motion.a>
      </motion.div>

      {/* ── 3. Feature Icons ── */}
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 mb-12">
        {features.map(({ Icon, label, sub }) => (
          <motion.div
            key={label}
            whileHover={{
              y: -4,
              scale: 1.03,
              boxShadow: '0 8px 24px rgba(0,113,227,0.08)',
            }}
            transition={{ duration: 0.25, ease }}
            className="flex flex-col items-center gap-2 cursor-pointer select-none rounded-2xl px-4 py-3"
          >
            <motion.div
              whileHover={{ rotate: 4 }}
              transition={{ duration: 0.25, ease }}
              className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center"
            >
              <Icon className="w-5 h-5 text-[#86868b]" />
            </motion.div>
            <span className="text-[13px] font-medium text-[#f5f5f7]">{label}</span>
            <span className="text-[11px] text-[#6e6e73]">{sub}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* ── 5. Scroll Indicator ── */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col items-center gap-1.5"
      >
        <span className="text-[11px] text-[#6e6e73] tracking-wide uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-4 h-4 text-[#6e6e73]" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
