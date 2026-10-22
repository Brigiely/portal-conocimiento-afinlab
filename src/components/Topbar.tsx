import { Icon } from "./Icon";
import type { Role, Seccion } from "../types";

type Props = {
  role: Role;
  setRole: (role: Role) => void;
  setActive: (seccion: Seccion) => void;
  query: string;
  setQuery: (query: string) => void;
  setMobileOpen: (open: boolean) => void;
};

export default function Topbar({ role, setRole, setActive, query, setQuery, setMobileOpen }: Props) {
  return (
        <header className="topbar">
          <button className="icon-button menu-button" onClick={() => setMobileOpen(true)} aria-label="Abrir menú"><Icon name="menu" /></button>
          <div className="search-box"><Icon name="search" size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar talleres, recursos o personas..." /></div>
          <div className="role-switch">
            <button className={role === "student" ? "active" : ""} onClick={() => { setRole("student"); setActive("Inicio"); }}>Alumno</button>
            <button className={role === "instructor" ? "active" : ""} onClick={() => { setRole("instructor"); setActive("Inicio"); }}>Instructor</button>
          </div>
          <button className="icon-button notification" aria-label="Notificaciones"><Icon name="bell" /><span></span></button>
          <button className="primary-button"><Icon name="plus" size={18} /> {role === "student" ? "Crear aporte" : "Crear sesión"}</button>
        </header>
  );
}
