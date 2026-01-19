export const dragConstraintsContent = {
    title: "Arrastre limitado",
    subtitle: "Propiedad: dragConstraints",
    code: `<motion.div drag dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}>
  Arrástrame dentro del área
</motion.div>`,
    description: (
        <>
            <p>
                Este componente permite arrastrar el elemento solo dentro de un rango
                específico definido por la propiedad <code>dragConstraints</code>.
            </p>
            <p>
                Es útil cuando se quiere restringir el movimiento a un área específica.
            </p>
        </>
    )
};
