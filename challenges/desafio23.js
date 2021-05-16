db.voos.find({ litrosCombustivel: { $lt: 1001 } },
    { _id: 0, vooId: 1, litrosCombustivel: 1 }).limit(1);
