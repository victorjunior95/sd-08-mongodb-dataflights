const tam = "LATAM AIRLINES BRASIL";
db.voos.updateMany({ {"empresa.nome": {$tam}}, natureza: "Doméstica" },
 { $set: { empresa:  {$tam} }, totalVoosDomesticos: 20026 } });

db.voos.find({ 
  natureza: "Doméstica", 
  empresa: "LATAM AIRLINES BRASIL" },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1).pretty();
