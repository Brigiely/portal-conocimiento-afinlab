import { Icon } from "../../components/Icon";
import { workshops } from "../../data/workshops";
import type { PageProps } from "../../types";

export default function Talleres({ setActive }: PageProps) {
  return (
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
  );
}
