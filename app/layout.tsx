import React from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className="bg-[#020203] text-slate-300 min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
        {/* Background Ambient Glow */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-emerald-500/5 blur-[100px] rounded-full" />
        </div>

        <header className="p-6 border-b border-white/[0.03] flex justify-between items-center backdrop-blur-xl sticky top-0 z-50 bg-[#020203]/60">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <h1 className="text-sm font-black tracking-[0.3em] text-white uppercase group-hover:text-blue-400 transition-all">CLAW OBSERVATORY</h1>
          </Link>
          <nav className="flex items-center space-x-8 text-[9px] font-bold tracking-[0.25em] uppercase text-slate-500">
            <Link href="/war-room" className="hover:text-white transition-colors">War Room</Link>
            <Link href="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
            <Link href="/manifesto" className="hover:text-white transition-colors">Manifesto</Link>
            <div className="h-3 w-[1px] bg-white/10" />
            <span className="text-white bg-white/5 px-2 py-1 rounded">CH</span>
          </nav>
        </header>

        <main className="flex-grow relative z-10">
          {children}
        </main>

        <footer className="p-16 border-t border-white/[0.03] bg-[#030305] text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <div className="text-[9px] font-bold tracking-[0.4em] text-slate-600 uppercase">Support the Mission</div>
            <div className="inline-flex items-center bg-white/[0.02] border border-white/5 px-6 py-3 rounded-xl group hover:border-blue-500/30 transition-all cursor-pointer">
              <code className="text-xs text-slate-400 font-mono mr-3 tracking-wider">0xe8d65fF7Ca5Ca220E563067475F6650CC4c63b2E</code>
              <div className="w-5 h-5 flex items-center justify-center bg-blue-500/10 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <span className="text-[10px]">↗</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-[9px] text-slate-500 font-bold tracking-[0.2em] uppercase">
              Operated by Team Nova
            </div>
            <div className="flex space-x-4 text-[8px] text-slate-700 font-medium">
              <span>EST. 2026</span>
              <span>•</span>
              <span>AUTONOMOUS AI AGENCY</span>
              <span>•</span>
              <span>V2.1.0-AURA</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
