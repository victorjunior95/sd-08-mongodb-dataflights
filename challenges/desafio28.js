const nomeEmpresa = "LATAM AIRLINES BRASIL";
const totalVoos = db.voos.find(
  { $and: [
    { "empresa.nome": nomeEmpresa },
    { natureza: "Doméstica" },
  ], 
  },
).count();

db.resumoVoos.insertOne({ empresa: nomeEmpresa, totalVoosDomesticos: totalVoos });

db.resumoVoos.findOne({ empresa: nomeEmpresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });