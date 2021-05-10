db.voos
  .find(
    {
      $and: [
        { litrosCombustivel: { $lt: 600 } },
        { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
      ],
    },
    { vooId: true, "empresa.nome": true, litrosCombustivel: true, _id: false },
  )
  .limit(1);

  // db.voos
  // .findOne(
  //   {
  //     $and: [
  //       { litrosCombustivel: { $lt: 600 } },
  //       { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  //     ],
  //   },
  //   { vooId: true, "empresa.nome": true, litrosCombustivel: true, _id: false },
  // );
