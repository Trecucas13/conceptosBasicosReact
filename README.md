1.   Componente UI: Se encarga únicamente de cómo se ve la interfaz de usuario y no tiene lógica de negocio ni estado. Ideal para crear interfaces reutilizables y desacopladas de la lógica.

 Componente Funcional: Es un componente que puede manejar tanto la presentación como la lógica interna, incluyendo el manejo del estado o los efectos secundarios, gracias a los hooks.

2.  Las props (abreviatura de "properties") en React son un mecanismo para pasar datos de un componente padre a un componente hijo. Son una de las principales formas en que los componentes en React pueden comunicarse entre sí, específicamente de arriba hacia abajo en la jerarquía de componentes.
3.  Los children props en React son un tipo especial de prop que se utiliza para pasar contenido entre las etiquetas de apertura y cierre de un componente. En lugar de pasar datos como texto o valores en un atributo, los children permiten que un componente reciba contenido arbitrario, como otros componentes o elementos HTML, y lo renderice dentro de sí mismo. 1. Falta de claridad y legibilidad 2. Dificultad para reutilización: 3. Mantenimiento del código:
4.  useState es un hook en React que permite agregar y gestionar estado en componentes funcionales. Anteriormente, solo los componentes de clase podían manejar estado en React, pero con la introducción de los hooks (a partir de React 16.8), los componentes funcionales también pueden hacerlo de manera más sencilla.
    Uso principal:
    Mantener el estado dentro de un componente funcional: useState te permite declarar una variable de estado, asociarla con un valor inicial y actualizar ese valor a lo largo del ciclo de vida del componente.
    Re-renderización automática: Cuando se actualiza el estado utilizando useState, React vuelve a renderizar el componente, reflejando los cambios en la interfaz de usuario.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
