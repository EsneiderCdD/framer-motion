import GestureDrag from "./GestureDrag";
import GestureSnap from "./GestureSnap";

export const catalogContent = [
  {
    id: "gesture-drag",
    titulo: "Drag",
    descripcion: "Permite arrastrar elementos usando gestos del usuario.",
    componente: GestureDrag,
    video: "/videos/generic.mp4",
    download: "/downloads/generic.pdf",
    props: [
      {
        name: "drag",
        description: "Activa el gesto de arrastre en el componente.",
      },
    ],
  },
  {
    id: "gesture-snap",
    titulo: "Snap",
    descripcion: "Simula un comportamiento de arrastre con retorno automático.",
    componente: GestureSnap,
    video: "/videos/generic.mp4",
    download: "/downloads/generic.pdf",
    props: [
      {
        name: "dragSnapToOrigin",
        description: "Hace que el elemento vuelva a su posición original.",
      },
    ],
  },
];
