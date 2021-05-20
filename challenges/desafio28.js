const nomeEmpresa = "LATAM AIRLINES BRASIL";
const count = db.voos.count({ $and: [
{ natureza: { $eq: "Doméstica" } },
{ "empresa.nome": { $eq: nomeEmpresa } },
] });

db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: count });

db.resumoVoos.findOne({ empresa: { $eq: nomeEmpresa } }, { _id: 0 });
