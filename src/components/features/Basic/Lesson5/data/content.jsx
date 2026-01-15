
export const content = {
    stagger: {
        code: `const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

// ...
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {[...Array(3)].map((_, i) => (
    <motion.img
      key={i}
      variants={childVariants}
      // ...
    />
  ))}
</motion.div>`,
        description: (
            <p>
                <code>staggerChildren</code> permite animar múltiples elementos de forma escalonada, dando una secuencia animada natural. Ideal para listas o grids.
            </p>
        )
    },
    control: {
        code: `const variants = {
  on: { scale: 1.2, rotate: 360 },
  off: { scale: 1, rotate: 0 }
};

// ...
const [active, setActive] = useState(false);

// ...
<motion.img
  variants={variants}
  animate={active ? 'on' : 'off'}
  transition={{ duration: 0.5 }}
  // ...
/>`,
        description: (
            <p>
                Puedes usar <code>variants</code> con estados externos usando <code>animate={'{active ? "on" : "off"}'}</code>. Esto te da un control completo desde React.
            </p>
        )
    },
    condition: {
        code: `const variants = {
  active: { x: 100, scale: 1.2 },
  inactive: { x: 0, scale: 1 }
};

// ...
<motion.img
  variants={variants}
  animate={isActive ? 'active' : 'inactive'}
  transition={{ type: 'spring', stiffness: 300 }}
  // ...
/>`,
        description: (
            <p>
                Puedes cambiar entre distintos <code>variants</code> según condiciones lógicas. Ideal para animaciones dinámicas con base en la UI.
            </p>
        )
    },
    sequence: {
        code: `const variants = {
  start: { x: 0, rotate: 0 },
  mid: { x: 100, rotate: 90 },
  end: { x: 0, rotate: 0 }
};

// ...
// Lógica para cambiar el estado 'step' cíclicamente
// ...

<motion.img
  variants={variants}
  animate={step}
  transition={{ duration: 0.6 }}
  // ...
/>`,
        description: (
            <p>
                Puedes secuenciar animations con lógica propia. Aquí, el variant cambia cada segundo para simular una secuencia automática.
            </p>
        )
    }
};
