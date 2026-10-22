import { useState } from "react";
import { Icon } from "../../components/Icon";
import type { PageProps } from "../../types";

export default function Calendario({ role, connected, toggleConnection }: PageProps) {
  const [selectedDay, setSelectedDay] = useState(21);

  return (
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
  );
}
