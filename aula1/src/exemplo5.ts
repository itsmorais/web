import { listar } from "./exemplo4";

const legumes = "Beterraba,cenoura,Tomate,repolho";
const resultado = listar(legumes.split(','));

console.log(resultado);