import DragBasic from "./DragBasic";
import DragConstraints from "./DragConstraints";

export const catalogContent = [
  {
    type: "animation",
    id: "drag-basic",
    titulo: "Drag libre",
    descripcion: "Arrastre libre sin restricciones.",
    componente: DragBasic,
  },
  {
    type: "animation",
    id: "drag-constraints",
    titulo: "Drag limitado",
    descripcion: "Arrastre con restricciones definidas.",
    componente: DragConstraints,
  },
];
