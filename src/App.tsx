import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { useRol } from "./auth/useRol";
import type { PageProps, Role, Seccion } from "./types";

import AlumnoInicio from "./pages/alumno/Inicio";
import AlumnoTalleres from "./pages/alumno/Talleres";
import AlumnoCurso from "./pages/alumno/Curso";
import InstructorInicio from "./pages/instructor/Inicio";
import MisTalleres from "./pages/instructor/MisTalleres";
import Alumnos from "./pages/instructor/Alumnos";
import Calendario from "./pages/compartidas/Calendario";
import Comunidad from "./pages/compartidas/Comunidad";
import Recursos from "./pages/compartidas/Recursos";

/** Decide qué página mostrar según la sección activa y el rol. */
function Pagina({ active, role, ...props }: PageProps & { active: Seccion }) {
  const pageProps = { role, ...props };
  switch (active) {
    case "Inicio": return role === "student" ? <AlumnoInicio {...pageProps} /> : <InstructorInicio />;
    case "Talleres": return <AlumnoTalleres {...pageProps} />;
    case "Curso": return <AlumnoCurso {...pageProps} />;
    case "Mis talleres": return <MisTalleres />;
    case "Alumnos": return <Alumnos />;
    case "Calendario": return <Calendario {...pageProps} />;
    case "Comunidad": return <Comunidad />;
    case "Recursos": return <Recursos />;
  }
}

export default function App() {
  const [role, setRole] = useRol();
  const [active, setActive] = useState<Seccion>("Inicio");
  const [query, setQuery] = useState("");
  const [connected, setConnected] = useState<string[]>(["Calendar"]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleConnection = (service: string) => {
    setConnected((current) => current.includes(service)
      ? current.filter((item) => item !== service)
      : [...current, service]);
  };

  const cambiarRol = (nuevoRol: Role) => { setRole(nuevoRol); setActive("Inicio"); };

  return (
    <div className="app-shell">
      <Sidebar role={role} active={active} setActive={setActive} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <Topbar role={role} setRole={cambiarRol} setActive={setActive} query={query} setQuery={setQuery} setMobileOpen={setMobileOpen} />
        <Pagina active={active} role={role} setActive={setActive} query={query} connected={connected} toggleConnection={toggleConnection} />
      </main>
    </div>
  );
}
