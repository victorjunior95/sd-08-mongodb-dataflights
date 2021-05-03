const quantity = db.voos.count(
  { 
    $and: 
    [
      { 
        natureza: "Doméstica",
      }, 
      { 
        "empresa.nome": "PASSAREDO",
      },
    ], 
  },
);

db.resumoVoos.insertOne(
  {
    empresa: "PASSAREDO",
    totalVoosDomesticos: quantity,
  },
);

db.resumoVoos.find(
  {
    empresa: "PASSAREDO",
  }, 
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
);