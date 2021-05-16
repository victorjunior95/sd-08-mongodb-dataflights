db.voos.find({ litrosCombustivel: { $gt: 999 } }, { _id: 0, vooId: 1 }).limit(1);
