import hero from '../assets/hero.png'

export type Character = {
  id: number
  name: string
  role: string
  image?: string
  bio: string
  power: number
  race: string
  saga: string
  techniques: string[]
  featured?: boolean
}

const characters: Character[] = [
  { 
    id: 1, 
    name: 'Goku', 
    role: 'Guerrero Legendario', 
    image: hero, 
    bio: 'Un guerrero amable y apasionado por las batallas. El protagonista de la serie.',
    power: 95,
    race: 'Saiyan',
    saga: 'Dragon Ball Z',
    techniques: ['Kamehameha', 'Ultra Instinto', 'Genkidama'],
    featured: true
  },
  { 
    id: 2, 
    name: 'Vegeta', 
    role: 'Príncipe Saiyan', 
    image: hero, 
    bio: 'Competitivo y orgulloso, rival de Goku que se convierte en aliado.',
    power: 92,
    race: 'Saiyan',
    saga: 'Dragon Ball Z',
    techniques: ['Galick Gun', 'Bola de Energía', 'Transformación'],
    featured: true
  },
  { 
    id: 3, 
    name: 'Bulma', 
    role: 'Científica y Inventora', 
    image: hero, 
    bio: 'Brillante inventora y amiga de Goku. Clave para el éxito del grupo.',
    power: 15,
    race: 'Humano',
    saga: 'Dragon Ball Original',
    techniques: ['Tecnología', 'Ingenio'],
    featured: false
  },
  { 
    id: 4, 
    name: 'Piccolo', 
    role: 'Namekiano Guerrero', 
    image: hero, 
    bio: 'Antiguo enemigo convertido en mentor. Padre adoptivo de Gohan.',
    power: 85,
    race: 'Namekiano',
    saga: 'Dragon Ball Z',
    techniques: ['Makankosappo', 'Fusión', 'Regeneración'],
    featured: false
  },
  { 
    id: 5, 
    name: 'Gohan', 
    role: 'Saiyan Hibrido', 
    image: hero, 
    bio: 'Hijo de Goku con gran potencial oculto. Showtime del Torneo',
    power: 88,
    race: 'Saiyan-Humano',
    saga: 'Dragon Ball Z',
    techniques: ['Masenko', 'Transformación', 'Dinamita Destructiva'],
    featured: false
  },
  { 
    id: 6, 
    name: 'Krilin', 
    role: 'Maestro de Artes Marciales', 
    image: hero, 
    bio: 'Amigo de Goku desde la infancia. Humano con entrenamiento Kame House.',
    power: 60,
    race: 'Humano',
    saga: 'Dragon Ball Original',
    techniques: ['Destello Solar', 'Desintegración', 'Kamehameha'],
    featured: false
  },
  { 
    id: 7, 
    name: 'Freezer', 
    role: 'Emperador del Universo', 
    image: hero, 
    bio: 'Poderoso tirano que aterroriza galaxias. Principal antagonista de Namekusei.',
    power: 90,
    race: 'Changelings',
    saga: 'Dragon Ball Z',
    techniques: ['Bola de Energía Destructiva', 'Transformaciones', 'Rayo Mortal'],
    featured: true
  },
]

export default characters
