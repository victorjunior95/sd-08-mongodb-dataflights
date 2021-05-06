db.voos
  .find(
    {
      $and: [
        {
          $nor: [
            { litrosCombustivel: { $gt: 600 } },
            { "empresa.nome": "GOL" },
            { "empresa.nome": "AZUL" },
          ],
        },
        { litrosCombustivel: { $exists: true } },
      ],
    },
    { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
  )
  .limit(1);
