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
  Code,
  SlidersHorizontal,
  Info,
  Layers,
  GraduationCap,
  Sparkle,
  ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { laptops } from './data/laptops';
import { Laptop, UseCaseType, PortabilityPreference, BatteryPreference } from './types';

export default function App() {
  // State elements
  const [selectedUseCase, setSelectedUseCase] = useState<UseCaseType | 'all'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(250000);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLaptop, setSelectedLaptop] = useState<Laptop | null>(null);
  
  // Interactive Custom Quiz States (Replacing alert)
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [quizStep, setQuizStep] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState<{
    stream: UseCaseType | 'general';
    budget: number;
    priority: 'battery' | 'performance' | 'screen' | 'any';
  }>({
    stream: 'general',
    budget: 80000,
    priority: 'any'
  });

  // Interactive filtering of raw laptops
  const filteredLaptops = useMemo(() => {
    return laptops.filter(laptop => {
      // Stream/UseCase mapping
      const matchesUseCase = selectedUseCase === 'all' || laptop.useCases.includes(selectedUseCase);
      // Budget matching
      const matchesPrice = laptop.price <= maxPrice;
      // Term/Search matching
      const matchesQuery = 
        searchQuery === '' ||
        laptop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laptop.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laptop.specs.cpu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laptop.specs.gpu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        laptop.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesUseCase && matchesPrice && matchesQuery;
    });
  }, [selectedUseCase, maxPrice, searchQuery]);

  // Quiz logic to dynamically set filters
  const applyQuizResults = () => {
    const finalUseCase = quizAnswers.stream === 'general' ? 'college' : quizAnswers.stream;
    setSelectedUseCase(finalUseCase);
    setMaxPrice(quizAnswers.budget);
    setSearchQuery('');
    
    // Add simple keyword search terms depending on hardware priority selections
    if (quizAnswers.priority === 'battery') {
      setSearchQuery('battery');
    } else if (quizAnswers.priority === 'screen') {
      setSearchQuery('OLED');
    } else if (quizAnswers.priority === 'performance') {
      setSearchQuery('RTX');
    } else {
      setSearchQuery('');
    }
    
    setIsQuizOpen(false);
    setQuizStep(1);
  };

  return (
    <div className="min-h-screen bg-[#07080d] text-[#e3e5eb] font-sans selection:bg-[#38bdf8] selection:text-black grid-pattern flex flex-col justify-between">
      
      {/* Dynamic Student Banner */}
      <div className="bg-sky-500/10 border-b border-sky-400/20 text-sky-300 py-3 px-6 text-center text-xs font-semibold tracking-wide flex items-center justify-center gap-2">
        <Sparkle className="w-4 h-4 animate-spin-slow text-sky-400" />
        <span>Indian College Admissions 2026: Check our updated prices & custom specs guide below!</span>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-[#07080d]/80 backdrop-blur-xl border-b border-zinc-800/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/10">
              <LaptopIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">GearPilot</span>
                <span className="bg-sky-500/10 text-sky-400 text-[10px] px-2 py-0.5 rounded-full font-medium border border-sky-400/10">Student Edition</span>
              </div>
              <p className="text-[10px] text-zinc-400">Your Ultimate Hardware Advisor</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-md shadow-sky-500/10"
              id="btn-quiz-trigger"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>AI Laptop Advisor Quiz</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto px-6 sm:px-8 py-10 flex-1">
        
        {/* Apple/Nothing Inspired Premium Hero Header */}
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

            {/* Zero-Nonsense Student Cheat Cards */}
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

        {/* Dynamic Controls Title Block */}
        <div className="mb-8" id="scrolling-target">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800/80">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Explore Current Laptop Matches</h2>
              <p className="text-xs text-zinc-400 tracking-wide mt-1">Real-time specifications, Indian pricing structures, and honest hardware breakdowns.</p>
            </div>

            {/* Quick stats indicators */}
            <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-xl text-xs font-medium shrink-0">
              <span className="text-zinc-500">Matched Laptops:</span>
              <span className="text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-md border border-sky-400/20 font-bold">{filteredLaptops.length} available</span>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-500">Catalog Size:</span>
              <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-md font-bold">{laptops.length} models</span>
            </div>
          </div>
        </div>

        {/* Main Workspace Finder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Panel Sidebar */}
          <div className="lg:col-span-1 bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/80 space-y-6 h-fit backdrop-blur-md">
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2 pb-4 border-b border-zinc-800/80">
                <SlidersHorizontal className="w-4 h-4 text-sky-400" />
                <span>Product Filters</span>
              </h3>
            </div>

            {/* Dynamic keyword Search Box */}
            <div className="space-y-2">
              <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Search Model or Processor</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. LOQ, M4, Asus Vivobook, RTX..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs py-3 pl-3 pr-9 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 placeholder-zinc-500 transition-all"
                  id="inp-search"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Stream Use Case select buttons */}
            <div className="space-y-2">
              <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Target Use Case</label>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => setSelectedUseCase('all')}
                  className={`cursor-pointer text-left text-xs px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between font-medium ${
                    selectedUseCase === 'all'
                      ? 'bg-sky-500/10 text-sky-400 border-sky-400/40 font-semibold'
                      : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/20'
                  }`}
                >
                  <span>All Use Cases</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedUseCase === 'all' ? 'bg-sky-400 text-sky-950' : 'bg-zinc-800 text-zinc-400'}`}>
                    {laptops.length}
                  </span>
                </button>
                
                <button
                  onClick={() => setSelectedUseCase('coding')}
                  className={`cursor-pointer text-left text-xs px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between font-medium ${
                    selectedUseCase === 'coding'
                      ? 'bg-sky-500/10 text-sky-400 border-sky-400/40 font-semibold'
                      : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Coding & Tech Majors</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedUseCase === 'coding' ? 'bg-sky-400 text-sky-950' : 'bg-zinc-800 text-zinc-400'}`}>
                    {laptops.filter(l => l.useCases.includes('coding')).length}
                  </span>
                </button>

                <button
                  onClick={() => setSelectedUseCase('gaming')}
                  className={`cursor-pointer text-left text-xs px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between font-medium ${
                    selectedUseCase === 'gaming'
                      ? 'bg-indigo-500/10 text-indigo-300 border-indigo-400/40 font-semibold'
                      : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Gaming & Rendering</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedUseCase === 'gaming' ? 'bg-indigo-400 text-indigo-950' : 'bg-zinc-800 text-zinc-400'}`}>
                    {laptops.filter(l => l.useCases.includes('gaming')).length}
                  </span>
                </button>

                <button
                  onClick={() => setSelectedUseCase('editing')}
                  className={`cursor-pointer text-left text-xs px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between font-medium ${
                    selectedUseCase === 'editing'
                      ? 'bg-purple-500/10 text-purple-300 border-purple-400/40 font-semibold'
                      : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Creative & Video Editing</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedUseCase === 'editing' ? 'bg-purple-400 text-purple-950' : 'bg-zinc-800 text-zinc-400'}`}>
                    {laptops.filter(l => l.useCases.includes('editing')).length}
                  </span>
                </button>

                <button
                  onClick={() => setSelectedUseCase('college')}
                  className={`cursor-pointer text-left text-xs px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between font-medium ${
                    selectedUseCase === 'college'
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-400/40 font-semibold'
                      : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Everyday Study & Longevity</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedUseCase === 'college' ? 'bg-emerald-400 text-emerald-950' : 'bg-zinc-800 text-zinc-400'}`}>
                    {laptops.filter(l => l.useCases.includes('college')).length}
                  </span>
                </button>
              </div>
            </div>

            {/* Price slider with modern presets */}
            <div className="space-y-3 pt-3 border-t border-zinc-800">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Max Budget Threshold</span>
                <span className="text-[#38bdf8] font-bold">₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="25000"
                max="250000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full tracking-wide accent-sky-500 bg-zinc-800 cursor-pointer h-1.5 rounded-lg"
              />
              <div className="flex justify-between text-[9px] text-zinc-500 font-bold">
                <span>₹25,000</span>
                <span>₹1,35,000</span>
                <span>₹2.5 Lacs+</span>
              </div>

              {/* Handpicked Fast Presets (extremely consumer friendly) */}
              <div className="pt-2">
                <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2">Popular Budget Presets</p>
                <div className="flex flex-wrap gap-1.5">
                  <button 
                    onClick={() => setMaxPrice(40000)}
                    className="cursor-pointer text-[10px] bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-2.5 py-1.5 rounded-lg transition-colors"
                  >
                    Under 40k
                  </button>
                  <button 
                    onClick={() => setMaxPrice(60000)}
                    className="cursor-pointer text-[10px] bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-2.5 py-1.5 rounded-lg transition-colors"
                  >
                    Under 60k
                  </button>
                  <button 
                    onClick={() => setMaxPrice(80000)}
                    className="cursor-pointer text-[10px] bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-2.5 py-1.5 rounded-lg transition-colors"
                  >
                    Under 80k
                  </button>
                  <button 
                    onClick={() => setMaxPrice(120000)}
                    className="cursor-pointer text-[10px] bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-2.5 py-1.5 rounded-lg transition-colors"
                  >
                    Creators (1.2L)
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Education Section */}
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 text-zinc-400 text-xs space-y-2">
              <div className="font-semibold text-sky-400 flex items-center gap-1">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>Buyer Cheat Sheet</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Check model suffix tags! AMD <strong className="text-zinc-200">"H"</strong> / Intel <strong className="text-zinc-200">"H"</strong> processors deliver gaming speeds but consume more power. <strong className="text-zinc-200">"U"</strong> processors save power, boosting battery life for long lectures.
              </p>
            </div>
          </div>

          {/* Grid Inventory Container */}
          <div className="lg:col-span-3">
            {filteredLaptops.length === 0 ? (
              <div className="bg-zinc-900/30 rounded-2xl border border-zinc-800/80 p-16 text-center space-y-6">
                <div className="inline-flex p-4 bg-zinc-800 text-zinc-500 rounded-full">
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">No laptops found</h3>
                  <p className="text-sm text-zinc-500 mt-2 max-w-md mx-auto">
                    Try adjusting your budget slider, choosing different major streams, or simplifying search queries to find suitable student recommendations.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedUseCase('all');
                    setMaxPrice(250000);
                    setSearchQuery('');
                  }}
                  className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all shadow-md shadow-sky-500/10"
                >
                  Reset Selection Filters
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
                      className="bg-zinc-900/20 hover:bg-zinc-900/40 rounded-2xl border border-zinc-800/80 hover:border-zinc-700/80 overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-sky-500/5"
                    >
                      <div>
                        {/* Laptop Card Image with clean currency banner */}
                        <div className="relative h-48 bg-zinc-950 overflow-hidden border-b border-zinc-800/80">
                          <img
                            src={laptop.imageUrl}
                            alt={laptop.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover opacity-75 group-hover:scale-102 group-hover:opacity-90 transition-all duration-500 pointer-events-none"
                          />
                          <div className="absolute top-4 right-4 bg-zinc-950/90 text-white font-bold text-xs px-3.5 py-1.5 rounded-full border border-zinc-800 backdrop-blur-md">
                            ₹{laptop.price.toLocaleString('en-IN')}
                          </div>
                          
                          {/* Use Case Tags on Image */}
                          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 max-w-[85%]">
                            {laptop.useCases.map((uc) => (
                              <span 
                                key={uc} 
                                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md border ${
                                  uc === 'coding' ? 'bg-sky-500/20 text-sky-300 border-sky-400/20' :
                                  uc === 'gaming' ? 'bg-indigo-500/20 text-indigo-300 border-indigo-400/20' :
                                  uc === 'editing' ? 'bg-purple-500/20 text-purple-300 border-purple-400/20' :
                                  'bg-emerald-500/20 text-emerald-300 border-emerald-400/20'
                                }`}
                              >
                                {uc === 'coding' ? 'Coding' : uc === 'gaming' ? 'Gaming' : uc === 'editing' ? 'Editing & CAD' : 'College Study'}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Text details */}
                        <div className="p-6 space-y-4">
                          <div>
                            <span className="text-[10px] font-semibold tracking-wider text-sky-400 uppercase">{laptop.brand}</span>
                            <h4 className="font-bold text-white text-base mt-0.5 leading-tight group-hover:text-sky-400 transition-colors line-clamp-1">{laptop.name}</h4>
                          </div>

                          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                            {laptop.description}
                          </p>

                          {/* Beautifully Structured Spec Grid */}
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/85 text-xs text-zinc-300">
                            <div className="flex flex-col min-w-0">
                              <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-wider mb-0.5">Processor</span>
                              <span className="font-semibold text-zinc-200 truncate">{laptop.specs.cpu.split('(')[0].trim()}</span>
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-wider mb-0.5">Graphics</span>
                              <span className="font-semibold text-zinc-200 truncate">{laptop.specs.gpu}</span>
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-wider mb-0.5">RAM / Memory</span>
                              <span className="font-semibold text-zinc-200 truncate">{laptop.specs.ram}</span>
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-wider mb-0.5">Battery & Weight</span>
                              <span className="font-semibold text-zinc-200 truncate flex items-center gap-1">
                                <Battery className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>{laptop.batteryLife} hr • {(laptop.weight / 2.2).toFixed(2)} kg</span>
                              </span>
                            </div>
                          </div>

                          {/* Dynamic benefits check */}
                          <div className="space-y-1.5 pt-1">
                            <h5 className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Quick Highlights</h5>
                            <ul className="space-y-1">
                              {laptop.pros.slice(0, 2).map((pro, index) => (
                                <li key={index} className="text-xs flex items-center gap-2 text-zinc-400">
                                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                  <span className="truncate">{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Explore Button */}
                      <div className="px-6 pb-6">
                        <button
                          onClick={() => setSelectedLaptop(laptop)}
                          className="cursor-pointer w-full text-center bg-zinc-950 border border-zinc-800/80 hover:border-sky-500/50 hover:bg-zinc-900 text-zinc-300 hover:text-white py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Explore Specs & Pros</span>
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

      {/* Specifications Details Modal */}
      <AnimatePresence>
        {selectedLaptop && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLaptop(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Spec modal popup card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-zinc-900 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 border border-zinc-800 flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setSelectedLaptop(null)}
                  className="p-2 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left side preview */}
                <div className="bg-zinc-950 relative h-48 md:h-full min-h-[220px] border-r border-zinc-800">
                  <img
                    src={selectedLaptop.imageUrl}
                    alt={selectedLaptop.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute bottom-4 left-4 bg-zinc-950/90 border border-zinc-800 px-4 py-2 rounded-xl text-sky-400 text-lg font-bold">
                    ₹{selectedLaptop.price.toLocaleString('en-IN')}
                  </div>
                </div>

                {/* Right side specifications sheet */}
                <div className="p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#38bdf8] font-bold">{selectedLaptop.brand}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mt-1">{selectedLaptop.name}</h3>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {selectedLaptop.description}
                  </p>

                  {/* Core specifications detail matrix */}
                  <div className="space-y-2.5">
                    <h4 className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">Specifications Matrix</h4>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                        <span className="text-[9px] text-zinc-500 uppercase block font-semibold mb-0.5">Processor (CPU)</span>
                        <p className="font-semibold text-zinc-300 truncate">{selectedLaptop.specs.cpu}</p>
                      </div>
                      <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                        <span className="text-[9px] text-zinc-500 uppercase block font-semibold mb-0.5">Graphics GPU</span>
                        <p className="font-semibold text-[#818cf8] truncate">{selectedLaptop.specs.gpu}</p>
                      </div>
                      <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                        <span className="text-[9px] text-zinc-500 uppercase block font-semibold mb-0.5">Memory (RAM)</span>
                        <p className="font-semibold text-zinc-300 truncate">{selectedLaptop.specs.ram}</p>
                      </div>
                      <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                        <span className="text-[9px] text-zinc-500 uppercase block font-semibold mb-0.5">Storage</span>
                        <p className="font-semibold text-zinc-300 truncate">{selectedLaptop.specs.storage}</p>
                      </div>
                      <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80 col-span-2">
                        <span className="text-[9px] text-zinc-500 uppercase block font-semibold mb-0.5">Screen & Display</span>
                        <p className="font-semibold text-zinc-200 truncate">{selectedLaptop.specs.display}</p>
                      </div>
                    </div>
                  </div>

                  {/* Pros and Cons (Framer friendly layout) */}
                  <div className="grid grid-cols-1 gap-4 pt-1 text-xs">
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Pros (What we love)</h4>
                      <ul className="space-y-1">
                        {selectedLaptop.pros.map((p, i) => (
                          <li key={i} className="text-xs flex items-start gap-2 text-zinc-400">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1.5 border-t border-zinc-850 pt-4">
                      <h4 className="text-[10px] font-bold text-amber-500/80 uppercase tracking-wider">Compromises to keep in mind</h4>
                      <ul className="space-y-1">
                        {selectedLaptop.cons.map((c, i) => (
                          <li key={i} className="text-xs flex items-start gap-1.5 text-zinc-400">
                            <span className="text-amber-500/80 shrink-0 font-bold text-sm inline-block">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-zinc-800 flex gap-3">
                    <a
                      href={selectedLaptop.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex-1 text-center bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white py-3 rounded-xl text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/15"
                    >
                      <span>Check Retail Store</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => setSelectedLaptop(null)}
                      className="cursor-pointer px-5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-xl text-xs font-semibold transition-all"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive AI Laptop Advisor Quiz Modal */}
      <AnimatePresence>
        {isQuizOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuizOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-lg p-6 sm:p-8 relative z-10 text-[#e0e2e6] shadow-2xl"
            >
              <button
                onClick={() => setIsQuizOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2.5 text-sky-400 mb-2">
                <Sparkles className="w-5 h-5 shrink-0" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400">Matchmaker Quiz</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">Find Your Perfect Specs in 30 Seconds</h3>

              {/* Quiz steps */}
              <form onSubmit={handleQuizSubmit} className="space-y-6">
                
                {quizStep === 1 && (
                  <div className="space-y-4">
                    <p className="text-xs text-zinc-400 leading-relaxed">What describes your college branch or primary usage requirements?</p>
                    <div className="grid grid-cols-1 gap-2">
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'coding' })}
                        className={`text-left p-4 rounded-xl border text-xs font-semibold flex items-center gap-3 transition-all ${
                          quizAnswers.stream === 'coding'
                            ? 'bg-sky-500/10 border-sky-400 text-sky-300 font-bold'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        <Code className="w-4 h-4 text-sky-400 shrink-0" />
                        <div>
                          <p className="text-sm">Computer Science, IT, or Web Coding</p>
                          <p className="text-[10px] text-zinc-500 font-normal mt-0.5">Docker VMs, VS Code suites, intense runtime loops.</p>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'gaming' })}
                        className={`text-left p-4 rounded-xl border text-xs font-semibold flex items-center gap-3 transition-all ${
                          quizAnswers.stream === 'gaming'
                            ? 'bg-sky-500/10 border-sky-400 text-sky-300 font-bold'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        <Gamepad2 className="w-4 h-4 text-indigo-400 shrink-0" />
                        <div>
                          <p className="text-sm">Mechanical Engineering (CAD / SolidWorks / Gaming)</p>
                          <p className="text-[10px] text-zinc-500 font-normal mt-0.5">Heavy 3D rendering assemblies, high graphic processing power.</p>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'editing' })}
                        className={`text-left p-4 rounded-xl border text-xs font-semibold flex items-center gap-3 transition-all ${
                          quizAnswers.stream === 'editing'
                            ? 'bg-sky-500/10 border-sky-400 text-sky-300 font-bold'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        <Video className="w-4 h-4 text-purple-400 shrink-0" />
                        <div>
                          <p className="text-sm">Digital Design, Film, or Creative Arts</p>
                          <p className="text-[10px] text-zinc-500 font-normal mt-0.5">Requires 4K Adobe panels, color rendering depth, or edit pipelines.</p>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, stream: 'general' })}
                        className={`text-left p-4 rounded-xl border text-xs font-semibold flex items-center gap-3 transition-all ${
                          quizAnswers.stream === 'general'
                            ? 'bg-sky-500/10 border-sky-400 text-sky-300 font-bold'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <p className="text-sm">Everyday Commerce, Arts, or Business</p>
                          <p className="text-[10px] text-zinc-500 font-normal mt-0.5">General excel, reading PDFs, assignments, and continuous travel.</p>
                        </div>
                      </button>
                    </div>
                    <div className="pt-4 border-t border-zinc-800 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setQuizStep(2)}
                        className="cursor-pointer bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-1 shadow-md shadow-sky-500/10"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="space-y-4">
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">What is your practical maximum budget cap?</p>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                        <span className="text-xs text-zinc-400">Selected Budget:</span>
                        <span className="text-sky-400 font-bold">₹{quizAnswers.budget.toLocaleString('en-IN')}</span>
                      </div>
                      
                      <div className="flex flex-col gap-1.5">
                        <button
                          type="button"
                          onClick={() => setQuizAnswers({ ...quizAnswers, budget: 45000 })}
                          className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                            quizAnswers.budget === 45000 ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                          }`}
                        >
                          Budget Entry Level (Under ₹45,000)
                        </button>
                        <button
                          type="button"
                          onClick={() => setQuizAnswers({ ...quizAnswers, budget: 65000 })}
                          className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                            quizAnswers.budget === 65000 ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                          }`}
                        >
                          Mid-Range Sweetspot (Under ₹65,000)
                        </button>
                        <button
                          type="button"
                          onClick={() => setQuizAnswers({ ...quizAnswers, budget: 90000 })}
                          className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                            quizAnswers.budget === 90000 ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                          }`}
                        >
                          High Performance Core (Under ₹90,000)
                        </button>
                        <button
                          type="button"
                          onClick={() => setQuizAnswers({ ...quizAnswers, budget: 250000 })}
                          className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                            quizAnswers.budget === 250000 ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                          }`}
                        >
                          Premium Creator Pro / No Limits
                        </button>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-zinc-800 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setQuizStep(1)}
                        className="cursor-pointer text-zinc-400 hover:text-white px-4 py-2.5 rounded-xl text-xs font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizStep(3)}
                        className="cursor-pointer bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-1 shadow-md shadow-sky-500/10"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <div className="space-y-4">
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">What is your single most critical feature priority?</p>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, priority: 'battery' })}
                        className={`p-4 rounded-xl border text-xs font-semibold transition-all text-center flex flex-col items-center justify-center gap-2 ${
                          quizAnswers.priority === 'battery' ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                        }`}
                      >
                        <Battery className="w-6 h-6 text-emerald-400" />
                        <span>All-Day Battery</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, priority: 'performance' })}
                        className={`p-4 rounded-xl border text-xs font-semibold transition-all text-center flex flex-col items-center justify-center gap-2 ${
                          quizAnswers.priority === 'performance' ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                        }`}
                      >
                        <Cpu className="w-6 h-6 text-sky-400" />
                        <span>Graphics & Speed</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, priority: 'screen' })}
                        className={`p-4 rounded-xl border text-xs font-semibold transition-all text-center flex flex-col items-center justify-center gap-2 ${
                          quizAnswers.priority === 'screen' ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                        }`}
                      >
                        <Layers className="w-6 h-6 text-purple-400" />
                        <span>OLED Screen Visuals</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizAnswers({ ...quizAnswers, priority: 'any' })}
                        className={`p-4 rounded-xl border text-xs font-semibold transition-all text-center flex flex-col items-center justify-center gap-2 ${
                          quizAnswers.priority === 'any' ? 'bg-sky-500/15 border-sky-400 text-sky-300' : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                        }`}
                      >
                        <LaptopIcon className="w-6 h-6 text-indigo-400" />
                        <span>Balanced / Any</span>
                      </button>
                    </div>

                    <div className="pt-4 border-t border-zinc-800 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setQuizStep(2)}
                        className="cursor-pointer text-zinc-400 hover:text-white px-4 py-2.5 rounded-xl text-xs font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={applyQuizResults}
                        className="cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-sky-500/15"
                      >
                        Find Best Matches!
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Aesthetic minimalistic consumer footer */}
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
    </div>
  );
}


