export const homeItems = [
    {
        id: 1,
        title: 'Básicos',
        path: '/catalog/basicos',
        animation: {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            hover: { scale: 1.1 },
            tap: { scale: 0.95 }
        }
    },
    {
        id: 2,
        title: 'Gestures',
        path: '/catalog/gestures',
        animation: {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            hover: { rotate: 5 },
            tap: { scale: 0.95 }
        }
    },
    {
        id: 3,
        title: 'Layout',
        path: '/catalog/layout',
        animation: {
            initial: { opacity: 0, y: -50 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            hover: { scale: 1.05, rotate: -3 },
            tap: { scale: 0.95 }
        }
    }
];
