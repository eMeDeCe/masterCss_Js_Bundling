# Practicas Maquetacion, Lenguajes y Bundler de Master Lemon Code 8 2020/2021
## Layout

Ejercicio 1
Crear una paleta de colores dinámica.

Usar el lenguaje SASS para crear distintos temas de paletas de colores.

La idea es partir de un color base, y a partir de ese color generar 4 colores más oscuros de manera gradual, y cuatro colores más claros de manera gradual.

Para comprobar que todo esta funcionando como se espera utilizar el html del enunciado (ver pdf).

Ejercicio 2
Crear dos temas distintos y mostrar los resultados en una página.

Los cambios en el tema afectan a las siguientes características:

Color

Fuente

Border radius

Shadow box

Para visualizar los cambios debería ser suficiente importar un tema u otro en el fichero de estilos principal.

Ejercicio 3
Crear la barra de navegación de la imagen usando flexbox.

El html es abierto completamente, es decir crear las estructuras necesarias que se crean convenientes.

La barra de navegación responde a distintas resoluciones. Utilizar media queries para conseguir este resultado.

Mirar el pdf para ver el resultado de las distintas resoluciones.

Ejercicio 4
Crearemos un elemento de tipo card con Grid CSS.

Las alineaciones deberán hacerse con esta característica, pero el html es totalmente abierto (ver pdf).

## Lenguajes
1. Array operations
Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = (/* array */) => {}; // Implementation here.
Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = (/* array */) => {}; // Implementation here.
Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (/* array */) => {}; // Implementation here.
Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (/* array */) => {}; // Implementation here.
2. Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => {}; // Implementation here.
Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

3. Clone Merge
Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
  // Implementation here.
}
Merge
Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

Por ejemplo, dados estos 2 objetos:

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
el resultado de mezclar a sobre b sería:

merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
TIP: Puedes usar la función "clone" del apartado A.

function merge(source, target) {
  // Implementation here.
}
4. Read Books
Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

function isBookRead(books, titleToSearch) {
  // Implementation here
}
Ejemplo
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
Opcional
Utiliza Typescript para añadir los tipos adecuados.

5. Slot Machine
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!";
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".
Ejemplo de uso
class SlothMachine {
  /* ... */
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

## WebPack & Parcel

Implementar una aplicación simple que:

Tenga el bundling montado con webpack.
Muestre un logo (por ejemplo el de lemoncode u otro que queráis).
Este montada con Typescript.
Tengo el texto de "hola mundo" estilado con SASS.
Opcional
Que muestre un hola mundo desarrollado con React.
Que tenga una versión de build de producción.
Que tenga variables de entorno para desarrollo producción.
Que tengamos una forma de medir cuanto ocupa cada librería y nuestro código en el bundle.
Montar lo mismo con parcel.
Bonus points
Alternativamente o como puntos adicionales podéis plantear desarrollar algunos de los desafíos propuestos en clase, o proponer vosotros alguno que véais interesantes, por ejemplo: introducir la optimización de imágenes en el proceso de build, definir alias para ciertas carpetas, ...
