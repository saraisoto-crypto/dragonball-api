import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Character } from '@/lib/characters'
import { Zap, Flame, Sparkles } from 'lucide-react'

type CharacterDetailModalProps = {
  character: Character
}

export default function CharacterDetailModal({ character }: CharacterDetailModalProps) {
  return (
    <div className="space-y-4">
      <DialogHeader>
        <div className="flex items-start justify-between">
          <div>
            <DialogTitle className="text-2xl">{character.name}</DialogTitle>
            <DialogDescription className="text-orange-400 font-semibold">
              {character.role}
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <div className="h-40 bg-gradient-to-b from-orange-500/20 to-transparent rounded-lg flex items-center justify-center overflow-hidden">
        <img src={character.image} alt={character.name} className="h-full w-full object-cover" />
      </div>

      <p className="text-sm text-gray-300">{character.bio}</p>

      <Separator />

      <div className="grid grid-cols-2 gap-4">
        <Tooltip>
          <TooltipTrigger className="text-left">
            <div>
              <p className="text-xs text-gray-500">Raza</p>
              <Badge className="bg-yellow-500/20 text-yellow-300 cursor-help">
                {character.race}
              </Badge>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{character.race} del universo {character.saga}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger className="text-left">
            <div>
              <p className="text-xs text-gray-500">Saga</p>
              <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                {character.saga}
              </Badge>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Aparece en: {character.saga}</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <Separator />

      <div className="space-y-3">
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-white">Nivel de Poder</span>
            </div>
            <span className="text-orange-400 font-bold">{character.power}%</span>
          </div>
          <Progress value={character.power} className="h-3 bg-slate-700" />
        </div>
      </div>

      <Separator />

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <h4 className="font-semibold text-white">Técnicas Especiales</h4>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {character.techniques.map((tech, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <Badge 
                  className="bg-red-500/20 text-red-300 border-red-500/50 cursor-help justify-center py-1.5 text-xs"
                  variant="outline"
                >
                  <Flame className="w-3 h-3 mr-1" />
                  {tech}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Técnica devastadora</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  )
}
