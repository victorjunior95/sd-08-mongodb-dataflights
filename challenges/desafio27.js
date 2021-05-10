db.resumoVoos.insertOne(
  {
    empresa: "PASSAREDO",
    totalVoosDomesticos: db.voos.count(
      {
        $and: [
          {
            "empresa.nome": "PASSAREDO",
          },
          {
            natureza: "Doméstica", 
          },
        ],
      },
    ),
  },
);