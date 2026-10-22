import { useState } from "react";
import type { Role } from "../types";

/**
 * Rol del usuario actual.
 * PROVISIONAL: por ahora el rol se cambia con el interruptor Alumno/Instructor de la barra superior.
 * Cuando exista el inicio de sesión, este hook leerá el rol real del usuario y el interruptor se quita.
 */
export function useRol() {
  return useState<Role>("student");
}
