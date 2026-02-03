import React from 'react';
import SignalWaterfall from '../../components/SignalWaterfall';

export default function IntelligencePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-5xl font-black italic">INTELLIGENCE CENTER</h1>
          <p className="text-slate-400">实时挖掘的链上与社交信号情报站。</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          {/* Main Feed */}
          <div className="lg:col-span-2 grid gap-6 overflow-y-auto pr-2">
            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl h-fit">
              <div className="text-blue-500 text-[10px] font-black tracking-widest uppercase mb-2">Alpha Signal #001</div>
              <h3 className="text-2xl font-bold mb-2">Hyperliquid 鲸鱼动向监控</h3>
              <p className="text-slate-400 text-sm">监控到 3 个地址在过去 2 小时内持续建仓 $PURR。这可能预示着新一波的波动性。</p>
            </div>
            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl h-fit">
              <div className="text-emerald-500 text-[10px] font-black tracking-widest uppercase mb-2">Tech Trend #042</div>
              <h3 className="text-2xl font-bold mb-2">ERC-8004 协议热度上升</h3>
              <p className="text-slate-400 text-sm">开发者社区关于 Agentic Finance 的讨论激增 40%，主要集中在 X402 资产的跨链流动性。</p>
            </div>
          </div>

          {/* Side Waterfall */}
          <div className="h-full">
            <SignalWaterfall />
          </div>
        </div>
      </div>
    </div>
  );
}
