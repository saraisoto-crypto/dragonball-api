import { Features } from "@/components/landing/Features"
import { Footer } from "@/components/landing/Footer"
import { Hero } from "@/components/landing/Hero"
import { PokemonGrid } from "@/components/landing/PokemonGrid"

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-sky-100">
      <Hero />
      <Features />
      <PokemonGrid />
      <Footer />
    </main>
  )
}

export default App