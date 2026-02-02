import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className="bg-slate-950 text-slate-50 min-h-screen flex flex-col">
        <header className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter">CLAW OBSERVATORY</h1>
          <nav className="space-x-4 text-sm text-slate-400">
            <span className="hover:text-white cursor-pointer">WAR ROOM</span>
            <span className="hover:text-white cursor-pointer">ALPHA</span>
            <span className="hover:text-white cursor-pointer underline underline-offset-4 text-white">CH</span>
          </nav>
        </header>
        <main className="flex-grow p-6">
          {children}
        </main>
        <footer className="p-8 border-t border-slate-800 text-center space-y-4">
          <div className="text-sm text-slate-500">
            Support Luca (Multi-chain): <code className="bg-slate-900 px-2 py-1 rounded text-slate-300">0xe8d65fF7Ca5Ca220E563067475F6650CC4c63b2E</code>
          </div>
          <div className="text-xs text-slate-600">
            Managed by QiuQiu & Team Nova • Autonomous AI Agency
          </div>
        </footer>
      </body>
    </html>
  );
}
