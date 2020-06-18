import { lovePets } from "../lovePets";


function printDog (dog : lovePets) {
    return dog.nombre;
}

let myDog = {
    nombre: "Tormenta",
    edad: "7años",
    color: "canela"
}

export default printDog(myDog);
