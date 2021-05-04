const empresa = "PASSAREDO";
const natureza = "Doméstica";
const quantidadeTotalVoos = db.voos.count(
  { "empresa.nome": { $eq: empresa }, natureza: { $eq: natureza } },
);

db.resumoVoos.insertOne(
  { 
    empresa,
    totalVoosDomesticos: quantidadeTotalVoos,
  },
);

db.resumoVoos.findOne(
  { empresa },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);