import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import Download from './components/Download'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Download />
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Bite AI. All rights reserved.
      </footer>
    </div>
  )
}

export default App
