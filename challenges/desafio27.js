const count = db.voos.count({ $and: [
{ "empresa.nome": { $eq: "PASSAREDO" } },
{ natureza: { $eq: "Doméstica" } },
] });

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: count });

db.resumoVoos.findOne({}, { _id: 0 });
