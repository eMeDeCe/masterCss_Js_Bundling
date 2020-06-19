import { lovePets } from "../lovePets";


function printDog (dog : lovePets) {
    return "My perro se llama" + dog.nombre;
}

let myDog = {
    nombre: "Tormenta",
    edad: "7años",
    color: "canela"
}
console.log(`Api base: ${process.env.API_BASE}`);
export default printDog(myDog);
