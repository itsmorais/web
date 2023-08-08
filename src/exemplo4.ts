function item(entrada:string):string{
    return `\t<li>${entrada}</li>\n`;
}

export function listar(elementos:string[]):string{
    const soma = elementos.reduce((atual,proximo)=> `${atual + item(proximo)}`,"");
    return `<ul>\n${soma}</ul>\n`;
}

const frutas = ["manga","Laranja","Maça","Uva"];
const resultado = listar(frutas);
console.log(resultado);