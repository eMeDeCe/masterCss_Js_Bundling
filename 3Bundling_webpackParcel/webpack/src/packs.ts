import { lovepacks } from "./lovepacks";


function printPack (Pack : lovepacks) {
    return "Qué instalé para " + Pack.nombre;
}

let myPack = {
    nombre: "Webpack",
    version: "4.0.0",
    fecha: "Junio 2020"
}
console.log(`Api base: ${process.env.API_BASE}`);
export default printPack(myPack);
