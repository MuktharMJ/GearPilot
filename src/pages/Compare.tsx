import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Check, X, ShieldAlert } from 'lucide-react';
import { laptops } from '../data/laptops';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Compare() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ids = searchParams.get('ids')?.split(',') || [];

  const compareLaptops = ids.map(id => laptops.find(l => l.id === id)).filter(Boolean) as typeof laptops;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="min-h-screen bg-black text-[#f5f5f7] font-sans flex flex-col justify-between"
    >
      <Header onOpenQuiz={() => navigate('/')} />

      <main className="max-w-[1200px] w-full mx-auto px-6 py-8 flex-1">
        <button 
          onClick={() => navigate('/')}
          className="cursor-pointer inline-flex items-center gap-2 text-[#0071e3] hover:text-[#0077ed] mb-8 group transition-colors text-[13px] font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Results
        </button>

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#f5f5f7] tracking-tight">
            Compare models.
          </h1>
          <p className="text-[14px] text-[#86868b] mt-1">Side-by-side spec breakdown.</p>
        </div>

        {compareLaptops.length === 0 ? (
          <div className="glass-panel rounded-3xl p-16 text-center space-y-5 max-w-2xl mx-auto">
            <div className="inline-flex p-4 bg-white/[0.06] text-[#6e6e73] rounded-full">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#f5f5f7]">No laptops selected</h2>
              <p className="text-[14px] text-[#86868b] mt-2">
                Go back and select up to 3 laptops to compare.
              </p>
            </div>
            <button 
              onClick={() => navigate('/')} 
              className="active:scale-95 cursor-pointer bg-[#0071e3] hover:bg-[#0077ed] text-white text-[13px] font-medium px-6 py-2.5 rounded-full transition-all"
            >
              Return to Catalog
            </button>
          </div>
        ) : (
          <div className="glass-panel rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-6 w-1/4 border-b border-r border-white/[0.06] bg-white/[0.02]">
                      <span className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-widest">Specs</span>
                    </th>
                    {compareLaptops.map(laptop => (
                      <th key={laptop.id} className="p-6 border-b border-r border-white/[0.06] align-top w-1/4 min-w-[260px] relative group">
                        <button 
                          onClick={() => {
                            const newIds = ids.filter(id => id !== laptop.id);
                            navigate(`/compare?ids=${newIds.join(',')}`);
                          }}
                          className="active:scale-95 absolute top-4 right-4 bg-white/[0.06] text-[#86868b] p-1.5 rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-500/20 hover:text-red-400 transition-all cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-white/[0.06] bg-black">
                          <img src={laptop.imageUrl} alt={laptop.name} className="w-full h-full object-cover opacity-75" />
                          <div className="absolute top-2 right-2 bg-black/70 text-[#f5f5f7] font-semibold text-[11px] px-2.5 py-1 rounded-full backdrop-blur-md">
                            ₹{laptop.price.toLocaleString('en-IN')}
                          </div>
                        </div>
                        <span className="text-[10px] font-medium tracking-wider text-[#86868b] uppercase">{laptop.brand}</span>
                        <h3 className="text-[14px] font-semibold text-[#f5f5f7] leading-tight mt-0.5">{laptop.name}</h3>
                      </th>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <th key={`empty-head-${i}`} className="p-6 border-b border-r border-white/[0.06] align-top w-1/4 min-w-[260px] bg-white/[0.01]">
                        <div className="flex flex-col items-center justify-center h-full text-[#6e6e73] gap-2">
                          <div className="w-10 h-10 rounded-full border border-dashed border-white/[0.12] flex items-center justify-center">
                            <span className="text-lg">+</span>
                          </div>
                          <span className="text-[12px] font-medium">Add Model</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[13px] text-[#f5f5f7]">
                  {[
                    { label: 'Processor', getter: (l: typeof laptops[0]) => l.specs.cpu },
                    { label: 'Graphics', getter: (l: typeof laptops[0]) => l.specs.gpu },
                    { label: 'Memory', getter: (l: typeof laptops[0]) => l.specs.ram },
                    { label: 'Storage', getter: (l: typeof laptops[0]) => l.specs.storage },
                    { label: 'Display', getter: (l: typeof laptops[0]) => l.specs.display },
                  ].map(({ label, getter }) => (
                    <tr key={label} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-5 font-medium text-[#86868b] text-[12px] uppercase tracking-wider border-b border-r border-white/[0.06] bg-white/[0.02]">{label}</td>
                      {compareLaptops.map(laptop => (
                        <td key={laptop.id} className="p-5 border-b border-r border-white/[0.06] font-medium">{getter(laptop)}</td>
                      ))}
                      {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                        <td key={`empty-${label}-${i}`} className="p-5 border-b border-r border-white/[0.06] bg-white/[0.01]"></td>
                      ))}
                    </tr>
                  ))}
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 font-medium text-[#86868b] text-[12px] uppercase tracking-wider border-b border-r border-white/[0.06] bg-white/[0.02]">Battery & Weight</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-5 border-b border-r border-white/[0.06]">
                        <span className="text-[#30d158] font-medium">{laptop.batteryLife} hours</span>
                        <span className="text-[#6e6e73] mx-2">·</span>
                        <span className="font-medium">{(laptop.weight / 2.2).toFixed(2)} kg</span>
                      </td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-battery-${i}`} className="p-5 border-b border-r border-white/[0.06] bg-white/[0.01]"></td>
                    ))}
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 font-medium text-[#86868b] text-[12px] uppercase tracking-wider border-b border-r border-white/[0.06] bg-white/[0.02] align-top">Highlights</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-5 border-b border-r border-white/[0.06] align-top">
                        <ul className="space-y-2">
                          {laptop.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-[#30d158] shrink-0 mt-0.5" />
                              <span className="leading-relaxed text-[#86868b]">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-pros-${i}`} className="p-5 border-b border-r border-white/[0.06] bg-white/[0.01]"></td>
                    ))}
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 font-medium text-[#86868b] text-[12px] uppercase tracking-wider border-r border-white/[0.06] bg-white/[0.02] align-top">Drawbacks</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-5 border-r border-white/[0.06] align-top">
                        <ul className="space-y-2">
                          {laptop.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <X className="w-3.5 h-3.5 text-[#ff453a] shrink-0 mt-0.5" />
                              <span className="leading-relaxed text-[#86868b]">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-cons-${i}`} className="p-5 border-r border-white/[0.06] bg-white/[0.01]"></td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </motion.div>
  );
}
