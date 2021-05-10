const nome = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: nome,
  totalVoosDomesticos: db.voos.count({
    $and:
      [
        { "empresa.nome": nome },
        { natureza: "Doméstica" },
      ],
  }),
});

db.resumoVoos.find(
  { empresa: nome },
  { 
    _id: 0, 
    empresa: 1, 
    totalVoosDomesticos: 1,
  },
);
