db.voos.count(
  { 
    natureza: "Doméstica",
    "empresa.nome": "LATAM AIRLINES BRASIL",
  },
);

db.resumoVoos.insertOne(
  { empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: 20026 },
);

db.resumoVoos.findOne(
  { empresa: "LATAM AIRLINES BRASIL" },
  { _id: 0 },
);
