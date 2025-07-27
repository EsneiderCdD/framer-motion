import DragBasic from "./DragBasic";
import DragConstraints from "./DragConstraints";
import Variants from "./Variants"; // 👈 Nuevo componente

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
  {
    type: "animation",
    id: "variants",
    titulo: "Variants",
    descripcion: "Controla múltiples animaciones con lógica más limpia.",
    componente: Variants, 
  },
];
