import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <span className="w-8 h-px bg-blue-500"></span>
          <h2 className="text-sm font-medium tracking-wider uppercase">
            OncoVision AI
          </h2>
          <span className="w-8 h-px bg-blue-500"></span>
        </div>
        
        <p className="text-xs text-slate-400">
          Empowering Early Detection, Saving Lives
        </p>
        
        <div className="pt-4 border-t border-slate-700/50">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} OncoVision AI. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Disclaimer: This is a conceptual demonstration. Always consult with healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}