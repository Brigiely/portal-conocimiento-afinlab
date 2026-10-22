import { Icon } from "../../components/Icon";
import type { PageProps } from "../../types";

export default function Curso({ setActive }: PageProps) {
  return (
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
  );
}
