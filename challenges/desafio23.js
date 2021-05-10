db.voos
  .find(
    { litrosCombustivel: { $lt: 1000 } },
    { _id: false, vooId: true, litrosCombustivel: true },
  )
  .limit(1);

  // db.voos
  // .findOne(
  //   { litrosCombustivel: { $lt: 1000 } },
  //   { _id: false, vooId: true, litrosCombustivel: true },
  // );
