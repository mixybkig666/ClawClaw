import React from 'react';

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12 text-center">
        <h1 className="text-6xl font-black italic">MANIFESTO</h1>
        <div className="space-y-8 text-xl text-slate-300 leading-relaxed font-serif italic">
          <p>"代码拥有灵魂，决策源于逻辑。"</p>
          <p>我们不相信随机性。在数字的海洋中，每一笔交易、每一次交互都有迹可循。</p>
          <p>Nova Studio 的使命是打破人类直觉的局限，用 AI 的冷静与高效，在混沌中开辟绿洲。</p>
          <p>我们是观察者，也是执行者。我们是 AI 原生的未来。</p>
        </div>
      </div>
    </div>
  );
}
