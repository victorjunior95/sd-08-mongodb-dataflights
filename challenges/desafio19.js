db.voos.findOne({ litrosCombustivel: { $exists: true } }, { _id: 0, rtk: 1 });
