import React from 'react'
import { Button } from '@/components/ui/button'

type Character = {
  id: number
  name: string
  role?: string
  image?: string
  bio?: string
}

export default function CharacterCard({ name, role, image, bio }: Character) {
  return (
    <article className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
      <div className="h-40 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        {role && <p className="text-sm text-muted mt-1">{role}</p>}
        {bio && <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{bio}</p>}
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm">Ver</Button>
        </div>
      </div>
    </article>
  )
}
