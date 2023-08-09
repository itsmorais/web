import { formatar } from "./exemplo1";

const carros = ["Gol","Corsa","Uno","Fiesta"];
const motos = ["CG","XRE","Biz"];

const veiculos = [...carros,...motos];

veiculos.forEach(veiculo => console.log(formatar(veiculo)))
