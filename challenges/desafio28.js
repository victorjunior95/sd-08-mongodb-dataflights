const empresaSelecionada = "LATAM AIRLINES BRASIL";

db.resumoVoos
  .insertOne({
    empresa: empresaSelecionada,
    totalVoosDomesticos:
      db.voos
        .count({
          "empresa.nome": empresaSelecionada,
          natureza: "Doméstica",
        }),
  });

db.resumoVoos
  .findOne(
    { empresa: empresaSelecionada },
    {
      empresa: 1,
      totalVoosDomesticos: 1,
      _id: 0,
    },
  );
