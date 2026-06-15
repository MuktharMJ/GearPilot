import { useSearchParams, useNavigate } from 'react-router-dom';
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
    <div className="min-h-screen bg-[#07080d] text-[#e3e5eb] font-sans selection:bg-[#38bdf8] selection:text-black grid-pattern flex flex-col justify-between">
      <Header onOpenQuiz={() => navigate('/')} />

      <main className="max-w-7xl w-full mx-auto px-6 sm:px-8 py-10 flex-1 animate-fade-in">
        <button 
          onClick={() => navigate('/')}
          className="cursor-pointer inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 group transition-colors bg-zinc-900/40 border border-zinc-800/80 px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Results
        </button>

        <div className="mb-8 border-b border-zinc-800/80 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Head-to-Head Comparison</h1>
          <p className="text-xs text-zinc-400 tracking-wide mt-2">Side-by-side spec breakdown of your selected models.</p>
        </div>

        {compareLaptops.length === 0 ? (
          <div className="bg-zinc-900/30 rounded-3xl border border-zinc-800/80 p-16 text-center space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex p-4 bg-zinc-800/50 text-zinc-500 rounded-full">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">No laptops selected</h2>
              <p className="text-sm text-zinc-500 mt-2">
                You haven't selected any models to compare. Go back to the homepage and select up to 3 laptops.
              </p>
            </div>
            <button 
              onClick={() => navigate('/')} 
              className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all shadow-md shadow-sky-500/10"
            >
              Return to Catalog
            </button>
          </div>
        ) : (
          <div className="bg-zinc-900/20 rounded-3xl border border-zinc-800/80 overflow-hidden backdrop-blur-md shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-6 w-1/4 border-b border-r border-zinc-800/80 bg-zinc-950/50">
                      <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Specifications</span>
                    </th>
                    {compareLaptops.map(laptop => (
                      <th key={laptop.id} className="p-6 border-b border-r border-zinc-800/80 align-top w-1/4 min-w-[280px] bg-zinc-900/40 relative group">
                        <button 
                          onClick={() => {
                            const newIds = ids.filter(id => id !== laptop.id);
                            navigate(`/compare?ids=${newIds.join(',')}`);
                          }}
                          className="absolute top-4 right-4 bg-red-500/10 text-red-400 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-5 border border-zinc-700/50 shadow-lg bg-zinc-950">
                          <img src={laptop.imageUrl} alt={laptop.name} className="w-full h-full object-cover opacity-80" />
                          <div className="absolute top-2 right-2 bg-zinc-950/90 text-white font-bold text-[10px] px-2.5 py-1 rounded-md border border-zinc-800 backdrop-blur-md">
                            ₹{laptop.price.toLocaleString('en-IN')}
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold tracking-wider text-sky-400 uppercase">{laptop.brand}</span>
                        <h3 className="text-base font-bold text-white leading-tight mt-1">{laptop.name}</h3>
                      </th>
                    ))}
                    {/* Fill empty columns if less than 3 selected */}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <th key={`empty-head-${i}`} className="p-6 border-b border-r border-zinc-800/80 align-top w-1/4 min-w-[280px] bg-zinc-950/30">
                        <div className="flex flex-col items-center justify-center h-full text-zinc-600 gap-3">
                          <div className="w-12 h-12 rounded-full border border-dashed border-zinc-700 flex items-center justify-center">
                            <span className="text-xl">+</span>
                          </div>
                          <span className="text-xs font-semibold">Add Model</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-xs text-zinc-300">
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="p-6 font-semibold text-zinc-400 uppercase tracking-wider border-b border-r border-zinc-800/50 bg-zinc-950/30">Processor</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-6 border-b border-r border-zinc-800/50 font-medium text-white">{laptop.specs.cpu}</td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-cpu-${i}`} className="p-6 border-b border-r border-zinc-800/50 bg-zinc-950/30"></td>
                    ))}
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="p-6 font-semibold text-zinc-400 uppercase tracking-wider border-b border-r border-zinc-800/50 bg-zinc-950/30">Graphics</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-6 border-b border-r border-zinc-800/50 font-medium text-white">{laptop.specs.gpu}</td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-gpu-${i}`} className="p-6 border-b border-r border-zinc-800/50 bg-zinc-950/30"></td>
                    ))}
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="p-6 font-semibold text-zinc-400 uppercase tracking-wider border-b border-r border-zinc-800/50 bg-zinc-950/30">Memory</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-6 border-b border-r border-zinc-800/50 font-medium text-white">{laptop.specs.ram}</td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-ram-${i}`} className="p-6 border-b border-r border-zinc-800/50 bg-zinc-950/30"></td>
                    ))}
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="p-6 font-semibold text-zinc-400 uppercase tracking-wider border-b border-r border-zinc-800/50 bg-zinc-950/30">Storage</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-6 border-b border-r border-zinc-800/50 font-medium text-white">{laptop.specs.storage}</td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-storage-${i}`} className="p-6 border-b border-r border-zinc-800/50 bg-zinc-950/30"></td>
                    ))}
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="p-6 font-semibold text-zinc-400 uppercase tracking-wider border-b border-r border-zinc-800/50 bg-zinc-950/30">Display</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-6 border-b border-r border-zinc-800/50 font-medium text-white">{laptop.specs.display}</td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-display-${i}`} className="p-6 border-b border-r border-zinc-800/50 bg-zinc-950/30"></td>
                    ))}
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="p-6 font-semibold text-zinc-400 uppercase tracking-wider border-b border-r border-zinc-800/50 bg-zinc-950/30">Battery & Weight</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-6 border-b border-r border-zinc-800/50">
                        <span className="text-emerald-400 font-semibold">{laptop.batteryLife} hours</span>
                        <span className="text-zinc-500 mx-2">•</span>
                        <span className="text-zinc-300 font-medium">{(laptop.weight / 2.2).toFixed(2)} kg</span>
                      </td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-battery-${i}`} className="p-6 border-b border-r border-zinc-800/50 bg-zinc-950/30"></td>
                    ))}
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="p-6 font-semibold text-zinc-400 uppercase tracking-wider border-b border-r border-zinc-800/50 bg-zinc-950/30 align-top">Highlights</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-6 border-b border-r border-zinc-800/50 align-top">
                        <ul className="space-y-2">
                          {laptop.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-300">
                              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-pros-${i}`} className="p-6 border-b border-r border-zinc-800/50 bg-zinc-950/30"></td>
                    ))}
                  </tr>
                  <tr className="hover:bg-zinc-800/20 transition-colors">
                    <td className="p-6 font-semibold text-zinc-400 uppercase tracking-wider border-r border-zinc-800/50 bg-zinc-950/30 align-top">Drawbacks</td>
                    {compareLaptops.map(laptop => (
                      <td key={laptop.id} className="p-6 border-r border-zinc-800/50 align-top">
                        <ul className="space-y-2">
                          {laptop.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-zinc-300">
                              <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                    {Array.from({ length: 3 - compareLaptops.length }).map((_, i) => (
                      <td key={`empty-cons-${i}`} className="p-6 border-r border-zinc-800/50 bg-zinc-950/30"></td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
