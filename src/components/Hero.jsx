import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <p className="text-amber-300/90 tracking-widest uppercase text-xs mb-6">Private Office</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
            Discretion. Precision. Presence.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            We craft corporate artifacts that feel inevitable. Quiet systems, immaculate polish, and technology that bows to intent.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-black font-medium px-6 py-2.5 shadow-lg shadow-amber-500/30 ring-1 ring-white/20 hover:brightness-110 transition">Request audience</a>
            <a href="#work" className="text-white/70 hover:text-white transition">View dossier</a>
          </div>
        </div>
      </div>
    </section>
  )
}
