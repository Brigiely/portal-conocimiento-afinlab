import { Icon } from "./Icon";
import { nav } from "../data/nav";
import type { Role, Seccion } from "../types";

type Props = {
  role: Role;
  active: Seccion;
  setActive: (seccion: Seccion) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
};

export default function Sidebar({ role, active, setActive, mobileOpen, setMobileOpen }: Props) {
  return (
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><img src="/logo-afinlab-hoja.png" alt="Logo AFINLAB" /></div>
          <div><strong>AFINLAB</strong><span>Semillero de investigación</span></div>
          <button className="icon-button close-menu" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú"><Icon name="close" /></button>
        </div>

        <nav className="nav-list" aria-label="Navegación principal">
          <span className="nav-eyebrow">ESPACIO DE TRABAJO</span>
          {nav[role].map((item) => (
            <button key={item.label} className={`nav-item ${active === item.label ? "active" : ""}`} onClick={() => { setActive(item.label); setMobileOpen(false); }}>
              <Icon name={item.icon} /><span>{item.label}</span>{item.badge && <b>{item.badge}</b>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="integrations-mini">
            <span><Icon name="link" size={15} /> INTEGRACIONES</span>
            <div className="google-dots"><i></i><i></i><i></i></div>
            <p>Tu calendario está sincronizado.</p>
          </div>
          <div className="profile">
            <div className="avatar">LM</div>
            <div><strong>{role === "student" ? "Laura Martínez" : "Andrés Ruiz"}</strong><span>{role === "student" ? "Investigadora junior" : "Instructor del semillero"}</span></div>
            <button className="more-button">•••</button>
          </div>
        </div>
      </aside>
  );
}
