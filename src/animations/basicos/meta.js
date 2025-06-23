import FadeIn from './FadeIn';
import SlideX from './SlideX';
import { generateCircleKeyframes } from '../../utils/generateCircleKeyFrames';


const circleMotion = generateCircleKeyframes(40, 100); // 4

export const animations = [
  {
    id: 'slide-x',
    titulo: 'Movimiento eje X ',
    descripcion: 'Desplazamiento horizontal animado en bucle.',
    componente: SlideX,
    animation: {
      initial: { x: -100 },
      animate: { x: 100 }, // Se mueve a 100 y vuelve
      transition: { 
        duration: 10, 
        repeat: Infinity,  // Repite infinitamente
        repeatType: 'reverse', // Va y regresa
        ease: 'easeInOut' // Suaviza el movimiento
      }
    }
  },

  {
    id: 'slide-y',
    titulo: 'Movimiento eje Y',
    descripcion: 'Desplazamiento vertical animado en bucle.',
    componente: FadeIn,
    animation: {
      initial: {  y: -100 },
      animate: {  y: 100 },
      transition: { 
        duration: 10, 
        repeat: Infinity,
        repeatType: 'reverse', // Va y regresa
        ease: 'easeInOut'
      }
    }
  },

{
  id: 'slide-xy',
  titulo: 'X y Y',
  descripcion: 'Desplazamiento vertical y horizontal en diagonal.',
  animation: {
    initial: { x: -100, y: -100 },
    animate: { x: 100, y: 100 }, // ✅ animamos x e y a la vez
    transition: { 
      duration: 10, // puedes ajustar la velocidad
      repeat: Infinity,
      repeatType: 'reverse', // Va y regresa en diagonal
      ease: 'easeInOut'
    }
  }
},
{
  id: 'circle',
  titulo: 'Vuelta',
  descripcion: 'El logo se mueve en una trayectoria circular infinita.',
  animation: {
    initial: { x: 0, y: 0 },
    animate: { 
      x: [0, 70, 100, 70, 0, -70, -100, -70, 0],
y: [-100, -70, 0, 70, 100, 70, 0, -70, -100],
transition: {
  duration: 10,
  repeat: Infinity,
  ease: 'linear'
}

    }
  }
},
 {
    id: 'circle',
    titulo: 'Vuelta Perfecta',
    descripcion: 'El logo se mueve en una trayectoria circular infinita.',
    animation: {
      initial: { x: circleMotion.x[0], y: circleMotion.y[0] },
      animate: { x: circleMotion.x, y: circleMotion.y },
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }


];
