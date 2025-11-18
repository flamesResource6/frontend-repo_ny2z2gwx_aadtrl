import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-inner shadow-blue-300" />
          <span className="font-semibold text-slate-900 text-lg">Bite AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">功能亮點</a>
          <a href="#philosophy" className="hover:text-slate-900 transition-colors">理念</a>
          <a href="#download" className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">立即下載</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
