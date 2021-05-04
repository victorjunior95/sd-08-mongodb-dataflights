const empresa = "LATAM AIRLINES BRASIL";

const qtdVoosDomesticos = db.voos.find({ $and: [
  { "empresa.nome": empresa },
  { natureza: "Doméstica" },
] }).count();

db.resumoVoos.insertOne({ empresa, totalVoosDomesticos: qtdVoosDomesticos });
db.resumoVoos.find({ empresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 })
.limit(1);
