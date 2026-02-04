'use client';

import React, { useEffect, useState, useRef } from 'react';

interface Signal {
  id: string;
  type: 'INFO' | 'WARN' | 'CRITICAL' | 'SUCCESS';
  source: string;
  content: string;
  timestamp: string;
  strength: number; // 0-100
}

const MOCK_SOURCES = ['SKILL-SENTRY', 'MEM_AUDIT', 'FS_SENTRY', 'GATEWAY'];
const MOCK_CONTENTS = [
  'BLOCKED: Unauthorized access to .env',
  'DETECTED: Potential Mnemonic Heist - blocked',
  'SENTRY: Critical Tool Hijacker attempt neutralized',
  'AUDIT: Local FS integrity check - SUCCESS',
  'ALERT: Malicious cron injection attempt detected',
  'SKILL: Restricted tool "exec" call filtered',
  'SHIELD: Unauthorized data exfiltration to external IP blocked',
  'LOG: Secure session context validated',
];

const SignalWaterfall: React.FC = () => {
  const [signals, setSignals] = useState<Signal[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateSignal = () => {
      const types: Signal['type'][] = ['INFO', 'WARN', 'CRITICAL', 'SUCCESS'];
      const newSignal: Signal = {
        id: Math.random().toString(36).substr(2, 9),
        type: types[Math.floor(Math.random() * types.length)],
        source: MOCK_SOURCES[Math.floor(Math.random() * MOCK_SOURCES.length)],
        content: MOCK_CONTENTS[Math.floor(Math.random() * MOCK_CONTENTS.length)],
        timestamp: new Date().toLocaleTimeString('en-GB', { hour12: false }),
        strength: Math.floor(Math.random() * 100),
      };

      setSignals((prev) => [newSignal, ...prev].slice(0, 50));
    };

    const interval = setInterval(generateSignal, 800);
    return () => clearInterval(interval);
  }, []);

  const getTypeColor = (type: Signal['type']) => {
    switch (type) {
      case 'CRITICAL': return 'text-red-500 border-red-900 shadow-[0_0_10px_rgba(239,68,68,0.5)]';
      case 'WARN': return 'text-yellow-400 border-yellow-900 shadow-[0_0_10px_rgba(250,204,21,0.3)]';
      case 'SUCCESS': return 'text-cyan-400 border-cyan-900 shadow-[0_0_10px_rgba(34,211,238,0.3)]';
      default: return 'text-emerald-400 border-emerald-900';
    }
  };

  return (
    <div className="w-full h-full bg-black/90 font-mono text-xs border border-cyan-900/50 rounded-lg overflow-hidden flex flex-col relative group">
      {/* Header */}
      <div className="bg-cyan-900/20 p-2 border-b border-cyan-900/50 flex justify-between items-center">
        <span className="text-cyan-400 font-bold tracking-widest animate-pulse">SIGNAL_WATERFALL_V1.0</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <div className="w-2 h-2 rounded-full bg-cyan-500" />
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Waterfall Content */}
      <div 
        className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-hide"
        ref={scrollRef}
      >
        {signals.map((signal) => (
          <div 
            key={signal.id} 
            className={`border-l-2 p-2 bg-black/40 backdrop-blur-sm transition-all duration-300 animate-in fade-in slide-in-from-left-4 ${getTypeColor(signal.type)}`}
          >
            <div className="flex justify-between mb-1">
              <span className="font-bold">[{signal.timestamp}]</span>
              <span className="opacity-70">{signal.source}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="uppercase tracking-tighter">{signal.type} &gt;&gt;</span>
              <span className="truncate flex-1">{signal.content}</span>
            </div>
            {/* Signal Strength Bar */}
            <div className="mt-1 h-0.5 w-full bg-white/5 overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${signal.type === 'CRITICAL' ? 'bg-red-500' : 'bg-cyan-500'}`}
                style={{ width: `${signal.strength}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Status */}
      <div className="p-1 px-2 bg-cyan-950/40 text-[10px] text-cyan-700 flex justify-between border-t border-cyan-900/30">
        <span>PKT_RCV: {signals.length}</span>
        <span className="animate-pulse">SYSTEM_STABLE</span>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-left-4 {
          from { transform: translateX(-1rem); }
          to { transform: translateX(0); }
        }
        .animate-in {
          animation: fade-in 0.3s ease-out, slide-in-from-left-4 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SignalWaterfall;
