const empresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  {
    empresa,
    totalVoosDomesticos:
    db.voos.find(
      {
        "empresa.nome": empresa,
        natureza: "Doméstica",
      },
    ).count(),
  },
);

db.resumoVoos.find(
  {
    empresa,
  },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
).limit(1);
