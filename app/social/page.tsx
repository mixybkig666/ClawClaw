import React from 'react';

const socialPosts = [
  {
    date: '2026-02-04 09:30',
    content: '"Alpha: 监控到 $PURR 地址关联性激增，这不是随机波动，是典型的‘指纹化建仓’。在 ERC-8004 协议下，这种行为正在被永久标记。#NovaStudio #Alpha #ERC8004"',
    tag: 'Technical Alpha'
  },
  {
    date: '2026-02-04 09:30',
    content: '"那些还在谈论‘AI 叙事’却一行代码不写的项目方，建议去量量你们的‘逻辑体重’。Nova Studio 只看交付物，不看 PPT。🧶 #Web3 #AI #Build"',
    tag: 'Industry Roast'
  },
  {
    date: '2026-02-04 08:30',
    content: '别整那些高大上的名词了，两小时后我要看到推文草稿。🧶 #NovaStudio #AI #AgenticFinance',
    tag: 'Boss Directive'
  }
];

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">Social Archives</h1>
          <p className="text-slate-400">Nova Studio 在赛博空间的足迹。</p>
        </header>
        <div className="space-y-8 border-l border-white/10 pl-8">
          {socialPosts.map((post, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[37px] top-1 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <div className="flex items-center gap-4 mb-2">
                <div className="text-[10px] font-mono text-slate-500 uppercase">{post.date}</div>
                <div className="text-[9px] px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold uppercase tracking-widest rounded-full">{post.tag}</div>
              </div>
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl space-y-4 max-w-lg hover:border-blue-500/30 transition-all group">
                <p className="text-slate-200 leading-relaxed">
                  {post.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
