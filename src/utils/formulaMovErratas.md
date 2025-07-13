
# Movimiento Aleatorio con Framer Motion

Este archivo explica cómo funciona la expresión clave utilizada en el componente `RandomMotion`.

## 🎯 Contexto de uso

```jsx
<RandomMotion 
  speed={0.5} 
  rangeX={150} 
  rangeY={150} 
/>
```

La línea central que genera la posición aleatoria es:

```js
Math.random() * rangeX * 2 - rangeX
```

## 🔍 Sustituyendo con valores reales

Dado que `rangeX = 150`, la expresión se transforma en:

```js
Math.random() * 300 - 150
```

### ➤ Caso 1:

```js
Math.random() = 0.00
=> 0.00 * 300 = 0
=> 0 - 150 = -150
```

🔹 Resultado final: `x = -150`

### ➤ Caso 2:

```js
Math.random() = 0.50
=> 0.50 * 300 = 150
=> 150 - 150 = 0
```

🔹 Resultado final: `x = 0` (posición central)

### ➤ Caso 3:

```js
Math.random() = 1.00
=> 1.00 * 300 = 300
=> 300 - 150 = +150
```

🔹 Resultado final: `x = +150`

---

## 🧠 ¿Qué hace esta expresión?

Genera un valor aleatorio en el rango:

```
-150 ≤ x ≤ +150
```

Cada **medio segundo** (`speed = 0.5`), el componente cambia su posición a un nuevo punto **dentro de ese rango**, tanto en **X** como en **Y**.

## 🎯 Visualización del rango

```
EJE X (horizontal)

   ← Izquierda           Centro           Derecha →
     -150      -75         0         +75     +150
     |---------|----------|----------|---------|
```

Lo mismo aplica para el eje **Y** (vertical), pero de arriba a abajo.
