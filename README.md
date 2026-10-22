# Portal de conocimiento AFINLAB

Portal del semillero de investigación AFINLAB: talleres, calendario, comunidad y recursos, con vistas para **alumno** e **instructor**.

## Cómo correrlo en tu computadora

1. Instala [Node.js](https://nodejs.org) (versión LTS) y reinicia VS Code.
2. En la terminal, dentro de la carpeta del proyecto:

   ```
   npm install -g pnpm
   pnpm install
   pnpm dev
   ```

3. Abre `http://localhost:8443` en el navegador.

> No uses *Go Live*: el proyecto es una app de React y necesita `pnpm dev`.

## Cómo está organizado

```
src/
  App.tsx              estructura y navegación
  components/          Sidebar, Topbar, Icon…
  pages/
    alumno/            lo que ve el alumno
    instructor/        lo que ve el instructor
    compartidas/       Calendario, Comunidad, Recursos
  auth/                rol del usuario (provisional)
  data/                menú por rol y datos de ejemplo
```

Para colaborar, lee [CONTRIBUTING.md](CONTRIBUTING.md).
