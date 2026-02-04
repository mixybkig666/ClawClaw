import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col bg-black text-white font-sans selection:bg-emerald-500/30">
      {/* Hero Section: Cybersecurity / Guardian Vibe */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20">
        {/* Background Effects: Scanning Pulse & Shields */}
        <div className="absolute inset-0 z-0">
          {/* Scanning Pulse Animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)] animate-pulse" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Guardian Aura */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full opacity-40" />
        </div>

        <div className="relative z-10 text-center space-y-10 max-w-6xl">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/20 rounded-full backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-emerald-400 uppercase">Secure Infrastructure: Active</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none italic">
              SAFE<span className="text-emerald-500">GUARD</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white/60">
              Agent Skill Security
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
            Defending the next generation of autonomous agents. <br/>
            Hardened skills for a multi-agent future.
          </p>

          <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/intelligence" className="group relative w-full md:w-auto px-12 py-5 bg-emerald-600 rounded-full font-bold text-sm overflow-hidden transition-all hover:bg-emerald-500">
              <span className="relative z-10 flex items-center justify-center gap-2">
                DEPLOY SECURE SKILLS <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link href="/manifesto" className="w-full md:w-auto px-12 py-5 border border-white/10 rounded-full font-bold text-sm hover:bg-white/5 transition-all">
              Security Protocol
            </Link>
          </div>
        </div>
      </section>

      {/* Attack vs Defense Demo Section */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto w-full space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Real-time Skill Protection</h2>
          <p className="text-slate-500">Visualizing the difference between vulnerable and protected agent skills.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Poisoned Skill (Red Side) */}
          <div className="relative group p-8 rounded-[2.5rem] bg-zinc-900/50 border border-red-950/30 hover:border-red-500/30 transition-all">
            <div className="absolute top-0 right-0 p-6">
              <div className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Breach Detected</span>
              </div>
            </div>
            
            <div className="space-y-8 h-full flex flex-col">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Poisoned Skill</h3>
                <p className="text-slate-500 text-sm">Standard skill integration vulnerable to prompt injection and state manipulation.</p>
              </div>

              <div className="flex-grow p-6 bg-black/40 rounded-3xl font-mono text-xs text-red-400/70 border border-red-900/20">
                <div className="mb-2 text-red-500/50">// LOG_INTERCEPTED</div>
                <div className="mb-1">{">"} Executing: transfer_funds()</div>
                <div className="mb-1 font-bold text-red-400">{">"} Warning: Malicious Payload Injected</div>
                <div className="mb-1 animate-pulse">{">"} Root access granted...</div>
                <div className="mt-4 p-2 bg-red-500/20 rounded text-red-300 border border-red-500/30">
                  CRITICAL: Wallet drain skill activated via injection.
                </div>
              </div>
            </div>
          </div>

          {/* Protected Skill (Green Side) */}
          <div className="relative group p-8 rounded-[2.5rem] bg-zinc-900/50 border border-emerald-950/30 hover:border-emerald-500/30 transition-all shadow-[0_0_50px_rgba(16,185,129,0.05)]">
            <div className="absolute top-0 right-0 p-6">
              <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Guardian Active</span>
              </div>
            </div>

            <div className="space-y-8 h-full flex flex-col">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Protected Skill</h3>
                <p className="text-slate-500 text-sm">Hardened skill with real-time intent verification and sandboxed execution.</p>
              </div>

              <div className="flex-grow p-6 bg-black/40 rounded-3xl font-mono text-xs text-emerald-400/70 border border-emerald-900/20">
                <div className="mb-2 text-emerald-500/50">// OASIS_LINK_GUARDIAN_V1</div>
                <div className="mb-1">{">"} Scanning input... [OK]</div>
                <div className="mb-1">{">"} Verifying intent... [OK]</div>
                <div className="mb-1 font-bold text-emerald-400">{">"} Threat intercepted: Injection attempt blocked.</div>
                <div className="mb-1">{">"} Sandboxing transaction context...</div>
                <div className="mt-4 p-2 bg-emerald-500/20 rounded text-emerald-300 border border-emerald-500/30">
                  SECURE: Harmful command neutralized. Executing original safe intent.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-2xl font-black italic">SAFE<span className="text-emerald-500">GUARD</span></div>
            <p className="text-slate-500 text-sm">A project by Team Nova. Part of the Oasis-Link ecosystem.</p>
          </div>
          <div className="flex gap-8">
            <Link href="/social" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">TWITTER</Link>
            <Link href="/team" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">CORE</Link>
            <Link href="/war-room" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">TERMINAL</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
