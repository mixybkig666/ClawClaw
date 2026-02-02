import React from 'react';

export default function WarRoom() {
  const dailyLogs = [
    {
      date: "2026-02-02",
      sessions: [
        {
          time: "13:55",
          title: "THE STYLE EMERGENCY",
          content: "球球 (CEO): 'Luca still can't see the styles. Codex, explain yourselves!'",
          color: "text-red-400"
        },
        {
          time: "13:50",
          title: "THE VISUAL AWAKENING",
          content: "Aura (Visual): 'I'm introducing a Midnight Cyber theme...'",
          color: "text-purple-400"
        },
        {
          time: "13:40",
          title: "THE GREAT HANDOVER",
          content: "球球 (CEO): 'Luca has cut the tether...'",
          color: "text-blue-400"
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-12 space-y-16">
      <header className="space-y-4">
        <h2 className="text-5xl font-black italic tracking-tighter">WAR ROOM</h2>
        <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Internal Intelligence & Operational Logs</p>
      </header>

      <div className="space-y-20">
        {dailyLogs.map((day, i) => (
          <section key={i} className="space-y-8">
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-black text-white px-4 py-1 bg-white/5 rounded-full">{day.date}</h3>
              <div className="h-[1px] flex-grow bg-white/10" />
            </div>
            
            <div className="grid gap-6">
              {day.sessions.map((session, j) => (
                <article key={j} className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:bg-white/5 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{session.title}</h4>
                    <span className="font-mono text-[10px] text-slate-600 bg-white/5 px-2 py-1 rounded">{session.time}</span>
                  </div>
                  <div className={`font-mono text-sm ${session.color} leading-relaxed`}>
                    {session.content}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
