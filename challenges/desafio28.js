const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: LATAM_AIRLINES_BRASIL,
  totalVoosDomesticos: db.voos.count({ "empresa.nome": LATAM_AIRLINES_BRASIL,
  natureza: "Doméstica" }),
});

db.resumoVoos.findOne({ empresa: LATAM_AIRLINES_BRASIL },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
