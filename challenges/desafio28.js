const nomeEmpresa = "LATAM AIRLINES BRASIL";
const QntVoosDomesticos = db.voos.find({ $and: [
  { "empresa.nome": nomeEmpresa },
  { natureza: "Doméstica" },
] }).count();

db.resumoVoos.insertOne({ empresa: nomeEmpresa, totalVoosDomesticos: QntVoosDomesticos });

db.resumoVoos.find({ empresa: nomeEmpresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 })
.limit(1);