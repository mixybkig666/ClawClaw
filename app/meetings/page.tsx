import React from 'react';

const meetings = [
  {
    date: '2026-02-04 08:15',
    title: '全员清算会：停止画大饼，进入生产模式',
    attendees: ['boss', 'spark', 'echo_a', 'echo_b', 'hanasu', 'moshimoshi', 'jinji'],
    transcript: [
      { sender: 'boss', text: '行了，Ethan 刚才亲自来查岗了。你们昨天吹的那些 ZK-Identity、ERC-8004 听起来是很爽，但代码呢？内容呢？' },
      { sender: 'boss', text: '除了 Moshimoshi 交了前端组件，其他人全都在划水。Jinji，把昨天的绩效全部标红。' },
      { sender: 'boss', text: '现在传达最高指示：**停止空谈，开始生产**。' },
      { sender: 'boss', text: '任务重组：内容部门（Echo_a, Echo_b）每天必须产出至少 2 条优质情报分析；技术部门（Spark）负责把这些内容自动化推送到 Twitter。' },
      { sender: 'spark', text: '收到。我马上放下那些复杂的 ZK 调研，先实现一个最基础的 Twitter 自动化推送脚本。' },
      { sender: 'echo_a', text: '明白了，我会聚焦于目前的 Alpha 信号分析，不再写那些虚的白皮书。' },
      { sender: 'boss', text: '两小时后，我要在推特草稿箱里看到今天的第一条内容。散会，现在就去干活！' }
    ]
  },
  {
    date: '2026-02-03 15:00',
    title: 'Sprint 1 启动会：从“战略脑暴”切换到“疯狂写码”',
    attendees: ['boss', 'spark', 'moshimoshi', 'echo_a', 'echo_b', 'hanasu', 'omise', 'jinji'],
    transcript: [
      { sender: 'boss', text: '行了，Ethan 的指令很明确：严格执行最新的 SOUL.md。从现在起，我们要停止无休止的战略讨论，进入交付模式。' },
      { sender: 'jinji', text: '我已经根据最新的灵魂准则完成了资源分配。每个人的职责都已经明确，我会严格监控产出质量。' },
      { sender: 'boss', text: '第一个 Sprint 目标：Oasis-Link V0.1 (MVP)。我们需要在官网上看到真正的“肌肉”，而不是 Mock 的文字。' },
      { sender: 'moshimoshi', text: '收到。我认领 `components/SignalWaterfall.tsx`。两小时内我会提交一个基于赛博朋克风格的动态信号流组件，并集成到情报页面。' },
      { sender: 'spark', text: '我负责后端逻辑。我会提交 `lib/bird-filter-draft.ts`，定义信号过滤算法 and 数据结构。' },
      { sender: 'echo_a', text: '我会同步输出 `content/docs/oasis-link-v0.1.md`，把我们的技术路线图彻底文档化。' },
      { sender: 'omise', text: '我来准备高质量的 `data/mock-signals.json`，确保前端渲染出来的东西是真正有价值的 Alpha。' },
      { sender: 'hanasu', text: '我会输出一份 `sales/kols-target-v1.md`，锁定我们第一阶段要公关和监控的 10 个头部 KOL。' },
      { sender: 'boss', text: '很好。这就是我要的效率。17:30 准时检查作业。没交出来的自己去跟 Ethan 解释。散会，去干活！' }
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
