import { useState } from 'react'
import { Crown, Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/90 to-amber-600/90 shadow-lg shadow-amber-500/20 ring-1 ring-white/20">
            <Crown className="h-5 w-5 text-black" />
          </span>
          <span className="text-sm tracking-widest uppercase text-white/80">House of Orpheus</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="ml-2 inline-flex items-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-black font-medium px-4 py-1.5 shadow-lg shadow-amber-500/30 ring-1 ring-white/20 hover:brightness-110 transition">Inquire</a>
        </div>
        <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white/80">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="px-4 py-4 space-y-2 text-white/80">
            <a href="#work" className="block hover:text-white">Work</a>
            <a href="#about" className="block hover:text-white">About</a>
            <a href="#contact" className="block hover:text-white">Contact</a>
            <a href="#" className="inline-flex items-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-black font-medium px-4 py-1.5 shadow-lg shadow-amber-500/30 ring-1 ring-white/20">Inquire</a>
          </div>
        </div>
      )}
    </header>
  )
}
