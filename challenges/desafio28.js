const NOME_EMPRESA = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
  {
    empresa: NOME_EMPRESA,
    totalVoosDomesticos: db.voos.count(
      {
        $and: [
          {
            "empresa.nome": NOME_EMPRESA,
          },
          {
            natureza: "Doméstica",
          },
        ],
      },
    ),
  },
);

db.resumoVoos.findOne(
  {
    empresa: NOME_EMPRESA,
  },
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
);
