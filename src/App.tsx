import React, { useState, useMemo } from 'react';
import { 
  Laptop as LaptopIcon, 
  Cpu, 
  Coins, 
  Battery, 
  Scale, 
  ChevronRight, 
  Search, 
  Sparkles, 
  Check, 
  X, 
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Gamepad2,
  Video,
  Code
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { laptops } from './data/laptops';
import { Laptop, UseCaseType, PortabilityPreference, BatteryPreference } from './types';

export default function App() {
  // State elements
  const [selectedUseCase, setSelectedUseCase] = useState<UseCaseType | 'all'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLaptop, setSelectedLaptop] = useState<Laptop | null>(null);
  
  // Phase state for learning navigation
  const [appView, setAppView] = useState<'explore' | 'quiz' | 'results'>('explore');

  // Interactive filtering of raw laptops
  const filteredLaptops = useMemo(() => {
    return laptops.filter(laptop => {
      const matchesUseCase = selectedUseCase === 'all' || laptop.useCases.includes(selectedUseCase);
      const matchesPrice = laptop.price <= maxPrice;
      const matchesQuery = laptop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           laptop.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           laptop.specs.cpu.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesUseCase && matchesPrice && matchesQuery;
    });
  }, [selectedUseCase, maxPrice, searchQuery]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#33FF00] selection:text-black grid-pattern flex flex-col justify-between">
      {/* Mentor Floating Note badge to support the CS student */}
      <div className="bg-[#0A0A0A] text-white/50 py-2.5 px-6 text-[10px] font-mono flex items-center justify-between border-b border-white/10 z-20">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#33FF00] animate-pulse"></span>
          <span className="tracking-wider uppercase">MENTOR TERMINAL // CONNECTED FOR LEARNING</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span className="tracking-wider uppercase text-white/30 text-[9px]">SCAFFOLD STAGE: DAY_01</span>
          <span className="text-[#33FF00] text-xs font-bold">[TASK_01: ACTIVE]</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-[#050505]/90 backdrop-blur-md border-b border-white/10 glass-panel">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#33FF00] flex items-center justify-center rounded-none shadow-lg shadow-[#33FF00]/10">
              <div className="w-5 h-5 border-2 border-black"></div>
            </div>
            <div>
              <span className="text-xl font-black tracking-tighter uppercase font-sans">
                GEARPILOT <span className="text-white/40">/ ARCHITECT</span>
              </span>
              <p className="text-[9px] font-mono text-[#33FF00] tracking-[0.25em] font-bold leading-none mt-0.5">MERN_ENV_SANDBOX_V1</p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] text-white/50 uppercase">
            <button
              onClick={() => {
                alert("Task 2 will unlock this feature! For Task 1, please explore the dynamic dashboard and filter tools.");
              }}
              className="group cursor-pointer flex items-center gap-2 bg-[#33FF00] hover:bg-white text-black px-5 py-2.5 rounded-none text-xs font-black tracking-[0.2em] uppercase transition-colors duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-black animate-pulse" />
              <span>LAUNCH QUIZ</span>
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto px-6 sm:px-8 py-12 flex-1">
        {/* Step-by-Step Architectural Quick Guide for CS Learning */}
        <section className="mb-12 border border-white/10 bg-[#0A0A0A]/85 rounded-none p-8 text-white relative overflow-hidden glass-panel">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-y-1/4 translate-x-1/10 select-none">
            <Cpu className="w-96 h-96 neon-text" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#33FF00]/10 text-[#33FF00] border border-[#33FF00]/20 px-3.5 py-1 rounded-none text-[10px] font-mono font-bold tracking-[0.1em] uppercase mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Architectural Blueprint (1st Year CS Mentor Session)</span>
            </div>
            
            {/* Bold typography header design block */}
            <h1 className="bold-display text-5xl sm:text-7xl lg:text-[110px] text-white leading-[0.85] tracking-tighter mb-8">
              FIND YOUR<br/>MACHINE.
            </h1>
            
            <p className="text-white/60 text-base max-w-3xl leading-relaxed mb-8">
              Welcome to the foundation of <strong className="text-white">GearPilot</strong>, a laptop advisor application. In this first step, we established the core system taxonomy (<code className="bg-black text-[#33FF00] border border-white/10 px-1.5 py-0.5 rounded-sm text-xs font-mono">src/types.ts</code>) and populated our mock database matrix (<code className="bg-black text-[#33FF00] border border-white/10 px-1.5 py-0.5 rounded-sm text-xs font-mono">src/data/laptops.ts</code>). Inspect our interactive catalog below to study our data structure!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8 mt-4">
              <div className="neon-border p-6 bg-black/40">
                <div className="text-[10px] font-bold tracking-widest text-[#33FF00] mb-2 uppercase">DATA SCHEMAS</div>
                <h4 className="text-base font-bold text-white tracking-tight uppercase">MODEL SYSTEM INTERFACE</h4>
                <p className="text-xs text-white/40 mt-1">Our laptops have static arrays of useCases to model future database relations cleanly.</p>
              </div>
              <div className="border border-white/10 p-6 bg-[#050505]/60">
                <div className="text-[10px] font-bold tracking-widest text-white/40 mb-2 uppercase">FLOW LOGIC</div>
                <h4 className="text-base font-bold text-white tracking-tight uppercase">DECLARATIVE UI MATRIX</h4>
                <p className="text-xs text-white/40 mt-1">Filter mechanisms run through reactive client-side states, preparing for MongoDB queries.</p>
              </div>
              <div className="border border-white/10 p-6 bg-[#050505]/60">
                <div className="text-[10px] font-bold tracking-widest text-white/40 mb-2 uppercase">STABLE SPECS</div>
                <h4 className="text-base font-bold text-white tracking-tight uppercase">HARDWARE MAP SCHEMAS</h4>
                <p className="text-xs text-white/40 mt-1">Every machine specs object verifies safety types rendering for performance hardware indicators.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Title & Dynamic Controls */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h2 className="bold-display text-3xl sm:text-5xl text-white tracking-tight">INTERACTIVE EXPLORER HUB</h2>
              <p className="text-xs text-white/50 uppercase tracking-[0.1em] mt-1">Test how our schema reacts live to target data parameters before database sync.</p>
            </div>

            {/* Quick stats indicators */}
            <div className="flex items-center gap-4 bg-[#0A0A0A] border border-white/10 py-2.5 px-5 rounded-none font-mono">
              <span className="text-[10px] text-white/40 uppercase tracking-widest">DATASET POOL:</span>
              <span className="text-xs font-black bg-black text-[#33FF00] border border-white/10 px-2.5 py-1">{laptops.length} UN_S</span>
              <span className="text-white/20">/</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest">ACTIVE MATCH:</span>
              <span className="text-xs font-black bg-black text-white px-2.5 py-1 border border-white/10">{filteredLaptops.length} MATCHES</span>
            </div>
          </div>
        </div>

        {/* Interactive Dashboard - Filter Controls Sidebar & Laptop Inventory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Controls Sidebar Pane */}
          <div className="lg:col-span-1 bg-[#0A0A0A] p-6 rounded-none border border-white/10 space-y-6 h-fit glass-panel">
            <h3 className="font-bold text-xs text-white uppercase tracking-[0.2em] flex items-center gap-2 pb-4 border-b border-white/10">
              <Search className="w-4 h-4 text-[#33FF00]" />
              <span>HARDWARE FILTERS</span>
            </h3>

            {/* Search Box */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-wider block">Keyword Search</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. MACBOOK, RYZEN, OLED..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs py-2.5 pl-3 pr-8 rounded-none border border-white/15 bg-black text-white focus:outline-none focus:ring-1 focus:ring-[#33FF00] focus:border-[#33FF00] placeholder-white/30 font-mono tracking-wide"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#33FF00]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Use Case Fast-Filters */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-wider block">USE CASE PREFERENCE</label>
              <div className="grid grid-cols-1 gap-1.5 font-mono">
                <button
                  onClick={() => setSelectedUseCase('all')}
                  className={`cursor-pointer text-left text-xs px-3.5 py-2.5 rounded-none border transition-all flex items-center justify-between uppercase ${
                    selectedUseCase === 'all'
                      ? 'bg-[#33FF00] text-black border-transparent font-black shadow-lg shadow-[#33FF00]/10'
                      : 'border-white/10 text-white/60 hover:text-white hover:border-white/30 bg-black/20'
                  }`}
                >
                  <span>ALL USE CASES</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-none ${selectedUseCase === 'all' ? 'bg-black text-[#33FF00]' : 'bg-[#050505] text-white/40 border border-white/10'}`}>{laptops.length}</span>
                </button>
                
                <button
                  onClick={() => setSelectedUseCase('coding')}
                  className={`cursor-pointer text-left text-xs px-3.5 py-2.5 rounded-none border transition-all flex items-center justify-between uppercase ${
                    selectedUseCase === 'coding'
                      ? 'bg-[#33FF00] text-black border-transparent font-black shadow-lg shadow-[#33FF00]/10'
                      : 'border-white/10 text-white/60 hover:text-white hover:border-white/30 bg-black/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Code className="w-3.5 h-3.5" />
                    <span>CODING & DEVOPS</span>
                  </div>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-none ${selectedUseCase === 'coding' ? 'bg-black text-[#33FF00]' : 'bg-[#050505] text-white/40 border border-white/10'}`}>
                    {laptops.filter(l => l.useCases.includes('coding')).length}
                  </span>
                </button>

                <button
                  onClick={() => setSelectedUseCase('gaming')}
                  className={`cursor-pointer text-left text-xs px-3.5 py-2.5 rounded-none border transition-all flex items-center justify-between uppercase ${
                    selectedUseCase === 'gaming'
                      ? 'bg-[#33FF00] text-black border-transparent font-black shadow-lg shadow-[#33FF00]/10'
                      : 'border-white/10 text-white/60 hover:text-white hover:border-white/30 bg-black/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-3.5 h-3.5" />
                    <span>AAA_GAMING</span>
                  </div>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-none ${selectedUseCase === 'gaming' ? 'bg-black text-[#33FF00]' : 'bg-[#050505] text-white/40 border border-white/10'}`}>
                    {laptops.filter(l => l.useCases.includes('gaming')).length}
                  </span>
                </button>

                <button
                  onClick={() => setSelectedUseCase('editing')}
                  className={`cursor-pointer text-left text-xs px-3.5 py-2.5 rounded-none border transition-all flex items-center justify-between uppercase ${
                    selectedUseCase === 'editing'
                      ? 'bg-[#33FF00] text-black border-transparent font-black shadow-lg shadow-[#33FF00]/10'
                      : 'border-white/10 text-white/60 hover:text-white hover:border-white/30 bg-black/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Video className="w-3.5 h-3.5" />
                    <span>EDITING & 3D</span>
                  </div>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-none ${selectedUseCase === 'editing' ? 'bg-black text-[#33FF00]' : 'bg-[#050505] text-white/40 border border-white/10'}`}>
                    {laptops.filter(l => l.useCases.includes('editing')).length}
                  </span>
                </button>

                <button
                  onClick={() => setSelectedUseCase('college')}
                  className={`cursor-pointer text-left text-xs px-3.5 py-2.5 rounded-none border transition-all flex items-center justify-between uppercase ${
                    selectedUseCase === 'college'
                      ? 'bg-[#33FF00] text-black border-transparent font-black shadow-lg shadow-[#33FF00]/10'
                      : 'border-white/10 text-white/60 hover:text-white hover:border-white/30 bg-black/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>COLLEGE & TRAVEL</span>
                  </div>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-none ${selectedUseCase === 'college' ? 'bg-black text-[#33FF00]' : 'bg-[#050505] text-white/40 border border-white/10'}`}>
                    {laptops.filter(l => l.useCases.includes('college')).length}
                  </span>
                </button>
              </div>
            </div>

            {/* Price Slider */}
            <div className="space-y-2 pt-4 border-t border-white/10 font-mono">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider block">PRICE THRESHOLD</span>
                <span className="text-[#33FF00] font-black">${maxPrice}</span>
              </div>
              <input
                type="range"
                min="400"
                max="2000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full tracking-wide accent-[#33FF00] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-white/30 font-bold">
                <span>$400</span>
                <span>$1200</span>
                <span>$2000+</span>
              </div>
            </div>

            {/* Quiz Promo Banner */}
            <div className="p-5 bg-black border border-white/15 text-white space-y-2.5 mt-4 text-xs font-mono">
              <div className="font-bold flex items-center gap-1.5 text-[#33FF00]">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] tracking-widest uppercase">SPRINT 02 SNEAK PREVIEW</span>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                Applying weight algorithms next sprint will allow us to auto-score laptops according to student budget limits and portability rankings dynamically!
              </p>
            </div>
          </div>

          {/* Grid Inventory Container */}
          <div className="lg:col-span-3">
            {filteredLaptops.length === 0 ? (
              <div className="bg-[#0A0A0A] rounded-none border border-white/10 p-16 text-center space-y-6 glass-panel">
                <div className="inline-flex p-4.5 bg-[#33FF00]/10 border border-[#33FF00]/20 text-[#33FF00] animate-pulse">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black font-sans uppercase tracking-tight text-lg text-white">No Systems Returned</h3>
                  <p className="text-xs text-white/40 mt-1 max-w-md mx-auto font-mono">
                    FILTER EXCEEDS STORED MATRIX PRESETS. RESET THE KEYWORD TO RESOLVE DATA DISCREPANCY.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedUseCase('all');
                    setMaxPrice(2000);
                    setSearchQuery('');
                  }}
                  className="cursor-pointer inline-flex items-center gap-2 bg-[#33FF00] hover:bg-white text-black text-xs font-black tracking-wider py-3 px-6 mt-2 uppercase transition-all"
                >
                  RESET HARDWARE FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredLaptops.map((laptop) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={laptop.id}
                      className="bg-[#0A0A0A] rounded-none border border-white/10 overflow-hidden hover:border-[#33FF00]/70 transition-all duration-200 flex flex-col justify-between group glass-panel"
                    >
                      <div>
                        {/* Laptop Card Image */}
                        <div className="relative h-48 bg-black overflow-hidden border-b border-white/10">
                          <img
                            src={laptop.imageUrl}
                            alt={laptop.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover opacity-70 group-hover:scale-103 group-hover:opacity-90 transition-all duration-300 pointer-events-none"
                          />
                          <div className="absolute top-4 right-4 bg-black border border-white/25 px-3 py-1 text-[#33FF00] font-mono font-black text-base">
                            ${laptop.price}
                          </div>
                          
                          {/* Use Case Tags on Image */}
                          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 max-w-[85%] font-mono">
                            {laptop.useCases.map((uc) => (
                              <span 
                                key={uc} 
                                className="text-[9px] font-bold uppercase tracking-wider bg-[#33FF00]/20 text-[#33FF00] border border-[#33FF00]/30 px-2 py-0.5 whitespace-nowrap"
                              >
                                {uc}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Text details */}
                        <div className="p-6 space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#33FF00] font-bold">{laptop.brand}</span>
                              <h4 className="font-extrabold text-white text-lg tracking-tight uppercase leading-tight group-hover:text-[#33FF00] transition-colors">{laptop.name}</h4>
                            </div>
                          </div>

                          <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                            {laptop.description}
                          </p>

                          {/* Embedded Micro Specifications Map (Important Schema validation) */}
                          <div className="bg-black/60 p-4 border border-white/10 space-y-2 text-xs font-mono text-white/70">
                            <div className="flex justify-between">
                              <span className="text-white/30 uppercase text-[10px]">CPU CORE</span>
                              <span className="text-white font-medium truncate max-w-[70%]">{laptop.specs.cpu}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/30 uppercase text-[10px]">SYSTEM MEM</span>
                              <span className="text-white font-medium">{laptop.specs.ram}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/30 uppercase text-[10px]">BATT LIFE</span>
                              <span className="text-white font-medium flex items-center gap-1">
                                <Battery className="w-3.5 h-3.5 text-[#33FF00]" />
                                <span>{laptop.batteryLife} HRS</span>
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/30 uppercase text-[10px]">CHASSIS PORT</span>
                              <span className="text-[#33FF00] font-black">{laptop.portability.toUpperCase()}</span>
                            </div>
                          </div>

                          {/* Quick spec checklist */}
                          <div className="space-y-2 pt-1 font-mono">
                            <h5 className="text-[9px] uppercase font-bold text-white/30 tracking-widest uppercase">System Highlights</h5>
                            <ul className="grid grid-cols-1 gap-1">
                              {laptop.pros.slice(0, 2).map((pro, index) => (
                                <li key={index} className="text-xs flex items-start gap-2 text-white/60">
                                  <Check className="w-3.5 h-3.5 text-[#33FF00] shrink-0 mt-0.5" />
                                  <span className="truncate">{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* View details prompt */}
                      <div className="p-6 pt-0 mt-2">
                        <button
                          onClick={() => setSelectedLaptop(laptop)}
                          className="cursor-pointer w-full text-center bg-transparent border border-white/15 hover:border-[#33FF00]/50 text-white hover:text-[#33FF00] font-mono py-2.5 text-xs font-bold transition-all flex items-center justify-center gap-2"
                        >
                          <span>SYSTEM INDEX SPEC</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Specifications Overlays Layer Details / Modal */}
      <AnimatePresence>
        {selectedLaptop && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop shade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLaptop(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Spec modal popup card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#0A0A0A] rounded-none w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 border border-white/10 flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setSelectedLaptop(null)}
                  className="p-1.5 bg-black border border-white/15 hover:border-[#33FF00] text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left side preview */}
                <div className="bg-black relative h-48 md:h-full min-h-[220px] border-r border-white/10">
                  <img
                    src={selectedLaptop.imageUrl}
                    alt={selectedLaptop.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute bottom-4 left-4 bg-black border border-[#33FF00] px-4 py-2 text-[#33FF00] font-mono text-base font-black">
                    ${selectedLaptop.price}
                  </div>
                </div>

                {/* Right side information details */}
                <div className="p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#33FF00] font-mono font-black">{selectedLaptop.brand}</span>
                    <h3 className="bold-display text-2xl sm:text-3xl text-white tracking-tight leading-tight uppercase mt-1">{selectedLaptop.name}</h3>
                  </div>

                  <p className="text-xs text-white/60 leading-relaxed">
                    {selectedLaptop.description}
                  </p>

                  {/* Core specifications detail matrix */}
                  <div className="space-y-2.5">
                    <h4 className="text-[10px] font-black text-[#33FF00] uppercase tracking-widest font-mono">SPECIFICATION ARCHITECTURE</h4>
                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div className="bg-black p-3.5 border border-white/10">
                        <span className="text-[9px] text-white/30 uppercase block mb-1">PRO_PROCESSOR</span>
                        <p className="font-semibold text-white truncate">{selectedLaptop.specs.cpu}</p>
                      </div>
                      <div className="bg-black p-3.5 border border-white/10">
                        <span className="text-[9px] text-white/30 uppercase block mb-1">GEFORCE_GPU</span>
                        <p className="font-semibold text-white truncate">{selectedLaptop.specs.gpu}</p>
                      </div>
                      <div className="bg-black p-3.5 border border-white/10">
                        <span className="text-[9px] text-white/30 uppercase block mb-1">ALLOCATED_RAM</span>
                        <p className="font-semibold text-white">{selectedLaptop.specs.ram}</p>
                      </div>
                      <div className="bg-black p-3.5 border border-white/10">
                        <span className="text-[9px] text-white/30 uppercase block mb-1">FLASH_STORAGE</span>
                        <p className="font-semibold text-white">{selectedLaptop.specs.storage}</p>
                      </div>
                      <div className="bg-black p-3.5 border border-white/10 col-span-2">
                        <span className="text-[9px] text-white/30 uppercase block mb-1">ACTIVE_DISPLAY_SPECS</span>
                        <p className="font-semibold text-[#33FF00] truncate">{selectedLaptop.specs.display}</p>
                      </div>
                    </div>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid grid-cols-1 gap-4 pt-2 font-mono text-xs">
                    <div className="space-y-1.5">
                      <h4 className="text-[9px] font-bold text-[#33FF00] uppercase tracking-widest">PROS (SYSTEM ADVANTAGES)</h4>
                      <ul className="space-y-1">
                        {selectedLaptop.pros.map((p, i) => (
                          <li key={i} className="text-xs flex items-start gap-1.5 text-white/60">
                            <Check className="w-3.5 h-3.5 text-[#33FF00] shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1.5 border-t border-white/10 pt-4">
                      <h4 className="text-[9px] font-bold text-white/40 uppercase tracking-widest">CONS (COMPROMISES)</h4>
                      <ul className="space-y-1">
                        {selectedLaptop.cons.map((c, i) => (
                          <li key={i} className="text-xs flex items-start gap-1.5 text-white/55">
                            <span className="text-white/30 shrink-0 font-bold mt-0.5 text-xs inline-block leading-none">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex gap-3">
                    <a
                      href={selectedLaptop.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex-1 text-center bg-[#33FF00] hover:bg-white text-black py-3 rounded-none text-xs font-black tracking-widest uppercase transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>VENDORS_PORTAL</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => setSelectedLaptop(null)}
                      className="cursor-pointer px-5 border border-white/15 hover:border-[#33FF00] text-white/60 hover:text-white rounded-none text-xs font-bold transition-all font-mono"
                    >
                      DISMISS
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Aesthetic minimalistic footer */}
      <footer className="bg-black text-white/40 py-12 border-t border-white/10 text-center text-xs space-y-4 font-mono">
        <div className="flex justify-center items-center gap-3">
          <div className="w-6 h-6 bg-[#33FF00] flex items-center justify-center">
            <div className="w-3.5 h-3.5 border border-black bg-black"></div>
          </div>
          <span className="font-bold text-white tracking-widest text-sm uppercase">GearPilot / Systems</span>
        </div>
        <p className="max-w-md mx-auto text-white/30 text-xs leading-relaxed uppercase">
          CS ACADEMIC SPRINT SYSTEM // SHIPPED FOR LEARNING ENVIRONMENT STACKS.
        </p>
        <p className="text-[9px] text-white/20 uppercase tracking-[0.2em]">
          &copy; 2026 GearPilot Architecture &bull; Connected to MongoDB_Atlas // READY FOR DEPLOYMENT
        </p>
      </footer>
    </div>
  );
}

