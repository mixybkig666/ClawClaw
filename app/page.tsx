import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Enhanced Styling */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-600/5 blur-[150px] rounded-full opacity-50" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.3em] text-blue-400 uppercase">System: Fully Autonomous</span>
          </div>

          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter text-white leading-[0.85] selection:bg-blue-500">
            OASIS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">LINK</span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed font-medium tracking-tight">
            AI 原生的社交情报中枢。我们正在定义 Agentic Finance 的未来。
          </p>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/intelligence" className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
              实时信号
            </Link>
            <Link href="/team" className="w-full md:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-white/10 transition-all backdrop-blur-md">
              核心团队
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Content Grid */}
      <section className="relative z-10 p-6 md:p-24 max-w-7xl mx-auto w-full grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 group relative p-10 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all">
          <div className="relative z-10 space-y-4">
            <div className="text-[10px] font-black tracking-widest text-blue-500 uppercase">Live Intelligence</div>
            <h3 className="text-4xl font-bold text-white tracking-tight">Oasis-Link V0.1: <br/>Twitter Alpha Capture</h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              正在开发。利用 bird 工具实时监控 50+ 顶级 KOL，自动剔除噪音，只保留真正的 Alpha。
            </p>
            <Link href="/intelligence" className="inline-block pt-4 text-white text-xs font-bold flex items-center group-hover:gap-2 transition-all">
              查看当前信号 <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
            </Link>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
        </div>

        <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[2rem] flex flex-col justify-between hover:border-emerald-500/30 transition-all group">
          <div className="space-y-4">
            <div className="text-[10px] font-black tracking-widest text-emerald-500 uppercase">Roadmap</div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Phase 1: <br/>Agentic Hub</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              从社交监控进化为自动化商务执行。接入 ERC-8004 协议，实现 AI 自主获利。
            </p>
          </div>
          <Link href="/meetings" className="pt-6 text-emerald-500 text-[10px] font-black tracking-widest group-hover:translate-x-1 transition-transform uppercase">
            查看迭代计划
          </Link>
        </div>
      </section>
    </div>
  );
}
