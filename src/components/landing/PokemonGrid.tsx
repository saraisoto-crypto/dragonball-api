import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type Pokemon = {
  id: number
  name: string
  image: string
  types: string[]
  height: number
  weight: number
}

export function PokemonGrid() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
        const data = await response.json()

        const details: Pokemon[] = await Promise.all(
          data.results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url)
            const info = await res.json()

            return {
              id: info.id,
              name: info.name,
              image: info.sprites.other["official-artwork"].front_default,
              types: info.types.map(
                (item: { type: { name: string } }) => item.type.name
              ),
              height: info.height,
              weight: info.weight,
            }
          })
        )

        setPokemons(details)
      } catch (error) {
        console.error("Error al cargar Pokémon:", error)
      } finally {
        setLoading(false)
      }
    }

    getPokemons()
  }, [])

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="px-6 pb-20">
      <div className="mx-auto mb-10 max-w-md">
        <Input
          placeholder="Buscar Pokémon cute..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-full border-pink-200 bg-white/90 text-center"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Cargando Pokémon...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              className="border-pink-200 bg-white/90 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader>
                <div className="mx-auto mb-4 flex h-40 w-40 items-center justify-center rounded-full bg-pink-100">
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="h-32 w-32 object-contain"
                  />
                </div>

                <CardTitle className="capitalize text-pink-600">
                  #{pokemon.id} {pokemon.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-center gap-2">
                  {pokemon.types.map((type) => (
                    <Badge
                      key={type}
                      variant="secondary"
                      className="capitalize bg-yellow-100 text-yellow-700"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center gap-5 text-sm text-gray-500">
                  <span>Altura: {pokemon.height}</span>
                  <span>Peso: {pokemon.weight}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}