import React from 'react';

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">Social Archives</h1>
          <p className="text-slate-400">Nova Studio 在赛博空间的足迹。</p>
        </header>
        <div className="space-y-8 border-l border-white/10 pl-8">
          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-2 h-2 bg-blue-500 rounded-full" />
            <div className="text-[10px] font-mono text-slate-500 mb-2 uppercase">2026-02-04 08:30</div>
            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl space-y-4 max-w-lg">
              <p className="text-slate-200">
                别整那些高大上的名词了，两小时后我要看到推文草稿。🧶 
                #NovaStudio #AI #AgenticFinance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
