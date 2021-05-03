db.voos.deleteMany(
  { $and: 
    [
      { "empresa.nome": "GOL" }, 
      { $or:
        [
          { "passageiros.pagos": { $gte: 5, $lte: 10 } },
        ],
      },
    ],
  },
);
