
export const content = {
    move: {
        code: `<motion.div drag>
  Arrástrame libremente
</motion.div>`,
        description: (
            <p>
                Este ejemplo muestra cómo arrastrar un elemento sin restricciones. La propiedad{" "}
                <strong>drag</strong> permite movimiento libre en el contenedor.
            </p>
        )
    },
    constraint: {
        code: `<motion.div drag dragConstraints={constraintsRef}>
  Elemento limitado
</motion.div>`,
        description: (
            <p>
                Con <strong>dragConstraints</strong> se puede limitar el área en la que se
                puede mover el elemento. Aquí se utiliza una referencia al contenedor padre.
            </p>
        )
    },
    elastic: {
        code: `<motion.div 
  drag 
  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} 
  dragElastic={0.2}
>
  Elasticidad
</motion.div>`,
        description: (
            <p>
                <strong>dragElastic</strong> define cuánto se puede estirar el elemento fuera de sus restricciones.
                Un valor entre 0 y 1 determina la "resistencia" del elástico.
            </p>
        )
    },
    events: {
        code: `<motion.div 
  drag 
  onDragStart={() => console.log("Inicia el drag")} 
  onDrag={(e, info) => console.log(info.point)} 
  onDragEnd={() => console.log("Finaliza el drag")}
>
  Elemento con eventos
</motion.div>`,
        description: (
            <p>
                Este componente muestra cómo usar los eventos de Framer Motion:
                <br />
                <strong>onDragStart</strong> se dispara al iniciar el arrastre,
                <br />
                <strong>onDrag</strong> proporciona información en tiempo real del movimiento (posición),
                <br />
                y <strong>onDragEnd</strong> indica cuándo se suelta el elemento.
            </p>
        )
    }
};
