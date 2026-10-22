import type { IconName } from "../components/Icon";
import type { Role, Seccion } from "../types";

export type NavItem = { label: Seccion; icon: IconName; badge?: string };

/** Menú lateral de cada rol. Para agregar una sección: añádela aquí, en types.ts y en App.tsx. */
export const nav: Record<Role, NavItem[]> = {
  student: [
    { label: "Inicio", icon: "home" },
    { label: "Talleres", icon: "book" },
    { label: "Calendario", icon: "calendar" },
    { label: "Comunidad", icon: "users", badge: "24" },
    { label: "Recursos", icon: "folder" },
  ],
  instructor: [
    { label: "Inicio", icon: "home" },
    { label: "Mis talleres", icon: "book" },
    { label: "Alumnos", icon: "users" },
    { label: "Calendario", icon: "calendar" },
    { label: "Comunidad", icon: "users", badge: "24" },
    { label: "Recursos", icon: "folder" },
  ],
};
