import SlideY from './SlideY';
import SlideX from './SlideX';
import SlideXY from './SlideXY';
import Circle from './Circle';
import CirclePerfect from './CirclePerfect';
import Mov from './Duration';
import RandomMotion from './RandomMotion';
import { generateCircleKeyframes } from '../../utils/generateCircleKeyFrames';

const circleMotion = generateCircleKeyframes(40, 100);

export const catalogContent = [
  { type: 'title', text: 'Movimientos' },

  {
    type: 'animation',
    id: 'slide-x',
    titulo: 'Movimiento eje X ',
    descripcion: 'Desplazamiento horizontal animado en bucle.',
    componente: SlideX,
    animation: {
      initial: { x: -100 },
      animate: { x: 100 },
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  },
  {
    type: 'animation',
    id: 'slide-y',
    titulo: 'Movimiento eje Y',
    descripcion: 'Desplazamiento vertical animado en bucle.',
    componente: SlideY,
    animation: {
      initial: { y: -100 },
      animate: { y: 100 },
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  },
  {
    type: 'animation',
    id: 'slide-xy',
    titulo: 'X y Y',
    componente: SlideXY,
    descripcion: 'Desplazamiento vertical y horizontal en diagonal.',
    animation: {
      initial: { x: -100, y: -100 },
      animate: { x: 100, y: 100 },
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  },


  {
    type: 'animation',
    id: 'circle',
    titulo: 'Vuelta',
    componente: Circle,
    descripcion: 'El logo se mueve en una trayectoria circular infinita.',
    animation: {
      initial: { x: 0, y: 0 },
      animate: {
        x: [0, 70, 100, 70, 0, -70, -100, -70, 0],
        y: [-100, -70, 0, 70, 100, 70, 0, -70, -100]
      },
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  },
  {
    type: 'animation',
    id: 'circle-perfect',
    titulo: 'Vuelta Perfecta',
    componente: CirclePerfect,
    descripcion: 'El logo se mueve en una trayectoria circular infinita con keyframes más suaves.',
    animation: {
      initial: { x: circleMotion.x[0], y: circleMotion.y[0] },
      animate: { x: circleMotion.x, y: circleMotion.y },
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  },

  { type: 'title', text: 'Duration' },

  {
    type: 'animation',
    id: 'comparacion-slide-x-y',
    titulo: 'Duración',
    descripcion: 'Duracion de la alta y baja en una animación',
    componente: Mov,
    animation1: {
      initial: { y: -100 },
      animate: { y: 100 },
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    },
    animation2: {
      initial: { y: -100 },
      animate: { y: 100 },
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  },
  {
  type: 'animation',
  id: 'random-motion',
  titulo: 'Movimiento Errante',
  descripcion: 'Movimiento aleatorio continuo con velocidad y rango personalizados.',
  componente: RandomMotion,
  random: true,
  speed: 0.5,    // Medio segundo entre cada salto
  rangeX: 50,   // Movimiento máximo en X de +/- 150px
  rangeY: 50 ,   // Movimiento máximo en Y de +/- 150px
  }
];
