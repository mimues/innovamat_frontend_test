# Prueba técnica Front-end Developer Innovamat

Asegúrate de leer bien **todo** el documento con atención y seguir los pasos indicados.

## Contexto

Se acerca el nuevo curso y en Innovamat queremos dar a nuestros alumnos la mejor solución para que puedan disponer de los recursos de la manera más fácil posible. Para ello hay que desarrollar una aplicación web dónde el alumno pueda navegar para encontrar los recursos según su categoría o realizar una búsqueda de los mismos.

El equipo de producto nos ha compartido su documento de trabajo para poder realizar un MVP y así poder empezar con algunas clases al inicio de curso.

> [Enlace al documento](https://www.figma.com/file/pJ75xh7u9ajrQEkOLfw6iK/Frontend?node-id=0%3A1) \
> <sup><sup>*</sup>*Con sesión iniciada en Figma podrás ver los detalles y características de los elementos\*</sup>

Nos han pedido desarrollemos unas características **mínimas e imprescindibles** para poder empezar y si tenemos tiempo extra quedarán encantados de ver alguna parte **opcional**.

## Requerimientos mínimos

Hay que desarrollar la **página inicial de la vista de escritorio** como muestra el documento, con la navegación en los elementos de menú funcionales y mostrando los contenidos de cada sección. Para mostrar el contenido el equipo de Backend ya está trabajando en ello también y nos ha proporcionado una API para poder obtener los recursos.

#### API

La dirección que nos han facilitado es `https://api.mocklets.com/mock68016`

Para la petición de los recursos nos han dado estos parámetros.

- `/talleres`
- `/rincones`
- `/ambientes`
- `/rutinas`

Nos han advertido que todavía están trabajando en ellos así que puede que alguno no funcione bien. Si se da el caso sería interesante poder ayudar al equipo de backend anotando lo que creemos que podría estar fallando.
Por otro lado también anotar cómo **plantearíamos** nuestra gestión del error.

#### Favoritos

Otra de las cosas que nos pide producto como **requerimiento** es que los alumnos deberían poder marcar como favorito los recursos que deseen.
Todos los recursos que se elijan deben quedar marcados mientras se navega entre categorías. Por el momento backend no tiene lista su parte así que no les enviaremos la información para guardarlos de manera definitiva todavía así que seguramente perderán si recargamos la página.

## Te pedimos

- Aplicación desarrollada en **React**
- Puedes usar cualquier 'Boilerplate' de inicio si lo consideras conveniente.
- Puedes usar preprocesadores, CSS-in-JS o similar, pero _NO uses_ librerías de estilos predefinidos (MaterialUI, Bootstrap...)
  - Queremos ver tu conocimiento y estilo en los componentes asi que mejor no usar elementos pre-fabricados.
- Usa librerías que utilizarías normalmente en una aplicación real. Quizá tengas que explicar y justificar su elección.
- Escribe una pequeña **documentación** clara sobre como has diseñado la app, los pasos y decisiones que has tomado.
- Describe los pasos para ejecutar correctamente la aplicación.
- Si por cualquier razón hay alguna parte de la que no puedes realizar el código, nos gustaría que nos explicaras cómo lo hubieras desarrollado.

## Que nos gustaría ver pero no es imprescindible

- El uso de TypeScript
- Que la aplicación se vea correctamente en distintos tamaños de escritorio aunque el equipo de producto no lo haya especificado. Tienes libertad para tomar esas decisiones.
- La implementación de tests unitarios útiles.

## Q&A

> ¿Cómo tengo que enviar el resultado cuando haya finalizado?

Lo dejamos a tu criterio, envíanos la aplicación cómo mejor creas conveniente. Seguro que ya tienes nuestro contacto.

> ¿Y si tengo alguna pregunta?

Pregúntanos lo que sea, te responderemos lo más rápido posible.

Por norma general si no está especificado algún detalle o función concreto puedes hacerlo como tu creas conveniente, siempre justificando su implementación.

> Ya he terminado, me queda tiempo y me gustaría hacer algo más.

Genial, buen trabajo! No hay problema pues el equipo de producto estará encantado de oír eso así que aquí tienes algunas opciones extra. Puedes elegir la/s que prefieras.

---

### Opción extra: Resultados de búsqueda y filtrado

El equipo de backend tiene implementado parte de un parámetro que nos devuelve una simulación de una búsqueda por ahora.

- `/search`

```
POST Body

{
  "keyword" : "anything"
}
```

Necesitamos aplicar un filtrado a esos resultados que nos devuelve en función del apartado del desplegable 'Dinámicas de aula' y mostrar los resultados acorde con el filtro/s seleccionados.

### Opción extra: Página detalle

De los resultados obtenidos en las búsquedas o por categoría podemos acceder a la página detalle del recurso. Para eso hay que implementar la página de detalle que nos ha facilitado producto con el resultado del recurso que nos devuelve backend.

- `/resources/{id}`

La respuesta nos indica que tipo de recurso se trata y su ubicación para integrarlo.

### Opción extra: Versión mobile

Se ha pensado que en ocasiones el alumno puede hacer uso de su teléfono para acceder a los contenidos así que estaría bien preparar una versión para estos dispositivos.
