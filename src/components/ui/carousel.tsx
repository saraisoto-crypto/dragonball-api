import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, ...props }, ref) => {
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
      const items = Array.isArray(children) ? children.length : 1
      setCount(items)
    }, [children])

    const next = () => {
      setCurrent((curr) => (curr + 1) % count)
    }

    const prev = () => {
      setCurrent((curr) => (curr - 1 + count) % count)
    }

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.isArray(children)
              ? children.map((child, idx) => (
                  <div key={idx} className="min-w-full">
                    {child}
                  </div>
                ))
              : children}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

export { Carousel }
