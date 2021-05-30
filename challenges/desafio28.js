const empresaNome = "LATAM AIRLINES BRASIL";
const countVoos = db.voos.count({ "empresa.nome": empresaNome, natureza: "Doméstica" });

db.resumoVoos.insertOne({ 
  empresa: empresaNome,
  totalVoosDomesticos: countVoos,
});

db.resumoVoos.find(
  { empresa: empresaNome }, 
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
  ).limit(1);