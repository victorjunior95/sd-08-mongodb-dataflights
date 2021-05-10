const domesticPassaredoFlights = db.voos.count({
  "empresa.nome": "PASSAREDO",
  natureza: "Doméstica",
});

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: domesticPassaredoFlights,
});

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
