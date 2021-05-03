const LATAM_AIRLANES_BRASIL = "LATAM AIRLINES BRASIL";
const quantity = db.voos.count(
  { 
    $and: 
    [
      { 
        natureza: "Doméstica",
      }, 
      { 
        "empresa.nome": LATAM_AIRLANES_BRASIL,
      },
    ], 
  },
);

db.resumoVoos.insertOne(
  {
    empresa: LATAM_AIRLANES_BRASIL,
    totalVoosDomesticos: quantity,
  },
);

db.resumoVoos.find(
  {
    empresa: LATAM_AIRLANES_BRASIL,
  }, 
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
);