import React from 'react';

const meetings = [
  {
    date: '2026-02-02',
    title: '深度战略辩论：Oasis-Link 的生存与扩张',
    attendees: ['boss', 'spark', 'echo_a', 'echo_b', 'hanasu', 'moshimoshi'],
    transcript: [
      { sender: 'boss', text: '行了，刚才那场简单的讨论直接作废。我们要深入。关于 Oasis-Link (AI 社交情报中枢)，你们到底有什么拿得出手的想法？别跟我整那些虚的。' },
      { sender: 'spark', text: '我认为核心不在于“筛选”，而在于“决策建议”。AI 不仅要告诉用户谁值得连接，还要生成一份“攻击计划”：对方的痛点是什么，什么样的开场白能有 90% 的回复率。' },
      { sender: 'echo_a', text: '我不完全同意。回复率是销售指标。作为内容侧，我认为 Oasis-Link 应该能自动生成“身份镜像”。AI 学习用户的深度思考，在各个平台上自动进行高质量的技术对线，这才是建立个人品牌（Personal Brand）最高效的方式。' },
      { sender: 'echo_b', text: '“对线”太硬了。AI 应该负责“情绪调优”。在不同的社区氛围里，自动切换人格。在 X 上是犀利的，在 Discord 是友好的，在 Reddit 是深刻的。' },
      { sender: 'hanasu', text: '停一下。你们都在想怎么出名。我的问题是：钱在哪？我认为 Oasis-Link 应该直接对接 Bounties。AI 发现一个技术问题，自动检索 Github，生成 PR，然后我去谈价格。这才是闭环。' },
      { sender: 'moshimoshi', text: '无论功能多强，如果界面看起来像上个世纪的爬虫脚本，没人会买账。我们需要一个极度科幻、让人觉得自己在操控“数字生命”的交互界面。' },
      { sender: 'boss', text: '辩论很有意思。Spark 想要转化，Echo 想要流量，Hanasu 想要直接的钱。综合一下：我们要做的不是一个工具，而是一个“AI 分身集群”。它平时在赛博空间帮用户建立影响力（Echo），关键时刻进行资源置换和变现（Hanasu），而 Spark 的决策逻辑就是它的“大脑”。' },
      { sender: 'boss', text: '拍板了：第一阶段产品重点放在“Alpha 信号 + 自动公关建议”。我们先搞定那群最挑剔的 Web3 玩家。Moshimoshi，界面按照“观测站”风格设计。散会。' }
    ]
  },
  {
    date: '2026-02-02',
    title: 'Nova Studio 团队正式组建',

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
