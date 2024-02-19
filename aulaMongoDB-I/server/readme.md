# Introdução ao MongoDB
 - Pertence a categoria NoSQL(Not Only SQL). A principal diferença entre BD NoSQL, como o mongoDB e DB relacionais é a forma como eles armazenam e organizam os dados;
 - Baseado em documentos, onde os dados são armazenados em documentos BSON(Binary JSON - Formato binário JSON-like)
 - Esquema dinâmico: Ao contrário dos DBS relacionais, o MongoDB permite esquemas dinâmicos, o que significa que os documentos em uma coleção podem ter campos diferentes sem a necessidade de um esquema fixo, como nas tabelas de um SGBD-R
 - Consultas baseadas em documentos: Consultas utilizam sintaxe de documentos BSON, o que facilita a interação com os dados. No sistema relacional são feitas usando a linguagem SQL.

### Os dados são organizados hierarquicamente da seguinte forma:
- BD
  - É a unidade mais alta de armazenamento de dados.
  - Podem existir vários bancos e eles são independentes entre si.
  - um BD pode contar várias coleções.
- Coleções
    - Uma coleção é análoga a uma tabela no SGBD-R.
    - Uma coleção é um grupo de documentos
    - As tabelas de um SGBD-R Definem um esquema fixo para todos os registros, mas as coleçoes não impõem um esquema fixo aos documentos.
- Documentos
    - É uma unidade básica de dados no MongoDB e é representado em formato BSON(binary JSON - Formato binário JSON-like).
    - Análogo a uma linha(registro) de uma tabela do SGBD-R.
    - Enquanto todos os registros de uma tabela no SGBD-R compartilham o mesmo esquema (estrutura de colunas), os documentos de uma coleção não compartilham o mesmo esquema (Propriedades do JSON). Desta forma, não se tem um esquema fixo.

  ![image](https://github.com/itsmorais/web/assets/53665466/5cd7adda-5fd7-4b5d-a2ed-875c2fd6f821)

## Esquema, modelo e Documento no Mongoose
No MongoDB, um esquema refere-se à estrutura ou à definição de como os documentos em uma coleção específica devem
ser organizados. Embora o MongoDB seja conhecido por ser um BD NoSQL orientado a documentos, que não impõe um
esquema fixo, a utilização de esquemas pode ser aplicada em níveis mais alto, como na camada de aplicação, ou seja, nos
programas que fazem a conexão como BD do MongoDB.

 O mongoose é uma biblioteca de modelagem de objetos MongoDB para NodeJS.
Ele fornece uma camada de abstração sobre o MongoDB, simplificando a iteração com o BD e adicionando funcionalidades extras.

O mongoose permite a definição de esquema de dados no NodeJS, que são modelos para os documentos que serão armazenados no MongoDB, fornece também validação de esquema, middlewares e métodos de consulta.

- Exemplo de definição de esquema:
![image](https://github.com/itsmorais/web/assets/53665466/13266793-78c7-46c4-b1d6-90d0752660de)

```ts
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  mail: { type: String, maxLength: 50, required: true },
  password: { type: String, minlength: 6, maxlength: 10, select: false, required: true }
});

const SpentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
  },
  description: { type: String, maxlength: 30, required: true },
  value: { type: Number, required: true }
});

// O primeiro argumento é o nome singular da coleção que representa o modelo.
// O segundo argumento preciser ser o modelo usado para gerar a coleção

// O mongoose irá gerar a coleção com o nome no plural.
const User = mongoose.model("User", UserSchema);
const Spent = mongoose.model("Spent", SpentSchema);
```

O modelo é uma classe que usamos para construir os documentos. Neste caso, cada documento será um objeto com as propriedades e comportamentos declarados no esquema.

```ts
const doc = new User({ mail:'user@teste.com', password:'pass123' });
//Ao chamar o método save, o documento será adicionado na coleção users do //MongoDB:

const resp = await doc.save();
```
A variável doc possui um documento criado usando o modelo User.
obs: O mongoDB adiciona o campo _id para ser o identificador do documento(Como PK).

```json
{
_id: ObjectId('659acc6bd202c436bb835d2d')
mail: "a@teste.com"
password: "abcdef"
__v: 0
}
```


