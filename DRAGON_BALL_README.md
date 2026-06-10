# 🐉 Dragon Ball Landing Page - REFACTOR ÉPICO

Una landing page de **Dragon Ball** completamente reimaginada con **Shadcn UI**, presentando los componentes más avanzados de la librería con un diseño de UX/UI de nivel mundial.

## ✨ Características Principales

### 🎨 Componentes Shadcn UI Implementados
- **Card** - Tarjetas de personajes con diseño épico
- **Badge** - Etiquetas para roles, razas y técnicas
- **Tabs** - Navegación por secciones
- **Dialog** - Modales de detalles de personajes
- **Input** - Búsqueda de guerreros
- **Select** - Filtro por raza
- **Dropdown Menu** - Opciones de ordenamiento
- **Progress** - Barra de poder de personajes
- **Separator** - Divisores temáticos
- **Tooltip** - Tips interactivos
- **Toggle** - Cambio de vistas
- **Table** - Comparativas de personajes
- **Popover** - Información adicional
- **Hover Card** - Previews al pasar mouse
- **Skeleton** - Loading states
- **Alert** - Mensajes importantes
- **Carousel** - Carrusel de personajes destacados
- **Pagination** - Navegación de páginas

### 🎯 Secciones de la Landing

1. **Hero Section**
   - Título épico con gradiente Dragon Ball
   - Animaciones suaves de entrada
   - Calls-to-action impactantes

2. **Guerreros Destacados**
   - Carrusel de 3 personajes principales
   - Tarjetas con efecto glow animado
   - Barra de poder dinámica
   - Técnicas especiales destacadas

3. **Explorador de Guerreros**
   - Búsqueda en tiempo real
   - Filtros por raza
   - Ordenamiento (nombre, poder, raza)
   - Grid responsivo
   - Vista detallada con modal

4. **Call-to-Action**
   - Sección de invitación al torneo
   - Diseño gradiente épico

5. **Footer**
   - Links de navegación
   - Información del proyecto

### 🎨 Diseño Temático Dragon Ball
- **Paleta de colores**: Amarillo, naranja, rojo (energía Saiyan)
- **Fondos oscuros**: Tema nocturno elegante
- **Gradientes épicos**: Efectos de poder y energía
- **Animaciones**: Glows, flutters, transformaciones

### ⚡ Datos Mejorados de Personajes
Cada personaje ahora incluye:
- Nivel de poder (0-100%)
- Raza
- Saga principal
- Técnicas especiales
- Estado "featured" (destacado)
- Biografía enriquecida

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js 18+
- npm o yarn

### Pasos de Instalación

1. **Instalar dependencias**
```bash
npm install
```

2. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

3. **Compilar para producción**
```bash
npm run build
```

4. **Preview de build**
```bash
npm run preview
```

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── HomePage.tsx                 # Landing page principal
│   ├── HomePage.css                 # Estilos y animaciones
│   ├── CharacterDetailModal.tsx     # Modal de detalles
│   ├── CharacterCard.tsx            # Card de personaje (anterior)
│   └── ui/                          # Componentes Shadcn UI
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── tabs.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── dropdown-menu.tsx
│       ├── progress.tsx
│       ├── separator.tsx
│       ├── tooltip.tsx
│       ├── toggle.tsx
│       ├── table.tsx
│       ├── popover.tsx
│       ├── hover-card.tsx
│       ├── carousel.tsx
│       ├── pagination.tsx
│       ├── skeleton.tsx
│       └── alert.tsx
├── lib/
│   ├── characters.ts                # Datos de personajes
│   └── utils.ts                     # Utilidades (cn)
├── App.tsx                          # App principal
├── main.tsx                         # Entrada
└── index.css                        # Estilos globales
```

## 🎮 Funcionalidades Interactivas

### Búsqueda
Busca guerreros por nombre en tiempo real

### Filtros
- Filtrar por raza (Saiyan, Namekiano, Humano, Changelings)
- Ordenar por nombre, poder o raza

### Modales
Haz clic en cualquier personaje para ver:
- Información detallada
- Barra de poder
- Técnicas especiales
- Saga principal

### Interactividad Avanzada
- Tooltips informativos
- Hover effects épicos
- Animaciones fluidas
- Responsivo en mobile/tablet/desktop

## 🎨 Personalización

### Colores
Edita `src/index.css` para cambiar las variables CSS:
```css
--primary: #fbbf24;    /* Amarillo */
--secondary: #f97316;  /* Naranja */
--destructive: #dc2626; /* Rojo */
```

### Animaciones
Edita `src/components/HomePage.css` para ajustar:
- Velocidades
- Efectos de glow
- Transiciones

### Personajes
Edita `src/lib/characters.ts` para:
- Agregar nuevos personajes
- Modificar datos existentes
- Cambiar técnicas

## 📚 Stack Tecnológico

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Estilos
- **Shadcn UI** - Componentes UI
- **Radix UI** - Primitivos de componentes
- **Lucide React** - Iconos
- **Vite** - Build tool
- **Class Variance Authority** - Variantes de componentes

## 🌟 UX/UI Principios Aplicados

✅ **Jerarquía Visual** - Elementos importantes destacados
✅ **Feedback Visual** - Hover, active, loading states
✅ **Accesibilidad** - WCAG compliant
✅ **Responsividad** - Perfecto en todos los dispositivos
✅ **Performance** - Optimizado y ligero
✅ **Consistencia** - Diseño coherente en toda la app
✅ **Micro-interacciones** - Animaciones detalles
✅ **Contraste** - Legibilidad óptima

## 🎯 Próximas Mejoras Posibles

- [ ] Cargar datos desde API
- [ ] Comparador de personajes (vs)
- [ ] Sistema de ranking
- [ ] Filtros avanzados
- [ ] Modo claro/oscuro toggle
- [ ] Paginación de personajes
- [ ] Timeline de sagas
- [ ] Integración con backend

## 📝 Notas

- Todos los componentes de Shadcn están optimizados para Dragon Ball
- Las animaciones son suaves y no ralentizan el performance
- El diseño es completamente responsivo
- Todos los estilos usan Tailwind CSS

## 🐉 ¡A disfrutar el multiverso de Dragon Ball! ⚡
