import React from 'react';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6 font-mono">
      <div className="max-w-3xl w-full">
        
        {/* Header Status */}
        <div className="flex items-center gap-3 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-600"></span>
          </span>
          <p className="text-amber-500 font-bold tracking-widest text-sm">
            &gt;&gt;&gt; STATUS: MAINTENANCE_MODE_ACTIVE
          </p>
        </div>

        {/* Main Terminal Block */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">
            Site.rebuild<span className="text-amber-500">(</span>in_progress<span className="text-amber-500">)</span>
          </h1>

          <div className="space-y-4 mb-10">
            <p className="text-zinc-400 text-sm leading-relaxed">
              I am currently refactoring the portfolio architecture to better showcase my recent **WordPress** and **Shopify** custom builds. 
            </p>
            
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs">-- Updating core component library...</p>
              <p className="text-zinc-500 text-xs">-- Syncing new production assets...</p>
              <p className="text-zinc-500 text-xs">-- Optimizing responsive breakpoints...</p>
              <p className="text-green-500/70 text-xs">-- Success: Deployment engine initialized.</p>
            </div>
          </div>

          {/* Progress Section */}
          <div className="space-y-3">
            <div className="flex justify-between text-[10px] text-zinc-500 uppercase tracking-widest">
              <span>Compiling_Assets</span>
              <span>82%</span>
            </div>
            <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full w-[82%] transition-all duration-1000"></div>
            </div>
          </div>

          {/* Contact / Back Link */}
          <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-wrap gap-6">
             <a href="mailto:your-email@example.com" className="text-xs text-zinc-400 hover:text-white transition-colors">
               Contact_Dev()
             </a>
             <a href="https://github.com/your-username" className="text-xs text-zinc-400 hover:text-white transition-colors">
               GitHub_Archive()
             </a>
          </div>
        </div>

        {/* Footer Background text */}
        <p className="mt-6 text-[10px] text-zinc-800 uppercase tracking-[0.5em] text-center">
          DeyvTech // Production_Environment
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;