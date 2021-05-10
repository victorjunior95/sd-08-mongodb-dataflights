const companyName = "LATAM AIRLINES BRASIL";

const domesticLatamAirlinesFlights = db.voos.count({
  "empresa.nome": companyName,
  natureza: "Doméstica",
});

db.resumoVoos.insertOne({
  empresa: companyName,
  totalVoosDomesticos: domesticLatamAirlinesFlights,
});

db.resumoVoos.find(
  { empresa: companyName },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
