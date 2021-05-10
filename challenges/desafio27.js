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

db.resumoVoos.find(
  { empresa: "PASSAREDO" },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);

// https://github.com/tryber/sd-08-mongodb-dataflights/blob/RitaJeveaux-mongodb-dataflights/challenges/desafio28.js
// pegando a ordem da query com aluna ritaJeveaux
