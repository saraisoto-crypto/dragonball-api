import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "API pública",
    description: "Los datos se obtienen directamente desde PokéAPI.",
  },
  {
    title: "Diseño",
    description: "Colores suaves, tarjetas limpias y estilo amigable.",
  },
  {
    title: "Componentes shadcn",
    description: "Se usan Card, Button, Input y Badge en la interfaz.",
  },
]

export function Features() {
  return (
    <section className="grid gap-6 px-6 pb-16 md:grid-cols-3">
      {features.map((feature) => (
        <Card key={feature.title} className="border-pink-200 bg-white/80">
          <CardHeader>
            <CardTitle className="text-pink-600">{feature.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}