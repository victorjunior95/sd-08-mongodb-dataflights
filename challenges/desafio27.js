db.voos.updateMany({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }, { 
  $set: { empresa: "PASSAREDO", totalVoosDomesticos: 4187 } });

db.voos.find({
  empresa: "PASSAREDO",
  totalVoosDomesticos: 4187, 
}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1);
