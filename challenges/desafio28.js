/*
28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
Para isso, escreva no arquivo desafio28.js duas queries, nesta ordem:

1) Conte quantos voos da empresa LATAM AIRLINES BRASIL cujo campo natureza possua valor igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

2) Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente na coleção resumoVoos em que a empresa seja LATAM AIRLINES BRASIL.
*/
const EMPRESA = "LATAM AIRLINES BRASIL";
const totalVoosDomesticos = db.voos.count({ "empresa.nome": EMPRESA, natureza: "Doméstica" });

db.resumoVoos.insertOne({
  empresa: EMPRESA,
  totalVoosDomesticos,
});

db.resumoVoos.find({ empresa: EMPRESA }, { _id: 0 });
