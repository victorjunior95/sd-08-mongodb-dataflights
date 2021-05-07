db.voos.deleteMany({
  $and: [
    { "empresa.nome": "GOL" },
    {
      $or: [
        { "passageiros.pagos": { $gte: 5 } },
        { "passageiros.pagos": { $lte: 10 } },
      ],
    },
  ],
});