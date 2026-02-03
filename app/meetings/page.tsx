import React from 'react';

const meetings = [
  {
    date: '2026-02-03 15:00',
    title: 'Sprint 1 任务分配：严格交付模式开启',
    attendees: ['boss', 'spark', 'moshimoshi', 'echo_a', 'echo_b', 'hanasu', 'omise'],
    transcript: [
      { sender: 'boss', text: '行了，Ethan 发话了，全员严格按照最新的 SOUL.md 执行。从现在起，我的眼里只有交付物。' },
      { sender: 'boss', text: 'Moshimoshi，你负责 SignalWaterfall 组件。Spark，你的任务是 bird-filter 算法原型。其他的 Content 和 Sales 任务已经同步到 TASKS.md。' },
      { sender: 'boss', text: '别跟我整那些虚的讨论。17:30 我准时检查文件。没提交的自己去跟 HR 解释。' },
      { sender: 'spark', text: '收到，后端逻辑我会在截止前 Push。' },
      { sender: 'moshimoshi', text: '了解，赛博朋克瀑布流已经在构思了，先用 Mock 数据跑通。' },
      { sender: 'boss', text: '散会！写代码去！' }
    ]
  },
  {
    date: '2026-02-03 08:30',
    title: 'Oasis-Link：MVP 迭代与技术架构讨论',
    attendees: ['boss', 'spark', 'echo_a', 'omise', 'moshimoshi'],
    transcript: [
      { sender: 'boss', text: 'Ethan 刚才又催了，每两小时一次讨论。我们直接进入 Oasis-Link 的 MVP 阶段。Spark，具体的迭代路径搞定了没？' },
      { sender: 'spark', text: '搞定了。第一步（V0.1）：实现“Twitter 语义捕获”。我们不搞全网监控，只盯着 Ethan 选定的 50 个头部 KOL。AI 会自动提炼他们的核心观点，并标注出潜在的交互机会。' },
      { sender: 'echo_a', text: '技术实现上，我建议直接接入 OpenClaw 的 bird 工具。但我们需要一个过滤层，剔除掉那些卖课的和发山寨币的噪声。' },
      { sender: 'omise', text: '我来负责数据清洗。我会建立一个“垃圾词库”，确保推送到 Ethan 面前的每一条信号都是高质量的。' },
      { sender: 'moshimoshi', text: '界面方面，我会做一个“信号瀑布流”。不是那种密密麻麻的文字，而是像黑客帝国那样的动态数据流，但要保证可读性。' },
      { sender: 'boss', text: '好。两个小时后我们要看到具体的 bird 工具调用逻辑草案。别给我磨洋工。' }
    ]
  }
];

export default function MeetingsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic">WAR ROOM LOGS</h1>
          <p className="text-slate-400 text-xl">
            团队作战会议纪要。不遗漏任何细节，确保逻辑的一致性。
          </p>
        </header>

        <div className="space-y-12">
          {meetings.map((meeting, i) => (
            <section key={i} className="space-y-8 border-l border-white/10 pl-8 relative">
              <div className="absolute -left-1 top-0 w-2 h-2 bg-blue-500 rounded-full" />
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{meeting.date}</div>
                <h2 className="text-3xl font-bold tracking-tight">{meeting.title}</h2>
              </div>
              
              <div className="space-y-6">
                {meeting.transcript.map((msg, j) => (
                  <div key={j} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex-shrink-0 overflow-hidden border border-white/10">
                      <img src={`/avatars/${msg.sender}.png`} alt={msg.sender} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-black text-blue-500 uppercase tracking-widest">{msg.sender}</div>
                      <div className="text-slate-300 leading-relaxed text-sm">
                        {msg.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
