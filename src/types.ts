export type Role = "student" | "instructor";

/** Secciones del portal. Cada una corresponde a una página en src/pages/. */
export type Seccion =
  | "Inicio" | "Talleres" | "Curso" | "Calendario" | "Comunidad" | "Recursos"
  | "Mis talleres" | "Alumnos";

/** Props que reciben las páginas. Usa solo las que necesites. */
export type PageProps = {
  role: Role;
  setActive: (seccion: Seccion) => void;
  query: string;
  connected: string[];
  toggleConnection: (service: string) => void;
};
