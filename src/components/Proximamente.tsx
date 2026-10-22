import { Icon, type IconName } from "./Icon";

type Props = { titulo: string; icon: IconName; descripcion?: string };

/** Página provisional. Cuando alguien construya la sección real, reemplaza este componente. */
export default function Proximamente({ titulo, icon, descripcion = "Este espacio estará disponible próximamente." }: Props) {
  return (
    <div className="content empty-page">
      <Icon name={icon} size={36} />
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
}
