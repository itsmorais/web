#### Exercício 1 – Na linguagem TS as funções podem ser escritas na notação de Arrow Function. Reescrever a função formatar usando a notação de Arrow Function inline, ou seja, não usar chaves e o termo return.
```
function formatar(entrada: string): string {
return `<div>${entrada}</div>`;
}
console.log(formatar("Ana"));
console.log(formatar("12"))
```

#### Exercício 2 – Reescrever o código a seguir substituindo a estrutura de repetição for pelo método forEach do objeto Array. Forneça uma arrow function como parâmetro para o método forEach. Requisitos:
• Exportar por default a função formatar no arquivo exercicio1.ts;

• Comentar as instruções de console no arquivo exercicio1.ts.
```
import formatar from "./exercicio1";
const nomes = ["Ana","Pedro","Lucas","Maria"];
for(let i = 0; i < nomes.length; i++){
console.log(formatar(nomes[i]));
}
```
#### Exercício 3 – Copiar os elementos dos arrays carros e motos para a variável veiculos utilizando spread operator. Na sequência, utilize o método forEach e a função formatar para exibir os elementos do array veiculos, assim como é mostrado ao lado.
```
import formatar from "./exercicio1";
const carros = ["Gol","Corsa","Uno","Fiesta"];
const motos = ["CG", "XRE", "Biz"];
const veiculos =
```

#### Exercício 4 – Reescrever o corpo da função listar usando o método reduce do objeto Array. Observação: as sequências de escape \n e \t são usadas em strings, respectivamente, para quebrar linha e tabulação. Eles foram colocados aqui somente para melhorar a apresentação visual no terminal, mas eles não são usados na linguagem HTML. As sequências de escape são usadas, nas linguagens de programação, para facilitar a formatação de texto, criar novas linhas, adicionar tabulações e inserir outros caracteres especiais em strings.
```
function item(entrada:string):string {
return `\t<li>${entrada}</li>\n`;
}
function listar(elementos:string[]):string {
let soma = "";
for( let i = 0; i < elementos.length; i++ ){
soma += item(elementos[i]);
}
return `<ul>\n${soma}</ul>\n`;
}
const frutas = ["Manga","Laranja","Maça","Uva"];
const resultado = listar(frutas);
console.log(resultado);
```
#### Exercício 5 – A função listar, do arquivo exercicio4.ts, recebe um array de strings. Reescrever o código a seguir para converter o conteúdo da variável legumes para array de strings para poder enviar para a função listar. Requisitos:

• Poderá ser modificado apenas o código sinalizado em amarelo. Dica:
use o método split do objeto string;

• Exportar de forma nomeada a função listar no arquivo
exercicio4.ts;

• Importar a função listar no arquivo exercicio5.ts;

• Comentar as instruções de console no arquivo exercicio4.ts.
```
const legumes = "Beterraba,Cenoura,Tomate,Repolho";
const resultado = listar(legumes);
console.log(resultado);
```

#### Exercício 6 – Uma função pode ser criada e chamada anonimamente. O código a seguir cria uma função e chama ela. Esse recurso só é útil quando a função será chamada somente 1 vez. 
```
( function () {
console.log('Bom dia');
} )();
```
#### Usando o recurso de criar e chamar uma função anonimamente. Codificar uma função que recebe os números 2 e 3, e imprime no terminal a soma deles.
