import SlideX from '../Linear/SlideX';
import SlideY from '../Linear/SlideY';
import SlideXY from '../Linear/SlideXY';
import Circle from '../Circular/Circle';
import CirclePerfect from '../Circular/CirclePerfect';
import Mov from '../Utility/Duration';
import RandomMotion from '../Utility/RandomMotion';
import LabMotionBuilder from '../Playground';
import Scale from '../Properties/Scale';
import Rotate from '../Properties/Rotate';
import RotateX from '../Properties/RotateX';
import RotateY from '../Properties/RotateY';
import Opacity from '../Properties/Opacity';
import Size from '../Properties/Size';
import Color from '../Properties/Color';
import ScaleRotate from '../Properties/ScaleRotate';
import BorderColor from '../Properties/BorderColor';
import ScaleRotateOpacity from '../Properties/ScaleRotateOpacity';
import ScaleKeyframes from '../Properties/ScaleKeyframes';
import RotateKeyframes from '../Properties/RotateKeyframes';
import OpacityKeyframes from '../Properties/OpacityKeyframes';
import CombinedKeyframes from '../Properties/CombinedKeyframes';
import TimesKeyframes from '../Properties/TimesKeyframes';
import EaseKeyframes from '../Properties/EaseKeyframes';
import EaseLinear from '../Utility/EaseLinear';
import EaseIn from '../Utility/EaseIn';
import EaseOut from '../Utility/EaseOut';
import EaseInOut from '../Utility/EaseInOut';

import { generateCircleKeyframes } from '@/utils/generateCircleKeyframes';

const circleMotion = generateCircleKeyframes(40, 100);

export const catalogContent = [


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
    {
        type: 'animation',
        id: 'scale-motion',
        titulo: 'Escala',
        descripcion: 'Transformación de tamaño proporcional.',
        componente: Scale,
        animation: {
            initial: { scale: 1.5 },
            animate: { scale: 0 },
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    },
    {
        type: 'animation',
        id: 'rotate-motion',
        titulo: 'Rotación',
        descripcion: 'Rotación en su propio eje.',
        componente: Rotate,
        animation: {
            initial: { rotate: 0 },
            animate: { rotate: 360 },
            transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    },
    {
        type: 'animation',
        id: 'rotate-x-motion',
        titulo: 'Rotación X',
        descripcion: 'Rotación sobre el eje X.',
        componente: RotateX,
        animation: {
            initial: { rotateX: 0 },
            animate: { rotateX: 360 },
            transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    },
    {
        type: 'animation',
        id: 'rotate-y-motion',
        titulo: 'Rotación Y',
        descripcion: 'Rotación sobre el eje Y.',
        componente: RotateY,
        animation: {
            initial: { rotateY: 0 },
            animate: { rotateY: 360 },
            transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    },
    {
        type: 'animation',
        id: 'opacity-motion',
        titulo: 'Opacidad',
        descripcion: 'Control de transparencia.',
        componente: Opacity,
        animation: {
            initial: { opacity: 0.2 },
            animate: { opacity: 1 },
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    },
    {
        type: 'animation',
        id: 'size-motion',
        titulo: 'Tamaño',
        descripcion: 'Cambio de dimensiones (width/height).',
        componente: Size,
        animation: {
            initial: { width: '100px', height: '100px' },
            animate: { width: '150px', height: '150px' },
            transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    },
    {
        type: 'animation',
        id: 'color-motion',
        titulo: 'Color',
        descripcion: 'Cambio de color de fondo.',
        componente: Color,
        animation: {
            initial: { backgroundColor: '#F6EA11' },
            animate: { backgroundColor: '#000000' },
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    },
    {
        type: 'animation',
        id: 'scale-rotate-motion',
        titulo: 'Escala y Rotación',
        descripcion: 'Combinación de escala y rotación.',
        componente: ScaleRotate,
        animation: {
            initial: { scale: 0.5, rotate: 0 },
            animate: { scale: 1.5, rotate: 360 },
            transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
            }
        }
    },
    {
        type: 'animation',
        id: 'border-shadow-motion',
        titulo: 'Borde y Color',
        descripcion: 'Transformación de color y radio de borde.',
        componente: BorderColor,
        animation: {
            initial: { backgroundColor: '#F6EA11', borderRadius: '0%' },
            animate: { backgroundColor: '#000000', borderRadius: '50%' },
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    },
    {
        type: 'animation',
        id: 'scale-rotate-opacity-motion',
        titulo: 'Escala, Rotación y Opacidad',
        descripcion: 'Secuencia de transformaciones con delay.',
        componente: ScaleRotateOpacity,
        animation: {
            initial: { scale: 0.5, rotate: 0, opacity: 0 },
            animate: { scale: 1, rotate: 360, opacity: 1 },
            transition: {
                opacity: { duration: 3, delay: 0 },
                scale: { duration: 3, delay: 3 },
                rotate: { duration: 3, delay: 6 }
            }
            // Note: In the catalog preview, this animation will take 9 seconds to complete 
            // and won't repeat automatically because repeat:Infinity isn't in these options. 
            // But CardPreview handles re-rendering or simply just playing it once. 
            // A long animation like this might look static for a while.
            // However, sticking to the requested specs.
        }
    },

    {
        type: 'animation',
        id: 'scale-keyframes-motion',
        titulo: 'Escala (Keyframes)',
        descripcion: 'Ciclos de expansión y contracción mediante keyframes.',
        componente: ScaleKeyframes,
        animation: {
            animate: { scale: [1, 1.5, 0.5, 1] },
            transition: {
                duration: 3,
                repeat: Infinity
            }
        }
    },


    {
        type: 'animation',
        id: 'rotate-keyframes-motion',
        titulo: 'Rotación (Keyframes)',
        descripcion: 'Rotación por etapas en espejo.',
        componente: RotateKeyframes,
        animation: {
            animate: { rotate: [0, 90, 180, 270, 360] },
            transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: 'mirror'
            }
        }
    },
    {
        type: 'animation',
        id: 'opacity-keyframes-motion',
        titulo: 'Opacidad (Keyframes)',
        descripcion: 'Parpadeo suave con keyframes.',
        componente: OpacityKeyframes,
        animation: {
            animate: { opacity: [1, 0.5, 0, 0.5, 1] },
            transition: { duration: 2, repeat: Infinity }
        }
    },
    {
        type: 'animation',
        id: 'combined-keyframes-motion',
        titulo: 'Combinado (Keyframes)',
        descripcion: 'Múltiples propiedades simultáneas.',
        componente: CombinedKeyframes,
        animation: {
            animate: {
                x: [0, 50, 0, -50, 0],
                scale: [1, 1.2, 1, 0.8, 1],
                opacity: [1, 0.5, 0.2, 0.5, 1]
            },
            transition: { duration: 4, repeat: Infinity }
        }
    },
    {
        type: 'animation',
        id: 'times-keyframes-motion',
        titulo: 'Tiempos (Keyframes)',
        descripcion: 'Control de ritmo con times.',
        componente: TimesKeyframes,
        animation: {
            animate: { x: [0, 100, 0] },
            transition: {
                duration: 3,
                times: [0, 0.3, 1],
                repeat: Infinity
            }
        }
    },
    {
        type: 'animation',
        id: 'ease-keyframes-motion',
        titulo: 'Curvas (Ease Keyframes)',
        descripcion: 'Aceleración variable entre pasos.',
        componente: EaseKeyframes,
        animation: {
            animate: { x: [0, 100, -100, 0] },
            transition: {
                duration: 4,
                ease: ['easeIn', 'easeOut', 'easeInOut'],
                repeat: Infinity
            }
        }
    },


    {
        type: 'animation',
        id: 'ease-linear-motion',
        titulo: 'Ease Linear',
        descripcion: 'Velocidad constante (sin aceleración).',
        componente: EaseLinear,
        animation: {
            initial: { x: -100 },
            animate: { x: 100 },
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
            }
        }
    },
    {
        type: 'animation',
        id: 'ease-in-motion',
        titulo: 'Ease In',
        descripcion: 'Aceleración al inicio.',
        componente: EaseIn,
        animation: {
            initial: { x: -100 },
            animate: { x: 100 },
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeIn'
            }
        }
    },
    {
        type: 'animation',
        id: 'ease-out-motion',
        titulo: 'Ease Out',
        descripcion: 'Desaceleración al final.',
        componente: EaseOut,
        animation: {
            initial: { x: -100 },
            animate: { x: 100 },
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeOut'
            }
        }
    },
    {
        type: 'animation',
        id: 'ease-in-out-motion',
        titulo: 'Ease InOut',
        descripcion: 'Aceleración y desaceleración.',
        componente: EaseInOut,
        animation: {
            initial: { x: -100 },
            animate: { x: 100 },
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
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
        rangeY: 50,   // Movimiento máximo en Y de +/- 150px
    },
    {
        type: 'animation',
        id: 'Framer-Motion-Lab',
        titulo: 'Framer Motion Lab',
        descripcion: 'Intectua con un panel de animaciones',
        componente: LabMotionBuilder,
        animation: {
            animate: { x: 0 },
        }
    }
];
