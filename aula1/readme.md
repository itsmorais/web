# Aula 1 - Funções e Arrays em Typescript
##### Objetivo:
- Funções; ✔️ 07/08/2023
- Arrays: métodos forEach, map e reduce; ✔️ 07/08/2023
-  JSON (JavaScript Object Notation);
- Estruturação e desestruturação;
- Async e await;
- Classes;
- Export e import.

### Funções & Arrays Methods (forEach, map e reduce)

#### Arrow function

Arrow function possui uma sintaxe mais curta quando comparada com a função anônima.
Arrow functions são sempre anônimas. A seguir tem-se três declarações distintas de arrow function:
```js
const mult = (a: number, b: number): number => {
return a * b;
};
const div = (a: number, b: number): number => a / b;
const pow = (a: number, b: number): number => { return a ** b };
```
Quando a arrow function possui no corpo apenas a instrução return, então podemos retirar o return e as chaves,
assim como fizemos na função div. Mas se adicionarmos as chaves, como fizemos na função pow, então a função
precisará ter a instrução return.


1. Para criar uma cópia do array podemos usar o spread operator [...array]:
```js
const w = [4, 2, 8, 5];
const z = [...w]; //cria uma cópia do array w
```
2. Remover elementos do array: o método splice(índice, quant) é usado para remover quant elementos a partir da
posição índice do array. No exemplo a seguir serão removidos 3 elementos a partir da 3ª posição do array w.
```js
const w = [4, 2, 8, 5, 1, 9, 7];
w.splice(2,3); // Remove os elementos 8,5 e 1
```
### Os métodos forEach, map e reduce são comumente usados para operar sobre arrays, mas observe que eles são usados em situações distintas:

- forEach não possui retorno, pois opera sobre cada elemento do array atual;
```js
const nomes = ["Ana","Pedro","Lucas","Maria"];

nomes.forEach(nome => console.log(`<div>${nome}</div>`));

nomes.forEach(function(item,indice,array){
    console.log(indice + ":" + item + "\t Array completo:" + array);
})

/* Saída: 
<div>Ana</div>
<div>Pedro</div>
<div>Lucas</div>
<div>Maria</div>
0:Ana    Array completo:Ana,Pedro,Lucas,Maria
1:Pedro  Array completo:Ana,Pedro,Lucas,Maria
2:Lucas  Array completo:Ana,Pedro,Lucas,Maria
3:Maria  Array completo:Ana,Pedro,Lucas,Maria */

```


-  map retorna um novo array, onde cada elemento do array atual sofre a operação. Ele não altera o array atual;

```js
const nomes:string[] = ["Ana","Pedro","Lucas","Maria"];
const idades:number[] = [17,22,45,50];

const nomesSobrenome = nomes.map(nome => nome + " Silva");
const dobraIdade = idades.map(idade => idade*2);


/* Saída: 
[ 'Ana Silva', 'Pedro Silva', 'Lucas Silva', 'Maria Silva' ]
[ 34, 44, 90, 100 ]
*/
```

- reduce retorna um único valor. Ele não altera o array atual.
```js
const letrass = ['a','b','c','d','e']

const s1 = letrass.reduce( (soma, item) => soma + item.toUpperCase() );

console.log(s1); //retorna aBCDE

// Ao fornecermos um valor inicial,  todos os elementos do array serão considerados.
const letras = ['a','b','c','d','e']
const s2 = letras.reduce( (soma, item) => soma + item.toUpperCase(), "");
console.log(s2); //retorna ABCDE
```
### JSON Javascript object notation
• parse: recebe como parâmetro uma string JSON e retorna o objeto JS correspondente. Esse processo é chamado de
deserialization;

• stringify: recebe como parâmetro um objeto nativo e retorna uma string JSON. Esse processo é chamado de
serialization.
```js
class Cliente {
    constructor(private nome:string, private idade:number){

    }
    print(){
        console.log(this.nome+" "+this.idade);
    }
}

let c = new Cliente("Michael",25); // Objeto nativo

let d = JSON.stringify(c); // Converte objeto nativo para string no formato JSON;

console.log(typeof(c)); // object
console.log(typeof(d)); // string

console.log(c); // Cliente { nome: 'Michael', idade: 25 }
console.log(d) // {"nome":"Michael","idade":25}

// //deserialization
console.log(JSON.parse(d)) // { nome: 'Michael', idade: 25 }
```
#### Estruturação e desestruturação

No exemplo a seguir a atribuição por desestruturação (destructuring assignment) é usada para copiar os valores das
propriedades bairro e cidade do objeto JSON para as variáveis bairro e cidade.
A desestruturação ocorre entre chaves {} no lado esquerdo da atribuição.
```js
const endereco = {
    logradouro: 'Rua um',
    nro: 123,
    bairro: 'Vila Jardim',
    cep: 12345678,
    cidade: 'Jacareí',
    uf:'SP'
};

const {bairro,cidade} = endereco; // Vila Jardim Jacareí

```
Na estruturação, variáveis são usadas para compor objetos JSON, os nomes das variáveis serão as propriedades do objeto e os valores das variáveis serão os valores das propriedades. 
No exemplo a seguir, as variáveis nome, idade e peso serão as propriedades do objeto JSON. A estruturação ocorre entre chaves
{} no lado direito da atribuição

```js

const nome = "Michael"
const idade = 25
const peso = 75

const pessoa = {nome,idade,peso} //{ nome: 'Michael', idade: 25, peso: 75 }

```

A desestruturação de arrays é feita usando colchetes [] no lado esquerdo da atribuição. A desestruturação permite extrair
elementos de um array e atribuí-los às variáveis individuais. No exemplo a seguir os 3 primeiros elementos do array serão
copiados, respectivamente, para as variáveis nome, carro e fruta. Observe que o 4º elemento do array não foi copiado.
```js
 const personagens = ["Naruto","Vegeta","Eren","Hyoga"];
const [naruto,dbz,snk,cdz] = personagens //Naruto Vegeta Eren Hyoga
```

A estruturação de arrays é usada para criar arrays combinando elementos de outras variáveis. Ela é realizada usando
colchetes [] no lado direito da atribuição. No exemplo a seguir os valores das variáveis foram usados para compor os valores
do array a ser criado:
```js
const base = 2;
const altura = 3;
const profundidade = 4;

const medidas = [base,altura,profundidade]; //[ 2, 3, 4 ]

```

A desestruturação de um objeto JSON pode ser feita na atribuição do parâmetro de uma função :

```ts
function exibir({ carro }: any) {
    console.log(carro)
}

const obj = {
    pessoa: {
        nome: "Ana",
        idade: 22
    },
    carro: {
        marca: "Fiat",
        modelo: "Uno"
    }
};

exibir(obj); // { marca: 'Fiat', modelo: 'Uno' }

```

Podemos desestruturar um objeto JSON aninhado.


```ts
const pessoa = {
    nome: "Ana",
    veiculo: {
        tipo: {
            marca: "GM",
            modelo: "Corsa"
        },
        ano: 2010
    }
};
const { veiculo: { tipo } } = pessoa;
console.log(tipo); //{ marca: 'GM', modelo: 'Corsa' }
```

#### Async e await
Async function (função assíncrona) retorna por padrão um objeto Promise.

```ts
async function multiplicar(numero?: number) {
    if (numero !== undefined) {
        return numero * 2;
    }
    throw new Error("Não definido");
}


const primeiro = multiplicar(4);

// o método then será invocado pelo resolve da promise

primeiro.then((result) => console.log("Then:", result))
    .catch((result) => console.log("Catch:", result.message))
    .finally(() => console.log("Finally do primeiro"));
console.log("Após a promise:", primeiro);


const segundo = multiplicar();

segundo.then((result) => console.log("Then", result))
    .catch((result) => console.log("Catch:", result.message))
    .finally(() => console.log("Finally do segundo"));


```


#### Classes
As classes são usadas para criarmos objetos instanciados. JSON são objetos literais, isto é, escrevemos o conteúdo do objeto conforme o criamos. Os objetos literais são usados para representar apenas 1 objeto, já as classes funcionam como templates para a criação de vários objetos.

```ts
class Pessoa {
    nome: string;
    idade: number;

    constructor(a: string, b: number) {
        this.nome = a;
        this.idade = b;
    }

    imprimir() {
        console.log(`${this.nome} possui ${this.idade} anos`);
    }
};

const x = new Pessoa("Ana", 18);
const y = new Pessoa("Pedro", 20);

x.imprimir();
y.imprimir();

```

- O modificador static é usado para definir membros (propriedades e métodos) estáticos em uma classe. Membros estáticos são associados à própria classe, em vez de instâncias (objetos) individuais da classe. Isso significa que eles podem ser acessados diretamente na classe, sem a necessidade de criar uma instância da classe.

```ts

class Calcular {
    static pi: number = 3.14159;

    static somar(a: number, b: number): number {
        return a + b;
    }
};

console.log("PI:", Calcular.pi);
console.log("Soma:", Calcular.somar(2, 3));


```