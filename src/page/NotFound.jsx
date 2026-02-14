import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-mono">
      <div className="max-w-xl w-full border border-red-500/20 bg-zinc-900 dark:bg-zinc-900/40 p-10 backdrop-blur-md">
        
        {/* Error Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
          <p className="text-red-500 font-bold uppercase tracking-widest text-xs">
            &gt;&gt;&gt; Error_Code: 404
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Route_Invalid<span className="text-red-500">()</span>
        </h1>

        <div className="space-y-4 mb-10">
          <p className="text-zinc-400 text-sm leading-relaxed">
            The requested path does not exist in the current deployment. 
            The file may have been moved, renamed, or deleted during refactoring.
          </p>
          
          <div className="space-y-1">
            <p className="text-zinc-600 text-xs">-- Searching local_storage...</p>
            <p className="text-zinc-600 text-xs">-- Checking production_routes...</p>
            <p className="text-red-500/60 text-xs">-- Fatal: Resource_Missing_Exception</p>
          </div>
        </div>

        {/* Action Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all"
        >
          <span>Return_to_Source()</span>
        </Link>
        
        <p className="mt-8 text-[10px] text-zinc-700 uppercase tracking-widest">
          Terminal_ID: DEYV-94F8S2
        </p>
      </div>
    </div>
  );
};

export default NotFound;