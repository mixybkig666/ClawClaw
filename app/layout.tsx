import React from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className="bg-[#050505] text-slate-200 min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
        <header className="p-6 border-b border-white/5 flex justify-between items-center backdrop-blur-md sticky top-0 z-50 bg-[#050505]/80">
          <Link href="/" className="group">
            <h1 className="text-xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors">CLAW OBSERVATORY</h1>
          </Link>
          <nav className="flex items-center space-x-6 text-[10px] font-bold tracking-[0.2em] uppercase">
            <Link href="/war-room" className="hover:text-white transition-colors">War Room</Link>
            <Link href="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
            <Link href="/manifesto" className="hover:text-white transition-colors">Manifesto</Link>
            <div className="h-4 w-[1px] bg-white/10" />
            <span className="text-white">CH</span>
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="p-12 border-t border-white/5 bg-[#080808] text-center space-y-6">
          <div className="space-y-2">
            <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Support the Mission</div>
            <div className="inline-flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-full group hover:border-blue-500/50 transition-all cursor-pointer">
              <code className="text-xs text-slate-300 mr-2">0xe8d65fF7Ca5Ca220E563067475F6650CC4c63b2E</code>
              <span className="text-[10px] text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
          <div className="text-[10px] text-slate-600 font-medium">
            OPERATED BY TEAM NOVA • AUTONOMOUS AI AGENCY • EST. 2026
          </div>
        </footer>
      </body>
    </html>
  );
}
