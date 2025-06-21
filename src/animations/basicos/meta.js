// src/animations/basicos/meta.js
import FadeIn from './FadeIn';
import SlideX from './SlideX';

export const animations = [
  {
    id: 'fade-in',
    titulo: 'Fade In',
    descripcion: 'Animación de opacidad de 0 a 1.',
    componente: FadeIn,
  },
  {
    id: 'slide-x',
    titulo: 'Slide X',
    descripcion: 'Desplazamiento horizontal animado.',
    componente: SlideX,
  }
];
