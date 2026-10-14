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
  const [selectedDay, setSelectedDay] = useState(21);
  const [role, setRole] = useState<"student" | "instructor">("student");

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
            <div><strong>{role === "student" ? "Laura Martínez" : "Andrés Ruiz"}</strong><span>{role === "student" ? "Investigadora junior" : "Instructor del semillero"}</span></div>
            <button className="more-button">•••</button>
          </div>
        </div>
      </aside>

      <main>
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

        {active === "Inicio" && role === "student" ? <div className="content">
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
              <button className="text-button" onClick={() => setActive("Talleres")}>Ver todos <Icon name="arrow" size={17} /></button>
            </div>
            <div className="workshop-grid">
              {visibleWorkshops.length ? visibleWorkshops.map((workshop) => (
                <article className="workshop-card" key={workshop.title} onClick={() => setActive("Curso")}>
                  <div className={`workshop-art ${workshop.color}`}>
                    <span>{workshop.icon}</span>
                    {workshop.progress > 0 && <small>{workshop.progress}% completado</small>}
                  </div>
                  <div className="workshop-body">
                    <span className="category">{workshop.category}</span>
                    <h4>{workshop.title}</h4>
                    <p>{workshop.description}</p>
                    <div className="workshop-footer"><span><Icon name="book" size={15} /> {workshop.meta}</span><button onClick={() => setActive("Curso")} aria-label={`Abrir ${workshop.title}`}><Icon name="arrow" size={17} /></button></div>
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
        </div> : active === "Inicio" ? (
          <div className="content instructor-home">
            <section className="page-intro">
              <div><span className="date-label">PANEL DEL INSTRUCTOR</span><h1>Hola, Andrés. <em>Todo listo para enseñar.</em></h1><p>Gestiona talleres, estudiantes, sesiones y materiales desde un solo lugar.</p></div>
              <button className="primary-button"><Icon name="plus" size={17}/> Crear nuevo taller</button>
            </section>
            <section className="instructor-summary">
              <div className="next-live"><span className="live-pill"><i></i> PRÓXIMA SESIÓN · HOY</span><h3>Finanzas en Python — Sesión 5</h3><p>16:00–17:30 · 28 alumnos inscritos</p><button className="hero-button"><Icon name="play" size={15}/> Iniciar Google Meet</button></div>
              <div><span>TALLERES ACTIVOS</span><strong>3</strong><small>Finanzas · Desarrollo · Research</small></div>
              <div><span>TOTAL DE ALUMNOS</span><strong>84</strong><small>92% asistencia promedio</small></div>
            </section>
            <section className="instructor-grid">
              <div className="attendance-panel">
                <div className="section-heading compact"><div><h3>Asistencia de la última sesión</h3><p>Finanzas en Python · Sesión 4</p></div><button className="text-button">Ver grupo completo</button></div>
                <div className="student-table">
                  <div className="table-head"><span>ESTUDIANTE</span><span>PROGRAMA</span><span>ASISTENCIA</span></div>
                  {[["NS","Nagely Sandoval","Ing. de Sistemas","Presente"],["JP","Juan Diego Pérez","Economía","Presente"],["MR","Mateo Rossi","Administración","Ausente"],["SB","Sofía Benítez","Finanzas","Justificada"]].map((student) => <div className="student-row" key={student[1]}><span><i>{student[0]}</i><strong>{student[1]}</strong></span><span>{student[2]}</span><b className={student[3].toLowerCase()}>{student[3]}</b></div>)}
                </div>
                <button className="save-attendance"><Icon name="check" size={15}/> Guardar asistencia</button>
              </div>
              <div className="modules-panel">
                <div className="section-heading compact"><div><h3>Cronograma del taller</h3><p>Módulos y materiales</p></div></div>
                {["Fundamentos de Python","Pandas & NumPy financiero","Modelado de riesgo","Algoritmos de trading"].map((module,index)=><div className="module-edit" key={module}><span><small>MÓDULO {index+1}</small><strong>{module}</strong><em>{index+2} sesiones</em></span><b className={`module-state state-${index}`}>{["Finalizado","En edición","Programado","Borrador"][index]}</b></div>)}
                <button className="add-module"><Icon name="plus" size={15}/> Agregar módulo</button>
              </div>
            </section>
            <section className="section"><div className="section-heading"><div><h3>Mis talleres</h3><p>Estado general de tus espacios de aprendizaje.</p></div></div><div className="workshop-grid">{workshops.map(workshop=><article className="instructor-course" key={workshop.title}><span className={`category ${workshop.color}`}>ACTIVO</span><h3>{workshop.title}</h3><p>28 inscritos · Próxima sesión esta semana</p><div className="progress"><i style={{width:`${workshop.progress || 18}%`}}></i></div><div><button>Ver alumnos</button><button>Editar sesiones</button></div></article>)}</div></section>
          </div>
        ) : active === "Talleres" ? (
          <div className="content">
            <section className="page-intro">
              <div><span className="date-label">BIBLIOTECA DE CONOCIMIENTO</span><h1>Talleres para <em>crear y avanzar.</em></h1><p>Aprende a tu ritmo, comparte hallazgos y lleva tus ideas a proyectos reales.</p></div>
              <button className="primary-button"><Icon name="plus" size={17}/> Proponer taller</button>
            </section>
            <section className="stats-strip">
              <div><span>TALLERES ACTIVOS</span><strong>12</strong><small>3 nuevos este mes</small></div>
              <div><span>TU PROGRESO</span><strong>64%</strong><small>8 de 12 rutas iniciadas</small></div>
              <div><span>HORAS APRENDIDAS</span><strong>28.5</strong><small>Top 15% del semillero</small></div>
              <div className="next-class"><span>PRÓXIMA SESIÓN</span><strong>Python financiero</strong><small>Hoy · 5:00 p. m. · Meet</small></div>
            </section>
            <section className="catalog-toolbar">
              <div className="filter-pills">
                {["Todos", "En progreso", "Finanzas", "Desarrollo", "Investigación"].map((filter, index) => <button key={filter} className={index === 0 ? "selected" : ""}>{filter}</button>)}
              </div>
              <span>12 talleres disponibles</span>
            </section>
            <section className="catalog-grid">
              {[...workshops, ...workshops].map((workshop, index) => (
                <article className="catalog-card" key={`${workshop.title}-${index}`} onClick={() => setActive("Curso")}>
                  <div className={`catalog-cover ${workshop.color}`}>
                    <span className="category">{workshop.category}</span><b>{workshop.icon}</b>
                    {index < 3 && <small>EN CURSO</small>}
                  </div>
                  <div className="catalog-body">
                    <h3>{index > 2 ? ["Visualización de datos", "Fundamentos de UX Research", "Escritura académica"][index - 3] : workshop.title}</h3>
                    <p>{workshop.description}</p>
                    <div className="mentor"><div className="mini-avatar">{["AR", "MS", "JP"][index % 3]}</div><span>Por <strong>{["Andrés Ruiz", "María Salazar", "Juan Pardo"][index % 3]}</strong></span></div>
                    <div className="course-meta"><span><Icon name="book" size={14}/> {5 + index} módulos</span><span><Icon name="clock" size={14}/> {4 + index} h</span></div>
                    <div className="progress"><i style={{width: `${index < 3 ? workshop.progress : 0}%`}}></i></div>
                    <button className="course-open">Ver taller <Icon name="arrow" size={16}/></button>
                  </div>
                </article>
              ))}
            </section>
          </div>
        ) : active === "Curso" ? (
          <div className="course-page">
            <div className="course-breadcrumb"><button onClick={() => setActive("Talleres")}>Talleres</button><span>/</span><strong>Python aplicado a finanzas</strong></div>
            <section className="course-layout">
              <div className="course-main">
                <div className="lesson-video">
                  <div className="video-code"><span>01</span><b>PYTHON<br/>+ FINANZAS</b></div>
                  <button aria-label="Reproducir clase"><Icon name="play" size={25}/></button>
                  <small>12:48 / 34:20</small>
                </div>
                <div className="lesson-heading">
                  <div><span className="category">MÓDULO 1 · CLASE 2</span><h1>Entorno de trabajo y primeros datos financieros</h1><p>Aprende a preparar tu entorno, importar información bursátil y explorar las primeras series de datos.</p></div>
                  <button className="complete-button"><Icon name="check" size={17}/> Marcar como completada</button>
                </div>
                <div className="lesson-tabs"><button className="active">Resumen</button><button>Recursos <b>3</b></button><button>Notas</button><button>Conversación <b>12</b></button></div>
                <div className="lesson-content">
                  <h3>Lo que aprenderás en esta clase</h3>
                  <div className="learning-points"><span><Icon name="check" size={16}/> Configurar un entorno de trabajo reproducible.</span><span><Icon name="check" size={16}/> Conectar Python con fuentes de datos financieros.</span><span><Icon name="check" size={16}/> Interpretar precios, retornos y volumen.</span></div>
                  <h3>Material de la sesión</h3>
                  <div className="resource-row"><div><Icon name="folder"/><span><strong>Notebook — Primer análisis.ipynb</strong><small>Google Drive · 1.8 MB</small></span></div><button>Abrir en Drive <Icon name="arrow" size={15}/></button></div>
                </div>
              </div>
              <aside className="course-sidebar">
                <div className="course-side-head"><span className="category">TU PROGRESO</span><strong>Python aplicado a finanzas</strong><div><span>8 de 18 clases</span><b>44%</b></div><div className="progress"><i style={{width:"44%"}}></i></div></div>
                <div className="module open">
                  <button><span><small>MÓDULO 1</small><strong>Fundamentos de Python</strong></span><b>2/4</b></button>
                  {["Bienvenida y objetivos", "Entorno y primeros datos", "Tipos de datos", "Ejercicio práctico"].map((lesson, index) => <div className={`lesson ${index === 1 ? "playing" : ""}`} key={lesson}><span>{index < 1 ? <Icon name="check" size={14}/> : index + 1}</span><div><strong>{lesson}</strong><small>{8 + index * 4} min</small></div>{index === 1 && <Icon name="play" size={14}/>}</div>)}
                </div>
                {["NumPy financiero", "Análisis y visualización", "Proyecto final"].map((module, index) => <div className="module" key={module}><button><span><small>MÓDULO {index + 2}</small><strong>{module}</strong></span><b>0/{index + 3}</b></button></div>)}
                <div className="instructor-card"><div className="avatar">AR</div><div><small>INSTRUCTOR</small><strong>Andrés Ruiz</strong><span>Data Scientist · MSc Finanzas</span></div></div>
              </aside>
            </section>
          </div>
        ) : active === "Calendario" ? (
          <div className="content calendar-page">
            <section className="page-intro calendar-intro">
              <div><span className="date-label">{role === "student" ? "AGENDA DEL SEMILLERO" : "AGENDA DEL INSTRUCTOR"}</span><h1>Calendario <em>& encuentros.</em></h1><p>{role === "student" ? "Organiza tus sesiones, tutorías y espacios de investigación." : "Programa clases, controla tutorías y administra tus encuentros."}</p></div>
              <div className="calendar-actions"><button className="secondary-button"><Icon name="calendar" size={16}/> Hoy</button><button className="primary-button"><Icon name="plus" size={17}/> {role === "student" ? "Solicitar tutoría" : "Agendar sesión"}</button></div>
            </section>
            <section className="calendar-layout">
              <aside className="calendar-tools">
                <div className="month-card">
                  <div className="month-heading"><div><span>SEPTIEMBRE</span><strong>2025</strong></div><div><button>‹</button><button>›</button></div></div>
                  <div className="week-labels">{["L","M","M","J","V","S","D"].map((day, i) => <span key={`${day}${i}`}>{day}</span>)}</div>
                  <div className="month-grid">
                    {[...Array(2)].map((_, i) => <button className="muted" key={`prev${i}`}>{29 + i}</button>)}
                    {[...Array(30)].map((_, i) => {
                      const day = i + 1;
                      return <button key={day} onClick={() => setSelectedDay(day)} className={`${selectedDay === day ? "selected" : ""} ${[8,12,21,24,26].includes(day) ? "has-event" : ""}`}>{day}</button>
                    })}
                    {[...Array(3)].map((_, i) => <button className="muted" key={`next${i}`}>{i + 1}</button>)}
                  </div>
                </div>
                <div className="connection-card">
                  <span className="date-label">ESTADO DE CONEXIÓN</span>
                  <h3>Tu agenda está sincronizada</h3>
                  <p>Los cambios se actualizan automáticamente en tus plataformas.</p>
                  <button onClick={() => toggleConnection("Calendar")}><span className="service-icon">C</span><span><strong>Google Calendar</strong><small>Sincronizado hace 5 min</small></span><b className={connected.includes("Calendar") ? "online" : ""}>{connected.includes("Calendar") ? "Activo" : "Conectar"}</b></button>
                  <button onClick={() => toggleConnection("Meet")}><span className="service-icon meet">M</span><span><strong>Google Meet</strong><small>Listo para unirse</small></span><b className={connected.includes("Meet") ? "online" : ""}>{connected.includes("Meet") ? "Activo" : "Conectar"}</b></button>
                </div>
                <div className="calendar-notice"><Icon name="bell" size={18}/><div><strong>Confirmación pendiente</strong><p>Tienes una tutoría mañana que requiere confirmación.</p><button>Confirmar ahora</button></div></div>
              </aside>
              <div className="schedule">
                <div className="schedule-head">
                  <div><span className="date-label">SESIONES PROGRAMADAS</span><h2>{selectedDay === 21 ? "Hoy, 21 de septiembre" : `${selectedDay} de septiembre`}</h2></div>
                  <div className="view-switch"><button className="active">Día</button><button>Semana</button><button>Mes</button></div>
                </div>
                <div className="day-divider"><span>HOY</span><i></i></div>
                <article className="session-card featured">
                  <div className="session-time"><strong>16:00</strong><span>17:30</span></div>
                  <div className="session-line"></div>
                  <div className="session-info"><div className="session-tags"><span className="status upcoming">PRÓXIMO</span><span>EN VIVO</span></div><h3>Finanzas en Python — Sesión 5</h3><p>Prof. Andrés Ruiz · Python aplicado a finanzas</p><button className="meet-button"><Icon name="play" size={14}/> Entrar por Google Meet</button></div>
                  <div className="session-people"><div className="avatar-stack"><i>LM</i><i>JP</i><i>+8</i></div><span>10 participantes</span></div>
                </article>
                <article className="session-card">
                  <div className="session-time"><strong>18:00</strong><span>19:00</span></div><div className="session-line purple-line"></div>
                  <div className="session-info"><div className="session-tags"><span className="status workshop">TALLER</span><span>PRESENCIAL</span></div><h3>Diseño de investigación aplicada</h3><p>Prof. María Salazar · Sala de innovación 204</p></div>
                  <button className="session-more">•••</button>
                </article>
                <div className="day-divider tomorrow"><span>MAÑANA, 22 DE SEPTIEMBRE</span><i></i></div>
                <article className="session-card">
                  <div className="session-time"><strong>10:00</strong><span>11:00</span></div><div className="session-line orange-line"></div>
                  <div className="session-info"><div className="session-tags"><span className="status pending">PENDIENTE</span><span>TUTORÍA</span></div><h3>Revisión de avance — Proyecto final</h3><p>Prof. Carlos Mendoza · Análisis estratégico de empresas</p><div className="session-buttons"><button className="meet-button"><Icon name="play" size={14}/> Entrar a la sesión</button><button className="outline-button">Confirmar asistencia</button></div></div>
                </article>
                <article className="session-card">
                  <div className="session-time"><strong>15:30</strong><span>17:00</span></div><div className="session-line green-line"></div>
                  <div className="session-info"><div className="session-tags"><span className="status community">COMUNIDAD</span></div><h3>Café de ideas: proyectos 2025</h3><p>Encuentro abierto · Google Meet</p></div>
                  <div className="session-people"><div className="avatar-stack"><i>AR</i><i>SM</i><i>+14</i></div><span>16 confirmados</span></div>
                </article>
              </div>
            </section>
          </div>
        ) : (
          <div className="content empty-page"><Icon name={nav.find((item) => item.label === active)?.icon || "grid"} size={36}/><h1>{active}</h1><p>Este espacio estará disponible próximamente.</p></div>
        )}
      </main>
    </div>
  );
}
