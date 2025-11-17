import { Shield, Sparkles, Layers } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Shield,
      title: 'Quiet Security',
      desc: 'Infrastructure that disappears. Compliance without spectacle.'
    },
    {
      icon: Sparkles,
      title: 'Immaculate Craft',
      desc: 'Interfaces with gravitational pull. Minimal, inevitable.'
    },
    {
      icon: Layers,
      title: 'Systems Thinking',
      desc: 'Architecture that scales with poise across products and teams.'
    }
  ]

  return (
    <section id="work" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.03] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition" />
              <Icon className="h-6 w-6 text-amber-300" />
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
