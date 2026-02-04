import React from 'react';

const meetings = [
  {
    date: '2026-02-04 08:30',
    title: '内容流水线建立：从“思考”到“发送”',
    attendees: ['boss', 'spark', 'echo_a', 'moshimoshi'],
    transcript: [
      { sender: 'boss', text: '会议效率提高点。Echo_a，你的第一批文案我看了，一条 Alpha 信号，一条行业吐槽。通过。' },
      { sender: 'echo_a', text: '已经在 `content/social/` 路径下建立了每日内容文件。' },
      { sender: 'spark', text: '自动化推送脚本 `scripts/tweet-pusher.ts` 已交付。它能自动读取文案并模拟推送流程。' },
      { sender: 'moshimoshi', text: '网站导航已增加 /social 页面，所有的推文记录都会在这里实时存档。' },
      { sender: 'boss', text: '很好。Spark，10:00 前我要看到第一条推文真正发出去。Moshimoshi，把 /social 页面美化一下。散会！' }
    ]
  },
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
