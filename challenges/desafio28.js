const totalVoosDomesticos = db.voos.find(
  { "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" },
  ).count();

const empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ empresa, totalVoosDomesticos });

db.resumoVoos.find(
  { empresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
).limit(1);
