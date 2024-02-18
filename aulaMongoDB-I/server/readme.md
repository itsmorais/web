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
  
