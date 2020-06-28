/*
Ejercicios laboratorio 2JS MASTER LEMON CODE 2020.
*/
/* CONCEPTOS: 
 -inmutable: una función inmutable es aquella que no modifica el valor sobre el que la estamos aplicando.
 - prototype: todos los objetos heredan métodos y propiedades de Object.prototype, aunque pueden ser sobrecargados.
 - Con las array f vienen implicitas los return si hay {} es imprescindible el retunr
*/

// Duda ¿puede devolver un elemento o un array con ese elemento?

const arrayPrueba = [1,2,3,4,5,6,7,8];
const array2 = [11,22,33,44];
const array3 = [66,77,88,99];
const objetoPrueba = {
    propiedadUno : "valorUno",
    propiedadDos : "valorDos",
    propiedadTres : "valorTres"
}

const a = {
    name : "Maria",
    surname : "Ibañes",
    country : "SPA"
};

const b = {
    name : "Luisa",
    age : 31,
    married :true
};

const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];
  

// Head
const head = ([first]) => first;
console.log("head >>", head(arrayPrueba));

// Tail
const tail = ([, ...rest]) => rest;
console.log("tail >>", tail(arrayPrueba));

// Init
const init = (array) => array.slice(0,-1);
console.log ("init >>", init(arrayPrueba));

//Last
const last = (array) => array.slice(-1);
const lastB = (array) => array[array.length -1];

console.log ("last >>", last(arrayPrueba)); // return Array
console.log ("last >>", lastB(arrayPrueba)); // return int

//Concat
const concat = (a, [...rest] ) => a.concat(rest); // Protype function
console.log("concat >>", concat(arrayPrueba, array2));

const concat2 = function ( a, b) {
    let nuevoArray = [];
    a.forEach(item => {
        nuevoArray.push(item);
    });
    b.forEach(item => {
        nuevoArray.push(item);
    });
    return nuevoArray;
};
console.log("concat2 >> ", concat2(arrayPrueba, array2));

const concat3 = (...arrays) => {
    let nuevoArray = [];
    for (let array of arrays) {
        nuevoArray = [...nuevoArray, ...array];
    }
    return nuevoArray;
}
console.log("concat3 >> ", concat3(arrayPrueba, array2, array3));

//opcional
const concatOpcional = (...arrays) => {
    let newArray = [];
    arrays.forEach(array => {
      newArray = newArray.concat(array);
    });
    return newArray;
};
console.log("concatOpcional >>", concatOpcional(arrayPrueba, array2, array3));

//Clone
//clone shalow *** Clonado a un solo nivel
const clone = function (source) {
    return Object.assign(source);
}
const clone2 = (source) => Object.assign(source);
const cloneObject = clone(objetoPrueba);

function clone3 (obj) {
    let result = obj instanceof Array ? [ ...obj ] : typeof obj === 'object' ? {...obj} : false;
    if (result !== false) {
        for (let prop of Reflect.ownKeys (result)) {
            result[ prop ] = clone (result[ prop ]);
        }
        return result;
    }
  }

const o = clone(objetoPrueba);

console.log("clone1 >>", clone(objetoPrueba));
console.log("clone2 >>", clone2(objetoPrueba));
console.log("clone3 >>", Object.assign({}, objetoPrueba));
console.log("clone4 >>", clone3(objetoPrueba));


// Merge
const merge = (arrayA, arrayB) => Object.assign(arrayB, arrayA);
console.log("merge >>>", merge(a,b));


// Read Books
// Versión 1 con vanillaJs
function isBookRead (books, titleToSearch) {
    let find = books.find( book => book.title === titleToSearch );
    let result = find !== undefined ? find.isRead : false  ;
    return result;
}
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false


// SLOT MACHINE
// CON CLASES 

// Slot Machine 
contador = 0;
class SlothMachine  {
    constructor (name) {
        this.name = name;
        this.win = "";
    }

    play () {
        let a = Math.random() >= 0.5; 
        let b = Math.random() >= 0.5; 
        let c = Math.random() >= 0.5; 

        let isWinner = a && b && c ? true : false;

        this.win = isWinner ? `Congratulations!!!. You won ${contador} coins!!` : `Good luck next time!!`;
        isWinner ? this.contador = 0 : contador++;
        console.log(this.win);
    }
}

const machine1 = new SlothMachine("Juego");
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
