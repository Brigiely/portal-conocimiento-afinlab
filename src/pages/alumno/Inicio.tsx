import { useMemo } from "react";
import { Icon } from "../../components/Icon";
import { workshops } from "../../data/workshops";
import type { PageProps } from "../../types";

export default function Inicio({ setActive, query, connected, toggleConnection }: PageProps) {
  const visibleWorkshops = useMemo(() => workshops.filter((workshop) =>
    workshop.title.toLowerCase().includes(query.toLowerCase()) ||
    workshop.category.toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return (
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
    </div>
  );
}
