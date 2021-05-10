const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";

db.voos.count(
  { 
    natureza: "Doméstica",
    "empresa.nome": LATAM_AIRLINES_BRASIL,
  },
);

db.resumoVoos.insertOne(
  { empresa: LATAM_AIRLINES_BRASIL, totalVoosDomesticos: 20026 },
);

db.resumoVoos.findOne(
  { empresa: LATAM_AIRLINES_BRASIL },
  { _id: 0 },
);
