db.voos.updateMany({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" },
 { $set: { empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: 20026 } });

db.voos.find({ 
  natureza: "Doméstica", 
  empresa: "LATAM AIRLINES BRASIL" },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1).pretty();
