db.voos.findOne({ litrosCombustivel: { $exists: false } }, { _id: 0, vooId: 1 });
