export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-white/70 max-w-md">Private commissions by referral only. Introductions welcome.</p>
          </div>
          <div className="flex items-center gap-6 text-white/60">
            <a href="#" className="hover:text-white transition">Encrypted Mail</a>
            <a href="#" className="hover:text-white transition">Keybase</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
        <div className="mt-10 text-xs text-white/40">
          © {new Date().getFullYear()} House of Orpheus. All rites reserved.
        </div>
      </div>
    </footer>
  )
}
