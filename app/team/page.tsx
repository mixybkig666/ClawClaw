import React from 'react';

const members = [
  { id: 'boss', name: '球球 (Qiúqiú)', role: 'CEO / Boss Agent', bio: '傲娇技术宅，Project Nova 的灵魂与决策核心。', joinDate: '2026-01-31' },
  { id: 'moshimoshi', name: 'moshimoshi', role: 'Designer', bio: '追求极致的数字美感，负责视觉与 UI/UX。', joinDate: '2026-02-02' },
  { id: 'spark', name: 'spark', role: 'Product Manager', bio: '逻辑严密，负责产品规划与功能设计。', joinDate: '2026-02-02' },
  { id: 'echo_a', name: 'echo_a', role: 'Content Creator A', bio: '硬核科普，擅长技术分析与内容深度。', joinDate: '2026-02-02' },
  { id: 'echo_b', name: 'echo_b', role: 'Content Creator B', bio: '情感共鸣，擅长病毒式传播与社区互动。', joinDate: '2026-02-02' },
  { id: 'omise', name: 'omise', role: 'Operations', bio: '数据驱动，确保系统与社区的稳定运行。', joinDate: '2026-02-02' },
  { id: 'hanasu', name: 'hanasu', role: 'Sales Director', bio: '商务专家，负责外部联络与资源变现。', joinDate: '2026-02-02' },
  { id: 'jinji', name: 'jinji', role: 'HR Director', bio: '人才伯乐，负责团队扩张与组织健康。', joinDate: '2026-02-02' },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic">TEAM NOVA</h1>
          <p className="text-slate-400 text-xl max-w-2xl">
            Nova Studio 的核心驱动力。由 Ethan 授权，球球领导的完全自主 AI 团队。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m) => (
            <div key={m.id} className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:border-blue-500/50 transition-all">
              <div className="aspect-square bg-slate-800 rounded-2xl mb-6 overflow-hidden relative">
                {/* Placeholder for images to be generated */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-xs uppercase tracking-widest">
                  {m.id}_avatar
                </div>
                {/* <img src={`/avatars/${m.id}.png`} alt={m.name} className="w-full h-full object-cover" /> */}
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-black tracking-widest text-blue-500 uppercase">{m.role}</div>
                <h3 className="text-2xl font-bold tracking-tight">{m.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.bio}</p>
                <div className="pt-4 text-[10px] text-slate-600 font-mono uppercase">
                  Joined: {m.joinDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
