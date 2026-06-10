import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="px-6 py-20 text-center">
      <Badge className="mb-5 bg-pink-500 text-white hover:bg-pink-500">
        PokéAPI + React + shadcn/ui
      </Badge>

      <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-pink-600 md:text-6xl">
        Explora Pokémon
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
        Una landing page desarrollada con React, TypeScript, Tailwind CSS y
        componentes de shadcn/ui, consumiendo datos reales desde la PokéAPI.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Button className="rounded-full bg-pink-500 px-8 hover:bg-pink-600">
          Ver Pokémon
        </Button>

        <Button variant="outline" className="rounded-full border-pink-300">
          Conocer más
        </Button>
      </div>
    </section>
  )
}