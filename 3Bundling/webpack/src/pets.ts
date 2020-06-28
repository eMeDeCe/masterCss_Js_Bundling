import { lovePets } from "./lovePets";


function printDog (dog : lovePets) {
    return "Qué instalé para " + dog.nombre;
}

let myDog = {
    nombre: "Webpack",
    edad: "7años",
    color: "canela"
}
console.log(`Api base: ${process.env.API_BASE}`);
export default printDog(myDog);
