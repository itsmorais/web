# Configurar um servidor Node com Express 

Iniciar um projeto node com o arquivo package.json
```
npm init -y
```

Instalar o pacote express:
```
npm i express
```
Instalar o pacote que contém os tipos de declaração para o pacote express. Essas declarações são usadas para que o Typescript saiba quais tipos de dados esperar do framework
```
npm i -D @types/express
```
Instalar os pacotes ts-node, ts-node-dev e typescript
- ts-node: é uma ferramenta que permite executar arquivos TS diretamente no Node sem a necessidade de
compilar manualmente o código para JS antes da execução.
- ts-node-dev: é uma variação do ts-node que adiciona suporte a reinicialização automática do servidor
(reloading) sempre que houver alterações nos arquivos TS. O ts-node-dev é adequado somente durante o
desenvolvimento, pois nos permite fazer alterações no código e ver os resultados imediatamente, sem
precisar reiniciar manualmente o servidor a cada vez.

```
npm i -D ts-node ts-node-dev typescript
```
