import { Icon } from "../../components/Icon";
import { workshops } from "../../data/workshops";

export default function Inicio() {
  return (
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
  );
}
