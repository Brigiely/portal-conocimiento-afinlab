@AGENTS.md

## Reglas del equipo AFINLAB

- El idioma de la interfaz y de los comentarios es **español**.
- Cada página vive en su propio archivo dentro de `src/pages/`:
  - `pages/alumno/` → solo lo que ve el alumno
  - `pages/instructor/` → solo lo que ve el instructor
  - `pages/compartidas/` → secciones que ven ambos roles
- **Trabaja solo en los archivos de la tarea que te asignaron.** No muevas ni reescribas otros archivos.
- Los componentes reutilizables van en `src/components/`; los datos de ejemplo en `src/data/`.
- Para agregar una sección al menú: `src/data/nav.ts` (menú por rol), `src/types.ts` (tipo `Seccion`) y `src/App.tsx` (qué página muestra).
- Mantén el estilo existente: usa las clases de `src/index.css` (paleta crema/verde oscuro/lima) antes de inventar estilos nuevos.
- `src/auth/` controla quién ve qué. No lo modifiques sin acordarlo con la responsable del proyecto.
- Antes de terminar, comprueba que compile con `pnpm build`.
