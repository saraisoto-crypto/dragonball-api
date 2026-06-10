import { Button } from '@/components/ui/button'
import characters from '@/lib/characters'
import './HomePage.css'
import { Zap, Flame, Star, Sparkles, Sword, Zap as Lightning, Skull } from 'lucide-react'

export default function HomePage() {
  const featured = characters.filter(c => c.featured)
  const others = characters.filter(c => !c.featured)

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* FONDO ÉPICO CON MÚLTIPLES CAPAS */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Gradientes de base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-black"></div>
        
        {/* Blur épicos */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/30 blur-3xl rounded-full opacity-50"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-600/30 blur-3xl rounded-full opacity-50"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/20 blur-3xl rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-600/20 blur-3xl rounded-full opacity-50"></div>
        
        {/* Grid animado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* HERO SECTION ÉPICA */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-7xl mx-auto">
          {/* Efecto de luces */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-yellow-500/20 to-transparent blur-3xl"></div>
          </div>

          {/* Badge superior épico */}
          <div className="mb-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border-2 border-yellow-400/50 backdrop-blur-sm hover:border-yellow-400 transition-all">
            <Flame className="w-6 h-6 text-yellow-300 animate-bounce" />
            <span className="text-yellow-200 font-black text-lg">⚡ MULTIVERSO DE PODER SUPREMO ⚡</span>
            <Lightning className="w-6 h-6 text-orange-300 animate-pulse" />
          </div>

          {/* Título MASIVO */}
          <h1 className="text-9xl md:text-10xl font-black mb-8 leading-none">
            <span className="block bg-gradient-to-r from-yellow-200 via-orange-400 to-red-600 bg-clip-text text-transparent animate-title-glow drop-shadow-2xl">
              🐉 DRAGON 🐉
            </span>
            <span className="block bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-title-glow drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
              BALL Z ⚡
            </span>
          </h1>

          {/* Sub-título épico */}
          <p className="text-3xl md:text-4xl text-gray-200 mb-6 font-bold">
            LOS GUERREROS MÁS PODEROSOS DEL MULTIVERSO
          </p>
          <p className="text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-semibold">
            Descubre transformaciones épicas, técnicas devastadoras y batallas legendarias que cambiarán el destino del universo
          </p>

          {/* Botones ÉPICOS */}
          <div className="flex gap-8 justify-center flex-wrap mb-20">
            <Button className="group px-12 py-10 text-2xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 text-black hover:shadow-2xl hover:shadow-yellow-500/70 hover:scale-110 transition-all duration-300 border-2 border-yellow-200">
              <Sparkles className="w-8 h-8 mr-3 group-hover:animate-spin" />
              EXPLORAR GUERREROS AHORA
            </Button>
            <Button className="group px-12 py-10 text-2xl font-black border-3 border-orange-400 text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
              <Star className="w-8 h-8 mr-3 group-hover:animate-pulse" />
              VER TORNEO DEL PODER
            </Button>
          </div>

          {/* Indicador scroll épico */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="text-orange-300 font-bold text-lg mb-3">↓ DESPLÁZATE PARA DESCUBRIR ↓</div>
            <div className="w-8 h-14 border-3 border-orange-500/70 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SEPARADORA ÉPICA */}
      <div className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center gap-8 text-4xl font-black text-orange-400/50">
          <Zap /> ⚡ ⚡ ⚡ <Zap />
        </div>
      </div>

      {/* GUERREROS DESTACADOS - SECCIÓN ÉPICA */}
      <section className="py-40 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Título sección */}
          <div className="text-center mb-32">
            <div className="inline-flex items-center gap-4 mb-8">
              <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
              <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-yellow-300 to-orange-600 bg-clip-text text-transparent">
                LEYENDAS SUPREMAS
              </h2>
              <Zap className="w-12 h-12 text-red-500 animate-pulse" />
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <Flame className="w-10 h-10 text-orange-500" />
              <p className="text-3xl text-gray-300 font-bold">Los 3 Seres Más Poderosos</p>
              <Flame className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          {/* Tarjetas gigantes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {featured.map((char, idx) => (
              <div
                key={char.id}
                className="group relative epic-card-massive rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                {/* Fondo con gradiente épico */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
                
                {/* Efecto glow extremo */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    idx === 0 ? 'from-yellow-500/40' : idx === 1 ? 'from-purple-500/40' : 'from-red-500/40'
                  } to-transparent`}></div>
                </div>

                {/* Border ultra glow */}
                <div className="absolute inset-0 border-3 border-transparent group-hover:border-orange-400/70 rounded-3xl transition-colors duration-500 glow-border"></div>

                {/* Contenido */}
                <div className="relative h-full p-12 flex flex-col justify-between">
                  {/* Número épico */}
                  <div className="text-9xl font-black text-orange-600/30 group-hover:text-orange-500/50 transition-colors duration-500 leading-none mb-8">
                    #{idx + 1}
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-6xl font-black text-white mb-4 group-hover:text-yellow-300 transition-colors">
                      {char.name}
                    </h3>
                    <p className="text-3xl text-orange-400 font-black mb-6">{char.role}</p>
                    <p className="text-gray-200 mb-8 line-clamp-3 text-xl leading-relaxed font-semibold">{char.bio}</p>

                    {/* Poder ÉPICO */}
                    <div className="mb-8">
                      <div className="flex justify-between mb-4">
                        <span className="text-gray-300 text-2xl font-black">⚡ PODER ⚡</span>
                        <span className="text-4xl font-black text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text">{char.power}%</span>
                      </div>
                      <div className="w-full h-6 bg-slate-700/50 rounded-full overflow-hidden border-2 border-orange-500/50">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-1000 glow-power"
                          style={{ width: `${char.power}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Técnicas épicas */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {char.techniques.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-gradient-to-r from-orange-500/30 to-red-500/30 text-orange-200 rounded-lg text-sm font-black border-2 border-orange-500/50 hover:border-orange-300 transition-all">
                          🔥 {tech}
                        </span>
                      ))}
                    </div>

                    {/* Badge raza */}
                    <div className="inline-block px-5 py-2 bg-yellow-500/20 text-yellow-300 rounded-lg font-black border-2 border-yellow-500/50 text-lg">
                      👽 {char.race}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN SEPARADORA 2 */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>
        <div className="relative text-center">
          <h2 className="text-5xl font-black text-red-400 drop-shadow-2xl">
            ⚡ HAY MÁS GUERREROS ESPERÁNDOTE ⚡
          </h2>
        </div>
      </div>

      {/* TODOS LOS GUERREROS - GRID ÉPICO */}
      <section className="py-40 px-4 bg-gradient-to-b from-transparent via-orange-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-black text-white mb-6 drop-shadow-2xl">
              GALERÍA COMPLETA DE COMBATIENTES
            </h2>
            <p className="text-3xl text-gray-300 font-bold">Todos los guerreros disponibles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {others.map((char, idx) => (
              <div
                key={char.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border-3 border-slate-700 hover:border-orange-500/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Fondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-orange-500/20 to-transparent transition-opacity duration-500"></div>

                {/* Contenido */}
                <div className="relative p-8 h-full flex flex-col justify-between">
                  {/* Header */}
                  <div>
                    <h3 className="text-3xl font-black text-white mb-3 group-hover:text-yellow-300 transition-colors">{char.name}</h3>
                    <p className="text-xl text-orange-400 font-bold mb-3">{char.role}</p>
                    <span className="inline-block px-4 py-2 bg-slate-700/70 text-yellow-300 rounded-lg text-sm font-black hover:bg-slate-600 transition-colors">
                      {char.race}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 text-sm mb-5 line-clamp-2 leading-relaxed font-semibold">{char.bio}</p>

                  {/* Poder */}
                  <div className="mb-6">
                    <div className="flex justify-between mb-3 text-lg font-bold">
                      <span className="text-gray-300">⚡ Poder:</span>
                      <span className="text-orange-400">{char.power}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden border-2 border-orange-500/50">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-600 transition-all duration-500"
                        style={{ width: `${char.power}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Técnicas */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {char.techniques.slice(0, 2).map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-red-500/30 text-red-300 rounded-lg border border-red-500/50 font-black">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <Button className="w-full py-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white font-black text-lg hover:shadow-lg hover:shadow-orange-500/60 transition-all transform group-hover:scale-105">
                    VER DETALLES
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL ÉPICA */}
      <section className="py-40 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-orange-600/30 via-red-600/30 to-yellow-600/30 border-4 border-orange-500/70 rounded-3xl p-20 backdrop-blur-md hover:border-orange-400 transition-all duration-500 relative overflow-hidden">
            {/* Glow background */}
            <div className="absolute inset-0 -z-10 opacity-50">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl"></div>
            </div>

            <h2 className="text-8xl font-black text-white mb-8 drop-shadow-2xl">
              ¿LISTO PARA EL TORNEO DEL PODER?
            </h2>
            <p className="text-4xl text-gray-100 mb-12 font-bold leading-relaxed">
              Únete a los guerreros más fuertes del multiverso y demuestra tu poder supremo
            </p>
            <Button className="px-16 py-12 text-3xl font-black bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 text-black hover:shadow-2xl hover:shadow-orange-500/70 hover:scale-125 transition-all duration-300 border-3 border-yellow-200">
              <Skull className="w-10 h-10 mr-4" />
              COMENZAR TORNEO AHORA
            </Button>
          </div>
        </div>
      </section>

      {/* Footer épico */}
      <footer className="border-t-4 border-orange-500/50 py-16 px-4 text-center bg-gradient-to-b from-transparent to-black/50">
        <p className="text-3xl font-black text-white mb-4 drop-shadow-2xl">© 2024 DRAGON BALL UNIVERSE</p>
        <p className="text-xl text-orange-300 font-bold">Hecho con ⚡ PASIÓN por el multiverso Dragon Ball ⚡</p>
      </footer>
    </div>
  )
}
