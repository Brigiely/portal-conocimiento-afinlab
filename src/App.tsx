import { useMemo, useState } from "react";

type IconName =
  | "home" | "book" | "calendar" | "users" | "folder" | "search"
  | "bell" | "plus" | "clock" | "arrow" | "play" | "check"
  | "spark" | "grid" | "link" | "menu" | "close";

const paths: Record<IconName, React.ReactNode> = {
  home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  folder: <path d="M3 5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M13.7 21h-3.4"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  play: <path d="m8 5 11 7-11 7Z"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  spark: <><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z"/></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  link: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  close: <path d="m6 6 12 12M18 6 6 18"/>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const workshops = [
  { category: "Finanzas", title: "Python aplicado a finanzas", description: "Analiza activos, automatiza reportes y visualiza datos financieros.", meta: "6 módulos · Intermedio", progress: 68, color: "lime", icon: "PY" },
  { category: "Desarrollo", title: "Crea tu primera página web", description: "De una idea a una experiencia digital funcional con React.", meta: "8 módulos · Básico", progress: 35, color: "purple", icon: "</>" },
  { category: "Investigación", title: "Análisis estratégico de empresas", description: "Marcos, fuentes y herramientas para investigar organizaciones.", meta: "5 módulos · Intermedio", progress: 0, color: "orange", icon: "A+" },
];

const nav = [
  { label: "Inicio", icon: "home" as IconName },
  { label: "Talleres", icon: "book" as IconName },
  { label: "Calendario", icon: "calendar" as IconName },
  { label: "Comunidad", icon: "users" as IconName },
  { label: "Recursos", icon: "folder" as IconName },
];

export default function App() {
  const [active, setActive] = useState("Inicio");
  const [query, setQuery] = useState("");
  const [connected, setConnected] = useState<string[]>(["Calendar"]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const visibleWorkshops = useMemo(() => workshops.filter((workshop) =>
    workshop.title.toLowerCase().includes(query.toLowerCase()) ||
    workshop.category.toLowerCase().includes(query.toLowerCase())
  ), [query]);

  const toggleConnection = (service: string) => {
    setConnected((current) => current.includes(service)
      ? current.filter((item) => item !== service)
      : [...current, service]);
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Icon name="spark" size={22} /></div>
          <div><strong>Nodo</strong><span>Semillero de investigación</span></div>
          <button className="icon-button close-menu" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú"><Icon name="close" /></button>
        </div>

        <nav className="nav-list" aria-label="Navegación principal">
          <span className="nav-eyebrow">ESPACIO DE TRABAJO</span>
          {nav.map((item) => (
            <button key={item.label} className={`nav-item ${active === item.label ? "active" : ""}`} onClick={() => { setActive(item.label); setMobileOpen(false); }}>
              <Icon name={item.icon} /><span>{item.label}</span>{item.label === "Comunidad" && <b>24</b>}
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
            <div><strong>Laura Martínez</strong><span>Investigadora junior</span></div>
            <button className="more-button">•••</button>
          </div>
        </div>
      </aside>

      <main>
        <header className="topbar">
          <button className="icon-button menu-button" onClick={() => setMobileOpen(true)} aria-label="Abrir menú"><Icon name="menu" /></button>
          <div className="search-box"><Icon name="search" size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar talleres, recursos o personas..." /></div>
          <button className="icon-button notification" aria-label="Notificaciones"><Icon name="bell" /><span></span></button>
          <button className="primary-button"><Icon name="plus" size={18} /> Crear aporte</button>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div>
              <span className="date-label">MIÉRCOLES, 21 DE MAYO</span>
              <h1>Hola, Laura. <em>Sigamos explorando.</em></h1>
              <p>Todo lo que necesitas para aprender, investigar y construir en equipo.</p>
            </div>
            <div className="streak"><div><Icon name="spark" /></div><span><strong>4 semanas</strong>Racha de aprendizaje</span></div>
          </section>

          <section className="hero-card">
            <div className="hero-copy">
              <span className="live-pill"><i></i> PRÓXIMO EN VIVO</span>
              <h2>Valoración de empresas<br />con Python</h2>
              <p>Conecta teoría financiera y código en una sesión práctica con el profesor Andrés Ruiz.</p>
              <div className="event-meta">
                <span><Icon name="calendar" size={17} /> Hoy, 5:00 p. m.</span>
                <span><Icon name="clock" size={17} /> 90 min</span>
              </div>
              <button className="hero-button"><Icon name="play" size={16} /> Unirme por Google Meet</button>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
              <div className="code-window">
                <div className="window-top"><i></i><i></i><i></i></div>
                <code><b>import</b> yfinance <b>as</b> yf<br/><br/><span>ticker</span> = yf.Ticker(<em>"NVDA"</em>)<br/><span>cashflow</span> = ticker.cashflow<br/><br/><b>def</b> <u>intrinsic_value</u>(fcf):<br/>　return fcf / (wacc - g)</code>
              </div>
              <div className="floating-badge"><Icon name="grid" /><span>FIN + DATA</span></div>
            </div>
          </section>

          <section className="section">
            <div className="section-heading">
              <div><h3>Continúa aprendiendo</h3><p>Retoma tus rutas o descubre algo nuevo.</p></div>
              <button className="text-button">Ver todos <Icon name="arrow" size={17} /></button>
            </div>
            <div className="workshop-grid">
              {visibleWorkshops.length ? visibleWorkshops.map((workshop) => (
                <article className="workshop-card" key={workshop.title}>
                  <div className={`workshop-art ${workshop.color}`}>
                    <span>{workshop.icon}</span>
                    {workshop.progress > 0 && <small>{workshop.progress}% completado</small>}
                  </div>
                  <div className="workshop-body">
                    <span className="category">{workshop.category}</span>
                    <h4>{workshop.title}</h4>
                    <p>{workshop.description}</p>
                    <div className="workshop-footer"><span><Icon name="book" size={15} /> {workshop.meta}</span><button aria-label={`Abrir ${workshop.title}`}><Icon name="arrow" size={17} /></button></div>
                    {workshop.progress > 0 && <div className="progress"><i style={{ width: `${workshop.progress}%` }}></i></div>}
                  </div>
                </article>
              )) : <div className="empty-state">No encontramos talleres para “{query}”.</div>}
            </div>
          </section>

          <section className="bottom-grid">
            <div className="agenda-card">
              <div className="section-heading compact"><div><h3>Tu agenda</h3><p>Lo que viene esta semana.</p></div><button className="text-button">Abrir calendario</button></div>
              <div className="agenda-item"><div className="date-box"><b>22</b><span>MAY</span></div><div><span className="tag purple-tag">TALLER</span><h4>Diseño de investigación aplicada</h4><p>Jueves · 3:00 p. m. · Sala 204</p></div><button className="icon-button"><Icon name="arrow" /></button></div>
              <div className="agenda-item"><div className="date-box"><b>24</b><span>MAY</span></div><div><span className="tag green-tag">ENCUENTRO</span><h4>Café de ideas: proyectos 2025</h4><p>Sábado · 10:00 a. m. · Google Meet</p></div><button className="icon-button"><Icon name="arrow" /></button></div>
            </div>
            <div className="connect-card">
              <div className="connect-title"><div><Icon name="link" /></div><span><h3>Todo conectado</h3><p>Tu ecosistema de trabajo, en un solo lugar.</p></span></div>
              {["Calendar", "Meet", "Drive"].map((service) => (
                <button key={service} className="service-row" onClick={() => toggleConnection(service)}>
                  <span className={`service-icon ${service.toLowerCase()}`}>{service[0]}</span>
                  <span><strong>Google {service}</strong><small>{connected.includes(service) ? "Conectado y sincronizado" : "Haz clic para conectar"}</small></span>
                  <b className={connected.includes(service) ? "is-connected" : ""}>{connected.includes(service) ? <Icon name="check" size={15} /> : <Icon name="plus" size={15} />}</b>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
